import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "EXPERIENCE", href: "#experience" },
  { label: "EDUCATION", href: "#education" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#portfolio" },
  { label: "ACHIEVEMENTS", href: "#achievements" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card shadow-sm"
          : "bg-card/90 backdrop-blur-sm"
      }`}
    >
      <div className="section-container flex items-center justify-between h-14">
        <button
          onClick={() => handleClick("#home")}
          className="text-sm font-bold tracking-wider text-primary uppercase"
        >
          EXPERTISE
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-0">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleClick(l.href)}
                className="text-xs font-semibold tracking-wider px-4 py-2 text-foreground/70 hover:text-primary transition-colors uppercase"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border">
          <ul className="section-container py-3 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleClick(l.href)}
                  className="block w-full text-left text-xs font-semibold tracking-wider text-foreground/70 hover:text-primary
                    px-3 py-2.5 transition-colors uppercase"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
