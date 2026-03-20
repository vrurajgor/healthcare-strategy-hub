import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="hero-gradient relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="section-container relative z-10 py-32">
        <div className="max-w-3xl">
          <p className="text-primary-foreground/60 text-sm font-medium tracking-widest uppercase mb-6">
            Project Management & Life Sciences
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.08] mb-6">
            Vrunda Rajgor
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/80 font-medium mb-4 max-w-2xl leading-relaxed">
            Healthcare &amp; MedTech Strategy · Project Management · Market Intelligence · Business Analytics
          </p>

          <p className="text-base text-primary-foreground/65 max-w-xl mb-10 leading-relaxed italic">
            "Driving data-driven innovation across Biopharma, MedTech, and Digital Health"
          </p>

          <p className="text-sm text-primary-foreground/55 max-w-lg mb-10 leading-relaxed">
            Integrating project management expertise with life sciences knowledge
            to enable strategic decision-making, cross-functional execution, and
            innovation in regulated healthcare environments.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("#portfolio")}
              className="px-6 py-3 bg-primary-foreground text-primary font-medium rounded-md
                transition-all duration-200 hover:shadow-lg hover:shadow-white/10
                active:scale-[0.97]"
            >
              View Work
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-6 py-3 border border-primary-foreground/30 text-primary-foreground
                font-medium rounded-md transition-all duration-200
                hover:bg-primary-foreground/10 active:scale-[0.97]"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/40
          animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
