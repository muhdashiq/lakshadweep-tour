const NOISE_SECONDS = 10;
const LOOKAHEAD_SECONDS = 60;
const TICK_MS = 20_000;
const FADE_IN_SECONDS = 2.5;
const FADE_OUT_SECONDS = 1;

const SURF_FLOOR = 0.3;
const HISS_FLOOR = 0.012;
const CHORD_INTERVAL_SECONDS = 14;
const CHORD_LENGTH_SECONDS = 20;
const CHORD_FADE_SECONDS = 6;
const CHORD_LEVEL = 0.03;
const BELL_LEVEL = 0.06;
const OUTPUT_VOLUME = 0.6;

/** Dmaj9, Bm7, Gmaj7, Asus2: slow, open voicings with no leading tones to resolve. */
const CHORDS = [
  [146.83, 220, 277.18, 329.63],
  [123.47, 185, 220, 293.66],
  [98, 146.83, 246.94, 293.66],
  [110, 164.81, 246.94, 329.63],
];
const BELL_NOTES = [440, 493.88, 587.33, 659.25, 739.99];

const between = (min: number, max: number) => min + Math.random() * (max - min);

const whiteSample = () => Math.random() * 2 - 1;

const brownSampler = () => {
  let last = 0;
  return () => {
    last = (last + 0.02 * whiteSample()) / 1.02;
    return last * 3.5;
  };
};

/** Crossfades the tail into the head so the loop point has no click. */
const createLoopingNoise = (ctx: BaseAudioContext, createSampler: () => () => number) => {
  const length = Math.floor(NOISE_SECONDS * ctx.sampleRate);
  const overlap = ctx.sampleRate;
  const buffer = ctx.createBuffer(2, length, ctx.sampleRate);

  for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
    const nextSample = createSampler();
    const raw = Float32Array.from({ length: length + overlap }, nextSample);
    const data = buffer.getChannelData(channel);
    for (let i = 0; i < length; i++) {
      const sample = raw[i] ?? 0;
      const mix = Math.min(i / overlap, 1);
      data[i] = sample * Math.sqrt(mix) + (raw[length + i] ?? 0) * Math.sqrt(1 - mix);
    }
  }
  return buffer;
};

const startLoop = (ctx: BaseAudioContext, buffer: AudioBuffer, destination: AudioNode) => {
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.loop = true;
  source.connect(destination);
  source.start();
};

/**
 * Generates waves (filtered noise that swells irregularly) over a quiet pad and
 * the odd soft bell. Takes any BaseAudioContext so it can also render offline.
 */
export const buildSeaGraph = (ctx: BaseAudioContext, output: AudioNode) => {
  const limiter = ctx.createDynamicsCompressor();
  limiter.connect(output);

  const surfFilter = ctx.createBiquadFilter();
  surfFilter.type = "lowpass";
  surfFilter.frequency.value = 380;
  const surfGain = ctx.createGain();
  surfGain.gain.value = SURF_FLOOR;
  surfFilter.connect(surfGain).connect(limiter);
  startLoop(ctx, createLoopingNoise(ctx, brownSampler), surfFilter);

  const hissFilter = ctx.createBiquadFilter();
  hissFilter.type = "highpass";
  hissFilter.frequency.value = 2200;
  const hissGain = ctx.createGain();
  hissGain.gain.value = HISS_FLOOR;
  hissFilter.connect(hissGain).connect(limiter);
  startLoop(ctx, createLoopingNoise(ctx, () => whiteSample), hissFilter);

  const music = ctx.createGain();
  const echo = ctx.createDelay(1);
  echo.delayTime.value = 0.48;
  const echoFeedback = ctx.createGain();
  echoFeedback.gain.value = 0.32;
  music.connect(limiter);
  music.connect(echo).connect(echoFeedback).connect(echo);
  echoFeedback.connect(limiter);

  const scheduleWave = (at: number) => {
    const rise = between(2.5, 4.5);
    const fall = between(4, 7);
    const strength = between(0.6, 1);
    const crest = at + rise;
    const end = crest + fall;

    surfGain.gain.linearRampToValueAtTime(SURF_FLOOR, at);
    surfGain.gain.linearRampToValueAtTime(SURF_FLOOR + strength * 1.1, crest);
    surfGain.gain.linearRampToValueAtTime(SURF_FLOOR, end);

    surfFilter.frequency.linearRampToValueAtTime(380, at);
    surfFilter.frequency.linearRampToValueAtTime(600 + strength * 900, crest);
    surfFilter.frequency.linearRampToValueAtTime(380, end);

    // The hiss of foam peaks just after the wave breaks and drains away slowly.
    hissGain.gain.linearRampToValueAtTime(HISS_FLOOR, crest - 1);
    hissGain.gain.linearRampToValueAtTime(HISS_FLOOR + strength * 0.05, crest + 0.8);
    hissGain.gain.linearRampToValueAtTime(HISS_FLOOR, end);

    return end + between(0.2, 2.5);
  };

  const scheduleChord = (notes: number[], at: number) => {
    notes.forEach((frequency) => {
      const oscillator = ctx.createOscillator();
      oscillator.frequency.value = frequency;
      oscillator.detune.value = between(-5, 5);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, at);
      gain.gain.linearRampToValueAtTime(CHORD_LEVEL, at + CHORD_FADE_SECONDS);
      gain.gain.setValueAtTime(CHORD_LEVEL, at + CHORD_LENGTH_SECONDS - CHORD_FADE_SECONDS);
      gain.gain.linearRampToValueAtTime(0, at + CHORD_LENGTH_SECONDS);
      oscillator.connect(gain).connect(music);
      oscillator.start(at);
      oscillator.stop(at + CHORD_LENGTH_SECONDS);
    });
  };

  const scheduleBell = (at: number) => {
    const oscillator = ctx.createOscillator();
    oscillator.frequency.value = BELL_NOTES[Math.floor(Math.random() * BELL_NOTES.length)] ?? 440;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, at);
    gain.gain.linearRampToValueAtTime(BELL_LEVEL, at + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, at + 3.5);
    oscillator.connect(gain).connect(music);
    oscillator.start(at);
    oscillator.stop(at + 3.6);
  };

  let nextWave = ctx.currentTime + 0.5;
  let nextChord = ctx.currentTime;
  let nextBell = ctx.currentTime + between(4, 8);
  let chordIndex = 0;

  const scheduleUntil = (time: number) => {
    while (nextWave < time) nextWave = scheduleWave(nextWave);
    while (nextChord < time) {
      scheduleChord(CHORDS[chordIndex % CHORDS.length] ?? [], nextChord);
      chordIndex++;
      nextChord += CHORD_INTERVAL_SECONDS;
    }
    while (nextBell < time) {
      scheduleBell(nextBell);
      nextBell += between(3, 9);
    }
  };

  return { scheduleUntil };
};

type PlayingSource = { resume: () => void; pause: () => void };

const playFile = async (ctx: AudioContext, output: AudioNode, url: string): Promise<PlayingSource> => {
  const element = new Audio(url);
  element.loop = true;
  const playing = element.play();
  ctx.createMediaElementSource(element).connect(output);
  await playing;
  return { resume: () => void element.play(), pause: () => element.pause() };
};

const playGenerated = (ctx: AudioContext, output: AudioNode): PlayingSource => {
  const sea = buildSeaGraph(ctx, output);
  const topUp = () => sea.scheduleUntil(ctx.currentTime + LOOKAHEAD_SECONDS);
  topUp();
  window.setInterval(topUp, TICK_MS);
  // Suspending the context already freezes this source and its schedule.
  return { resume: () => undefined, pause: () => undefined };
};

export type OceanSound = { start: () => Promise<void>; stop: () => void };

/** Plays the file at `fileUrl`, or generated sea sound if that file doesn't exist. */
export const createOceanSound = (fileUrl: string): OceanSound => {
  let ctx: AudioContext | null = null;
  let fade: GainNode | null = null;
  let source: PlayingSource | null = null;
  let suspendTimer: number | undefined;

  const start = async () => {
    window.clearTimeout(suspendTimer);
    ctx ??= new AudioContext();
    if (!fade) {
      fade = ctx.createGain();
      fade.gain.value = 0;
      fade.connect(ctx.destination);
    }
    const activeCtx = ctx;
    const activeFade = fade;
    void activeCtx.resume();

    if (source) source.resume();
    else source = await playFile(activeCtx, activeFade, fileUrl).catch(() => playGenerated(activeCtx, activeFade));

    activeFade.gain.cancelScheduledValues(activeCtx.currentTime);
    activeFade.gain.setValueAtTime(activeFade.gain.value, activeCtx.currentTime);
    activeFade.gain.linearRampToValueAtTime(OUTPUT_VOLUME, activeCtx.currentTime + FADE_IN_SECONDS);
  };

  const stop = () => {
    if (!ctx || !fade) return;
    const activeCtx = ctx;
    fade.gain.cancelScheduledValues(activeCtx.currentTime);
    fade.gain.setValueAtTime(fade.gain.value, activeCtx.currentTime);
    fade.gain.linearRampToValueAtTime(0, activeCtx.currentTime + FADE_OUT_SECONDS);
    suspendTimer = window.setTimeout(() => {
      source?.pause();
      void activeCtx.suspend();
    }, FADE_OUT_SECONDS * 1000);
  };

  return { start, stop };
};
