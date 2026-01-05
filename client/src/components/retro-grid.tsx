import { useEffect, useState, useMemo, useRef } from "react"
import { cn } from "@/lib/utils"

interface RetroGridProps {
  className?: string
}

export function RetroGrid({ className }: RetroGridProps) {
  const rotationRef = useRef(0)
  const [, forceUpdate] = useState(0)
  const [thunderFlash, setThunderFlash] = useState(0)

  useEffect(() => {
    let animationFrameId: number
    let lastTime = performance.now()

    const animate = (currentTime: number) => {
      const delta = currentTime - lastTime
      lastTime = currentTime
      rotationRef.current = (rotationRef.current + delta * 0.008) % 360
      forceUpdate(prev => prev + 1)
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  useEffect(() => {
    const triggerThunder = () => {
      setThunderFlash(1)
      setTimeout(() => setThunderFlash(0.8), 50)
      setTimeout(() => setThunderFlash(0), 100)
      setTimeout(() => setThunderFlash(0.9), 180)
      setTimeout(() => setThunderFlash(0), 250)
      setTimeout(() => setThunderFlash(0.5), 320)
      setTimeout(() => setThunderFlash(0), 450)
    }

    const interval = setInterval(triggerThunder, 7000)

    const initialDelay = setTimeout(triggerThunder, 2000)

    return () => {
      clearInterval(interval)
      clearTimeout(initialDelay)
    }
  }, [])

  const verticalLines = 32
  const horizontalRings = 24
  const height = 900
  const waistRadius = 100
  const flareFactor = 0.0008

  const generateVerticalPath = (angleOffset: number) => {
    const points: string[] = []
    for (let y = -height / 2; y <= height / 2; y += 6) {
      const radius = waistRadius + y * y * flareFactor
      const angle = (angleOffset + rotationRef.current) * (Math.PI / 180)
      const x = radius * Math.cos(angle)
      points.push(`${x.toFixed(2)},${y}`)
    }
    return points.join(" ")
  }

  const getLineDepth = (angleOffset: number) => {
    const angle = (angleOffset + rotationRef.current) % 360
    const normalizedAngle = angle < 0 ? angle + 360 : angle
    const depth = Math.cos(normalizedAngle * (Math.PI / 180))
    return depth
  }

  const rings = useMemo(() => {
    const result = []
    for (let i = 0; i <= horizontalRings; i++) {
      const y = (i - horizontalRings / 2) * (height / horizontalRings)
      const radius = waistRadius + y * y * flareFactor
      result.push({ y, radius })
    }
    return result
  }, [])

  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      cx: Math.sin(i * 123.456) * 550,
      cy: Math.cos(i * 321.654) * 420,
      r: 1 + (i % 3),
    }))
  }, [])

  const sortedLines = useMemo(() => {
    return Array.from({ length: verticalLines }).map((_, i) => {
      const angle = (i * 360) / verticalLines
      return { index: i, angle }
    })
  }, [])

  return (
    <div
      className={cn("fixed inset-0 overflow-hidden pointer-events-none", className)}
      style={{ zIndex: 0 }}
    >
      <div className="absolute inset-0 bg-background" />

      <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 1 }}>
        <svg
          viewBox="-600 -450 1200 900"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          style={{
            filter: "drop-shadow(0 0 15px hsl(var(--primary)))",
            opacity: 0.75,
          }}
        >
          {/* Back lines first (depth < 0) */}
          {sortedLines
            .filter((line) => getLineDepth(line.angle) < 0)
            .sort((a, b) => getLineDepth(a.angle) - getLineDepth(b.angle))
            .map((line) => {
              const depth = getLineDepth(line.angle)
              const opacity = 0.1 + Math.abs(depth) * 0.15
              const strokeWidth = 0.3 + Math.abs(depth) * 0.4

              return (
                <polyline
                  key={`v-${line.index}`}
                  points={generateVerticalPath(line.angle)}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth={strokeWidth}
                  opacity={opacity}
                />
              )
            })}

          {/* Horizontal Rings (Latitudes) */}
          {rings.map((ring, i) => (
            <ellipse
              key={`h-${i}`}
              cx="0"
              cy={ring.y}
              rx={ring.radius}
              ry={ring.radius * 0.3}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              opacity="0.3"
            />
          ))}

          {/* Front lines (depth >= 0) */}
          {sortedLines
            .filter((line) => getLineDepth(line.angle) >= 0)
            .sort((a, b) => getLineDepth(a.angle) - getLineDepth(b.angle))
            .map((line) => {
              const depth = getLineDepth(line.angle)
              const opacity = 0.4 + depth * 0.6
              const strokeWidth = 0.8 + depth * 1.5

              return (
                <polyline
                  key={`v-${line.index}`}
                  points={generateVerticalPath(line.angle)}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth={strokeWidth}
                  opacity={opacity}
                />
              )
            })}

          {/* Particles/Stars */}
          {particles.map((p, i) => (
            <circle
              key={`p-${i}`}
              cx={p.cx}
              cy={p.cy}
              r={p.r}
              fill="hsl(var(--primary))"
              opacity={0.3 + Math.sin(rotationRef.current * 0.03 + i) * 0.25}
            />
          ))}
        </svg>
      </div>

      {/* Vignette & Gradients for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 25%, hsl(var(--background)) 80%)",
          zIndex: 2,
        }}
      />
      <div
        className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-background via-background/70 to-transparent"
        style={{ zIndex: 2 }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background via-background/70 to-transparent"
        style={{ zIndex: 2 }}
      />

      {/* Thunder Flash Effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-75"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,1) 0%, rgba(220,220,255,0.6) 30%, transparent 60%)",
          opacity: thunderFlash,
          zIndex: 3,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  )
}
