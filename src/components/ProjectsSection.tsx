import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    title: "EHR Risk Analysis Project",
    tools: "Primavera, Monte Carlo Simulation",
    overview:
      "Evaluated cost and schedule risks for healthcare IT implementation.",
    outcome: [
      "Delivered structured risk analysis",
      "Created compliance documentation",
    ],
    reflection:
      "Strengthened my ability to apply quantitative risk modeling in healthcare systems and reinforced proactive risk planning in digital health projects.",
  },
  {
    title: "Healthcare Technology Evaluation",
    tools: "",
    overview:
      "Analyzed emerging MedTech and digital health technologies.",
    outcome: [
      "Produced evaluation reports",
      "Supported strategic decisions",
    ],
    reflection:
      "Deepened my understanding of innovation adoption and how emerging technologies reshape healthcare delivery and strategy.",
  },
  {
    title: "Agile Simulation – Product Launch",
    tools: "",
    overview: "Simulated Agile product launch environment.",
    outcome: [
      "Managed sprint backlogs",
      "Delivered iterative outputs",
    ],
    reflection:
      "Enhanced adaptability, prioritization, and stakeholder communication in dynamic environments.",
  },
  {
    title: "Market Intelligence & Strategy",
    tools: "",
    overview: "Competitive intelligence across MedTech sectors.",
    outcome: [
      "Identified $10M+ opportunities",
      "Delivered actionable insights",
    ],
    reflection:
      "Strengthened my ability to translate data into strategic decisions impacting innovation and product positioning.",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-card rounded-lg border border-border card-hover overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4"
      >
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {project.title}
          </h3>
          {project.tools && (
            <p className="text-xs text-secondary font-medium tracking-wide uppercase">
              {project.tools}
            </p>
          )}
          <p className="text-sm text-muted-foreground mt-2">{project.overview}</p>
        </div>
        <div className="text-muted-foreground shrink-0 mt-1">
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      {expanded && (
        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 space-y-4 animate-[fade-in_0.25s_ease-out]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Outcome
            </p>
            <ul className="space-y-1.5">
              {project.outcome.map((o) => (
                <li key={o} className="text-sm text-foreground/80 flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-secondary mt-2 shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="pl-4 border-l-2 border-secondary/30">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Reflection
            </p>
            <p className="text-sm text-foreground/75 italic leading-relaxed">
              {project.reflection}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  const ref = useReveal();

  return (
    <section id="portfolio" className="section-padding" ref={ref}>
      <div className="section-container">
        <div className="reveal">
          <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-14">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <div key={p.title} className={`reveal stagger-${Math.min(i + 1, 4)}`}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
