import { useReveal } from "@/hooks/useReveal";
import { BookOpen, Award, GraduationCap, ExternalLink } from "lucide-react";

const publications = [
  {
    icon: BookOpen,
    title:
      "Mechanism of DNA Cleavage by the Endonuclease SauUSI: A Major Barrier to Horizontal Gene Transfer and Antibiotic Resistance in Staphylococcus aureus",
    org: "Nucleic Acids Research, Oxford Academic",
    date: "February 26, 2021",
    description:
      "Contributed to heterologous expression and high-degree purification of the SauUSI enzyme — advancing understanding of antibiotic resistance mechanisms in molecular biology.",
    link: "https://academic.oup.com/nar/article/49/4/2161/6127270",
    tags: ["Molecular Biology", "Antibiotic Resistance", "Enzyme Purification"],
  },
  {
    icon: BookOpen,
    title:
      "Heterologous Expression and High Degree Purification of the Restriction Endonuclease SauUSI",
    org: "Bio-protocol",
    date: "January 5, 2022",
    description:
      "Published a detailed protocol for the heterologous expression and high-degree purification of the SauUSI restriction endonuclease, enabling reproducible research in molecular biology.",
    link: "https://bio-protocol.org/en/bpdetail?id=4275&type=0",
    tags: ["Enzyme Purification", "Molecular Biology", "Protocol"],
  },
];

const awards = [
  {
    icon: Award,
    title: "CPS Leaders and Scholars Award",
    org: "Northeastern University",
    description:
      "Recognized for leadership potential and academic excellence in the College of Professional Studies.",
  },
  {
    icon: GraduationCap,
    title: "Global Learner Award",
    org: "Northeastern University",
    description:
      "Awarded for demonstrated commitment to global learning, cross-cultural engagement, and international perspective.",
  },
  {
    icon: Award,
    title: "Biocon Merit Scholarship",
    org: "Biocon",
    description:
      "Merit-based scholarship recognizing outstanding academic performance in the life sciences.",
  },
];

export default function AchievementsSection() {
  const ref = useReveal();

  return (
    <section id="achievements" className="section-padding section-alt relative" ref={ref}>
      <div className="section-container">
        <div className="reveal">
          <p className="section-label">Recognition</p>
          <h2 className="section-title">
            Achievements &amp; Publications
          </h2>
          <p className="section-subtitle mb-14">
            Academic excellence, research contributions, and professional recognition.
          </p>
        </div>

        {/* Publication */}
        <div className="reveal stagger-1 mb-14">
          <h3 className="text-lg font-display font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Publication
          </h3>
          {publications.map((pub) => (
            <div
              key={pub.title}
              className="bg-card rounded-xl p-6 md:p-8 border border-border card-hover group relative overflow-hidden"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-xl" />

              <div className="flex items-start gap-4 mb-4 ml-2">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "hsl(var(--primary) / 0.08)" }}
                >
                  <pub.icon size={20} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-semibold text-foreground leading-snug mb-1">
                    {pub.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {pub.org} · {pub.date}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed ml-2 mb-5 pl-16">
                {pub.description}
              </p>
              <div className="ml-2 pl-16 flex flex-wrap items-center gap-2">
                {pub.tags.map((tag) => (
                  <span key={tag} className="badge-skill text-xs">
                    {tag}
                  </span>
                ))}
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-primary transition-colors ml-auto link-underline"
                  >
                    View Publication <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div className="reveal stagger-2">
          <h3 className="text-lg font-display font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            Awards &amp; Scholarships
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {awards.map((award) => (
              <div
                key={award.title}
                className="skill-category text-center"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: "hsl(var(--secondary) / 0.08)" }}
                >
                  <award.icon size={22} className="text-secondary" />
                </div>
                <h4 className="text-sm font-bold text-foreground mb-1">
                  {award.title}
                </h4>
                <p className="text-xs font-semibold text-secondary mb-3">
                  {award.org}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
