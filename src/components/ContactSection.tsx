import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Mail, Linkedin, Send, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, hsl(33, 90%, 55%), transparent 70%)' }}
      />

      <div className="section-container max-w-3xl relative z-10">
        <div className="reveal text-center mb-14">
          <p className="section-label justify-center">Contact</p>
          <h2 className="section-title">Let's Connect</h2>
          <p className="text-muted-foreground italic font-display text-lg">
            "Let's collaborate to drive innovation in healthcare."
          </p>
        </div>

        <div className="reveal stagger-1 flex justify-center gap-4 mb-14">
          <a
            href="mailto:rajgor.v@northeastern.edu"
            className="group flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card border border-border text-sm font-medium text-foreground
              hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail size={16} className="text-primary" />
            Email
            <ArrowUpRight size={12} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/vrundarajgor"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card border border-border text-sm font-medium text-foreground
              hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Linkedin size={16} className="text-secondary" />
            LinkedIn
            <ArrowUpRight size={12} className="text-muted-foreground group-hover:text-secondary transition-colors" />
          </a>
        </div>

        <form onSubmit={handleSubmit} className="reveal stagger-2 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-foreground
                text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2
                focus:ring-primary/20 focus:border-primary/40 transition-all input-glow"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-foreground
                text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2
                focus:ring-primary/20 focus:border-primary/40 transition-all input-glow"
            />
          </div>
          <textarea
            placeholder="Your message"
            rows={5}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-foreground
              text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2
              focus:ring-primary/20 focus:border-primary/40 transition-all resize-none input-glow"
          />
          <div className="text-center pt-2">
            <button
              type="submit"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-primary text-primary-foreground
                font-semibold rounded-xl transition-all duration-300 hover:shadow-xl
                hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              <Send size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              Send Message
            </button>
          </div>
          {submitted && (
            <p className="text-center text-sm text-secondary font-semibold animate-[fade-in_0.3s_ease-out]">
              ✓ Thank you! Your message has been received.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
