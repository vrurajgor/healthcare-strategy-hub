import { Linkedin, Mail, ArrowRight, ChevronDown, Users, Briefcase, Heart, Clock } from "lucide-react";
import profileImage from "@/assets/vrunda-profile.jpg";

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  const stats = [
    { icon: Users, value: "30+", label: "Projects Delivered" },
    { icon: Briefcase, value: "3+", label: "Years Experience" },
    { icon: Heart, value: "5+", label: "Clients Served" },
    
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'hsl(var(--hero-bg))' }}
    >
      {/* Subtle decorative elements */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, hsl(var(--secondary)), transparent 70%)' }}
      />

      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Left: Text */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            {/* Badge */}
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase border"
              style={{
                color: 'hsl(var(--primary))',
                borderColor: 'hsl(var(--primary) / 0.2)',
                background: 'hsl(var(--primary) / 0.06)',
              }}
            >
              Healthcare & MedTech Professional
            </span>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-normal leading-[1.08] tracking-tight text-foreground">
              Vrunda Rajgor
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg leading-relaxed max-w-lg text-muted-foreground">
              Healthcare &amp; MedTech Strategy · Project Management ·
              Market Intelligence · Business Analytics
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

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-6 pt-6 justify-center md:justify-start">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <stat.icon size={20} className="text-secondary mb-1" />
                  <span className="text-xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Profile image */}
          <div className="flex-shrink-0 relative group">
            {/* Rounded rect frame with shadow */}
            <div className="w-72 h-80 sm:w-80 sm:h-[380px] lg:w-[380px] lg:h-[440px] rounded-3xl overflow-hidden
              shadow-xl relative z-10 border-4 border-white"
            >
              <img
                src={profileImage}
                alt="Vrunda Rajgor"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 sm:-left-8 bg-card rounded-2xl shadow-lg px-5 py-3 z-20
              border border-border flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
                <Heart size={18} className="text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Data-Driven Strategy</p>
                <p className="text-xs text-muted-foreground">Biopharma & MedTech focus</p>
              </div>
            </div>
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