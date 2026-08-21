import { useState, useEffect } from "react";
import { Download, ArrowUp } from "lucide-react";
import imgProfile from "./imports/Frame1/9e02335baa9e73c98c7949947f1cfe368040d3d1.png";
import SplashScreen from "./SplashScreen";
import Timeline from "./Timeline";

const LINKEDIN_URL = "https://www.linkedin.com/in/pedro-henrique-armada-nalis-147136266/";
const BEHANCE_URL = "https://www.behance.net/pedroharmada";
const RESUME_URL = "/curriculo-pedro-armada.pdf";
const EMAIL_URL = "mailto:ph.armada.nalis@gmail.com";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];


const SKILLS = ["UX Design", "UI Design", "UX Research", "Chatbots", "Design System"];

const PROJECTS = [
  {
    title: "Redesign do Skoob (Em construção 🚧)",
    description: "Projeto de pesquisa com o objetivo de criar uma nova feature de comunidades de leitura e aumentar a retenção de usuários no Skoob.",
    tags: ["UX Research", "UX Design", "Personas"],
    color: "from-[#5b68f5] to-[#2b49aa]",
  },
  {
    title: "Farmácias Forbi - Jornada de Atendimento (Em construção 🚧)",
    description: "Fluxo conversacional para uma grande rede de farmácias, cujo objetivo era automatizar a jornada dos clientes e reduzir o TMA.",
    tags: ["UX Design", "Chatbots", "Design Conversacional"],
    color: "from-[#6822c9] to-[#2b49aa]",
  },
  {
    title: "Agente de IA (Em construção 🚧)",
    description: "Criação de um agente de IA focado em apoiar novos colaboradores no processo de Onboarding de uma empresa.",
    tags: ["IA Generativa", "UX Design", "Documentação"],
    color: "from-[#2b49aa] to-[#151e87]",
  },
];

function Header({ onReplayIntro }: { onReplayIntro?: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.25)]" style={{ background: "linear-gradient(95deg,#5b68f5 0%,#2b49aa 45%,#151e87 100%)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-16 h-20 flex items-center justify-between gap-6">
        {/* Left: Logo and Nav Links grouped together */}
        <div className="flex items-center gap-10 lg:gap-14">
          <button
            onClick={onReplayIntro}
            title="Clique para ver a intro novamente"
            className="text-white text-2xl font-black tracking-[-0.04em] shrink-0 font-['Inter',sans-serif] hover:opacity-90 transition-opacity text-left cursor-pointer"
          >
            PEDRO <em className="not-italic italic font-black">ARMADA</em>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="text-white/80 hover:text-white text-[15px] font-medium tracking-[-0.03em] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-2xl transition-all"
          >
            <LinkedInIcon />
            Veja meu LinkedIn
          </a>
          <a
            href={RESUME_URL}
            download="Curriculo_Pedro_Henrique_Armada_Nalis.pdf"
            className="flex items-center gap-2 bg-white text-[#151e87] text-sm font-bold px-4 py-2 rounded-2xl hover:bg-white/90 transition-all"
          >
            <Download size={16} />
            Baixar currículo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <div className={`w-5 h-0.5 bg-white mb-1.5 transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-5 h-0.5 bg-white mb-1.5 transition-opacity ${open ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 px-6 pb-6 pt-4 flex flex-col gap-4 text-left">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="text-white/80 hover:text-white text-base font-medium" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-2.5 rounded-2xl justify-center"
            >
              <LinkedInIcon /> Veja meu LinkedIn
            </a>
            <a
              href={RESUME_URL}
              download="Curriculo_Pedro_Henrique_Armada_Nalis.pdf"
              className="flex items-center gap-2 bg-white text-[#151e87] text-sm font-bold px-4 py-2.5 rounded-2xl justify-center"
            >
              <Download size={16} /> Baixar currículo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}



function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
        {/* Left: text */}
        <div className="max-w-2xl text-left">
          <p className="text-sm font-semibold tracking-widest text-[#5b68f5] uppercase mb-4 font-['Inter',sans-serif]">
            Product / UX Designer
          </p>
          <h1 className="font-['IBM_Plex_Mono',monospace] font-bold text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-[0.02em] text-[#1c1b1b] mb-6">
            Transformando<br />
            ideias em{" "}
            <span className="text-[#6822c9]">experiências<br />digitais</span>
          </h1>
          <p className="text-lg text-[#494a4c] leading-relaxed mb-10 max-w-xl">
            Product Designer focado em soluções que agregam ao negócio e melhoram a experiência do usuário, orientado a dados.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="brand-gradient text-white font-bold px-8 py-3.5 rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-[#5b68f5]/30 text-[15px]"
            >
              Ver meus projetos
            </a>
            <a
              href="#contato"
              className="border-2 border-[#5b68f5] text-[#2b49aa] font-bold px-8 py-3.5 rounded-2xl hover:bg-[#5b68f5]/5 transition-all text-[15px]"
            >
              Vamos conversar
            </a>
          </div>

        </div>

        {/* Right: profile card */}
        <div className="hidden sm:block">
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}

function ProfileCard() {
  return (
    <div className="bg-[#1e2121] border-2 border-[#a6adae]/50 rounded-[15px] p-6 w-72 lg:w-80 shadow-2xl text-left">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-gray-700">
          <img src={imgProfile} alt="Pedro Armada" className="w-full h-full object-cover" />
        </div>
        <div className="pt-1">
          <p className="text-white font-bold text-base leading-tight mb-1">Pedro Armada</p>
          <p className="text-white/70 text-sm mb-2">Product Designer</p>
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#10783b] to-[#129649] text-white text-xs font-medium px-2.5 py-1 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
            Disponível
          </span>
        </div>
      </div>

      <div className="border-t border-white/10 pt-4">
        <p className="text-[#909797] text-xs font-medium tracking-wider uppercase mb-3">Áreas de atuação</p>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <span key={skill} className="skill-pill text-white text-xs font-medium px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 mt-4 pt-4 grid grid-cols-3 gap-2 text-center">
        {[["2+", "Anos exp."], ["5+", "Projetos"], ["3", "Empresas"]].map(([val, lab]) => (
          <div key={lab}>
            <p className="text-white font-bold text-lg leading-tight">{val}</p>
            <p className="text-white/50 text-xs">{lab}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 px-6 lg:px-16 bg-white/60">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold tracking-widest text-[#5b68f5] uppercase mb-2">Portfólio</p>
            <h2 className="font-['IBM_Plex_Mono',monospace] font-bold text-4xl lg:text-5xl tracking-[0.03em] text-[#1c1b1b]">
              Projetos
            </h2>
          </div>
          <a
            href="#contato"
            className="text-[#2b49aa] font-semibold text-sm underline underline-offset-4 hover:text-[#151e87] transition-colors whitespace-nowrap"
          >
            Tem um projeto em mente? →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.title} className="group bg-white rounded-2xl border border-[#e2e4f0] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`h-40 bg-gradient-to-br ${p.color} flex items-end p-5`}>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full border border-white/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#1c1b1b] text-lg mb-2 leading-snug">{p.title}</h3>
                <p className="text-[#494a4c] text-sm leading-relaxed mb-5">{p.description}</p>
                <a
                  href={BEHANCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#2b49aa] font-semibold text-sm hover:gap-2.5 transition-all"
                >
                  Ver case study <span className="text-base">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={BEHANCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-gradient inline-block text-white font-bold px-10 py-3.5 rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-[#5b68f5]/30 text-[15px]"
          >
            Ver todos os projetos no Behance
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="sobre" className="py-24 px-6 lg:px-16 brand-gradient">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_360px] gap-16 items-start">
        <div>
          <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-4">Quem sou eu</p>
          <h2 className="font-['IBM_Plex_Mono',monospace] font-bold text-5xl lg:text-6xl tracking-[0.03em] text-white mb-8">
            Sobre mim
          </h2>
          <div className="space-y-5 text-[#ccd4d4] text-lg leading-relaxed">
            <p>
              Muito Prazer! Me chamo <strong className="text-white">Pedro Henrique Armada Nalis</strong>, tenho 22 anos e atuo como Product/UX Designer desde 2023, movido pela curiosidade e paixão de resolver problemas através do design.
            </p>
            <p>
              Sou formado em Sistemas de Informação e descobri a profissão durante a minha trajetória no curso, onde sempre tive um perfil mais analítico e visual, mas não muito forte com código, até descobrir que havia uma área que se encaixava perfeitamente comigo: UX/UI Design. Mergulhei de cabeça nos estudos e vi que ali era onde estava meu potencial, mas sem dispensar a bagagem que consegui com meu período na programação, visto que hoje ela me ajuda a tomar decisões melhores e me permite ter uma boa comunicação com times de desenvolvimento.
            </p>
            <p>
              Pra além do trabalho, sempre gostei de ter diversos hobbies desde pequeno. Hoje no meu tempo livre, gosto muito de tocar baixo, ler livros e quadrinhos, ver filmes e jogar videogame. Não só são atividades que eu gosto muito, mas elas também me ajudam a estimular minha criatividade e minhas ideias.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-10">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-[#151e87] font-bold px-6 py-3 rounded-2xl hover:bg-white/90 transition-all text-sm"
            >
              <LinkedInIcon />
              Veja meu LinkedIn
            </a>
            <a
              href={RESUME_URL}
              download="Curriculo_Pedro_Henrique_Armada_Nalis.pdf"
              className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-2xl hover:bg-white/20 transition-all text-sm"
            >
              <Download size={16} />
              Baixar currículo
            </a>
          </div>
        </div>

        {/* Stats card */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 self-start">
          <h3 className="text-white font-bold text-lg mb-6">Em números</h3>
          <div className="space-y-5">
            {[
              ["2+", "anos de experiência em UX/UI Design"],
              ["3+", "projetos entregues com impacto mensurável"],
              ["3", "empresas em setores distintos"],
              ["100%", "orientado a dados e ao usuário"],
            ].map(([val, desc]) => (
              <div key={desc} className="flex items-center gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0">
                <span className="font-['IBM_Plex_Mono',monospace] font-bold text-3xl text-white shrink-0 w-20">{val}</span>
                <span className="text-white/70 text-sm leading-snug">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contato" className="py-24 px-6 lg:px-16 bg-[#f6f7fb]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest text-[#5b68f5] uppercase mb-4">Vamos trabalhar juntos</p>
        <h2 className="font-['IBM_Plex_Mono',monospace] font-bold text-4xl lg:text-5xl tracking-[0.02em] text-[#1c1b1b] mb-6 leading-tight">
          Tem uma ideia de projeto?<br />
          <span className="text-[#6822c9]">Vamos conversar!</span>
        </h2>
        <p className="text-[#494a4c] text-lg mb-10 leading-relaxed">
          Estou disponível para projetos freelance, colaborações e oportunidades full-time.
          <p>Me mande uma mensagem para nos conhecermos melhor!</p>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={EMAIL_URL}
            className="brand-gradient text-white font-bold px-10 py-4 rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-[#5b68f5]/30 text-base"
          >
            Enviar mensagem
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-[#5b68f5] text-[#2b49aa] font-bold px-10 py-4 rounded-2xl hover:bg-[#5b68f5]/5 transition-all text-base"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#e2e4f0] py-8 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        {/* Left: Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <span className="text-[#1c1b1b] font-black text-xl tracking-[-0.04em] font-['Inter',sans-serif]">
            PEDRO <em className="not-italic italic">ARMADA</em>
          </span>
        </div>

        {/* Center: Copyright */}
        <div className="text-center">
          <p className="text-[#909797] text-sm">
            © 2026 Pedro Armada.
          </p>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center justify-center md:justify-end gap-4">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#909797] hover:text-[#2b49aa] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href={BEHANCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#909797] hover:text-[#1769ff] transition-colors"
            aria-label="Behance"
          >
            <BehanceIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}





function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function BehanceIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.799 5.698c.589 0 1.12.051 1.606.156.482.105.907.28 1.271.525.361.244.65.576.853.993.202.415.304.927.304 1.53 0 .659-.147 1.207-.441 1.648-.293.441-.737.802-1.326 1.084.794.226 1.388.619 1.786 1.177.396.558.595 1.228.595 2.012 0 .659-.125 1.225-.371 1.7-.248.474-.588.864-1.018 1.168-.428.305-.922.532-1.48.682-.556.149-1.134.225-1.733.225H0V5.698h7.799zm-.351 4.973c.49 0 .89-.119 1.2-.357.312-.238.468-.605.468-1.103 0-.27-.049-.494-.145-.672a1.115 1.115 0 00-.396-.43 1.68 1.68 0 00-.58-.228 3.229 3.229 0 00-.7-.072H2.856v2.862h4.592zm.19 5.209c.268 0 .521-.025.758-.074.238-.05.446-.135.625-.253.18-.117.323-.277.429-.48.106-.2.159-.457.159-.769 0-.609-.172-1.045-.514-1.308-.342-.263-.793-.395-1.353-.395H2.856v3.279h4.782zm9.549-3.496c.305.297.741.445 1.309.445.408 0 .759-.102 1.055-.307.295-.204.476-.422.542-.652h2.48c-.397 1.228-1.006 2.107-1.83 2.636-.824.529-1.82.793-2.988.793-.811 0-1.541-.13-2.19-.389a4.762 4.762 0 01-1.666-1.098 4.835 4.835 0 01-1.055-1.695 6.124 6.124 0 01-.367-2.15c0-.775.125-1.491.379-2.148a4.87 4.87 0 011.079-1.695 4.906 4.906 0 011.671-1.105c.648-.264 1.364-.396 2.149-.396.877 0 1.644.168 2.303.505a4.54 4.54 0 011.597 1.354c.42.568.721 1.214.904 1.938.183.724.245 1.483.188 2.278h-7.395c.04.653.244 1.137.635 1.686zm2.287-4.529c-.244-.267-.646-.4-1.206-.4-.352 0-.646.059-.879.178-.232.119-.42.268-.563.445a1.648 1.648 0 00-.298.591 2.81 2.81 0 00-.093.624h4.615c-.101-.642-.332-1.171-.576-1.438zm-3.625-4.005h5.431V5.27h-5.431v.58z" />
    </svg>
  );
}


export default function App() {
  const [splashKey, setSplashKey] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleReplayIntro = () => {
    setSplashKey((prev) => prev + 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f6f7fb] relative">
      <SplashScreen key={splashKey} />
      <Header onReplayIntro={handleReplayIntro} />
      <main>
        <HeroSection />
        <ProjectsSection />
        <Timeline />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Floating Back to Top Button */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 bg-[#151e87]/90 hover:bg-[#151e87] text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-xl backdrop-blur-md border border-white/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title="Voltar ao topo da página"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={15} />
          <span>Voltar ao topo</span>
        </button>
      </div>
    </div>
  );
}


