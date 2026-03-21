import { Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/vrunda-profile.jpg";

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="hero-gradient relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* Left: Text */}
          <div className="flex-1 space-y-5 text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.05] tracking-tight">
              Vrunda Rajgor
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground font-medium">
              Project Management Professional
            </p>

            {/* CTA + Social */}
            <div className="flex flex-wrap items-center gap-4 pt-4 justify-center md:justify-start">
              <button
                onClick={() => scrollTo("#contact")}
                className="px-7 py-3 bg-foreground text-background font-semibold rounded-full
                  transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5
                  active:translate-y-0 active:scale-[0.98]"
              >
                Let's Connect
              </button>

              <a
                href="https://www.linkedin.com/in/vrundarajgor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center
                  text-foreground hover:bg-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:rajgor.v@northeastern.edu"
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center
                  text-foreground hover:bg-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right: Profile image */}
          <div className="flex-shrink-0 relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden
              shadow-2xl shadow-black/10"
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
    </section>
  );
}
