import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, Building2, Sparkles, CheckCircle2 } from "lucide-react";
import { TRANSLATIONS, type Language } from "./i18n/translations";

interface TimelineProps {
  lang: Language;
}

export default function Timeline({ lang }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineHeightPercent, setLineHeightPercent] = useState(0);

  const t = TRANSLATIONS[lang].timeline;

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
            {t.badge}
          </div>
          <h2 className="font-['IBM_Plex_Mono',monospace] font-bold text-4xl lg:text-5xl xl:text-6xl tracking-[0.02em] text-white mb-6 leading-tight">
            {t.titlePrefix}<span className="text-[#6822c9]">{t.titleHighlight}</span>
          </h2>
          <p className="text-[#a4adae] text-lg leading-relaxed">
            {t.subtitle}
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
            {t.experiences.map((exp) => (
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
                            {lang === "pt" ? "Atual" : "Current"}
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
