import type { SiteConfig } from "./types";

/**
 * All website content lives here. Edit this file and push to `main`;
 * GitHub Actions rebuilds and republishes the site.
 * Prices are placeholders; replace with real ones.
 */
export const site = {
  brand: {
    name: "Lakshadweep Escapes",
    tagline: "Island tours, reef adventures",
  },
  currency: "₹",
  hero: {
    eyebrow: "Lakshadweep, India",
    title: "Where the lagoon turns turquoise",
    subtitle:
      "Coral atolls, crystal lagoons and untouched reefs. Dive, snorkel and drift over the reef in a glass-bottom boat.",
    ctaLabel: "Explore packages",
    secondaryCtaLabel: "Chat on WhatsApp",
  },
  contact: {
    phone: "+91 00000 00000",
    whatsapp: "910000000000",
    email: "hello@example.com",
    address: "Kochi, Kerala, India",
    instagram: "https://instagram.com/",
  },
  stats: [
    { value: "10+", label: "Islands covered" },
    { value: "5,000+", label: "Happy travellers" },
    { value: "100%", label: "Certified instructors" },
    { value: "4.9★", label: "Average rating" },
  ],
  activities: [
    {
      id: "scuba",
      title: "Scuba Diving",
      icon: "🤿",
      description:
        "Discover Scuba for first-timers or guided reef dives for certified divers, with PADI-trained instructors.",
      duration: "2–3 hrs",
      priceFrom: 3500,
      image: { alt: "Diver exploring a coral reef" },
    },
    {
      id: "snorkeling",
      title: "Snorkeling",
      icon: "🐠",
      description:
        "Float over shallow reefs teeming with parrotfish, clownfish and sea turtles. Gear and guide included.",
      duration: "1–2 hrs",
      priceFrom: 1200,
      image: { alt: "Snorkeler above a coral garden" },
    },
    {
      id: "glass-boat",
      title: "Glass Boat Ride",
      icon: "🚤",
      description:
        "See the reef without getting wet. Ideal for families and anyone who prefers to stay dry.",
      duration: "45 min",
      priceFrom: 600,
      image: { alt: "Glass-bottom boat over the lagoon" },
    },
    {
      id: "kayaking",
      title: "Kayaking",
      icon: "🛶",
      description:
        "Paddle through calm, shallow lagoons at sunrise or sunset.",
      duration: "1 hr",
      priceFrom: 800,
      image: { alt: "Kayaks on a still lagoon" },
    },
    {
      id: "sunset-cruise",
      title: "Sunset Cruise",
      icon: "🌅",
      description:
        "A slow evening cruise around the atoll as the sky turns gold.",
      duration: "1.5 hrs",
      priceFrom: 1500,
      image: { alt: "Boat at sunset" },
    },
    {
      id: "fishing",
      title: "Sport Fishing",
      icon: "🎣",
      description:
        "Troll for tuna and trevally with local fishermen who know these waters.",
      duration: "3 hrs",
      priceFrom: 2500,
      image: { alt: "Fishing boat on open sea" },
    },
  ],
  packages: [
    {
      id: "kadmat-escape",
      name: "Kadmat Escape",
      tagline: "The classic water-sports getaway",
      days: 4,
      nights: 3,
      priceFrom: 28000,
      islands: ["Kadmat"],
      highlights: [
        "Beachfront stay",
        "Snorkeling & kayaking",
        "Glass boat ride",
        "All meals included",
      ],
      featured: true,
      image: { alt: "Kadmat island beach" },
    },
    {
      id: "bangaram-dive",
      name: "Bangaram Dive Week",
      tagline: "For divers chasing pristine reefs",
      days: 6,
      nights: 5,
      priceFrom: 52000,
      islands: ["Bangaram", "Thinnakara"],
      highlights: [
        "4 guided dives",
        "Discover Scuba included",
        "Uninhabited-island picnic",
        "Equipment provided",
      ],
      image: { alt: "Bangaram lagoon" },
    },
    {
      id: "agatti-explorer",
      name: "Agatti Explorer",
      tagline: "Short, scenic and easy on the budget",
      days: 3,
      nights: 2,
      priceFrom: 19500,
      islands: ["Agatti"],
      highlights: [
        "Island sightseeing",
        "Snorkeling session",
        "Sunset cruise",
        "Local seafood dinners",
      ],
      image: { alt: "Agatti coastline" },
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
        "By flight from Kochi to Agatti, or by ship from Kochi. We can arrange either.",
    },
  ],
} satisfies SiteConfig;
