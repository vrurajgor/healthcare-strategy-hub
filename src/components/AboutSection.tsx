import { useReveal } from "@/hooks/useReveal";
import { GraduationCap, Briefcase, TrendingUp, Heart } from "lucide-react";

const journey = [
  { icon: GraduationCap, label: "Science", desc: "Cell & Molecular Biology" },
  { icon: Briefcase, label: "Consulting", desc: "MedTech Market Intelligence" },
  { icon: TrendingUp, label: "Project Management", desc: "Business Analytics" },
  { icon: Heart, label: "Healthcare Strategy", desc: "Biopharma & Digital Health" },
];

export default function AboutSection() {
  const ref = useReveal();

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="section-container">
        <div className="reveal">
          <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-12">
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="reveal stagger-1">
              <p className="text-muted-foreground leading-relaxed">
                A dual master's candidate in <span className="text-foreground font-medium">Project Management (Business Analytics)</span> and{" "}
                <span className="text-foreground font-medium">Cell &amp; Molecular Biology</span>, with
                experience spanning healthcare consulting, MedTech strategy, and
                pharmaceutical R&amp;D.
              </p>
            </div>

            <div className="reveal stagger-2">
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                What I Do
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Translate complex healthcare data, market intelligence, and emerging
                technologies into actionable strategies that drive innovation,
                compliance, and operational excellence.
              </p>
            </div>

            <div className="reveal stagger-3">
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                Professional Philosophy
              </h3>
              <ul className="space-y-2">
                {[
                  "Data-driven decision-making",
                  "Cross-functional collaboration",
                  "Innovation in regulated healthcare environments",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Growth Journey */}
          <div className="reveal stagger-2">
            <h3 className="text-lg font-display font-semibold text-foreground mb-8">
              Growth Journey
            </h3>
            <div className="relative pl-10 border-l-2 border-border space-y-8">
              {journey.map((step, i) => (
                <div key={step.label} className="relative">
                  <div className="absolute -left-[calc(1.25rem+1.25px)] top-0 w-10 h-10 rounded-full bg-card border-2 border-secondary flex items-center justify-center">
                    <step.icon size={18} className="text-secondary" />
                  </div>
                  <div className="bg-card rounded-lg border border-border p-5 card-hover">
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
