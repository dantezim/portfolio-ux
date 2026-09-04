import { useState, useEffect } from "react";
import { Download, ArrowUp } from "lucide-react";
import imgProfile from "./imports/Frame1/9e02335baa9e73c98c7949947f1cfe368040d3d1.png";
import imgSkoob from "./assets/skoob-cover.png";
import SplashScreen from "./SplashScreen";
import Timeline from "./Timeline";
import LanguageSwitcher from "./LanguageSwitcher";
import { TRANSLATIONS, type Language } from "./i18n/translations";

const LINKEDIN_URL = "https://www.linkedin.com/in/pedro-henrique-armada-nalis-147136266/";
const BEHANCE_URL = "https://www.behance.net/pedroharmada";
const RESUME_URL = "/curriculo-pedro-armada.pdf";

interface SectionProps {
  lang: Language;
}

interface HeaderProps extends SectionProps {
  onLanguageChange: (lang: Language) => void;
  onReplayIntro?: () => void;
}

function Header({ lang, onLanguageChange, onReplayIntro }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const tNav = TRANSLATIONS[lang].nav;

  const navLinks = [
    { label: tNav.about, href: "#sobre" },
    { label: tNav.experience, href: "#experiencia" },
    { label: tNav.projects, href: "#projetos" },
    { label: tNav.contact, href: "#contato" },
  ];

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (onReplayIntro) {
      onReplayIntro();
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
      style={{ background: "linear-gradient(95deg,#5b68f5 0%,#2b49aa 45%,#151e87 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16 h-20 flex items-center justify-between gap-6">
        {/* Left: Logo and Nav Links grouped together */}
        <div className="flex items-center gap-10 lg:gap-14">
          <button
            onClick={handleLogoClick}
            title={lang === "pt" ? "Voltar ao início do site" : "Back to top"}
            className="text-white text-2xl font-black tracking-[-0.04em] shrink-0 font-['Inter',sans-serif] hover:opacity-90 transition-opacity text-left cursor-pointer"
          >
            PEDRO <em className="not-italic italic font-black">ARMADA</em>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-white/80 hover:text-white text-[15px] font-medium tracking-[-0.03em] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Language Switcher + Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher Button */}
          <LanguageSwitcher currentLang={lang} onLanguageChange={onLanguageChange} />

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-2xl transition-all"
          >
            <LinkedInIcon />
            {tNav.viewLinkedIn}
          </a>
          <a
            href={RESUME_URL}
            download="Curriculo_Pedro_Henrique_Armada_Nalis.pdf"
            className="flex items-center gap-2 bg-white text-[#151e87] text-sm font-bold px-4 py-2 rounded-2xl hover:bg-white/90 transition-all"
          >
            <Download size={16} />
            {tNav.downloadResume}
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher currentLang={lang} onLanguageChange={onLanguageChange} />
          <button
            className="text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            <div className={`w-5 h-0.5 bg-white mb-1.5 transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-5 h-0.5 bg-white mb-1.5 transition-opacity ${open ? "opacity-0" : ""}`} />
            <div className={`w-5 h-0.5 bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 px-6 pb-6 pt-4 flex flex-col gap-4 text-left">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/80 hover:text-white text-base font-medium"
              onClick={() => setOpen(false)}
            >
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
              <LinkedInIcon /> {tNav.viewLinkedIn}
            </a>
            <a
              href={RESUME_URL}
              download="Curriculo_Pedro_Henrique_Armada_Nalis.pdf"
              className="flex items-center gap-2 bg-white text-[#151e87] text-sm font-bold px-4 py-2.5 rounded-2xl justify-center"
            >
              <Download size={16} /> {tNav.downloadResume}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroSection({ lang }: SectionProps) {
  const tHero = TRANSLATIONS[lang].hero;

  return (
    <section className="pt-32 pb-20 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
        {/* Left: text */}
        <div className="max-w-2xl text-left">
          <p className="text-sm font-semibold tracking-widest text-[#5b68f5] uppercase mb-4 font-['Inter',sans-serif]">
            {tHero.role}
          </p>
          <h1 className="font-['IBM_Plex_Mono',monospace] font-bold text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-[0.02em] text-[#1c1b1b] mb-6">
            {tHero.titleLine1}<br />
            {tHero.titleLine2}{" "}
            <span className="text-[#6822c9]">{tHero.titleHighlight}</span>
          </h1>
          <p className="text-lg text-[#494a4c] leading-relaxed mb-10 max-w-xl">
            {tHero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="brand-gradient text-white font-bold px-8 py-3.5 rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-[#5b68f5]/30 text-[15px]"
            >
              {tHero.ctaProjects}
            </a>
            <a
              href="#contato"
              className="border-2 border-[#5b68f5] text-[#2b49aa] font-bold px-8 py-3.5 rounded-2xl hover:bg-[#5b68f5]/5 transition-all text-[15px]"
            >
              {tHero.ctaContact}
            </a>
          </div>
        </div>

        {/* Right: profile card */}
        <div className="hidden sm:block">
          <ProfileCard lang={lang} />
        </div>
      </div>
    </section>
  );
}

function ProfileCard({ lang }: SectionProps) {
  const tCard = TRANSLATIONS[lang].profileCard;

  return (
    <div className="bg-[#1e2121] border-2 border-[#a6adae]/50 rounded-[15px] p-6 w-72 lg:w-80 shadow-2xl text-left">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-gray-700">
          <img src={imgProfile} alt={tCard.name} className="w-full h-full object-cover" />
        </div>
        <div className="pt-1">
          <p className="text-white font-bold text-base leading-tight mb-1">{tCard.name}</p>
          <p className="text-white/70 text-sm mb-2">{tCard.role}</p>
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#10783b] to-[#129649] text-white text-xs font-medium px-2.5 py-1 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
            {tCard.statusAvailable}
          </span>
        </div>
      </div>

      <div className="border-t border-white/10 pt-4">
        <p className="text-[#909797] text-xs font-medium tracking-wider uppercase mb-3">
          {tCard.areasHeader}
        </p>
        <div className="flex flex-wrap gap-2">
          {tCard.skills.map((skill) => (
            <span key={skill} className="skill-pill text-white text-xs font-medium px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 mt-4 pt-4 grid grid-cols-3 gap-2 text-center">
        {tCard.stats.map(({ val, label }) => (
          <div key={label}>
            <p className="text-white font-bold text-lg leading-tight">{val}</p>
            <p className="text-white/50 text-xs">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsSection({ lang }: SectionProps) {
  const tProjects = TRANSLATIONS[lang].projectsSection;

  const projectImages = [imgSkoob, undefined, undefined];
  const projectLinks = [
    "https://www.behance.net/gallery/254848485/Redesign-Skoob",
    BEHANCE_URL,
    BEHANCE_URL,
  ];
  const projectColors = [
    "from-[#5b68f5] to-[#2b49aa]",
    "from-[#6822c9] to-[#2b49aa]",
    "from-[#2b49aa] to-[#151e87]",
  ];

  return (
    <section id="projetos" className="py-20 px-6 lg:px-16 bg-white/60">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold tracking-widest text-[#5b68f5] uppercase mb-2">
              {tProjects.badge}
            </p>
            <h2 className="font-['IBM_Plex_Mono',monospace] font-bold text-4xl lg:text-5xl tracking-[0.03em] text-[#1c1b1b]">
              {tProjects.title}
            </h2>
          </div>
          <a
            href="#contato"
            className="text-[#2b49aa] font-semibold text-sm underline underline-offset-4 hover:text-[#151e87] transition-colors whitespace-nowrap"
          >
            {tProjects.ctaHaveProject}
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tProjects.items.map((p, idx) => {
            const image = projectImages[idx];
            const targetLink = projectLinks[idx] || BEHANCE_URL;
            const color = projectColors[idx];

            return (
              <article
                key={p.title}
                className="group bg-white rounded-2xl border border-[#e2e4f0] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <a
                  href={targetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative h-48 overflow-hidden bg-gray-100"
                >
                  {image ? (
                    <img
                      src={image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${color}`} />
                  )}
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 z-10">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-black/50 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-full border border-white/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-[#1c1b1b] text-lg mb-2 leading-snug">
                      <a
                        href={targetLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#5b68f5] transition-colors"
                      >
                        {p.title}
                      </a>
                    </h3>
                    <p className="text-[#494a4c] text-sm leading-relaxed mb-5">{p.description}</p>
                  </div>
                  <a
                    href={targetLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#2b49aa] font-semibold text-sm hover:gap-2.5 transition-all mt-auto"
                  >
                    {tProjects.viewCaseStudy}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href={BEHANCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-gradient inline-block text-white font-bold px-10 py-3.5 rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-[#5b68f5]/30 text-[15px]"
          >
            {tProjects.viewAllBehance}
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ lang }: SectionProps) {
  const tAbout = TRANSLATIONS[lang].about;

  return (
    <section id="sobre" className="py-24 px-6 lg:px-16 brand-gradient">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_360px] gap-16 items-start">
        <div>
          <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-4">
            {tAbout.badge}
          </p>
          <h2 className="font-['IBM_Plex_Mono',monospace] font-bold text-5xl lg:text-6xl tracking-[0.03em] text-white mb-8">
            {tAbout.title}
          </h2>
          <div className="space-y-5 text-[#ccd4d4] text-lg leading-relaxed">
            <p>
              {tAbout.p1Line1}
              <strong className="text-white">{tAbout.p1Name}</strong>
              {tAbout.p1Line2}
            </p>
            <p>{tAbout.p2}</p>
            <p>{tAbout.p3}</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-10">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-[#151e87] font-bold px-6 py-3 rounded-2xl hover:bg-white/90 transition-all text-sm"
            >
              <LinkedInIcon />
              {tAbout.viewLinkedIn}
            </a>
            <a
              href={RESUME_URL}
              download="Curriculo_Pedro_Henrique_Armada_Nalis.pdf"
              className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-2xl hover:bg-white/20 transition-all text-sm"
            >
              <Download size={16} />
              {tAbout.downloadResume}
            </a>
          </div>
        </div>

        {/* Stats card */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 self-start">
          <h3 className="text-white font-bold text-lg mb-6">{tAbout.statsTitle}</h3>
          <div className="space-y-5">
            {tAbout.stats.map(({ val, desc }) => (
              <div
                key={desc}
                className="flex items-center gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
              >
                <span className="font-['IBM_Plex_Mono',monospace] font-bold text-3xl text-white shrink-0 w-20">
                  {val}
                </span>
                <span className="text-white/70 text-sm leading-snug">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ lang }: SectionProps) {
  const tContact = TRANSLATIONS[lang].contact;

  return (
    <section id="contato" className="py-24 px-6 lg:px-16 bg-[#f6f7fb]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest text-[#5b68f5] uppercase mb-4">
          {tContact.badge}
        </p>
        <h2 className="font-['IBM_Plex_Mono',monospace] font-bold text-4xl lg:text-5xl tracking-[0.02em] text-[#1c1b1b] mb-6 leading-tight">
          {tContact.titleLine1}<br />
          <span className="text-[#6822c9]">{tContact.titleHighlight}</span>
        </h2>
        <p className="text-[#494a4c] text-lg mb-10 leading-relaxed">
          {tContact.subtitleLine1}<br />
          {tContact.subtitleLine2}
        </p>
        <div className="flex justify-center">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-gradient inline-flex items-center justify-center gap-3 text-white font-bold px-10 py-4 rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-[#5b68f5]/30 text-base"
          >
            <LinkedInIcon className="w-5 h-5 text-white" />
            {tContact.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer({ lang }: SectionProps) {
  const tFooter = TRANSLATIONS[lang].footer;

  return (
    <footer className="border-t border-[#e2e4f0] py-8 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        {/* Left: Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            title={lang === "pt" ? "Voltar ao início do site" : "Back to top"}
            className="text-[#1c1b1b] font-black text-xl tracking-[-0.04em] font-['Inter',sans-serif] hover:opacity-80 transition-opacity cursor-pointer text-left"
          >
            PEDRO <em className="not-italic italic">ARMADA</em>
          </button>
        </div>

        {/* Center: Copyright */}
        <div className="text-center">
          <p className="text-[#909797] text-sm">{tFooter.copyright}</p>
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
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem("portfolio_lang") as Language) || "pt";
  });

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("portfolio_lang", newLang);
  };

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
      <Header lang={lang} onLanguageChange={handleLanguageChange} onReplayIntro={handleReplayIntro} />
      <main>
        <HeroSection lang={lang} />
        <ProjectsSection lang={lang} />
        <Timeline lang={lang} />
        <AboutSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />

      {/* Floating Back to Top Button */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 bg-[#151e87]/90 hover:bg-[#151e87] text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-xl backdrop-blur-md border border-white/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title={TRANSLATIONS[lang].scrollTop}
          aria-label={TRANSLATIONS[lang].scrollTop}
        >
          <ArrowUp size={15} />
          <span>{TRANSLATIONS[lang].scrollTop}</span>
        </button>
      </div>
    </div>
  );
}
