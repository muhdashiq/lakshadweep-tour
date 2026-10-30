export type Image = {
  /** Path relative to /public (e.g. "images/kadmat.jpg"). Leave undefined to show a gradient placeholder. */
  src?: string;
  alt: string;
};

export type Activity = {
  id: string;
  title: string;
  icon: string;
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
  highlights: string[];
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

export type SiteConfig = {
  brand: { name: string; tagline: string };
  currency: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaLabel: string;
    secondaryCtaLabel: string;
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
  activities: Activity[];
  packages: Package[];
  testimonials: Testimonial[];
  faqs: Faq[];
};
