import { Linkedin } from "lucide-react";
import profileImage from "@/assets/vrunda-profile.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-8" style={{ backgroundColor: 'hsl(220, 30%, 92%)' }}>
      <div className="section-container">
        {/* Hero Card */}
        <div className="max-w-4xl mx-auto bg-card rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
          {/* Left: Photo */}
          <div className="md:w-[45%] bg-muted">
            <img
              src={profileImage}
              alt="Vrunda Rajgor"
              className="w-full h-full object-cover object-top min-h-[300px] md:min-h-[400px]"
            />
          </div>

          {/* Right: Info */}
          <div className="md:w-[55%] p-8 md:p-10 flex flex-col justify-center space-y-5">
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
              Vrunda Rajgor
            </h1>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              Project Management Professional
            </p>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">Email:</p>
                <a href="mailto:rajgor.v@northeastern.edu" className="hover:text-primary transition-colors">
                  rajgor.v@northeastern.edu
                </a>
              </div>
              <div>
                <p className="font-semibold text-foreground">Location:</p>
                <p>Boston, MA</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">LinkedIn:</p>
                <a
                  href="https://www.linkedin.com/in/vrundarajgor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/vrundarajgor
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* LinkedIn icon bar */}
        <div className="max-w-4xl mx-auto mt-0 bg-primary flex items-center justify-center py-3 rounded-b-lg">
          <a
            href="https://www.linkedin.com/in/vrundarajgor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground hover:opacity-80 transition-opacity"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Intro text */}
      <div className="section-container max-w-3xl text-center mt-16 mb-8">
        <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-6">
          Hello! I'm Vrunda
        </h2>
        <p className="text-muted-foreground leading-relaxed text-base">
          A dual master's candidate in Project Management (Business Analytics) and Cell & Molecular Biology, 
          with experience spanning healthcare consulting, MedTech strategy, and pharmaceutical R&D. 
          I'm passionate about driving data-driven innovation across Biopharma, MedTech, and Digital Health.
        </p>
      </div>
    </section>
  );
}
