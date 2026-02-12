import { Link } from "react-router-dom";
import adjLogo from "@/assets/adj-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={adjLogo} alt="ADJ" className="h-8 w-8 object-contain brightness-200" />
            <span className="font-display text-xl text-background">AMIGOS DA JUVENTUDE</span>
          </div>
          <nav className="flex gap-6">
            <Link to="/" className="font-body text-sm text-background/70 hover:text-background transition-colors">
              Início
            </Link>
            <Link to="/transparencia" className="font-body text-sm text-background/70 hover:text-background transition-colors">
              Transparência
            </Link>
          </nav>
          <p className="font-body text-xs text-background/50">
            CNPJ: 32.568.526/0001-69
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
