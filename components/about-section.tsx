"use client";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="About" index="01" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Photo area with glitch effect */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative aspect-square rounded-lg border border-border overflow-hidden bg-secondary/30">
              <img
                src="/profile.png"
                alt="Sithil Semitha"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute inset-0 scanlines opacity-50" />

              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary" />
            </div>
          </div>

          {/* Bio content */}
          <div className="space-y-6">
            <div className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">{"/**"}</span>
            </div>

            <p className="text-foreground leading-relaxed">
              {
                "I'm a software engineer based in Colombo, Sri Lanka with experience building web applications. I specialize in React, TypeScript, and Node.js ecosystems."
              }
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {
                "When I'm not coding, you'll find me contributing to open source projects, writing technical blog posts, or exploring the latest in AI and machine learning."
              }
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Currently focused on building scalable systems and creating
              delightful user experiences at innovative startups.
            </p>

            <div className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">{" */"}</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <StatItem value="5+" label="Years Exp" />
              <StatItem value="50+" label="Projects" />
              <StatItem value="10k+" label="Commits" />
            </div>
          </div>
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

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-primary glow-text">{value}</div>
      <div className="text-xs font-mono text-muted-foreground mt-1">
        {label}
      </div>
    </div>
  );
}
