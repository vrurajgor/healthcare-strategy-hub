import { useReveal } from "@/hooks/useReveal";

const categories = [
  {
    title: "Project Management",
    skills: [
      "Agile & Scrum",
      "Risk & Compliance Management",
      "Stakeholder Engagement",
      "Cross-functional Leadership",
    ],
  },
  {
    title: "Life Sciences & Healthcare",
    skills: [
      "Biopharma",
      "Medical Devices",
      "Digital Health",
      "Quality & Regulatory Systems",
    ],
  },
  {
    title: "Analytics & Tools",
    skills: [
      "Power BI",
      "Tableau",
      "MS Project",
      "Primavera",
      "Smartsheet",
      "SQL",
      "R (basic)",
    ],
  },
  {
    title: "Specialized Domain",
    skills: ["PAPD Operations"],
  },
];

export default function SkillsSection() {
  const ref = useReveal();

  return (
    <section id="skills" className="section-padding section-alt" ref={ref}>
      <div className="section-container">
        <div className="reveal">
          <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-3">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-14">
            Capabilities
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div key={cat.title} className={`reveal stagger-${Math.min(i + 1, 4)}`}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="badge-skill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
