import { ArrowDown, Sparkles, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/vrunda-profile.jpg";

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="hero-gradient relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, hsl(33, 90%, 55%), transparent 60%)' }}
      />
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, hsl(210, 60%, 50%), transparent 60%)' }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background/30 to-transparent" />

      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Left: Text */}
          <div className="flex-1 space-y-6">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-md">
              <Sparkles size={12} className="text-secondary" />
              <span className="text-primary-foreground/60 text-[11px] font-semibold tracking-[0.15em] uppercase">
                Project Management · Life Sciences
              </span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1] tracking-tight">
                Vrunda Rajgor
              </h1>
              <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-secondary to-secondary/30" />
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-primary-foreground/70 font-medium leading-relaxed max-w-lg">
              Healthcare &amp; MedTech Strategy · Project Management · Market Intelligence · Business Analytics
            </p>

            {/* Tagline */}
            <p className="text-sm sm:text-base text-primary-foreground/50 italic font-display max-w-md leading-relaxed">
              "Driving data-driven innovation across Biopharma, MedTech, and Digital Health"
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={() => scrollTo("#portfolio")}
                className="group relative px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg
                  overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-secondary/25
                  hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Work
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="px-6 py-3 border border-primary-foreground/20 text-primary-foreground
                  font-semibold rounded-lg transition-all duration-300
                  hover:bg-primary-foreground/10 hover:border-primary-foreground/35
                  hover:-translate-y-0.5 active:translate-y-0"
              >
                Get in Touch
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/vrundarajgor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors text-xs font-medium"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
              <span className="w-px h-3 bg-primary-foreground/15" />
              <a
                href="mailto:rajgor.v@northeastern.edu"
                className="flex items-center gap-2 text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors text-xs font-medium"
              >
                <Mail size={14} />
                Email
              </a>
            </div>
          </div>

          {/* Right: Profile image */}
          <div className="flex-shrink-0 relative group">
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-full bg-secondary/20 blur-3xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Outer decorative ring */}
            <div className="absolute -inset-4 rounded-full border border-dashed border-primary-foreground/10" />

            {/* Image container */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden
              border-[3px] border-primary-foreground/15 shadow-2xl shadow-black/25
              transition-transform duration-500 group-hover:scale-[1.02]"
            >
              <img
                src={profileImage}
                alt="Vrunda Rajgor"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Small accent dot */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-secondary border-2 border-primary shadow-lg" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/25
          hover:text-primary-foreground/50 transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Explore</span>
        <ArrowDown size={14} className="animate-bounce" />
      </button>
    </section>
  );
}
