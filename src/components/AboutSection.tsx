import { useReveal } from "@/hooks/useReveal";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const ref = useReveal();

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, hsl(33, 90%, 55%), transparent 70%)' }}
      />

      <div className="section-container">
        <div className="reveal">
          <p className="section-label">About</p>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left: Text */}
          <div className="flex-1 space-y-10">
            <div className="reveal stagger-1">
              <p className="text-muted-foreground leading-[1.8] text-base">
                A dual master's candidate in{" "}
                <span className="text-foreground font-semibold">Project Management (Business Analytics)</span> and{" "}
                <span className="text-foreground font-semibold">Cell &amp; Molecular Biology</span>, with
                experience spanning healthcare consulting, MedTech strategy, and
                pharmaceutical R&amp;D.
              </p>
            </div>

            <div className="reveal stagger-2">
              <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                What I Do
              </h3>
              <p className="text-muted-foreground leading-[1.8] text-base">
                Translate complex healthcare data, market intelligence, and emerging
                technologies into actionable strategies that drive innovation,
                compliance, and operational excellence.
              </p>
            </div>

            <div className="reveal stagger-3">
              <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Professional Philosophy
              </h3>
              <ul className="space-y-3">
                {[
                  "Data-driven decision-making",
                  "Cross-functional collaboration",
                  "Innovation in regulated healthcare environments",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-muted-foreground group"
                  >
                    <ArrowRight size={14} className="text-secondary shrink-0 transition-transform group-hover:translate-x-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Profile image */}
          <div className="flex-shrink-0 reveal stagger-2 relative group">
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-foreground/10 group-hover:border-secondary/30 transition-colors duration-500" />
            <div className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ boxShadow: '0 0 40px 8px hsl(var(--secondary) / 0.12)' }}
            />
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden
              shadow-2xl shadow-black/10 border-4 border-background relative z-10"
            >
              <img
                src={aboutImage}
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
