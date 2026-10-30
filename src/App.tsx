import { site } from "./data/site";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Activities } from "./components/Activities";
import { Packages } from "./components/Packages";
import { Testimonials } from "./components/Testimonials";
import { Faqs } from "./components/Faqs";
import { Footer } from "./components/Footer";

export const App = () => (
  <>
    <Header brand={site.brand.name} whatsapp={site.contact.whatsapp} />
    <main>
      <Hero hero={site.hero} whatsapp={site.contact.whatsapp} />
      <Stats stats={site.stats} />
      <Activities activities={site.activities} currency={site.currency} />
      <Packages packages={site.packages} currency={site.currency} whatsapp={site.contact.whatsapp} />
      <Testimonials items={site.testimonials} />
      <Faqs faqs={site.faqs} />
    </main>
    <Footer brand={site.brand} contact={site.contact} />
  </>
);
