import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, Building2, Sparkles, CheckCircle2 } from "lucide-react";

interface TimelineItem {
  id: string;
  company: string;
  role: string;
  period: string;
  badge?: string;
  isCurrent?: boolean;
  description: string[];
  tags: string[];
}

const EXPERIENCES: TimelineItem[] = [
  {
    id: "zenvia",
    company: "Zenvia Mobile Services",
    role: "UX Designer Pleno",
    period: "2025 – 2026",
    badge: "Seguros & IA Generativa",
    isCurrent: true,
    description: [
      "Atuação na evolução de produtos digitais e jornadas conversacionais, em parceria com equipes de Produto, Design e Tecnologia para uma grande empresa do segmento de Seguros.",
      "Definição e acompanhamento de métricas de produto e experiência, utilizando dados de comportamento para orientar decisões e evoluções de jornadas digitais.",
      "Estruturação de dashboards que apoiaram decisões de evolução do produto e monitoramento contínuo da experiência do usuário.",
      "Condução de análises de comportamento do usuário para identificar oportunidades de melhoria e apoiar decisões de evolução do produto.",
      "Contribuição na concepção de agentes de IA, definindo fluxos, regras de decisão e estratégias de interação apoiadas por IA Generativa.",
      "Articulação com múltiplos stakeholders para definição de soluções digitais alinhadas aos objetivos de negócio.",
      "Atuação em iniciativas de inovação utilizando Design Thinking, metodologias ágeis (Scrum) e ferramentas colaborativas para construção de soluções escaláveis.",
    ],
    tags: [
      "Product Design",
      "UX Research",
      "Product Metrics",
      "Dashboards",
      "IA Generativa",
      "Agentes de IA",
      "Design Conversacional",
      "Scrum",
    ],
  },
  {
    id: "resolv-jr",
    company: "Resolv Tecnologia e Inovação LTDA",
    role: "UX/UI Designer Junior",
    period: "2024 – 2025",
    badge: "Saúde & Educação B2B",
    description: [
      "Atuação na evolução contínua de produtos digitais escaláveis utilizados por clientes corporativos de diferentes segmentos, como saúde e educação, lado a lado com os stakeholders.",
      "Desenvolvimento de interfaces de alta fidelidade.",
      "Estruturação de jornadas digitais, aplicando UX Writing para aumentar a clareza das interações e reduzir ambiguidades na experiência.",
      "Definição de fluxos de usuário.",
      "Contribuição na concepção de testes de usabilidade para identificar problemas de uso e gerar insights para evolução do produto.",
      "Análise de comportamento para direcionamento de melhorias.",
      "Colaboração ativa entre Produto, Design e Desenvolvimento.",
    ],
    tags: [
      "UX/UI Design",
      "UX Writing",
      "High-Fidelity UI",
      "User Flows",
      "Testes de Usabilidade",
      "B2B Corporativo",
    ],
  },
  {
    id: "amigu",
    company: "Instituto Amigu",
    role: "UX/UI Designer Junior",
    period: "2025",
    badge: "Plataforma SouAmiGU",
    description: [
      "Participação no desenvolvimento da plataforma SouAmiGU, voltada para organização e inscrição de hackathons.",
      "Estruturação do fluxo de negócio, definição de regras de funcionamento, fluxos de usuário e jornadas digitais.",
      "Desenvolvimento de protótipos de alta fidelidade utilizando Figma e colaboração na definição da experiência do usuário e arquitetura funcional da plataforma.",
    ],
    tags: [
      "UX/UI Design",
      "Figma",
      "Prototipagem",
      "User Flows",
      "Arquitetura Funcional",
      "Design System",
    ],
  },
  {
    id: "portohack",
    company: "PortoHack 2023",
    role: "Mentor de UX & Tecnologia",
    period: "2023",
    badge: "Setor Portuário",
    description: [
      "Atuação como mentor em hackathon focado em desafios do setor portuário, apoiando participantes na resolução de problemas e definição de soluções digitais.",
      "Orientação em estruturação de ideias, tecnologia e experiência do usuário, com colaboração em dinâmicas multidisciplinares de inovação e desenvolvimento ágil.",
    ],
    tags: [
      "Mentoria",
      "Hackathon",
      "Design Thinking",
      "Inovação Aberta",
      "Desenvolvimento Ágil",
    ],
  },
  {
    id: "resolv-dev",
    company: "Resolv Tecnologia e Inovação LTDA",
    role: "Assistente de Desenvolvimento",
    period: "2023 – 2024",
    badge: "Chatbots & Low-code",
    description: [
      "Apoio no desenvolvimento e manutenção de chatbots utilizando plataformas low-code/no-code.",
      "Participação na estruturação de melhorias e automações em soluções conversacionais.",
      "Colaboração com equipes técnicas e de produto em iniciativas de experiência do usuário.",
      "Suporte na implementação e evolução de fluxos digitais.",
    ],
    tags: [
      "Chatbots",
      "Low-code / No-code",
      "Zenvia NLU",
      "IBM Watson",
      "Automação",
      "UX Conversacional",
    ],
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineHeightPercent, setLineHeightPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far into the container we've scrolled
      const totalHeight = rect.height;
      const currentScroll = windowHeight / 2 - rect.top;

      let percentage = (currentScroll / totalHeight) * 100;
      percentage = Math.max(0, Math.min(100, percentage));

      setLineHeightPercent(percentage);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experiencia" className="py-24 px-6 lg:px-16 bg-[#181b20] text-white relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#5b68f5]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#6822c9]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#a4b1ff] text-xs font-semibold tracking-widest uppercase mb-4">
            <Briefcase size={14} className="text-[#5b68f5]" />
            Experiência Profissional
          </div>
          <h2 className="font-['IBM_Plex_Mono',monospace] font-bold text-4xl lg:text-5xl xl:text-6xl tracking-[0.02em] text-white mb-6 leading-tight">
            Trajetória &amp; <span className="text-[#6822c9]">Impacto</span>
          </h2>
          <p className="text-[#a4adae] text-lg leading-relaxed">
            Histórico de atuação profissional focado em criar experiências centradas no usuário e orientadas por dados, atuando entre UX, Produto e Tecnologia.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* Vertical progress rail */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-white/10 rounded-full">
            <div
              className="w-[2px] bg-gradient-to-b from-[#5b68f5] via-[#6822c9] to-[#129649] rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(91,104,245,0.8)]"
              style={{ height: `${lineHeightPercent}%` }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative pl-12 md:pl-20 group">
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-8 top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-[#181b20] border-2 border-[#5b68f5] flex items-center justify-center transition-transform duration-300 group-hover:scale-125 shadow-[0_0_10px_rgba(91,104,245,0.5)]">
                    <div className={`w-2 h-2 rounded-full ${exp.isCurrent ? "bg-[#129649] animate-pulse" : "bg-[#5b68f5]"}`} />
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-[#22262d] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#5b68f5]/50 hover:shadow-[0_8px_30px_rgba(91,104,245,0.15)] transition-all duration-300">
                  {/* Top bar: Role + Badge + Company + Period */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 border-b border-white/10 pb-5">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap mb-1.5">
                        <h3 className="font-bold text-xl md:text-2xl text-white tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.badge && (
                          <span className="inline-flex items-center gap-1 bg-[#5b68f5]/20 border border-[#5b68f5]/40 text-[#a4b1ff] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                            <Sparkles size={12} />
                            {exp.badge}
                          </span>
                        )}
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 bg-[#129649]/20 border border-[#129649]/40 text-[#6fe399] text-xs font-medium px-2.5 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Atual
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-[#a4adae] text-sm font-medium">
                        <Building2 size={16} className="text-[#5b68f5]" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/90 self-start md:self-auto">
                      <Calendar size={14} className="text-[#5b68f5]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullet accomplishments */}
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[#d0d7de] text-sm md:text-[15px] leading-relaxed">
                        <CheckCircle2 size={16} className="text-[#5b68f5] shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
