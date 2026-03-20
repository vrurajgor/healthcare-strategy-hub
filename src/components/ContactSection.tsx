import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Mail, Linkedin, Send } from "lucide-react";

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
    <section id="contact" className="section-padding" ref={ref}>
      <div className="section-container max-w-3xl">
        <div className="reveal text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground italic">
            "Let's collaborate to drive innovation in healthcare."
          </p>
        </div>

        <div className="reveal stagger-1 flex justify-center gap-6 mb-12">
          <a
            href="mailto:vrunda.rajgor@example.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
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
              className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground
                text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2
                focus:ring-primary/20 focus:border-primary transition-all"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground
                text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2
                focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          <textarea
            placeholder="Your message"
            rows={5}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground
              text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2
              focus:ring-primary/20 focus:border-primary transition-all resize-none"
          />
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground
                font-medium rounded-md transition-all duration-200 hover:shadow-lg
                hover:shadow-primary/15 active:scale-[0.97]"
            >
              <Send size={15} />
              Send Message
            </button>
          </div>
          {submitted && (
            <p className="text-center text-sm text-secondary font-medium animate-[fade-in_0.3s_ease-out]">
              Thank you! Your message has been received.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
