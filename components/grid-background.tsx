"use client"

import { useEffect, useState } from "react"

export function GridBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Radial glow following mouse */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 transition-opacity duration-300"
        style={{
          left: mousePos.x - 300,
          top: mousePos.y - 300,
          background: "radial-gradient(circle, var(--glow) 0%, transparent 70%)",
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-primary/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/20" />

      {/* Floating code snippets */}
      <div className="absolute top-20 left-10 font-mono text-xs text-primary/10 rotate-12">
        {"const dev = () => { }"}
      </div>
      <div className="absolute bottom-40 right-20 font-mono text-xs text-primary/10 -rotate-6">{"<Component />"}</div>
      <div className="absolute top-1/2 right-10 font-mono text-xs text-primary/10 rotate-3">{"npm run build"}</div>
    </div>
  )
}
