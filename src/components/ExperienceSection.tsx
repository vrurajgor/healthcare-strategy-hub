import { useReveal } from "@/hooks/useReveal";
import { Building2, TrendingDown, BarChart3, FlaskConical } from "lucide-react";

const experiences = [
  {
    icon: Building2,
    role: "Protein Therapies Project Management (PT-PM) Co-op",
    company: "Regeneron Pharmaceuticals",
    period: "April 2026 – September 2026",
    bullets: [
      "Supported project coordination across Product, Analytical, and Process Development (PAPD) Operations",
      "Contributed to structured execution of protein therapies programs",
      "Collaborated across cross-functional teams in a regulated biopharma environment",
    ],
    impact:
      "Strengthening real-world experience in biopharma project lifecycle management, cross-functional coordination, and operational strategy in advanced therapeutics.",
  },
  {
    icon: TrendingDown,
    role: "Associate Project Manager",
    company: "Vaaruni Buildcon LLP",
    period: "April 2025 – December 2025",
    bullets: [
      "Managed 5+ projects (~$3M)",
      "Improved stakeholder communication (↓30% escalation time)",
      "Built Power BI dashboards improving reporting accuracy",
    ],
    impact:
      "Enhanced project execution, stakeholder alignment, and data-driven reporting capabilities.",
  },
  {
    icon: BarChart3,
    role: "Senior MedTech Analyst",
    company: "EMeRG (Consulting)",
    period: "",
    bullets: [
      "Delivered 30+ competitive intelligence reports",
      "Influenced $50M+ strategic decisions",
      "Conducted forecasting, pricing, and adoption analysis",
    ],
    impact:
      "Developed strong expertise in healthcare strategy, innovation analysis, and market intelligence.",
  },
  {
    icon: FlaskConical,
    role: "Scientist",
    company: "Dr. Reddy's Laboratories",
    period: "",
    bullets: [
      "Conducted FDA/ICH-compliant bioanalytical studies",
      "Improved workflows (↓20% turnaround time)",
      "Collaborated with QA, Regulatory, and R&D",
    ],
    impact:
      "Built deep understanding of regulated healthcare systems and scientific rigor.",
  },
];

export default function ExperienceSection() {
  const ref = useReveal();

  return (
    <section id="experience" className="section-padding section-alt" ref={ref}>
      <div className="section-container">
        <div className="reveal">
          <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-3">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-14">
            Professional Journey
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={exp.role}
              className={`reveal stagger-${Math.min(i + 1, 4)} bg-card rounded-lg p-6 md:p-8 card-hover border border-border`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'hsl(var(--primary) / 0.08)' }}>
                  <exp.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground leading-snug">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.company}
                    {exp.period && ` · ${exp.period}`}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-5 ml-14">
                {exp.bullets.map((b) => (
                  <li
                    key={b}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary mt-2 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="ml-14 pl-4 border-l-2 border-secondary/30">
                <p className="text-sm text-foreground/80">
                  <span className="font-medium text-secondary">Impact:</span>{" "}
                  {exp.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
