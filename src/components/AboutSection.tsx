import { useReveal } from "@/hooks/useReveal";
import { ArrowRight, FlaskConical, Building2, TrendingUp, HeartPulse } from "lucide-react";

const journey = [
  { icon: FlaskConical, title: "Science", subtitle: "Cell & Molecular Biology" },
  { icon: Building2, title: "Consulting", subtitle: "MedTech Market Intelligence" },
  { icon: TrendingUp, title: "Project Management", subtitle: "Business Analytics" },
  { icon: HeartPulse, title: "Healthcare Strategy", subtitle: "Biopharma & Digital Health" },
];

export default function AboutSection() {
  const ref = useReveal();

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="section-container">
        <div className="reveal">
          <p className="section-label">About</p>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Text */}
          <div className="flex-1 space-y-10">
            <div className="reveal stagger-1">
              <p className="text-muted-foreground leading-[1.9] text-base">
                A dual master's candidate in{" "}
                <span className="text-foreground font-semibold">Project Management (Concentration: Business Analysis)</span> and{" "}
                <span className="text-foreground font-semibold">Cell &amp; Molecular Biology</span>, with
                experience spanning healthcare consulting, MedTech strategy, and
                pharmaceutical R&amp;D.
              </p>
            </div>

            <div className="reveal stagger-2">
              <h3 className="text-lg font-display font-normal text-foreground mb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                What I Do
              </h3>
              <p className="text-muted-foreground leading-[1.9] text-base">
                Translate complex healthcare data, market intelligence, and emerging
                technologies into actionable strategies that drive innovation,
                compliance, and operational excellence.
              </p>
            </div>

            <div className="reveal stagger-3">
              <h3 className="text-lg font-display font-normal text-foreground mb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Professional Philosophy
              </h3>
              <ul className="space-y-3.5">
                {[
                  "Data-driven decision-making",
                  "Cross-functional collaboration",
                  "Innovation in regulated healthcare environments",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-muted-foreground group"
                  >
                    <ArrowRight size={14} className="text-primary shrink-0 transition-transform group-hover:translate-x-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Growth Journey */}
          <div className="flex-1 reveal stagger-2">
            <h3 className="text-lg font-display font-normal text-foreground mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Growth Journey
            </h3>

            <div className="relative pl-6">
              {/* Vertical line */}
              <div className="absolute left-[18px] top-4 bottom-4 w-px bg-border" />

              <div className="space-y-5">
                {journey.map((step, i) => (
                  <div key={step.title} className="relative flex items-start gap-4">
                    {/* Icon circle */}
                    <div className="relative z-10 w-10 h-10 rounded-full border-2 border-primary bg-background
                      flex items-center justify-center shrink-0">
                      <step.icon size={18} className="text-primary" />
                    </div>
                    {/* Card */}
                    <div className="flex-1 bg-card rounded-xl border border-border p-4 card-hover">
                      <p className="font-semibold text-foreground text-sm">{step.title}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{step.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}