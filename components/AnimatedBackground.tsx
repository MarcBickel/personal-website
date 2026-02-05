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
      pulseRadius = 0
      pulseOpacity = 0.6
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)

    // Grid settings
    const gridSize = 60
    const dotSize = 2
    const maxDistance = 200

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Animate pulse radius
      if (pulseOpacity > 0) {
        pulseRadius += 3
        pulseOpacity -= 0.01
      }

      // Draw grid lines (always visible)
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.08)'
      ctx.lineWidth = 1
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw grid dots with mouse interaction
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const distance = Math.sqrt(
            Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2)
          )
          
          // Pulsing effect near mouse
          const pulseEffect = pulseOpacity > 0 && Math.abs(distance - pulseRadius) < 40
            ? (1 - Math.abs(distance - pulseRadius) / 40) * pulseOpacity
            : 0
          
          // Base visibility - dots are always somewhat visible
          const baseOpacity = 0.15 + Math.max(0, 1 - distance / maxDistance) * 0.5
          const totalOpacity = Math.min(1, baseOpacity + pulseEffect)
          
          // Draw dot
          ctx.beginPath()
          ctx.arc(x, y, dotSize + totalOpacity * 4, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(37, 99, 235, ${totalOpacity})`
          ctx.fill()
          
          // Draw glow for bright dots
          if (totalOpacity > 0.5) {
            ctx.beginPath()
            ctx.arc(x, y, (dotSize + totalOpacity * 4) * 2, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(37, 99, 235, ${totalOpacity * 0.3})`
            ctx.fill()
          }
        }
      }

      // Draw connecting lines near mouse (stronger)
      ctx.strokeStyle = `rgba(37, 99, 235, 0.2)`
      ctx.lineWidth = 1
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const distance = Math.sqrt(
            Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2)
          )
          
          if (distance < maxDistance) {
            const lineOpacity = (1 - distance / maxDistance) * 0.3
            ctx.strokeStyle = `rgba(37, 99, 235, ${lineOpacity})`
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
        ctx.lineWidth = 2
        ctx.stroke()
        
        // Inner glow
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, pulseRadius * 0.8, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(37, 99, 235, ${pulseOpacity * 0.5})`
        ctx.lineWidth = 4
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
      style={{ opacity: 1 }}
    />
  )
}
