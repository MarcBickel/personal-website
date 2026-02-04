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

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
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

      // Draw grid dots
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const distance = Math.sqrt(
            Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2)
          )
          
          const opacity = Math.max(0, 1 - distance / maxDistance) * 0.3
          
          ctx.beginPath()
          ctx.arc(x, y, dotSize + opacity * 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(37, 99, 235, ${opacity})`
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
