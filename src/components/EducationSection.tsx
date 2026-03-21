import { useReveal } from "@/hooks/useReveal";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Project Management & Business Analytics",
    school: "Northeastern University",
    start: "Jan 2025",
    gpa: "4.0 / 4.0",
    highlights: ["Merit-based scholarship recipient"],
  },
  {
    degree: "Biocon–KGI Certificate in Biosciences & Pharmaceutical Sciences",
    school: "Keck Graduate Institute",
    gpa: "3.9 / 4.0",
    coursework: [
      "Pharmaceutical Drug Development",
      "Biopharmaceutical QA/QC",
      "US Food & Drug Law",
      "CMC Regulation of Biologics",
      "Molecular Biotechnology",
      "Mammalian Cell Biotechnology",
      "Bioseparations",
      "Fermentation Technology",
    ],
  },
  {
    degree: "Master of Science in Cell & Molecular Biology",
    school: "The Maharaja Sayajirao University of Baroda",
  },
  {
    degree: "Bachelor of Science in Cell & Molecular Biology",
    school: "The Maharaja Sayajirao University of Baroda",
  },
];

export default function EducationSection() {
  const ref = useReveal();

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="section-container">
        <div className="reveal">
          <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-3">
            Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-14">
            Academic Foundation
          </h2>
        </div>

        <div className="relative pl-8 border-l-2 border-border space-y-10">
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className={`reveal stagger-${Math.min(i + 1, 4)} relative`}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[calc(1rem+1.25px)] top-0 w-8 h-8 rounded-full bg-card border-2 border-secondary flex items-center justify-center">
                <GraduationCap size={14} className="text-secondary" />
              </div>

              <div className="bg-card rounded-lg p-6 md:p-8 border border-border card-hover">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-base font-semibold text-foreground leading-snug">
                    {edu.degree}
                  </h3>
                  {edu.gpa && (
                    <span className="badge-skill text-xs shrink-0">
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-3">
                  {edu.school}
                  {edu.start && ` · ${edu.start}`}
                </p>

                {edu.highlights && (
                  <ul className="space-y-1.5 mb-3">
                    {edu.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <Award size={13} className="text-secondary shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {edu.coursework && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Key Coursework
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((c) => (
                        <span key={c} className="badge-skill text-xs">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
