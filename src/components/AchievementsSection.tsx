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
    <section id="achievements" className="section-padding section-alt" ref={ref}>
      <div className="section-container">
        <div className="reveal">
          <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-3">
            Recognition
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-14">
            Achievements &amp; Publications
          </h2>
        </div>

        {/* Publication */}
        <div className="reveal stagger-1 mb-12">
          <h3 className="text-lg font-display font-semibold text-foreground mb-5">
            Publication
          </h3>
          {publications.map((pub) => (
            <div
              key={pub.title}
              className="bg-card rounded-lg p-6 md:p-8 border border-border card-hover"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "hsl(var(--primary) / 0.08)" }}
                >
                  <pub.icon size={18} className="text-primary" />
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
              <p className="text-sm text-muted-foreground leading-relaxed ml-14 mb-4">
                {pub.description}
              </p>
              <div className="ml-14 flex flex-wrap items-center gap-2">
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
                    className="inline-flex items-center gap-1 text-xs font-medium text-secondary hover:underline ml-auto"
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
          <h3 className="text-lg font-display font-semibold text-foreground mb-5">
            Awards &amp; Scholarships
          </h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {awards.map((award, i) => (
              <div
                key={award.title}
                className="bg-card rounded-lg p-6 border border-border card-hover text-center"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "hsl(var(--secondary) / 0.1)" }}
                >
                  <award.icon size={20} className="text-secondary" />
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  {award.title}
                </h4>
                <p className="text-xs text-secondary font-medium mb-2">
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
