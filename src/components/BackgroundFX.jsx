import { useEffect, useRef } from 'react'

const rand = (a, b) => Math.random() * (b - a) + a

export default function BackgroundFX() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: -999, y: -999, tx: -999, ty: -999 }
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches
    let mobileAmbient = coarsePointer || window.innerWidth < 700
    let w = 0
    let h = 0
    let raf = 0
    let squares = []
    let dots = []

    const build = () => {
      const small = w < 700
      squares = Array.from({ length: small ? 9 : 18 }, () => ({
        x: rand(0, w),
        y: rand(0, h),
        size: rand(40, small ? 120 : 220),
        vx: rand(-0.06, 0.06),
        vy: rand(-0.14, 0.14),
        a: rand(0.1, 0.34),
        lw: Math.random() < 0.2 ? 1.5 : 1,
        line: Math.random() < 0.55,
        horizontal: Math.random() < 0.5,
        phase: rand(0, 6.28),
        spark: Math.random() < 0.4,
        yellow: Math.random() < 0.18,
      }))
      dots = Array.from({ length: small ? 60 : 140 }, () => ({
        x: rand(0, w),
        y: rand(0, h),
        r: rand(0.6, 1.8),
        ph: rand(0, 6.28),
        sp: rand(0.6, 1.8),
        vy: rand(-0.05, 0.05),
        yellow: Math.random() < 0.08,
        box: Math.random() < 0.25,
      }))
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h)

      const base = ctx.createLinearGradient(0, 0, w, h)
      base.addColorStop(0, '#0c0f16')
      base.addColorStop(0.5, '#07090d')
      base.addColorStop(1, '#0b0d12')
      ctx.fillStyle = base
      ctx.fillRect(0, 0, w, h)

      ctx.fillStyle = 'rgba(255,255,255,0.025)'
      ctx.beginPath()
      ctx.moveTo(w * 0.62, 0)
      ctx.lineTo(w, 0)
      ctx.lineTo(w, h * 0.7)
      ctx.closePath()
      ctx.fill()

      const pulse = 0.05 + 0.02 * Math.sin(t * 0.0008)
      const glow = ctx.createRadialGradient(w * 0.55, h * 0.5, 0, w * 0.55, h * 0.5, Math.max(w, h) * 0.5)
      glow.addColorStop(0, `rgba(255,255,255,${pulse})`)
      glow.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, w, h)

      // Desktop follows the real pointer. Touch devices get a slow ambient
      // spotlight instead, because phones/tablets do not have a mouse cursor.
      mobileAmbient = coarsePointer || w < 700
      if (mobileAmbient && !reduce) {
        mouse.tx = w * (0.5 + 0.27 * Math.sin(t * 0.00022))
        mouse.ty = h * (0.35 + 0.22 * Math.cos(t * 0.00019))
        if (mouse.x < -900) { mouse.x = mouse.tx; mouse.y = mouse.ty }
      }
      mouse.x += (mouse.tx - mouse.x) * (mobileAmbient ? 0.025 : 0.08)
      mouse.y += (mouse.ty - mouse.y) * (mobileAmbient ? 0.025 : 0.08)
      if (mouse.x > -900) {
        const spot = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mobileAmbient ? 250 : 320)
        spot.addColorStop(0, mobileAmbient ? 'rgba(255,210,31,0.09)' : 'rgba(255,210,31,0.11)')
        spot.addColorStop(1, 'rgba(255,210,31,0)')
        ctx.fillStyle = spot
        ctx.fillRect(0, 0, w, h)
      }

      for (const s of squares) {
        if (!reduce) {
          s.x += s.vx
          s.y += s.vy
          if (s.y < -s.size) s.y = h
          if (s.y > h) s.y = -s.size
          if (s.x < -s.size) s.x = w
          if (s.x > w) s.x = -s.size
        }
        const tw = 0.7 + 0.3 * Math.sin(t * 0.001 + s.phase)
        const col = s.yellow ? '255,210,31' : '255,255,255'

        ctx.lineWidth = s.lw
        ctx.strokeStyle = `rgba(${col},${s.a * tw})`
        ctx.strokeRect(s.x, s.y, s.size, s.size)

        if (s.line) {
          ctx.lineWidth = 1
          ctx.strokeStyle = `rgba(255,255,255,${s.a * 0.45})`
          ctx.beginPath()
          if (s.horizontal) {
            const ly = s.y + s.size * 0.3
            ctx.moveTo(s.x, ly)
            ctx.lineTo(s.x > w / 2 ? w : 0, ly)
          } else {
            const lx = s.x + s.size * 0.3
            ctx.moveTo(lx, s.y)
            ctx.lineTo(lx, s.y > h / 2 ? h : 0)
          }
          ctx.stroke()
        }

        if (s.spark) {
          ctx.fillStyle = `rgba(${col},${0.35 + 0.65 * tw})`
          ctx.fillRect(s.x + s.size - 3, s.y - 3, 6, 6)
        }
      }

      for (const d of dots) {
        if (!reduce) {
          d.y += d.vy
          if (d.y < 0) d.y = h
          if (d.y > h) d.y = 0
        }
        const a = 0.2 + 0.8 * (0.5 + 0.5 * Math.sin(t * 0.001 * d.sp + d.ph))
        ctx.fillStyle = d.yellow ? `rgba(255,210,31,${a})` : `rgba(255,255,255,${a * 0.8})`
        if (d.box) {
          ctx.fillRect(d.x, d.y, d.r * 2, d.r * 2)
        } else {
          ctx.beginPath()
          ctx.arc(d.x, d.y, d.r, 0, 6.2832)
          ctx.fill()
        }
      }
    }

    const loop = (t) => {
      draw(t)
      raf = requestAnimationFrame(loop)
    }

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      build()
      if (reduce) draw(0)
    }

    const onMove = (e) => {
      // Ignore touch-generated pointer events; mobile ambient motion is automatic.
      if (e.pointerType === 'touch' || mobileAmbient) return
      mouse.tx = e.clientX
      mouse.ty = e.clientY
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove)
    if (!reduce) raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />
}
