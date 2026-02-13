import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">CONTATO</h2>
          <div className="w-20 h-1 bg-gradient-warm mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: MapPin, title: "Endereço", text: "Rua São Judas Tadeu, 141, Rosa Neto, Eunápolis - BA" },
            { icon: Phone, title: "Telefone", text: "(73) 98157-8612" },
            { icon: Mail, title: "E-mail", text: "adj.amigosdajuventude@outlook.com" },
            { icon: Facebook, title: "Facebook", text: "/adj.eunapolis", link: "https://www.facebook.com/adj.eunapolis" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card text-center"
            >
              <div className="w-12 h-12 bg-gradient-warm rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-1">{item.title}</h3>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-primary hover:underline">
                  {item.text}
                </a>
              ) : (
                <p className="font-body text-sm text-muted-foreground break-all">{item.text}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
