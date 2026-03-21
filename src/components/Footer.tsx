import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () =>
    document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="py-10 border-t border-border bg-card/50">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display font-bold text-foreground text-sm mb-1">Vrunda Rajgor</p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-xs font-medium text-muted-foreground
            hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-muted"
        >
          <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          Back to Top
        </button>
      </div>
    </footer>
  );
}
