import { useReveal } from "@/hooks/useReveal";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    years: "2025 – Present",
    degree: "Master of Science in Project Management & Business Analytics",
    school: "Northeastern University",
    location: "Boston, MA",
    gpa: "4.0 / 4.0",
    highlight: "Merit-based scholarship recipient",
    description:
      "Focused on bridging healthcare strategy with data-driven project execution. Developed expertise in Agile planning, risk modeling, business analytics, and stakeholder management — applying these to real-world healthcare and biopharma scenarios. This program sharpened my ability to turn complex data into actionable decisions and lead cross-functional teams with clarity and structure.",
  },
  {
    years: "2019 – 2020",
    degree: "Biocon–KGI Certificate in Biosciences & Pharmaceutical Sciences",
    school: "Keck Graduate Institute",
    location: "Claremont, CA",
    gpa: "3.9 / 4.0",
    description:
      "Gained deep industry-oriented training in pharmaceutical drug development, biopharmaceutical QA/QC, US Food & Drug Law, CMC regulation of biologics, and mammalian cell biotechnology. This program bridged my lab science foundation with real-world pharmaceutical operations, building competencies in bioseparations, fermentation technology, and regulatory compliance critical for biopharma project management.",
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
    years: "2017 – 2019",
    degree: "Master of Science in Cell & Molecular Biology",
    school: "The Maharaja Sayajirao University of Baroda",
    location: "Vadodara, India",
    description:
      "Conducted advanced research in molecular biology and cellular mechanisms, strengthening scientific rigor and analytical thinking. Developed skills in experimental design, data interpretation, and scientific communication — forming the foundation for my contributions to published research on antibiotic resistance and enzyme purification.",
  },
  {
    years: "2014 – 2017",
    degree: "Bachelor of Science in Cell & Molecular Biology",
    school: "The Maharaja Sayajirao University of Baroda",
    location: "Vadodara, India",
    description:
      "Built a strong foundation in life sciences with coursework in genetics, biochemistry, microbiology, and cell biology. Developed laboratory skills and a passion for understanding biological systems at the molecular level, which launched my career trajectory into biopharma and healthcare.",
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

        <div className="space-y-8">
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className={`reveal stagger-${Math.min(i + 1, 4)} grid md:grid-cols-[160px_1fr] gap-6 md:gap-10`}
            >
              {/* Year column */}
              <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-1 md:pt-1">
                <span className="text-sm font-semibold text-secondary tracking-wide">
                  {edu.years}
                </span>
                {edu.gpa && (
                  <span className="badge-skill text-xs">{edu.gpa}</span>
                )}
              </div>

              {/* Content card */}
              <div className="bg-card rounded-lg p-6 md:p-8 border border-border card-hover">
                <div className="flex items-start gap-3 mb-2">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "hsl(var(--primary) / 0.08)" }}
                  >
                    <GraduationCap size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.school} · {edu.location}
                    </p>
                  </div>
                </div>

                {edu.highlight && (
                  <div className="flex items-center gap-2 ml-12 mb-3">
                    <Award size={13} className="text-secondary shrink-0" />
                    <span className="text-sm text-foreground/80 font-medium">
                      {edu.highlight}
                    </span>
                  </div>
                )}

                <p className="text-sm text-muted-foreground leading-relaxed ml-12">
                  {edu.description}
                </p>

                {edu.coursework && (
                  <div className="mt-4 ml-12">
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
