import type { SiteConfig } from "../data/types";
import { whatsappLink } from "../lib";

type FooterProps = { brand: SiteConfig["brand"]; contact: SiteConfig["contact"] };

export const Footer = ({ brand, contact }: FooterProps) => (
  <footer id="contact" className="footer">
    <div className="container footer__inner">
      <div>
        <h2>{brand.name}</h2>
        <p>{brand.tagline}</p>
      </div>
      <address>
        <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={whatsappLink(contact.whatsapp, "Hi!")} target="_blank" rel="noreferrer">WhatsApp us</a>
        {contact.instagram && <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a>}
        <span>{contact.address}</span>
      </address>
    </div>
    <p className="footer__copy">© {new Date().getFullYear()} {brand.name}</p>
  </footer>
);
