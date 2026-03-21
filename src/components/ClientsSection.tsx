import { useReveal } from "@/hooks/useReveal";
import geHealthcareLogo from "@/assets/clients/ge-healthcare.png";
import philipsLogo from "@/assets/clients/philips-healthcare.png";
import medtronicLogo from "@/assets/clients/medtronic.png";
import samsungLogo from "@/assets/clients/samsung-healthcare.png";
import mindrayLogo from "@/assets/clients/mindray.png";

const clients = [
  { name: "GE HealthCare", logo: geHealthcareLogo },
  { name: "Philips", logo: philipsLogo },
  { name: "Medtronic", logo: medtronicLogo },
  { name: "Samsung Healthcare", logo: samsungLogo },
  { name: "Mindray", logo: mindrayLogo },
];

export default function ClientsSection() {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="section-container text-center">
        <span className="section-label reveal">Clients</span>
        <h2 className="section-title reveal stagger-1">Clients</h2>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 mt-14 reveal stagger-2">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-400"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
