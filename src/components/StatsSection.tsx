import { motion } from "framer-motion";
import communityBg from "@/assets/community-bg.jpg";

const stats = [
  { number: "2016", label: "Ano de fundação" },
  { number: "6+", label: "Projetos ativos" },
  { number: "200+", label: "Jovens por evento" },
  { number: "5+", label: "Bairros atendidos" },
];

const StatsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <img src={communityBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-5xl md:text-6xl text-white mb-2">{stat.number}</div>
              <div className="font-body text-white/80 text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
