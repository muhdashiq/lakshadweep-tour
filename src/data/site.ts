import type { SiteConfig } from "./types";

/**
 * All website content lives here. Edit this file and push to `main`;
 * GitHub Actions rebuilds and republishes the site.
 *
 * Photos: save a file at the path shown in `image.src` (inside /public) and it
 * replaces the illustrated placeholder. No code change needed.
 *
 * Still placeholders, replace before relying on them: stats, testimonials,
 * activity prices, `contact.email`, `contact.instagram`, `couples.extras`.
 */
export const site = {
  brand: {
    name: "Lakshadweep Escapes",
    tagline: "Island tours, reef adventures",
  },
  currency: "₹",
  sound: { src: "audio/ocean.mp3" },
  hero: {
    title: "Lakshadweep",
    subtitle:
      "Coral islands and turquoise lagoons, with reefs you can reach by boat, snorkel or scuba tank.",
    ctaLabel: "See packages",
    secondaryCtaLabel: "Chat on WhatsApp",
    image: { src: "images/hero.jpg", alt: "A Lakshadweep lagoon seen from the shore" },
  },
  contact: {
    phone: "+91 94958 22294",
    whatsapp: "919495822294",
    email: "hello@example.com",
    address: "Agatti, Lakshadweep, India",
    instagram: "https://instagram.com/",
  },
  stats: [
    { value: "10+", label: "Islands covered" },
    { value: "5,000+", label: "Happy travellers" },
    { value: "100%", label: "Certified instructors" },
    { value: "4.9★", label: "Average rating" },
  ],
  dive: {
    stops: [
      {
        depth: 0,
        title: "Start on the glass boat",
        text: "The reef slides past under your feet. No swimming needed, so grandparents and toddlers can come too.",
      },
      {
        depth: 3,
        title: "Slip in with a snorkel",
        text: "A few metres down, the fish stop caring that you're there. Snorkeling is part of every package.",
      },
      {
        depth: 12,
        title: "Go deeper on scuba",
        text: "First-timers are welcome, and an instructor stays beside you. Scuba is included in the Kalpitti Dive Special.",
      },
    ],
  },
  activities: [
    {
      id: "scuba",
      title: "Scuba Diving",
      description:
        "Discover Scuba for first-timers or guided reef dives for certified divers, with PADI-trained instructors.",
      duration: "2–3 hrs",
      priceFrom: 3500,
      image: { src: "images/activities/scuba.jpg", alt: "Diver exploring a coral reef" },
    },
    {
      id: "snorkeling",
      title: "Snorkeling",
      description:
        "Float over shallow reefs teeming with parrotfish, clownfish and sea turtles. Gear and guide included.",
      duration: "1–2 hrs",
      priceFrom: 1200,
      image: { src: "images/activities/snorkeling.jpg", alt: "Snorkeler above a coral garden" },
    },
    {
      id: "glass-boat",
      title: "Glass Boat Ride",
      description:
        "See the reef without getting wet. Ideal for families and anyone who prefers to stay dry.",
      duration: "45 min",
      priceFrom: 600,
      image: { src: "images/activities/glass-boat.jpg", alt: "Glass-bottom boat over the lagoon" },
    },
    {
      id: "kayaking",
      title: "Kayaking",
      description: "Paddle through calm, shallow lagoons at sunrise or sunset.",
      duration: "1 hr",
      priceFrom: 800,
      image: { src: "images/activities/kayaking.jpg", alt: "Kayaks on a still lagoon" },
    },
    {
      id: "sunset-cruise",
      title: "Sunset Cruise",
      description:
        "A slow evening cruise around the atoll as the sky turns gold.",
      duration: "1.5 hrs",
      priceFrom: 1500,
      image: { src: "images/activities/sunset-cruise.jpg", alt: "Boat at sunset" },
    },
    {
      id: "fishing",
      title: "Sport Fishing",
      description:
        "Troll for tuna and trevally with local fishermen who know these waters.",
      duration: "3 hrs",
      priceFrom: 2500,
      image: { src: "images/activities/fishing.jpg", alt: "Fishing boat on open sea" },
    },
  ],
  packages: [
    {
      id: "kalpitti-classic",
      name: "Kalpitti Classic",
      tagline: "The essential Lakshadweep getaway",
      days: 4,
      nights: 3,
      priceFrom: 15999,
      islands: ["Kalpitti"],
      inclusions: [
        "Permits & local guide",
        "Pickup & drop",
        "Food & accommodation",
        "Kalpitti island visit",
        "Snorkeling",
        "Sightseeing",
        "Glass boat",
        "Kayaking",
        "Fresh fish BBQ",
      ],
      exclusions: ["Ship / flight / vessel ticket", "Scuba diving"],
      image: { src: "images/packages/kalpitti-classic.jpg", alt: "Kalpitti island lagoon" },
    },
    {
      id: "kalpitti-plus",
      name: "Kalpitti Plus",
      tagline: "Classic, with a dolphin watch",
      days: 4,
      nights: 3,
      priceFrom: 17999,
      islands: ["Kalpitti"],
      inclusions: [
        "Permits & local guide",
        "Pickup & drop",
        "Food & accommodation",
        "Kalpitti island visit",
        "Snorkeling",
        "Sightseeing",
        "Glass boat",
        "Kayaking",
        "Dolphin watch",
        "Fresh fish BBQ",
      ],
      exclusions: ["Ship / flight / vessel ticket", "Scuba diving"],
      image: { src: "images/packages/kalpitti-plus.jpg", alt: "Dolphins near Kalpitti" },
    },
    {
      id: "three-island-explorer",
      name: "Three-Island Explorer",
      tagline: "Agatti, Kalpitti and Kadmat in one trip",
      days: 5,
      nights: 4,
      priceFrom: 19999,
      islands: ["Agatti", "Kalpitti", "Kadmat"],
      inclusions: [
        "Permits & local guide",
        "Pickup & drop",
        "Food & accommodation",
        "Agatti island visit",
        "Kalpitti island visit",
        "Kadmat island visit",
        "Snorkeling",
        "Sightseeing",
        "Glass boat",
        "Kayaking",
      ],
      exclusions: ["Ship / flight / vessel ticket", "Scuba diving"],
      featured: true,
      image: { src: "images/packages/three-island-explorer.jpg", alt: "Kadmat island beach" },
    },
    {
      id: "kalpitti-dive-special",
      name: "Kalpitti Dive Special",
      tagline: "Everything in Plus, with scuba diving",
      days: 4,
      nights: 3,
      priceFrom: 21999,
      islands: ["Kalpitti"],
      inclusions: [
        "Permits & local guide",
        "Pickup & drop",
        "Food & accommodation",
        "Kalpitti island visit",
        "Snorkeling",
        "Sightseeing",
        "Glass boat",
        "Kayaking",
        "Dolphin watch",
        "Fresh fish BBQ",
        "Scuba diving",
      ],
      exclusions: ["Ship / flight / vessel ticket"],
      image: { src: "images/packages/kalpitti-dive-special.jpg", alt: "Diver over a coral reef" },
    },
  ],
  quotes: [
    "Some places you visit. Some places stay with you.",
    "Years from now you won't remember the date. You'll remember the colour of the water.",
    "The tide takes every footprint, but never the walk.",
    "The sea doesn't keep time. For a few days, neither will you.",
    "We came home with salt in our hair and a story we'll keep telling.",
  ],
  couples: {
    title: "Make this anniversary the one you keep talking about",
    intro:
      "A quiet island, a table on the sand and nobody else's schedule. Tell us the occasion and we'll plan the trip around the two of you.",
    extrasTitle: "Add to any package",
    extrasNote: "Ask when you enquire and we'll confirm what's possible on your dates.",
    extras: [
      {
        title: "Candlelit dinner on the beach",
        text: "A table for two on the sand, with the day's catch and lanterns around you.",
      },
      {
        title: "Your own sunset boat",
        text: "Just the two of you on the water while the sky changes colour.",
      },
      {
        title: "A room dressed for the occasion",
        text: "Flowers on the bed and a cake waiting when you get back.",
      },
      {
        title: "Photos with both of you in them",
        text: "Your guide takes the pictures, so nobody has to stay behind the camera.",
      },
      {
        title: "Your names on the beach",
        text: "We write them at low tide and send you the photo before the sea takes them.",
      },
    ],
    occasions: [
      {
        id: "anniversary",
        label: "Wedding anniversary",
        line: "Another year, one more island",
        asksWeddingDate: true,
      },
      { id: "honeymoon", label: "Honeymoon", line: "The first trip of many" },
      { id: "proposal", label: "Proposal", line: "Bring the ring. The sunset is on us." },
      { id: "together", label: "Just the two of us", line: "No occasion needed" },
    ],
  },
  memories: [
    {
      image: { src: "images/memories/sunset.jpg", alt: "A couple watching the sunset" },
      caption: "The evening the sky turned the colour of your favourite saree.",
    },
    {
      image: { src: "images/memories/lagoon.jpg", alt: "A boat on clear lagoon water" },
      caption: "The water was so clear the boat looked like it was flying.",
    },
    {
      image: { src: "images/memories/dive.jpg", alt: "Two divers on the reef" },
      caption: "First breath underwater. Neither of us stopped grinning.",
    },
    {
      image: { src: "images/memories/anniversary.jpg", alt: "A couple on a quiet beach" },
      caption: "Ten years married, and we still got lost on purpose.",
    },
    {
      image: { src: "images/memories/family.jpg", alt: "A family on the glass boat" },
      caption: "Grandpa looked through the glass floor and went quiet.",
    },
    {
      image: { src: "images/memories/turtle.jpg", alt: "A sea turtle over coral" },
      caption: "A turtle swam right past us. We nearly forgot the camera.",
    },
    {
      image: { src: "images/memories/dinner.jpg", alt: "A dinner table on the sand" },
      caption: "No signal. Best conversation we've had in years.",
    },
    {
      image: { src: "images/memories/footprints.jpg", alt: "Footprints along the waterline" },
      caption: "We left our footprints. The tide kept them.",
    },
  ],
  steps: [
    {
      title: "Pick your trip",
      text: "Choose a package, or tell us on WhatsApp what you have in mind.",
    },
    {
      title: "We sort out your permit",
      text: "Lakshadweep needs an entry permit. It's included, and we handle the application with you.",
    },
    {
      title: "Book your ticket",
      text: "Ship, flight and vessel tickets aren't part of the package. Check your dates with us first, then book.",
    },
    {
      title: "Step off and relax",
      text: "We pick you up. Your stay, meals, guide and activities are already arranged.",
    },
  ],
  testimonials: [
    {
      name: "Aarav & Meera",
      from: "Bengaluru",
      quote:
        "Our first dive, and the instructor made it effortless. The reef was unreal.",
    },
    {
      name: "The Nair Family",
      from: "Kochi",
      quote:
        "The glass boat was the kids' favourite. Everything was well organised.",
    },
    {
      name: "Sofia L.",
      from: "Lisbon",
      quote:
        "Quiet beaches, warm people, great snorkeling. Worth every bit of the paperwork.",
    },
  ],
  faqs: [
    {
      question: "Do I need a permit to visit Lakshadweep?",
      answer:
        "Yes. Entry permits are required for most visitors. We handle the application as part of every package.",
    },
    {
      question: "Do I need to know swimming for scuba or snorkeling?",
      answer:
        "Basic comfort in water helps, but beginners are welcome. Instructors stay with you throughout and life jackets are provided.",
    },
    {
      question: "When is the best time to visit?",
      answer:
        "October to May has calm seas and the best visibility. The monsoon (June to September) limits water activities.",
    },
    {
      question: "How do we get there?",
      answer:
        "By flight from Kochi to Agatti, or by ship from Kochi. Tickets aren't included in our packages, so check your dates with us before you book.",
    },
    {
      question: "Is scuba diving included?",
      answer:
        "It's included in the Kalpitti Dive Special. The other packages leave it out, so ask us if you'd like to add a dive.",
    },
  ],
} satisfies SiteConfig;
