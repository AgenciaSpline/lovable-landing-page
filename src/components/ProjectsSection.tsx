import { motion } from "framer-motion";
import { Gamepad2, Megaphone, Palette, Film, Trophy, GraduationCap } from "lucide-react";

const projects = [
  {
    icon: Gamepad2,
    name: "Playnápolis",
    desc: "Ligas e campeonatos de games unindo jovens gamers em momentos de interação social saudável.",
    color: "bg-accent",
  },
  {
    icon: Megaphone,
    name: "Papo Reto",
    desc: "Palestras de conscientização nas escolas sobre drogas, violência e valorização da vida.",
    color: "bg-secondary",
  },
  {
    icon: Palette,
    name: "Graffitai",
    desc: "Transformando muros marcados pela violência em arte colorida feita pela própria comunidade.",
    color: "bg-primary",
  },
  {
    icon: Film,
    name: "Cine Rua",
    desc: "Sessões de cinema ao ar livre levando cultura e entretenimento para as comunidades.",
    color: "bg-accent",
  },
  {
    icon: Trophy,
    name: "Jogando Pra Vencer",
    desc: "Treinamento esportivo para crianças e jovens, formando vencedores dentro e fora das quadras.",
    color: "bg-secondary",
  },
  {
    icon: GraduationCap,
    name: "A Universidade é Nossa",
    desc: "Levando estudantes do Ensino Médio para conhecer a rotina universitária de perto.",
    color: "bg-primary",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            NOSSOS PROJETOS
          </h2>
          <div className="w-20 h-1 bg-gradient-hope mx-auto mb-8 rounded-full" />
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Ações que transformam vidas através do esporte, cultura, educação e cidadania.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 group"
            >
              <div className={`w-14 h-14 ${project.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <project.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">{project.name}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
