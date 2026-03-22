import { useReveal } from "@/hooks/useReveal";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const ref = useReveal();

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="section-container">
        <div className="reveal">
          <p className="section-label">About</p>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="max-w-3xl space-y-10">
          <div className="reveal stagger-1">
            <p className="text-muted-foreground leading-[1.9] text-base">
              A dual master's candidate in{" "}
              <span className="text-foreground font-semibold">Project Management (Business Analytics)</span> and{" "}
              <span className="text-foreground font-semibold">Cell &amp; Molecular Biology</span>, with
              experience spanning healthcare consulting, MedTech strategy, and
              pharmaceutical R&amp;D.
            </p>
          </div>

          <div className="reveal stagger-2">
            <h3 className="text-lg font-display font-normal text-foreground mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              What I Do
            </h3>
            <p className="text-muted-foreground leading-[1.9] text-base">
              Translate complex healthcare data, market intelligence, and emerging
              technologies into actionable strategies that drive innovation,
              compliance, and operational excellence.
            </p>
          </div>

          <div className="reveal stagger-3">
            <h3 className="text-lg font-display font-normal text-foreground mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Professional Philosophy
            </h3>
            <ul className="space-y-3.5">
              {[
                "Data-driven decision-making",
                "Cross-functional collaboration",
                "Innovation in regulated healthcare environments",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-muted-foreground group"
                >
                  <ArrowRight size={14} className="text-primary shrink-0 transition-transform group-hover:translate-x-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
