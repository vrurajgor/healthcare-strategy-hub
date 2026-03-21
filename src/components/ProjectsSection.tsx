import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { ChevronDown, ExternalLink, Lightbulb, Target, Wrench } from "lucide-react";

const projects = [
  {
    title: "Controlling Scope in Regulated Healthcare & Biopharma Projects",
    subtitle: "Governance, Hybrid Models, and Predictive Intelligence",
    tools: "Systematic Literature Review, Predictive Analytics",
    association: "Northeastern University",
    overview:
      "Examines how scope can be effectively controlled in highly regulated healthcare and biopharma environments through governance maturity, stakeholder alignment, hybrid project management models, and predictive analytics.",
    outcome: [
      "Analyzed peer-reviewed studies (2019–2025) on scope stability and regulatory compliance",
      "Identified major gaps in current frameworks and proposed data-driven strategies",
      "Highlighted the need for integrated governance systems in high-risk healthcare projects",
    ],
    reflection:
      "Deepened my expertise in scope governance and adaptive project management, reinforcing my ability to bridge regulatory complexity with data-driven decision-making in biopharma.",
    color: "primary",
    link: "https://drive.google.com/file/d/1YZBFIETsjcmc_mH3WPJayetqH2ttWdyc/view?usp=drive_link",
  },
  {
    title: "Data-Driven Evaluation of Project Management Tools for Healthcare Operations",
    tools: "Technology Evaluation & Benchmarking, Systems Evaluation Frameworks",
    association: "Northeastern University",
    overview:
      "Conducted a comparative analysis of leading project management tools (Microsoft Project, Jira, and Smartsheet) to determine the best solution for healthcare organizations. Evaluated each platform across usability, customization, scalability, security, compliance readiness, integration, cost, and collaboration.",
    outcome: [
      "Researched healthcare technology trends (AI, telemedicine, blockchain, IoMT, RPA, precision medicine) and employment growth shifts",
      "Built a star-based comparison model and identified implementation risks with mitigation strategies",
      "Concluded Smartsheet as the most balanced and cost-effective solution for healthcare project management",
    ],
    reflection:
      "Strengthened my ability to systematically evaluate technology platforms against healthcare-specific requirements, balancing compliance, scalability, and cost-effectiveness.",
    color: "secondary",
    link: "https://drive.google.com/file/d/1znHVjioMlD7aVa1-B5NKRTK534Ra4QPF/view?usp=drive_link",
  },
  {
    title: "Transforming Value-Based Care at Geisinger Health System Through AI-Driven Scope Management",
    tools: "AI & Predictive Analytics, WBS, EHR Integration",
    association: "Northeastern University",
    overview:
      "Led a scope-managed technology case project based on the Geisinger Health System STAIR program, which uses AI, NLP, and predictive analytics to identify high-risk patients and improve care delivery under value-based care (VBC) models.",
    outcome: [
      "Defined objectives, WBS, technical requirements, stakeholder workflows, and a formal change control process to prevent scope creep",
      "Key outcomes analyzed: 10% reduction in avoidable hospitalizations, wait times reduced from 112 to 12 days, zero missed malignancies, and $5M+ in cost savings",
      "Demonstrated how structured scope management and data-driven technology integration improve access, quality, and efficiency in complex healthcare systems",
    ],
    reflection:
      "Reinforced my expertise in applying AI-driven strategies and structured project management to transform healthcare delivery while maintaining clinical quality and cost targets.",
    color: "primary",
    link: "https://drive.google.com/file/d/1E5C3-5NdwZddIJBv7d8HuJg7UQl4_dkx/view?usp=drive_link",
  },
  {
    title: "Implementing an Electronic Health Record at Central City Medical Group – Risk Management & Schedule Confidence",
    subtitle: "Risk Identification, Prioritization, Monte Carlo Simulation & Contingency Planning",
    tools: "Primavera P6, Monte Carlo Simulation, Risk Register Matrix",
    association: "Northeastern University",
    overview:
      "Led the risk management planning for a 9-month EHR implementation project at Central City Medical Group (CCMG). Developed a comprehensive risk management plan following PMBOK® guidelines, covering risk identification, qualitative and quantitative analysis, response strategies, and contingency reserve estimation to ensure HIPAA-compliant digital transformation.",
    outcome: [
      "Identified and prioritized 10 key risks using a Risk Register Matrix with probability-impact scoring",
      "Performed Monte Carlo simulation to determine schedule confidence levels and contingency reserves",
      "Designed mitigation and response strategies for critical risks including data migration failures, HIPAA non-compliance, and staff resistance to adoption",
    ],
    reflection:
      "Strengthened my ability to apply quantitative risk modeling and PMBOK-based frameworks in healthcare IT projects, reinforcing proactive risk planning for complex digital health transformations.",
    color: "secondary",
    link: "https://drive.google.com/file/d/1iV-RjtvRynTA0evGvGO7ku_2AgLT3Umu/view?usp=drive_link",
  },
  {
    title: "Quality Analytics Simulation – Statistical Process Control for Manufacturing",
    subtitle: "X-bar & R Charts, Process Capability, and Cost-of-Quality Analysis",
    tools: "Minitab, SPC, Monte Carlo Simulation",
    association: "Northeastern University",
    overview:
      "Evaluated the stability and capability of a manufacturing process at Gainsborough Manufacturing Company using Statistical Process Control (SPC). Simulated a full production shift, calculated control limits for X-bar and R charts, assessed process capability indices (Cp & Cpk), and performed cost-of-quality analysis to optimize inspection vs. defect trade-offs.",
    outcome: [
      "Established precise control limits confirming the manufacturing process is in statistical control with only common-cause variation",
      "Calculated Cp (1.75) and Cpk (1.52) indices, confirming the process is highly capable of meeting specification limits",
      "Performed cost-of-quality analysis comparing 100% inspection vs. no inspection, determining the optimal quality strategy based on defect probability and cost trade-offs",
    ],
    reflection:
      "Strengthened my expertise in applying statistical quality tools to real-world manufacturing scenarios, reinforcing data-driven decision-making for process improvement and quality assurance in regulated environments.",
    color: "primary",
  },
];

type Project = (typeof projects)[0];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isPrimary = project.color === "primary";

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden group relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Top accent bar */}
      <div
        className="h-1 w-full"
        style={{
          background: isPrimary
            ? "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))"
            : "linear-gradient(90deg, hsl(var(--secondary)), hsl(var(--primary)))",
        }}
      />

      {/* Number badge */}
      <div
        className="absolute top-6 right-5 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
        style={{
          backgroundColor: `hsl(var(--${project.color}) / 0.1)`,
          color: `hsl(var(--${project.color}))`,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 md:p-8"
      >
        <div className="pr-12">
          <h3 className="text-lg font-semibold text-foreground mb-1 leading-snug">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:text-primary transition-colors underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
          {project.subtitle && (
            <p className="text-sm text-muted-foreground mb-2 italic">
              {project.subtitle}
            </p>
          )}
          {project.association && (
            <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-3 bg-primary/10 text-primary">
              {project.association}
            </span>
          )}
          {project.tools && (
            <div className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase text-secondary mb-3 ml-2">
              <Wrench size={12} />
              {project.tools}
            </div>
          )}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.overview}
          </p>
        </div>

        <div className="flex items-center gap-4 mt-5">
          <span className="flex items-center gap-2 text-xs font-medium text-primary">
            {expanded ? "Show less" : "View details"}
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </span>
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-out ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-5">
            <div className="h-px bg-border" />

            <div className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: "hsl(var(--secondary) / 0.1)",
                }}
              >
                <Target size={14} className="text-secondary" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Outcome
                </p>
                <ul className="space-y-1.5">
                  {project.outcome.map((o) => (
                    <li
                      key={o}
                      className="text-sm text-foreground/80 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: "hsl(var(--primary) / 0.1)",
                }}
              >
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
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-[0.03]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary)), transparent 70%)",
        }}
      />

      <div className="section-container">
        <div className="reveal">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mb-14">
            Key projects demonstrating healthcare strategy, scope governance, and analytical capabilities.
          </p>
        </div>

        {/* Featured / highlighted project - full width */}
        <div className="reveal stagger-1 mb-8">
          <ProjectCard project={projects[0]} index={0} />
        </div>

        {/* Remaining projects in 2-col grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(1).map((p, i) => (
            <div
              key={p.title}
              className={`reveal stagger-${Math.min(i + 2, 5)}`}
            >
              <ProjectCard project={p} index={i + 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
