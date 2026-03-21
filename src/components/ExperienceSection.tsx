import { useReveal } from "@/hooks/useReveal";
import { Building2, TrendingDown, BarChart3, FlaskConical } from "lucide-react";
import geHealthcareLogo from "@/assets/clients/ge-healthcare.png";
import philipsLogo from "@/assets/clients/philips-healthcare.png";
import medtronicLogo from "@/assets/clients/medtronic.png";
import samsungLogo from "@/assets/clients/samsung-healthcare.png";
import mindrayLogo from "@/assets/clients/mindray.png";

const experiences = [
  {
    icon: Building2,
    role: "Protein Therapies Project Management (PT-PM) Co-op",
    company: "Regeneron Pharmaceuticals",
    period: "April 2026 – September 2026",
    bullets: [
      "Will support project coordination across Product, Analytical, and Process Development (PAPD) Operations",
      "Will contribute to structured execution of protein therapies programs",
      "Will collaborate across cross-functional teams in a regulated biopharma environment",
    ],
    impact:
      "Will strengthen real-world experience in biopharma project lifecycle management, cross-functional coordination, and operational strategy in advanced therapeutics.",
    accent: "secondary",
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
    accent: "primary",
  },
  {
    icon: BarChart3,
    role: "Senior MedTech Analyst (Consultant)",
    company: "EMeRG (Consulting)",
    period: "June 2022 – March 2025",
    bullets: [
      "Consulted for 10+ Fortune 500 MedTech companies (↑$50M+ strategy impact)",
      "Delivered 30+ competitive intelligence reports across imaging & diagnostics",
      "Captured product requirements from 50+ clinical end-users (↑35% validation inputs)",
    ],
    clients: [
      { name: "GE HealthCare", logo: geHealthcareLogo },
      { name: "Philips", logo: philipsLogo },
      { name: "Medtronic", logo: medtronicLogo },
      { name: "Samsung Healthcare", logo: samsungLogo },
      { name: "Mindray", logo: mindrayLogo },
    ],
    impact:
      "Built deep expertise in MedTech market intelligence, competitive strategy, and healthcare innovation — directly influencing product roadmaps and strategic decisions for Fortune 500 medical device companies.",
    accent: "secondary",
  },
  {
    icon: FlaskConical,
    role: "Scientist",
    company: "Dr. Reddy's Laboratories",
    period: "October 2020 – May 2022",
    bullets: [
      "Conducted FDA/ICH-compliant bioanalytical studies",
      "Improved workflows (↓20% turnaround time)",
      "Collaborated with QA, Regulatory, and R&D",
    ],
    impact:
      "Built deep understanding of regulated healthcare systems and scientific rigor.",
    accent: "primary",
  },
];

export default function ExperienceSection() {
  const ref = useReveal();

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="section-container">
        <div className="reveal text-center">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">EXPERIENCE</h2>
          <h3 className="section-title">Work Experience</h3>
        </div>

        <div className="relative space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={exp.role}
              className={`reveal stagger-${Math.min(i + 1, 4)}`}
            >
              <div className="bg-card rounded-xl p-6 md:p-8 card-hover border border-border group relative overflow-hidden">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, hsl(var(--${exp.accent})), transparent)` }}
                />

                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'hsl(var(--primary) / 0.08)' }}>
                    <exp.icon size={20} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground leading-snug">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
                      <p className="text-sm font-medium text-secondary">
                        {exp.company}
                      </p>
                      <span className="text-muted-foreground/40">·</span>
                      <p className="text-sm text-muted-foreground">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6 ml-16">
                  {exp.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-sm text-muted-foreground flex items-start gap-3 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {exp.clients && (
                  <div className="ml-16 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-3">Key Clients</p>
                    <div className="flex flex-wrap items-center gap-6">
                      {exp.clients.map((client) => (
                        <img
                          key={client.name}
                          src={client.logo}
                          alt={client.name}
                          className="h-14 md:h-16 w-auto object-contain grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="ml-16 pl-4 border-l-2 border-secondary/25 bg-secondary/[0.03] rounded-r-lg py-3 pr-4">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    <span className="font-semibold text-secondary">Impact: </span>
                    {exp.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
