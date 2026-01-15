"use client"

import { useState } from "react"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "DevFlow",
    description:
      "A developer productivity platform with real-time collaboration, code review tools, and CI/CD integration.",
    image: "/developer-dashboard-dark-theme-code-editor.jpg",
    tags: ["React", "TypeScript", "Node.js", "WebSocket"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "CloudSync",
    description: "Multi-cloud file synchronization service with end-to-end encryption and intelligent caching.",
    image: "/cloud-storage-app-dark-mode-sync-files.jpg",
    tags: ["Next.js", "AWS", "PostgreSQL", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "AI Code Review",
    description: "Automated code review tool powered by machine learning that detects bugs and suggests improvements.",
    image: "/ai-code-review-interface-dark-theme-programming.jpg",
    tags: ["Python", "TensorFlow", "FastAPI", "React"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Terminal Portfolio",
    description: "An interactive terminal-style portfolio website with custom commands and animations.",
    image: "/terminal-command-line-interface-dark-green-text.jpg",
    tags: ["React", "Framer Motion", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
]

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Projects" index="04" />

        <div className="grid gap-8">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isHovered={hoveredProject === index}
                onHover={() => setHoveredProject(index)}
                onLeave={() => setHoveredProject(null)}
              />
            ))}
        </div>

        {/* Other projects */}
        <div className="mt-16">
          <h3 className="font-mono text-lg text-foreground mb-6">
            <span className="text-primary">{"// "}</span>Other Projects
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <SmallProjectCard key={project.title} project={project} />
              ))}
          </div>
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-border"
          >
            View All Projects
            <ArrowRight size={16} />
          </a>
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

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  live: string
  featured: boolean
}

function ProjectCard({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  project: Project
  index: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}) {
  const isEven = index % 2 === 0

  return (
    <div
      className={`group relative grid md:grid-cols-2 gap-6 items-center ${isEven ? "" : "md:direction-rtl"}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Image */}
      <div className={`relative overflow-hidden rounded-lg border border-border ${isEven ? "" : "md:order-2"}`}>
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        />
        {/* Scanlines overlay */}
        <div className="absolute inset-0 scanlines opacity-30" />

        {/* Corner brackets */}
        <div
          className={`absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-primary transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-primary transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-primary transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-primary transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Content */}
      <div className={`space-y-4 ${isEven ? "" : "md:order-1 md:text-right md:direction-ltr"}`}>
        <span className="font-mono text-xs text-primary">Featured Project</span>
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

        {/* Tags */}
        <div className={`flex flex-wrap gap-2 ${isEven ? "" : "md:justify-end"}`}>
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 font-mono text-xs border border-border rounded text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className={`flex gap-4 ${isEven ? "" : "md:justify-end"}`}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

function SmallProjectCard({ project }: { project: Project }) {
  return (
    <div className="group p-6 border border-border rounded-lg bg-card/30 hover:border-primary transition-all duration-300 hover:glow-border">
      <div className="flex items-start justify-between mb-4">
        <div className="font-mono text-3xl text-primary/30 group-hover:text-primary/60 transition-colors">{"{ }"}</div>
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="font-mono text-xs text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
