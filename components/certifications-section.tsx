"use client"

import { Award, ExternalLink, Calendar } from "lucide-react"

const certifications = [
  {
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2025",
    credentialId: "AWS-SAA-C03",
    link: "#",
    icon: "☁️",
  },
  {
    title: "Google Cloud Professional",
    issuer: "Google Cloud",
    date: "2024",
    credentialId: "GCP-PCD",
    link: "#",
    icon: "🔷",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta",
    date: "2024",
    credentialId: "META-FED",
    link: "#",
    icon: "⚛️",
  },
  {
    title: "MongoDB Developer",
    issuer: "MongoDB University",
    date: "2024",
    credentialId: "MDB-DEV",
    link: "#",
    icon: "🍃",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Certifications" index="05" />

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="group relative border border-border rounded-lg bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center border border-border rounded-lg bg-secondary/30 text-2xl group-hover:border-primary group-hover:bg-primary/10 transition-all">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-mono">{cert.issuer}</p>
                    </div>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-border rounded hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary" />
                  </a>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={14} />
                    <span className="font-mono">{cert.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Award size={14} />
                    <span className="font-mono text-xs">{cert.credentialId}</span>
                  </div>
                </div>

                {/* Terminal style decoration */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="font-mono text-xs text-muted-foreground">
                    <span className="text-primary">$</span> verify --cert="{cert.credentialId}"
                    <span className="text-green-400 ml-2">✓ valid</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ title, index }: { title: string; index: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-primary text-sm">{index}</span>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  )
}
