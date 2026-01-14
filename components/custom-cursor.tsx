"use client"

import { useEffect, useState, useCallback } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
    setIsVisible(true)

    const target = e.target as HTMLElement
    const isClickable =
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      target.closest("a") ||
      target.closest("button") ||
      window.getComputedStyle(target).cursor === "pointer"

    setIsPointer(isClickable)
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", () => setIsClicking(true))
    window.addEventListener("mouseup", () => setIsClicking(false))
    window.addEventListener("mouseleave", () => setIsVisible(false))
    window.addEventListener("mouseenter", () => setIsVisible(true))

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", () => setIsClicking(true))
      window.removeEventListener("mouseup", () => setIsClicking(false))
      window.removeEventListener("mouseleave", () => setIsVisible(false))
      window.removeEventListener("mouseenter", () => setIsVisible(true))
    }
  }, [handleMouseMove])

  useEffect(() => {
    let animationFrameId: number
    const animateTrail = () => {
      setTrailPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }))
      animationFrameId = requestAnimationFrame(animateTrail)
    }
    animationFrameId = requestAnimationFrame(animateTrail)
    return () => cancelAnimationFrame(animationFrameId)
  }, [position])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full bg-primary transition-all duration-100 ${
            isClicking ? "w-2 h-2" : isPointer ? "w-4 h-4" : "w-3 h-3"
          }`}
          style={{
            boxShadow: "0 0 10px var(--glow), 0 0 20px var(--glow)",
          }}
        />
      </div>

      {/* Trailing ring */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: trailPosition.x,
          top: trailPosition.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full border border-primary/50 transition-all duration-200 ${
            isClicking ? "w-8 h-8" : isPointer ? "w-12 h-12" : "w-10 h-10"
          }`}
          style={{
            boxShadow: "0 0 15px var(--glow)",
          }}
        />
      </div>

      {/* Cursor coordinates display */}
      <div
        className="fixed pointer-events-none z-[9997] font-mono text-xs text-primary/60"
        style={{
          left: position.x + 20,
          top: position.y + 20,
        }}
      >
        <span className="opacity-50">x:</span>
        {Math.round(position.x)} <span className="opacity-50">y:</span>
        {Math.round(position.y)}
      </div>
    </>
  )
}
