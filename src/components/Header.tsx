import { useEffect, useState } from "react";
import { whatsappLink } from "../lib";

type HeaderProps = { brand: string; whatsapp: string };

const links = [
  { href: "#activities", label: "Activities" },
  { href: "#packages", label: "Packages" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const Header = ({ brand, whatsapp }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--solid" : ""}`}>
      <div className="container header__inner">
        <a href="#top" className="header__brand">{brand}</a>
        <nav className="header__nav" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <a
          className="btn btn--small"
          href={whatsappLink(whatsapp, "Hi! I'd like to enquire about a Lakshadweep tour.")}
          target="_blank"
          rel="noreferrer"
        >
          Book now
        </a>
      </div>
    </header>
  );
};
