import type { Language } from "./i18n/translations";

export function GlassFilter() {
  return (
    <svg className="hidden" aria-hidden="true">
      <defs>
        <filter
          id="radio-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="30"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="2" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

interface LanguageSwitcherProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  className?: string;
}

export default function LanguageSwitcher({
  currentLang,
  onLanguageChange,
  className = "",
}: LanguageSwitcherProps) {
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      {/* Glass Filter definition */}
      <GlassFilter />

      {/* Container */}
      <div className="relative flex items-center p-1 rounded-full bg-white/10 border border-white/20 shadow-inner backdrop-blur-md select-none overflow-hidden">
        {/* Animated Solid White Active Pill */}
        <div
          className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-white shadow-md transition-all duration-300 ease-out"
          style={{
            left: currentLang === "pt" ? "4px" : "calc(50%)",
          }}
        />

        {/* PT Option */}
        <button
          type="button"
          onClick={() => onLanguageChange("pt")}
          className={`relative z-10 flex items-center gap-1.5 px-3 py-1 text-xs font-extrabold transition-colors duration-200 cursor-pointer ${
            currentLang === "pt" ? "text-[#151e87]" : "text-white/70 hover:text-white"
          }`}
          aria-label="Alternar para Português"
        >
          <span>PT</span>
        </button>

        {/* EN Option */}
        <button
          type="button"
          onClick={() => onLanguageChange("en")}
          className={`relative z-10 flex items-center gap-1.5 px-3 py-1 text-xs font-extrabold transition-colors duration-200 cursor-pointer ${
            currentLang === "en" ? "text-[#151e87]" : "text-white/70 hover:text-white"
          }`}
          aria-label="Switch to English"
        >
          <span>EN</span>
        </button>
      </div>
    </div>
  );
}
