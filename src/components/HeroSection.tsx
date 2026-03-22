import { Linkedin, Mail, ArrowRight, ChevronDown } from "lucide-react";
import profileImage from "@/assets/vrunda-profile.jpg";

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'hsl(233, 55%, 12%)' }}
    >
      {/* Decorative dot */}
      <div className="absolute bottom-[30%] right-[8%] w-3 h-3 rounded-full bg-secondary float-slow" />

      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* Left: Text */}
          <div className="flex-1 space-y-5 text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm tracking-[0.15em] uppercase text-white/70">
              <span className="text-secondary">✦</span>
              Project Management · Life Sciences
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight whitespace-nowrap">
              Vrunda Rajgor
            </h1>

            {/* Orange underline accent */}
            <div className="w-12 h-1 bg-secondary rounded-full mx-auto md:mx-0" />

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/60 font-medium leading-relaxed">
              Healthcare &amp; MedTech Strategy · Project Management ·<br className="hidden sm:block" />
              Market Intelligence · Business Analytics
            </p>


            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 justify-center md:justify-start">
              <button
                onClick={() => scrollTo("#projects")}
                className="px-7 py-3 bg-secondary text-secondary-foreground font-semibold rounded-full
                  transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-0.5
                  active:translate-y-0 active:scale-[0.98] inline-flex items-center gap-2"
              >
                View Work <ArrowRight size={16} />
              </button>

              <a
                href="mailto:rajgor.v@northeastern.edu"
                className="px-7 py-3 border border-white/20 text-white font-semibold rounded-full
                  transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5
                  active:translate-y-0 active:scale-[0.98]"
              >
                Get in Touch
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-2 justify-center md:justify-start text-white/40 text-sm">
              <a
                href="https://www.linkedin.com/in/vrundarajgor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white/70 transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <span className="text-white/15">|</span>
              <a
                href="mailto:rajgor.v@northeastern.edu"
                className="inline-flex items-center gap-2 hover:text-white/70 transition-colors"
              >
                <Mail size={16} /> Email
              </a>
            </div>
          </div>

          {/* Right: Profile image */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-white/10 group-hover:border-white/20 transition-colors duration-500" />
            <div className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ boxShadow: '0 0 40px 8px hsl(var(--secondary) / 0.15)' }}
            />
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden
              border-4 border-white/10 shadow-2xl shadow-black/30 relative z-10"
            >
              <img
                src={profileImage}
                alt="Vrunda Rajgor"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Explore indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs uppercase tracking-[0.2em] flex flex-col items-center gap-2 cursor-pointer hover:text-white/60 transition-colors"
        onClick={() => scrollTo("#about")}
      >
        Explore
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
