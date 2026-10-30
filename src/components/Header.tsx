import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { whatsappLink } from "../lib";

type HeaderProps = { brand: string; whatsapp: string };

const links = [
  { href: "#dive", label: "The reef" },
  { href: "#packages", label: "Packages" },
  { href: "#couples", label: "For couples" },
  { href: "#memories", label: "Memories" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const Header = ({ brand, whatsapp }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    // Unlock scrolling immediately so the anchor jump isn't blocked by the open menu
    document.body.style.overflow = "";
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled || menuOpen ? "header--solid" : ""}`}>
      <div className="container header__inner">
        <a href="#top" className="header__brand" onClick={closeMenu}>{brand}</a>
        <nav className="header__nav" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <div className="header__actions">
          <a
            className="btn btn--small"
            href={whatsappLink(whatsapp, "Hi! I'd like to enquire about a Lakshadweep tour.")}
            target="_blank"
            rel="noreferrer"
          >
            Book now
          </a>
          <button
            type="button"
            className="burger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={menuOpen ? "burger__bar burger__bar--open" : "burger__bar"} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * index }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
