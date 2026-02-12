import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Jovens em atividades comunitárias"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-none mb-6"
        >
          AMIGOS DA
          <br />
          <span className="text-gradient-warm" style={{ WebkitTextFillColor: "transparent" }}>
            JUVENTUDE
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transformando a realidade da juventude de Eunápolis através do esporte,
          cultura, educação e cidadania.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projetos"
            className="bg-gradient-warm text-primary-foreground px-8 py-4 rounded-full font-body font-bold text-base uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Conheça nossos projetos
          </a>
          <a
            href="#contato"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-body font-bold text-base uppercase tracking-wider hover:bg-white/10 transition-colors"
          >
            Entre em contato
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
