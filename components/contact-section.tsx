"use client";

import type React from "react";

import { useState } from "react";
import { Send, MapPin, Mail, Terminal } from "lucide-react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Contact" index="06" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {"Let's Build Something"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {
                  "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!"
                }
              </p>
            </div>

            <div className="space-y-4">
              <ContactInfo
                icon={<Mail size={18} />}
                label="email"
                value="sithilsemithad@gmail.com"
              />
              <ContactInfo
                icon={<MapPin size={18} />}
                label="location"
                value="Colombo, Sri Lanka"
              />
              <ContactInfo
                icon={<Terminal size={18} />}
                label="status"
                value="Open to opportunities"
              />
            </div>

            {/* Terminal command */}
            <div className="p-4 border border-border rounded-lg bg-card/50 font-mono text-sm">
              <div className="text-muted-foreground mb-2">
                <span className="text-primary">$</span> echo $AVAILABILITY
              </div>
              <div className="text-green-400">
                {"Currently available for freelance work"}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            {submitted ? (
              <div className="h-full flex items-center justify-center border border-primary rounded-lg bg-primary/5 p-8 glow-border">
                <div className="text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <h4 className="text-lg font-bold text-primary mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {"I'll get back to you soon."}
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-mono text-xs text-muted-foreground mb-2">
                    <span className="text-primary">const</span> name{" "}
                    <span className="text-primary">=</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, name: e.target.value }))
                    }
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="'Your Name'"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-muted-foreground mb-2">
                    <span className="text-primary">const</span> email{" "}
                    <span className="text-primary">=</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, email: e.target.value }))
                    }
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="'your@email.com'"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-muted-foreground mb-2">
                    <span className="text-primary">const</span> message{" "}
                    <span className="text-primary">=</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, message: e.target.value }))
                    }
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="`Your message here...`"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-lg hover:opacity-90 transition-all duration-300 disabled:opacity-50 glow-border"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">Sending</span>
                      <span className="animate-bounce">...</span>
                    </>
                  ) : (
                    <>
                      <span>send(message)</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border text-center">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">{"<"}</span>
            Built with Next.js & Tailwind CSS
            <span className="text-primary">{" />"}</span>
          </p>
          <p className="font-mono text-xs text-muted-foreground mt-2">
            © 2026 Sithil Semitha. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ title, index }: { title: string; index: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-primary text-sm">{index}</span>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        {title}
      </h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

function ContactInfo({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center border border-border rounded-lg text-primary">
        {icon}
      </div>
      <div>
        <div className="font-mono text-xs text-muted-foreground">./{label}</div>
        <div className="text-foreground text-sm">{value}</div>
      </div>
    </div>
  );
}
