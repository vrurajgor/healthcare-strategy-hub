import { useReveal } from "@/hooks/useReveal";
import { Settings, Microscope, BarChart3, Cog } from "lucide-react";

const categories = [
  {
    title: "Project Management",
    icon: Settings,
    skills: [
      "Agile & Scrum",
      "Risk & Compliance Management",
      "Stakeholder Engagement",
      "Cross-functional Leadership",
    ],
  },
  {
    title: "Life Sciences & Healthcare",
    icon: Microscope,
    skills: [
      "Biopharma",
      "Medical Devices",
      "Digital Health",
      "Quality & Regulatory Systems",
    ],
  },
  {
    title: "Analytics & Tools",
    icon: BarChart3,
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
    icon: Cog,
    skills: ["PAPD Operations"],
  },
];

export default function SkillsSection() {
  const ref = useReveal();

  return (
    <section id="skills" className="section-padding section-alt relative" ref={ref}>
      <div className="section-container">
        <div className="reveal">
          <p className="section-label">Skills</p>
          <h2 className="section-title">Capabilities</h2>
          <p className="section-subtitle mb-14">
            A blend of technical, strategic, and domain expertise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={cat.title} className={`reveal stagger-${Math.min(i + 1, 4)}`}>
              <div className="skill-category h-full">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: 'hsl(var(--primary) / 0.08)' }}>
                  <cat.icon size={18} className="text-primary" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-5">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span key={s} className="badge-skill text-xs">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
