import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () =>
    document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="py-10 border-t border-border bg-card">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display font-normal text-sm mb-1 text-foreground">
            Vrunda Rajgor
          </p>
          <a href="mailto:rajgor.v@northeastern.edu" className="text-xs transition-colors text-muted-foreground hover:text-foreground">
            rajgor.v@northeastern.edu
          </a>
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-xs font-medium
            transition-colors px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground"
        >
          <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          Back to Top
        </button>
      </div>
    </footer>
  );
}