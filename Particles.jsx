import { useEffect, useRef } from 'react'

export default function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, pts = []
    const NUM = 90, MAX_D = 130, SPD = 0.35

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    function rand(a, b) { return a + Math.random() * (b - a) }

    function init() {
      pts = []
      for (let i = 0; i < NUM; i++) {
        pts.push({
          x: rand(0, W), y: rand(0, H),
          vx: rand(-SPD, SPD), vy: rand(-SPD, SPD),
          r: rand(1, 2.2),
          color: `rgba(${rand(60, 140) | 0},${rand(160, 220) | 0},${rand(200, 255) | 0},`
        })
      }
    }

    resize()
    window.addEventListener('resize', () => { resize(); init() })
    init()

    const mouse = { x: -999, y: -999 }
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY })

    let animId
    function draw() {
      ctx.clearRect(0, 0, W, H)
      for (let p of pts) {
        let dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.sqrt(dx * dx + dy * dy)
        if (d < 120) { p.vx += dx / d * 0.012; p.vy += dy / d * 0.012 }
        p.x += p.vx; p.y += p.vy
        let s = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (s > 1.2) { p.vx /= s; p.vy /= s }
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          let dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy)
          if (d < MAX_D) {
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(99,179,237,${(1 - d / MAX_D) * 0.4})`; ctx.lineWidth = 0.5; ctx.stroke()
          }
        }
      }
      for (let p of pts) {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color + '0.8)'; ctx.fill()
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}
