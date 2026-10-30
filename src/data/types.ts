export type Image = {
  /** Path inside /public (e.g. "images/kadmat.jpg"). An illustrated placeholder shows until that file exists. */
  src?: string;
  alt: string;
};

export type Activity = {
  id: string;
  title: string;
  description: string;
  duration: string;
  priceFrom: number;
  image: Image;
};

export type Package = {
  id: string;
  name: string;
  tagline: string;
  days: number;
  nights: number;
  priceFrom: number;
  inclusions: string[];
  exclusions: string[];
  islands: string[];
  featured?: boolean;
  image: Image;
};

export type Testimonial = {
  name: string;
  from: string;
  quote: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type DiveStop = {
  depth: number;
  title: string;
  text: string;
};

export type RomanceExtra = {
  title: string;
  text: string;
};

export type Occasion = {
  id: string;
  label: string;
  line: string;
  asksWeddingDate?: boolean;
};

export type Memory = {
  image: Image;
  caption: string;
};

export type Step = {
  title: string;
  text: string;
};

export type SiteConfig = {
  brand: { name: string; tagline: string };
  currency: string;
  /** Drop an MP3 at this path inside /public to replace the generated sea sound. */
  sound: { src: string };
  hero: {
    title: string;
    subtitle: string;
    ctaLabel: string;
    secondaryCtaLabel: string;
    image: Image;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    instagram?: string;
    facebook?: string;
  };
  stats: { value: string; label: string }[];
  /** The scene is drawn for three stops: boat, snorkel, scuba. */
  dive: { stops: [DiveStop, DiveStop, DiveStop] };
  activities: Activity[];
  packages: Package[];
  quotes: string[];
  couples: {
    title: string;
    intro: string;
    extrasTitle: string;
    extrasNote: string;
    extras: RomanceExtra[];
    occasions: [Occasion, ...Occasion[]];
  };
  memories: Memory[];
  steps: Step[];
  testimonials: Testimonial[];
  faqs: Faq[];
};
