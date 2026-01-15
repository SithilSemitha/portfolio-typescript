"use client"

import { useState } from "react"

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 78 },
      { name: "Redis", level: 72 },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Figma", level: 70 },
      { name: "Linux", level: 82 },
    ],
  },
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Skills" index="02" />

        {/* Category tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-4 py-2 font-mono text-sm rounded border transition-all duration-300 whitespace-nowrap ${
                activeCategory === index
                  ? "border-primary bg-primary/10 text-primary glow-border"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              <span className="text-primary/50">{"<"}</span>
              {category.name}
              <span className="text-primary/50">{" />"}</span>
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid gap-4">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} delay={index * 100} />
          ))}
        </div>

        {/* Tech stack icons */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="font-mono text-xs text-muted-foreground mb-4">
            <span className="text-primary">$</span> ls tech-stack/
          </p>
          <div className="flex flex-wrap gap-3">
            {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "AWS", "Git"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 font-mono text-xs border border-border rounded bg-card/50 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
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

function SkillBar({ skill, delay }: { skill: { name: string; level: number }; delay: number }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-sm text-foreground">{skill.name}</span>
        <span className="font-mono text-xs text-primary">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_var(--glow)]"
          style={{
            width: `${skill.level}%`,
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}
