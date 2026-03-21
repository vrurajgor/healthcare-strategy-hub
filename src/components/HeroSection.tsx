import { ArrowDown, Sparkles } from "lucide-react";
import profileImage from "@/assets/vrunda-profile.jpg";

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="hero-gradient relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated dot pattern */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative floating elements */}
      <div className="absolute top-1/4 right-[15%] w-72 h-72 rounded-full float-slow opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, hsl(33, 90%, 55%), transparent 70%)' }}
      />
      <div className="absolute bottom-1/3 right-[30%] w-48 h-48 rounded-full float-medium opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, hsl(210, 55%, 50%), transparent 70%)', animationDelay: '2s' }}
      />
      <div className="absolute top-[60%] left-[10%] w-32 h-32 rounded-full float-slow opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, hsl(33, 90%, 60%), transparent 70%)', animationDelay: '3s' }}
      />

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/20 to-transparent" />

      <div className="section-container relative z-10 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur-sm mb-8">
              <Sparkles size={14} className="text-primary-foreground/60" />
              <p className="text-primary-foreground/70 text-xs font-medium tracking-widest uppercase">
                Project Management & Life Sciences
              </p>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.05] mb-6 whitespace-nowrap">
              Vrunda Rajgor
              <span className="block w-24 h-1 rounded-full bg-secondary/60 mt-2" />
            </h1>

            <p className="text-lg sm:text-xl text-primary-foreground/80 font-medium mb-5 max-w-2xl leading-relaxed">
              Healthcare &amp; MedTech Strategy · Project Management · Market Intelligence · Business Analytics
            </p>

            <p className="text-base text-primary-foreground/60 max-w-xl mb-5 leading-relaxed italic font-display">
              "Driving data-driven innovation across Biopharma, MedTech, and Digital Health"
            </p>

            <p className="text-sm text-primary-foreground/45 max-w-lg mb-12 leading-relaxed">
              Integrating project management expertise with life sciences knowledge
              to enable strategic decision-making, cross-functional execution, and
              innovation in regulated healthcare environments.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#portfolio")}
                className="group px-7 py-3.5 bg-primary-foreground text-primary font-semibold rounded-lg
                  transition-all duration-300 hover:shadow-xl hover:shadow-white/15
                  hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                View Work
                <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="px-7 py-3.5 border border-primary-foreground/25 text-primary-foreground
                  font-semibold rounded-lg transition-all duration-300
                  hover:bg-primary-foreground/10 hover:border-primary-foreground/40
                  hover:-translate-y-0.5 active:translate-y-0"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Profile image */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-primary-foreground/15 shadow-2xl shadow-black/20">
              <img
                src={profileImage}
                alt="Vrunda Rajgor"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/30
          hover:text-primary-foreground/50 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
