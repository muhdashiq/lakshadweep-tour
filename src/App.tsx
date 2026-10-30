import { site } from "./data/site";
import { useOceanSound } from "./hooks/useOceanSound";
import { assetUrl, formatPrice } from "./lib";
import { Activities } from "./components/Activities";
import { Couples } from "./components/Couples";
import { DiveStory } from "./components/DiveStory";
import { Faqs } from "./components/Faqs";
import { FloatingActions } from "./components/FloatingActions";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Memories } from "./components/Memories";
import { Packages } from "./components/Packages";
import { QuoteBand } from "./components/QuoteBand";
import { Steps } from "./components/Steps";
import { Testimonials } from "./components/Testimonials";

const startingPrice = formatPrice(
  site.currency,
  Math.min(...site.packages.map((pkg) => pkg.priceFrom)),
);

export const App = () => {
  const sound = useOceanSound(assetUrl(site.sound.src));

  return (
    <>
      <Header brand={site.brand.name} whatsapp={site.contact.whatsapp} />
      <main>
        <Hero hero={site.hero} whatsapp={site.contact.whatsapp} startingPrice={startingPrice} sound={sound} />
        <DiveStory dive={site.dive} />
        <Activities activities={site.activities} currency={site.currency} />
        <Packages packages={site.packages} currency={site.currency} whatsapp={site.contact.whatsapp} />
        <QuoteBand quotes={site.quotes} />
        <Couples couples={site.couples} whatsapp={site.contact.whatsapp} />
        <Memories memories={site.memories} />
        <Steps steps={site.steps} />
        <Testimonials items={site.testimonials} stats={site.stats} />
        <Faqs faqs={site.faqs} />
      </main>
      <Footer brand={site.brand} contact={site.contact} />
      <FloatingActions sound={sound} whatsapp={site.contact.whatsapp} />
    </>
  );
};
