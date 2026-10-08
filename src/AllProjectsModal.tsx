import { useEffect } from "react";
import { X, Sparkles, FolderKanban } from "lucide-react";
import type { ProjectTranslation, Language } from "./i18n/translations";

interface AllProjectsModalProps {
  isOpen: boolean;
  projects: ProjectTranslation[];
  projectImages: (string | undefined)[];
  projectColors: string[];
  lang: Language;
  onClose: () => void;
  onSelectProject: (p: ProjectTranslation, image?: string, color?: string) => void;
}

export default function AllProjectsModal({
  isOpen,
  projects,
  projectImages,
  projectColors,
  lang,
  onClose,
  onSelectProject,
}: AllProjectsModalProps) {
  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isPt = lang === "pt";

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="all-projects-title"
    >
      {/* Modal Dialog Box - Frame 5 style */}
      <div
        className="bg-white border border-[#e2e4f0] rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-left relative flex flex-col my-auto text-[#1c1b1b]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-[#e2e4f0] flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#5b68f5]/10 border border-[#5b68f5]/20 flex items-center justify-center text-[#5b68f5]">
              <FolderKanban size={20} />
            </div>
            <div>
              <h2
                id="all-projects-title"
                className="font-['IBM_Plex_Mono',monospace] font-bold text-2xl md:text-3xl text-[#1c1b1b] tracking-tight uppercase"
              >
                {isPt ? "Todos os Projetos" : "All Projects"}
              </h2>
              <p className="text-sm text-[#6c727f]">
                {isPt
                  ? "Explore a lista completa de cases e iniciativas de design"
                  : "Explore the full collection of design cases and projects"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#1c1b1b] rounded-full transition-all border border-gray-200 cursor-pointer"
            aria-label={isPt ? "Fechar modal" : "Close modal"}
          >
            <X size={20} />
          </button>
        </div>

        {/* Body Grid of Projects */}
        <div className="p-6 md:p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#f8f9fc]">
          {projects.map((p, idx) => {
            const image = projectImages[idx];
            const color = projectColors[idx % projectColors.length];
            const canOpenModal = p.hasModal !== false;

            return (
              <article
                key={p.id || p.title}
                onClick={() => {
                  if (canOpenModal) {
                    onSelectProject(p, image, color);
                  }
                }}
                className={`group bg-white rounded-2xl border border-[#e2e4f0] overflow-hidden transition-all duration-300 flex flex-col ${
                  canOpenModal
                    ? "hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                    : "opacity-90"
                }`}
              >
                {/* Cover Header */}
                <div className="block relative h-44 overflow-hidden bg-gray-100">
                  {image ? (
                    <img
                      src={image}
                      alt={p.title}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        canOpenModal ? "group-hover:scale-105" : ""
                      }`}
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${color} flex items-center justify-center`}>
                      <Sparkles className="w-10 h-10 text-white/30" />
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 z-10">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-0.5 rounded-full border border-white/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className={`font-bold text-[#1c1b1b] text-base mb-2 leading-snug ${
                        canOpenModal ? "group-hover:text-[#5b68f5] transition-colors" : ""
                      }`}
                    >
                      {p.title}
                    </h3>
                    <p className="text-[#494a4c] text-xs leading-relaxed mb-4 line-clamp-3">
                      {p.description}
                    </p>
                  </div>

                  {canOpenModal ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(p, image, color);
                      }}
                      className="inline-flex items-center gap-1.5 text-[#2b49aa] font-semibold text-xs hover:gap-2.5 transition-all mt-auto self-start cursor-pointer"
                    >
                      {isPt ? "Ver case study →" : "View case study →"}
                    </button>
                  ) : (
                    <span className="inline-block text-xs font-semibold text-[#94a3b8] bg-[#f1f5f9] px-2.5 py-1 rounded-md mt-auto self-start">
                      {isPt ? "Em breve 🚧" : "Coming soon 🚧"}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
