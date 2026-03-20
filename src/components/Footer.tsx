import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () =>
    document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vrunda Rajgor. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowUp size={14} />
          Back to Home
        </button>
      </div>
    </footer>
  );
}
