"use client"

import { useState, useEffect } from "react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Profile", href: "#profile" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-lg font-bold text-primary glow-text">
          {"<SS />"}
        </a>

        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 font-mono text-sm transition-colors group ${
                activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-primary/50">{"// "}</span>
              {item.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  activeSection === item.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                }`}
                style={{ boxShadow: "0 0 10px var(--glow)" }}
              />
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
