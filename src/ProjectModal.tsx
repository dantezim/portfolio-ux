import { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Sparkles } from "lucide-react";
import type { ProjectTranslation, Language } from "./i18n/translations";

interface ProjectModalProps {
  project: ProjectTranslation | null;
  image?: string;
  gradientColor?: string;
  lang: Language;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  image,
  gradientColor = "from-[#5b68f5] to-[#2b49aa]",
  lang,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isPt = lang === "pt";

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Modal Dialog Box */}
      <div
        className="bg-[#181b20] border border-white/15 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-left relative flex flex-col my-auto text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Cover Banner */}
        <div className="relative h-56 md:h-72 w-full overflow-hidden shrink-0 bg-gray-800">
          {image ? (
            <img
              src={image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${gradientColor} flex items-center justify-center`}>
              <Sparkles className="w-16 h-16 text-white/30" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181b20] via-black/20 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 hover:bg-black/90 backdrop-blur-md text-white rounded-full transition-all border border-white/20 cursor-pointer"
            aria-label={isPt ? "Fechar modal" : "Close modal"}
          >
            <X size={20} />
          </button>

          {/* Banner Title & Tags */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2
                id="modal-project-title"
                className="font-['IBM_Plex_Mono',monospace] font-bold text-2xl md:text-4xl text-white tracking-tight leading-tight"
              >
                {project.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-10 space-y-8">
          {/* Subtitle */}
          {project.subtitle && (
            <p className="text-xl text-[#a4b1ff] font-semibold leading-snug">
              {project.subtitle}
            </p>
          )}

          <div className="grid md:grid-cols-3 gap-6 bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-sm">
            {project.role && (
              <div>
                <p className="text-white/50 uppercase text-xs font-semibold tracking-wider mb-1">
                  {isPt ? "Papel" : "Role"}
                </p>
                <p className="text-white font-medium">{project.role}</p>
              </div>
            )}
            {project.period && (
              <div>
                <p className="text-white/50 uppercase text-xs font-semibold tracking-wider mb-1">
                  {isPt ? "Período" : "Period"}
                </p>
                <p className="text-white font-medium">{project.period}</p>
              </div>
            )}
            <div>
              <p className="text-white/50 uppercase text-xs font-semibold tracking-wider mb-1">
                {isPt ? "Área" : "Category"}
              </p>
              <p className="text-white font-medium">{project.tags.join(" • ")}</p>
            </div>
          </div>

          {/* Overview */}
          {project.overview && (
            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#5b68f5]" />
                {isPt ? "Visão Geral" : "Overview"}
              </h3>
              <p className="text-[#ccd4d4] text-base leading-relaxed">
                {project.overview}
              </p>
            </div>
          )}

          {/* Challenge & Solution Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {project.challenge && (
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                <h3 className="text-base font-bold text-[#f87171] mb-2">
                  {isPt ? "O Desafio" : "The Challenge"}
                </h3>
                <p className="text-[#a4adae] text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                <h3 className="text-base font-bold text-[#6fe399] mb-2">
                  {isPt ? "A Solução" : "The Solution"}
                </h3>
                <p className="text-[#a4adae] text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>

          {/* Key Deliverables & Results */}
          {project.results && project.results.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6822c9]" />
                {isPt ? "Resultados & Impacto" : "Results & Impact"}
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {project.results.map((res, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 bg-white/[0.03] border border-white/10 rounded-xl p-4 text-sm text-[#d0d7de]"
                  >
                    <CheckCircle2 size={18} className="text-[#5b68f5] shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Behance Link Option */}
          {project.behanceUrl && (
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-white/60 text-sm">
                {isPt ? "Quer ver a documentação visual completa?" : "Want to view the full visual presentation?"}
              </p>
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-5 py-2.5 rounded-xl transition-all text-sm"
              >
                <ExternalLink size={16} />
                {isPt ? "Ver no Behance" : "View on Behance"}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
