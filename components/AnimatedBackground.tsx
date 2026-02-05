'use client'

import { useEffect, useRef } from 'react'

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let mouseX = 0
    let mouseY = 0
    let pulseRadius = 0
    let pulseOpacity = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      // Reset pulse on mouse move
      pulseRadius = 0
      pulseOpacity = 0.4
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)

    // Grid settings
    const gridSize = 50
    const dotSize = 1
    const maxDistance = 150

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Animate pulse radius
      if (pulseOpacity > 0) {
        pulseRadius += 2
        pulseOpacity -= 0.008
      }

      // Draw grid dots
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const distance = Math.sqrt(
            Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2)
          )
          
          // Pulsing effect near mouse
          const pulseEffect = pulseOpacity > 0 && Math.abs(distance - pulseRadius) < 30
            ? (1 - Math.abs(distance - pulseRadius) / 30) * pulseOpacity
            : 0
          
          const baseOpacity = Math.max(0, 1 - distance / maxDistance) * 0.3
          const totalOpacity = Math.min(0.8, baseOpacity + pulseEffect)
          
          ctx.beginPath()
          ctx.arc(x, y, dotSize + totalOpacity * 3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(37, 99, 235, ${totalOpacity})`
          ctx.fill()
        }
      }

      // Draw connecting lines near mouse
      ctx.strokeStyle = `rgba(37, 99, 235, 0.1)`
      ctx.lineWidth = 0.5
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const distance = Math.sqrt(
            Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2)
          )
          
          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(mouseX, mouseY)
            ctx.stroke()
          }
        }
      }

      // Draw pulse ring
      if (pulseOpacity > 0) {
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, pulseRadius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(37, 99, 235, ${pulseOpacity})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
