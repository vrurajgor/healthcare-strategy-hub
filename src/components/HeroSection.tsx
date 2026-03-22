import { Linkedin, Mail, ArrowRight, ChevronDown } from "lucide-react";
import profileImage from "@/assets/vrunda-profile.jpg";

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'hsl(20, 10%, 12%)' }}
    >
      {/* Warm grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.5\'/%3E%3C/svg%3E")' }}
      />

      {/* Warm gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, hsl(15, 55%, 42%), transparent 70%)' }}
      />

      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* Left: Text */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            {/* Greeting */}
            <p className="text-sm tracking-[0.25em] uppercase" style={{ color: 'hsl(36, 60%, 60%)' }}>
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-normal leading-[1.08] tracking-tight"
              style={{ color: 'hsl(36, 30%, 92%)' }}
            >
              Vrunda<br />Rajgor
            </h1>

            {/* Warm accent line */}
            <div className="w-16 h-[2px] rounded-full mx-auto md:mx-0"
              style={{ background: 'linear-gradient(90deg, hsl(15, 55%, 42%), hsl(36, 60%, 60%))' }}
            />

            {/* Subtitle */}
            <p className="text-base sm:text-lg leading-relaxed max-w-lg" style={{ color: 'hsl(36, 15%, 55%)' }}>
              Healthcare &amp; MedTech Strategy · Project Management ·
              Market Intelligence · Business Analytics
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 justify-center md:justify-start">
              <button
                onClick={() => scrollTo("#portfolio")}
                className="px-7 py-3.5 font-semibold rounded-full
                  transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5
                  active:translate-y-0 active:scale-[0.98] inline-flex items-center gap-2"
                style={{
                  background: 'hsl(15, 55%, 42%)',
                  color: 'hsl(36, 30%, 96%)',
                  boxShadow: '0 4px 20px -4px hsl(15 55% 42% / 0.4)'
                }}
              >
                View Work <ArrowRight size={16} />
              </button>

              <a
                href="mailto:rajgor.v@northeastern.edu"
                className="px-7 py-3.5 font-semibold rounded-full
                  transition-all duration-300 hover:-translate-y-0.5
                  active:translate-y-0 active:scale-[0.98]"
                style={{
                  border: '1.5px solid hsl(36, 15%, 30%)',
                  color: 'hsl(36, 15%, 70%)',
                }}
              >
                Get in Touch
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-5 pt-2 justify-center md:justify-start text-sm"
              style={{ color: 'hsl(36, 10%, 40%)' }}
            >
              <a
                href="https://www.linkedin.com/in/vrundarajgor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors"
                style={{ color: 'hsl(36, 10%, 40%)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'hsl(36, 15%, 65%)'}
                onMouseLeave={e => e.currentTarget.style.color = 'hsl(36, 10%, 40%)'}
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <span style={{ color: 'hsl(36, 10%, 25%)' }}>|</span>
              <a
                href="mailto:rajgor.v@northeastern.edu"
                className="inline-flex items-center gap-2 transition-colors"
                style={{ color: 'hsl(36, 10%, 40%)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'hsl(36, 15%, 65%)'}
                onMouseLeave={e => e.currentTarget.style.color = 'hsl(36, 10%, 40%)'}
              >
                <Mail size={16} /> Email
              </a>
            </div>
          </div>

          {/* Right: Profile image */}
          <div className="flex-shrink-0 relative group">
            {/* Decorative ring */}
            <div className="absolute -inset-5 rounded-full transition-all duration-700"
              style={{ border: '1px solid hsl(36, 15%, 25%)', opacity: 0.5 }}
            />
            <div className="absolute -inset-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ boxShadow: '0 0 50px 10px hsl(15 55% 42% / 0.12)' }}
            />
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden
              shadow-2xl relative z-10"
              style={{ border: '3px solid hsl(36, 15%, 22%)' }}
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.2em] flex flex-col items-center gap-2 cursor-pointer transition-colors"
        style={{ color: 'hsl(36, 10%, 35%)' }}
        onClick={() => scrollTo("#about")}
      >
        Explore
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
