import { motion } from "framer-motion";
import { Heart, Users, Shield, BookOpen } from "lucide-react";

const pillars = [
  { icon: Shield, title: "Proteção", desc: "Distanciar jovens do crime e das drogas" },
  { icon: Users, title: "Protagonismo", desc: "Jovens como agentes de transformação" },
  { icon: BookOpen, title: "Educação", desc: "Conscientização e formação cidadã" },
  { icon: Heart, title: "Comunidade", desc: "Fortalecimento dos vínculos sociais" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            QUEM SOMOS
          </h2>
          <div className="w-20 h-1 bg-gradient-warm mx-auto mb-8 rounded-full" />
          <p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Fundada em 2016 por três professores da rede pública de Eunápolis, a ADJ nasceu da
            inconformidade com a violência que ceifa a vida de jovens. Acreditamos que a
            transformação social é a única solução — preventiva e restauradora.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow text-center group"
            >
              <div className="w-16 h-16 bg-gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <pillar.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">{pillar.title}</h3>
              <p className="font-body text-muted-foreground text-sm">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
