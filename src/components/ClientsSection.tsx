import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";

const clients = [
  "GE Healthcare",
  "Philips Healthcare",
  "Medtronic",
  "Samsung Healthcare",
];

export default function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section ref={sectionRef} className="section-padding section-alt">
      <div className="section-container text-center">
        <span className="section-label reveal">Clients</span>
        <h2 className="section-title reveal stagger-1">Trusted By Industry Leaders</h2>
        <p className="section-subtitle mx-auto reveal stagger-2 mb-14">
          Proud to have collaborated with leading organizations in healthcare and MedTech.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal stagger-3">
          {clients.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center px-6 py-8 rounded-xl border border-border bg-card
                transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20"
            >
              <span className="text-lg font-display font-semibold text-foreground/80">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
