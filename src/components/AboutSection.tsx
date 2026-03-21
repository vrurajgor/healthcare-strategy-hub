import { useReveal } from "@/hooks/useReveal";
import { GraduationCap, Briefcase, TrendingUp, Heart, ArrowRight } from "lucide-react";

const journey = [
  { icon: GraduationCap, label: "Science", desc: "Cell & Molecular Biology", color: "primary" },
  { icon: Briefcase, label: "Consulting", desc: "MedTech Market Intelligence", color: "secondary" },
  { icon: TrendingUp, label: "Project Management", desc: "Business Analytics", color: "primary" },
  { icon: Heart, label: "Healthcare Strategy", desc: "Biopharma & Digital Health", color: "secondary" },
];

export default function AboutSection() {
  const ref = useReveal();

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, hsl(174, 42%, 41%), transparent 70%)' }}
      />

      <div className="section-container">
        <div className="reveal">
          <p className="section-label">About</p>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-10">
            <div className="reveal stagger-1">
              <p className="text-muted-foreground leading-[1.8] text-base">
                A dual master's candidate in <span className="text-foreground font-semibold">Project Management (Business Analytics)</span> and{" "}
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

          {/* Growth Journey */}
          <div className="reveal stagger-2">
            <h3 className="text-lg font-display font-semibold text-foreground mb-10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Growth Journey
            </h3>
            <div className="relative pl-12 space-y-6">
              {/* Timeline line */}
              <div className="absolute left-[1.19rem] top-2 bottom-2 w-px"
                style={{ background: 'linear-gradient(to bottom, hsl(var(--secondary)), hsl(var(--primary) / 0.15))' }}
              />

              {journey.map((step, i) => (
                <div key={step.label} className="relative group">
                  {/* Timeline dot with pulse */}
                  <div className="absolute -left-[calc(1.5rem+0.5px)] top-4">
                    <div className="w-10 h-10 rounded-full bg-card border-2 border-secondary flex items-center justify-center
                      shadow-sm group-hover:shadow-md group-hover:shadow-secondary/20 transition-all duration-300">
                      <step.icon size={16} className="text-secondary" />
                    </div>
                  </div>

                  <div className="bg-card rounded-xl border border-border p-6 card-hover group-hover:border-secondary/30 transition-colors">
                    <p className="text-base font-semibold text-foreground mb-1">{step.label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
