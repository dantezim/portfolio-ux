import { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Sparkles, Search, Lightbulb, Target } from "lucide-react";
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

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isPt = lang === "pt";

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Modal Dialog Box - Clean White Theme */}
      <div
        className="bg-white border border-[#e2e4f0] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-left relative flex flex-col my-auto text-[#1c1b1b]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Cover Banner */}
        <div className="relative h-56 md:h-72 w-full overflow-hidden shrink-0 bg-gray-100">
          {image ? (
            <img
              src={image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${gradientColor} flex items-center justify-center`}>
              <Sparkles className="w-16 h-16 text-white/40" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 bg-white/90 hover:bg-white text-[#1c1b1b] rounded-full transition-all shadow-md border border-gray-200 cursor-pointer"
            aria-label={isPt ? "Fechar modal" : "Close modal"}
          >
            <X size={20} />
          </button>

          {/* Banner Title & Tags */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20"
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

        {/* Content Body - White Background */}
        <div className="p-6 md:p-10 space-y-8 bg-white">
          {/* Subtitle */}
          {project.subtitle && (
            <p className="text-xl text-[#5b68f5] font-semibold leading-snug">
              {project.subtitle}
            </p>
          )}

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-3 gap-6 bg-[#f8f9fc] border border-[#e2e4f0] rounded-2xl p-5 text-sm">
            {project.role && (
              <div>
                <p className="text-[#6c727f] uppercase text-xs font-bold tracking-wider mb-1">
                  {isPt ? "Papel" : "Role"}
                </p>
                <p className="text-[#1c1b1b] font-semibold">{project.role}</p>
              </div>
            )}
            {project.period && (
              <div>
                <p className="text-[#6c727f] uppercase text-xs font-bold tracking-wider mb-1">
                  {isPt ? "Período" : "Period"}
                </p>
                <p className="text-[#1c1b1b] font-semibold">{project.period}</p>
              </div>
            )}
            <div>
              <p className="text-[#6c727f] uppercase text-xs font-bold tracking-wider mb-1">
                {isPt ? "Área" : "Category"}
              </p>
              <p className="text-[#1c1b1b] font-semibold">{project.tags.join(" • ")}</p>
            </div>
          </div>

          {/* Visão Geral (Overview) */}
          {project.overview && (
            <div>
              <h3 className="text-lg font-bold text-[#1c1b1b] mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5b68f5]" />
                {isPt ? "Visão Geral" : "Overview"}
              </h3>
              <p className="text-[#494a4c] text-base leading-relaxed">
                {project.overview}
              </p>
            </div>
          )}

          {/* Desafio e Solução */}
          <div className="grid md:grid-cols-2 gap-6">
            {project.challenge && (
              <div className="bg-[#fff5f5] border border-[#fecaca] rounded-2xl p-6">
                <h3 className="text-base font-bold text-[#b91c1c] mb-2 flex items-center gap-2">
                  <Target size={18} className="text-[#dc2626]" />
                  {isPt ? "O Desafio" : "The Challenge"}
                </h3>
                <p className="text-[#450a0a] text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl p-6">
                <h3 className="text-base font-bold text-[#15803d] mb-2 flex items-center gap-2">
                  <Sparkles size={18} className="text-[#16a34a]" />
                  {isPt ? "A Solução" : "The Solution"}
                </h3>
                <p className="text-[#14532d] text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>

          {/* Metodologia de Pesquisa (se presente) */}
          {project.methodology && project.methodology.length > 0 && (
            <div className="bg-[#f8f9fc] border border-[#e2e4f0] rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#1c1b1b] mb-4 flex items-center gap-2">
                <Search size={20} className="text-[#5b68f5]" />
                {isPt ? "Metodologia de Pesquisa" : "Research Methodology"}
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {project.methodology.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#334155]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5b68f5] mt-2 shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Insights Chave de Usuários (se presente) */}
          {project.insights && project.insights.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-[#1c1b1b] mb-4 flex items-center gap-2">
                <Lightbulb size={20} className="text-[#6822c9]" />
                {isPt ? "Principais Descobertas com Usuários" : "Key User Insights"}
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {project.insights.map((ins, idx) => (
                  <div
                    key={idx}
                    className="bg-[#faf5ff] border border-[#e9d5ff] rounded-2xl p-5 text-sm text-[#581c87] font-medium leading-relaxed"
                  >
                    "{ins}"
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resultados & Impacto */}
          {project.results && project.results.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-[#1c1b1b] mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6822c9]" />
                {isPt ? "Resultados & Entregáveis" : "Results & Deliverables"}
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {project.results.map((res, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 bg-[#f8f9fc] border border-[#e2e4f0] rounded-xl p-4 text-sm text-[#334155]"
                  >
                    <CheckCircle2 size={18} className="text-[#5b68f5] shrink-0 mt-0.5" />
                    <span className="font-medium">{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Links Footer */}
          {(project.behanceUrl || project.externalUrl) && (
            <div className="pt-6 border-t border-[#e2e4f0] flex items-center justify-between gap-4 flex-wrap">
              <p className="text-[#6c727f] text-sm font-medium">
                {isPt ? "Quer explorar a apresentação completa?" : "Want to view the complete presentation?"}
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                {project.externalUrl && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand-gradient inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-all shadow-md shadow-[#5b68f5]/20 text-sm cursor-pointer"
                  >
                    <ExternalLink size={16} />
                    {project.externalUrlLabel || (isPt ? "Acessar Case Interativo" : "Access Interactive Case")}
                  </a>
                )}
                {project.behanceUrl && (
                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      project.externalUrl
                        ? "bg-[#f8f9fc] hover:bg-[#eef2ff] border border-[#e2e4f0] text-[#1c1b1b] font-bold px-6 py-3 rounded-xl transition-all text-sm flex items-center gap-2 cursor-pointer"
                        : "brand-gradient inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-all shadow-md shadow-[#5b68f5]/20 text-sm cursor-pointer"
                    }
                  >
                    <ExternalLink size={16} />
                    {isPt ? "Ver no Behance" : "View on Behance"}
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
