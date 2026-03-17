import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Users, Target, Building, Calendar, Handshake, Download } from "lucide-react";

const Section = ({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-card rounded-2xl p-8 shadow-card"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-gradient-hope rounded-xl flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6 text-secondary-foreground" />
      </div>
      <h2 className="font-display text-3xl text-foreground">{title}</h2>
    </div>
    <div className="font-body text-muted-foreground leading-relaxed space-y-4">{children}</div>
  </motion.div>
);

const Transparencia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-12 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl text-foreground mb-4"
          >
            TRANSPARÊNCIA
          </motion.h1>
          <div className="w-20 h-1 bg-gradient-hope mx-auto mb-6 rounded-full" />
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Compromisso com a clareza e a prestação de contas à sociedade.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 space-y-8 max-w-4xl">
          <Section icon={Building} title="IDENTIFICAÇÃO">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ["Razão Social", "Associação Amigos da Juventude – ADJ"],
                ["CNPJ", "32.568.526/0001-69"],
                ["Atividade", "Defesa de direitos sociais"],
                ["Fundação", "23/07/2018"],
                ["Endereço", "Rua São Judas Tadeu, 141, Rosa Neto, Eunápolis - BA"],
                ["Telefone", "(73) 98157-8612 / (73) 98151-2482"],
                ["E-mail", "adj.amigosdajuventude@outlook.com"],
                ["Presidente", "Romalio Brito Oliveira"],
              ].map(([label, value]) => (
                <div key={label} className="bg-muted rounded-xl p-4">
                  <div className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">{label}</div>
                  <div className="font-body text-sm font-semibold text-foreground">{value}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section icon={FileText} title="NATUREZA JURÍDICA">
            <p>
              A ADJ é uma pessoa jurídica de direito privado sem fins lucrativos, de caráter beneficente,
              organizacional, assistencial, promocional, social, filantrópico, educacional, cultural,
              recreativo e ambiental, sem cunho político ou partidário. Atende a todos independente de
              classe social, nacionalidade, sexo, raça, cor ou crença religiosa.
            </p>
          </Section>

          <Section icon={Target} title="OBJETIVOS">
            <p className="mb-4">
              Modificar a realidade da juventude eunapolitana através de ações direcionadas, visando
              conscientização, prevenção contra o uso de drogas e redução dos índices de violência.
            </p>
            <ul className="space-y-2">
              {[
                "Recrutar e formar jovens conscientes como agentes de transformação",
                "Promover a prática esportiva com subsídios e recursos",
                "Estabelecer calendário de encontros artísticos e culturais",
                "Atuar nas escolas com palestras de conscientização",
                "Promover incentivo à leitura e acesso a livros",
                "Estabelecer parcerias para cursos profissionalizantes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section icon={Users} title="PÚBLICO-ALVO">
            <div className="space-y-4">
              {[
                { title: "Principal", desc: "Adolescentes e jovens a partir dos 14 anos que se tornam agentes das ações do movimento." },
                { title: "Secundário", desc: "Jovens diversos beneficiados pelas ações nas escolas e comunidades." },
                { title: "Preventivo", desc: "Crianças de 10 a 13 anos — os jovens de amanhã." },
                { title: "Recorte", desc: "Comunidades dos bairros Rosa Neto, Alegria, Vila Olímpica, Arivaldo Reis e Residencial Alecrim." },
              ].map((p) => (
                <div key={p.title} className="bg-muted rounded-xl p-4">
                  <div className="font-body text-sm font-bold text-foreground mb-1">{p.title}</div>
                  <div className="font-body text-sm text-muted-foreground">{p.desc}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section icon={Calendar} title="RECURSOS E FINANCIAMENTO">
            <p>
              Atualmente os recursos empregados para a realização e funcionamento das atividades são
              provenientes de doações dos associados voluntários e da comunidade. A ADJ conta com a
              colaboração de voluntários e parcerias para manter seus projetos em funcionamento.
            </p>
          </Section>

          <Section icon={Handshake} title="TERMO DE FOMENTO — JOGANDO PARA VENCER">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ["Nº do Termo de Fomento", "976316/2025"],
                ["Emenda", "nº 44700007"],
                ["Autora da Emenda", "Deputada Rogéria Santos"],
                ["Valor Total da Parceria", "R$ 196.000,00"],
                ["Valor Recursos Humanos", "R$ 159.200,00"],
                ["Concedente", "Ministério do Esporte – MESP (CNPJ: 02.961.362/0001-74)"],
                ["Convenente", "Associação Amigos da Juventude (CNPJ: 32.568.526/0001-69)"],
                ["Data de Assinatura", "30/10/2025"],
                ["Vigência", "30/10/2025 a 30/12/2026"],
                ["Objeto", "Implementação e Desenvolvimento do Projeto Jogando para Vencer, em Eunápolis/BA"],
                ["Situação da Prestação de Contas", "Em execução"],
                ["Prestação de Contas Prevista", "30/03/2027"],
              ].map(([label, value]) => (
                <div key={label} className="bg-muted rounded-xl p-4">
                  <div className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">{label}</div>
                  <div className="font-body text-sm font-semibold text-foreground">{value}</div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <h3 className="font-display text-xl text-foreground mb-3">EDITAIS</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="/docs/EDITAL_01_2026_RH_JOGANDO_PARA_VENCER_ADJ.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-muted rounded-xl p-4 hover:bg-primary/10 transition-colors"
                >
                  <Download className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <div className="font-body text-sm font-semibold text-foreground">Edital nº 01/2026 — RH</div>
                    <div className="font-body text-xs text-muted-foreground">Recursos Humanos</div>
                  </div>
                </a>
                <a
                  href="/docs/EDITAL_02_2026_MATERIAIS_SERVICOS_JOGANDO_PARA_VENCER_ADJ.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-muted rounded-xl p-4 hover:bg-primary/10 transition-colors"
                >
                  <Download className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <div className="font-body text-sm font-semibold text-foreground">Edital nº 02/2026 — Materiais e Serviços</div>
                    <div className="font-body text-xs text-muted-foreground">Materiais e Serviços</div>
                  </div>
                </a>
              </div>
            </div>
          </Section>

          <Section icon={Handshake} title="TERMO DE FOMENTO — A RUA É NOSSA">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ["Nº do Termo de Fomento", "982525/2025"],
                ["Emenda", "nº 50060001"],
                ["Autora da Emenda", "Deputada Rogéria Santos"],
                ["Valor Total da Parceria", "R$ 196.000,00"],
                ["Valor Recursos Humanos", "R$ 135.720,00"],
                ["Concedente", "Ministério do Esporte – MESP (CNPJ: 02.961.362/0001-74)"],
                ["Convenente", "Associação Amigos da Juventude (CNPJ: 32.568.526/0001-69)"],
                ["Data de Assinatura", "17/12/2025"],
                ["Vigência", "17/12/2025 a 17/02/2027"],
                ["Objeto", "Implementação e desenvolvimento do projeto A Rua é Nossa no município de Eunápolis/BA"],
                ["Situação da Prestação de Contas", "Em execução"],
                ["Prestação de Contas Prevista", "18/05/2027"],
              ].map(([label, value]) => (
                <div key={label} className="bg-muted rounded-xl p-4">
                  <div className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">{label}</div>
                  <div className="font-body text-sm font-semibold text-foreground">{value}</div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <h3 className="font-display text-xl text-foreground mb-3">DOCUMENTOS</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="/docs/Termo_de_Fomento_982525_2025_ADJ.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-muted rounded-xl p-4 hover:bg-primary/10 transition-colors"
                >
                  <Download className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <div className="font-body text-sm font-semibold text-foreground">Termo de Fomento nº 982525/2025</div>
                    <div className="font-body text-xs text-muted-foreground">Documento completo</div>
                  </div>
                </a>
                <a
                  href="/docs/DOU_ASSOCIACAO_AMIGOS_DA_JUVENTUDE_ADJ.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-muted rounded-xl p-4 hover:bg-primary/10 transition-colors"
                >
                  <Download className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <div className="font-body text-sm font-semibold text-foreground">Publicação no DOU</div>
                    <div className="font-body text-xs text-muted-foreground">Diário Oficial da União</div>
                  </div>
                </a>
              </div>
            </div>
          </Section>

          <Section icon={FileText} title="CONSULTA — INSTRUMENTOS ASSINADOS">
            <div className="space-y-4">
              <img
                src="/images/propostas-aprovadas.jpeg"
                alt="Propostas apresentadas e instrumentos assinados da ADJ"
                className="w-full rounded-xl border border-border"
              />
              <img
                src="/images/instrumentos-assinados.jpeg"
                alt="Lista de instrumentos assinados — Termos de Fomento da ADJ"
                className="w-full rounded-xl border border-border"
              />
            </div>
          </Section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transparencia;
