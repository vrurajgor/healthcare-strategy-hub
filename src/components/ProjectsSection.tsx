import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { ChevronDown, Lightbulb, Target, Wrench } from "lucide-react";

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
    color: "primary",
  },
  {
    title: "Healthcare Technology Evaluation",
    tools: "Research & Analysis",
    overview:
      "Analyzed emerging MedTech and digital health technologies.",
    outcome: [
      "Produced evaluation reports",
      "Supported strategic decisions",
    ],
    reflection:
      "Deepened my understanding of innovation adoption and how emerging technologies reshape healthcare delivery and strategy.",
    color: "secondary",
  },
  {
    title: "Agile Simulation – Product Launch",
    tools: "Agile / Scrum Framework",
    overview: "Simulated Agile product launch environment.",
    outcome: [
      "Managed sprint backlogs",
      "Delivered iterative outputs",
    ],
    reflection:
      "Enhanced adaptability, prioritization, and stakeholder communication in dynamic environments.",
    color: "primary",
  },
  {
    title: "Market Intelligence & Strategy",
    tools: "Competitive Analysis, Data Analytics",
    overview: "Competitive intelligence across MedTech sectors.",
    outcome: [
      "Identified $10M+ opportunities",
      "Delivered actionable insights",
    ],
    reflection:
      "Strengthened my ability to translate data into strategic decisions impacting innovation and product positioning.",
    color: "secondary",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`bg-card rounded-xl border border-border card-hover overflow-hidden group relative`}>
      {/* Number badge */}
      <div className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
        style={{ backgroundColor: `hsl(var(--${project.color}) / 0.08)`, color: `hsl(var(--${project.color}))` }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 md:p-8"
      >
        <div className="pr-10">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {project.title}
          </h3>
          {project.tools && (
            <div className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase text-secondary mb-3">
              <Wrench size={12} />
              {project.tools}
            </div>
          )}
          <p className="text-sm text-muted-foreground leading-relaxed">{project.overview}</p>
        </div>

        <div className="flex items-center gap-2 mt-4 text-xs font-medium text-primary">
          {expanded ? "Show less" : "View details"}
          <ChevronDown size={14} className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
        </div>
      </button>

      <div className={`grid transition-all duration-400 ease-out ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-5">
            <div className="h-px bg-border" />

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'hsl(var(--secondary) / 0.08)' }}>
                <Target size={14} className="text-secondary" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Outcome
                </p>
                <ul className="space-y-1.5">
                  {project.outcome.map((o) => (
                    <li key={o} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'hsl(var(--primary) / 0.08)' }}>
                <Lightbulb size={14} className="text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Reflection
                </p>
                <p className="text-sm text-foreground/75 italic leading-relaxed">
                  {project.reflection}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const ref = useReveal();

  return (
    <section id="portfolio" className="section-padding relative" ref={ref}>
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, hsl(233, 55%, 21%), transparent 70%)' }}
      />

      <div className="section-container">
        <div className="reveal">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mb-14">
            Key projects demonstrating healthcare strategy and analytical capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={p.title} className={`reveal stagger-${Math.min(i + 1, 4)}`}>
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
