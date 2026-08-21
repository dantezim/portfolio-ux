import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  // Stages: 'enter' -> 'visible' -> 'exit' -> 'hidden'
  const [animationStage, setAnimationStage] = useState<"enter" | "visible" | "exit" | "hidden">("enter");

  useEffect(() => {
    // Lock body scrolling during splash screen
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 1. Text reveals smoothly
    const enterTimer = setTimeout(() => {
      setAnimationStage("visible");
    }, 60);

    // 2. Start curtain lifting up (slide up out of view from bottom to top)
    const exitTimer = setTimeout(() => {
      setAnimationStage("exit");
    }, 1500);

    // 3. Mark as hidden and re-enable body scroll
    const completeTimer = setTimeout(() => {
      setAnimationStage("hidden");
      document.body.style.overflow = originalOverflow;
      if (onComplete) onComplete();
    }, 2450);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, [onComplete]);

  if (animationStage === "hidden") {
    return null;
  }

  const isExiting = animationStage === "exit";
  const isVisible = animationStage === "visible" || animationStage === "exit";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden will-change-transform select-none"
      style={{
        // Deep royal blue gradient matching the reference image exactly
        background: "radial-gradient(circle at 32% 38%, #3957eb 0%, #2944c2 35%, #182a84 70%, #0d1650 100%)",
        transform: isExiting ? "translate3d(0, -100%, 0)" : "translate3d(0, 0, 0)",
        transition: "transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)",
      }}
      aria-hidden="true"
    >
      {/* Film grain / noise texture overlay matching the reference image */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.45'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle radial ambient light glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 45% 48%, rgba(255,255,255,0.08) 0%, transparent 55%)",
        }}
      />

      {/* Center "PA." Logo */}
      <div
        className="relative z-10 flex items-baseline justify-center will-change-transform"
        style={{
          opacity: isVisible && !isExiting ? 1 : isExiting ? 0.25 : 0,
          transform: isVisible && !isExiting ? "scale(1) translateY(0)" : isExiting ? "scale(0.96) translateY(-40px)" : "scale(0.92) translateY(12px)",
          transition: isExiting
            ? "transform 0.75s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.5s ease-out"
            : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out",
        }}
      >
        <span className="font-['Inter',sans-serif] font-black text-6xl sm:text-7xl md:text-8xl text-white tracking-[-0.04em]">
          PA
        </span>
        {/* Dark navy/slate dot as in the reference image */}
        <span className="font-['Inter',sans-serif] font-black text-6xl sm:text-7xl md:text-8xl text-[#0e163d] tracking-[-0.04em] ml-0.5">
          .
        </span>
      </div>

      {/* Subtle bottom shadow edge for physical depth when lifting up */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
    </div>
  );
}

