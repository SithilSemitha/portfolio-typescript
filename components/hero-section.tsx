"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

const titles = ["Full-Stack Developer", "UI/UX Enthusiast", "Open Source Contributor", "Problem Solver"]

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[titleIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setTitleIndex((prev) => (prev + 1) % titles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, titleIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        {/* Terminal-style container */}
        <div className="relative border border-border rounded-lg bg-card/50 backdrop-blur-sm overflow-hidden glow-border">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 font-mono text-xs text-muted-foreground">~/portfolio</span>
          </div>

          {/* Terminal content */}
          <div className="p-8 md:p-12 font-mono">
            <div className="text-muted-foreground text-sm mb-2">
              <span className="text-primary">$</span> cat intro.txt
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">Sithil Semitha</h1>

            <div className="text-xl md:text-2xl text-primary mb-6 h-8">
              <span className="text-muted-foreground">{"> "}</span>
              <span className="glow-text">{displayText}</span>
              <span className="animate-pulse">_</span>
            </div>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              Building digital experiences with clean code and creative solutions. Passionate about crafting performant
              applications and exploring new technologies.
            </p>

            <div className="text-muted-foreground text-sm mb-6">
              <span className="text-primary">$</span> ls social/
            </div>

            <div className="flex flex-wrap gap-4">
              <SocialLink href="https://github.com" icon={<Github size={20} />} label="github" />
              <SocialLink
                href="https://www.linkedin.com/in/sithil-semitha-b668b0228/"
                icon={<Linkedin size={20} />}
                label="Sithil Semitha"
              />
              <SocialLink href="mailto:sithilsemithad@gmail.com" icon={<Mail size={20} />} label="email" />
              <SocialLink href="#" icon={<FileText size={20} />} label="resume" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 px-4 py-2 border border-border rounded bg-secondary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
    >
      <span className="text-muted-foreground group-hover:text-primary transition-colors">{icon}</span>
      <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
        ./{label}
      </span>
    </a>
  )
}
