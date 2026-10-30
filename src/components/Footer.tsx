import type { SiteConfig } from "../data/types";
import { whatsappLink } from "../lib";

type FooterProps = { brand: SiteConfig["brand"]; contact: SiteConfig["contact"] };

export const Footer = ({ brand, contact }: FooterProps) => (
  <footer id="contact" className="footer">
    <div className="container footer__inner">
      <div>
        <h2>Tell us your dates</h2>
        <p>The season runs from October to May. We usually start with a chat on WhatsApp.</p>
        <a
          className="btn"
          href={whatsappLink(contact.whatsapp, "Hi! I'd like to enquire about a Lakshadweep tour.")}
          target="_blank"
          rel="noreferrer"
        >
          Chat on WhatsApp
        </a>
      </div>
      <address>
        <strong>{brand.name}</strong>
        <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        {contact.instagram && <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a>}
        <span>{contact.address}</span>
      </address>
    </div>
    <p className="footer__copy">© {new Date().getFullYear()} {brand.name}</p>
  </footer>
);
