import { Linkedin, Mail, ArrowRight, ChevronDown } from "lucide-react";
import profileImage from "@/assets/vrunda-profile.jpg";

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'hsl(var(--hero-bg))' }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 opacity-30"
        style={{ background: 'linear-gradient(135deg, hsl(222 47% 11%), hsl(222 47% 15%), hsl(222 47% 11%))' }}
      />

      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Left: Text */}
          <div className="flex-1 space-y-5 text-center md:text-left">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.12em] uppercase border border-border bg-muted/50 text-muted-foreground">
              🚀 Project Management · Life Sciences
            </span>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-normal leading-[1.08] tracking-tight text-foreground">
              Vrunda Rajgor
            </h1>

            {/* Orange underline */}
            <div className="w-16 h-1 rounded-full bg-primary mx-auto md:mx-0" />

            {/* Subtitle */}
            <p className="text-base sm:text-lg leading-relaxed max-w-lg text-muted-foreground">
              Healthcare &amp; MedTech Strategy · Project Management ·
              Market Intelligence · Business Analytics
            </p>

            {/* Quote */}
            <p className="text-sm sm:text-base italic text-muted-foreground/70 font-display max-w-md">
              "Driving data-driven innovation across Biopharma, MedTech, and Digital Health"
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 justify-center md:justify-start">
              <button
                onClick={() => scrollTo("#portfolio")}
                className="px-7 py-3.5 font-semibold rounded-full
                  transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5
                  active:translate-y-0 active:scale-[0.98] inline-flex items-center gap-2
                  bg-primary text-primary-foreground"
                style={{
                  boxShadow: '0 4px 20px -4px hsl(var(--primary) / 0.35)'
                }}
              >
                View Work <ArrowRight size={16} />
              </button>

              <a
                href="mailto:rajgor.v@northeastern.edu"
                className="px-7 py-3.5 font-semibold rounded-full
                  transition-all duration-300 hover:-translate-y-0.5
                  active:translate-y-0 active:scale-[0.98] border border-border
                  text-foreground hover:bg-muted"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-3 justify-center md:justify-start text-sm text-muted-foreground">
              <a
                href="https://www.linkedin.com/in/vrundarajgor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <span className="text-border">|</span>
              <a
                href="mailto:rajgor.v@northeastern.edu"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail size={15} /> Email
              </a>
            </div>
          </div>

          {/* Right: Profile image */}
          <div className="flex-shrink-0 relative group">
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden
              shadow-2xl relative z-10 border-4 border-white/20"
            >
              <img
                src={profileImage}
                alt="Vrunda Rajgor"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Orange accent dot */}
            <div className="absolute bottom-4 -right-2 w-4 h-4 rounded-full bg-primary z-20" />
          </div>
        </div>
      </div>

      {/* Explore indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.2em] flex flex-col items-center gap-2 cursor-pointer transition-colors text-muted-foreground hover:text-foreground"
        onClick={() => scrollTo("#about")}
      >
        Explore
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
