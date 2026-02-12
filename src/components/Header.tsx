import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import adjLogo from "@/assets/adj-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Início" },
    { to: "/transparencia", label: "Transparência" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <img src={adjLogo} alt="ADJ Logo" className="h-10 w-10 object-contain" />
          <span className="font-display text-2xl tracking-wide text-foreground">
            AMIGOS DA JUVENTUDE
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body font-semibold text-sm uppercase tracking-wider transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.facebook.com/adj.eunapolis"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-warm text-primary-foreground px-5 py-2 rounded-full font-body font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Apoie-nos
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="block py-3 font-body font-semibold text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.facebook.com/adj.eunapolis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-gradient-warm text-primary-foreground px-5 py-2 rounded-full font-body font-bold text-sm uppercase"
          >
            Apoie-nos
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
