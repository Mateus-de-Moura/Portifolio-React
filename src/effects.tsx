import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from 'react'
import { animate, motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

/** Fundo com partículas conectadas que reagem ao mouse. */
export function Particles() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    let w = 0, h = 0, raf = 0
    const mouse = { x: -999, y: -999 }
    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    resize()
    const count = Math.min(90, Math.floor((w * h) / 16000))
    const pts = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
    }))
    const onMove = (e: globalThis.MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y)
        if (dm < 120) { p.x += (p.x - mouse.x) / dm; p.y += (p.y - mouse.y) / dm }
        ctx.fillStyle = 'rgba(168,85,247,0.7)'
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2); ctx.fill()
      }
      for (let i = 0; i < pts.length; i++)
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y)
          if (d < 130) {
            ctx.strokeStyle = `rgba(34,211,238,${0.18 * (1 - d / 130)})`
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke()
          }
        }
      raf = requestAnimationFrame(tick)
    }
    tick()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])
  return <canvas ref={ref} className="pointer-events-none fixed inset-0 -z-10" />
}

/** Brilho que segue o cursor. */
export function CursorGlow() {
  const x = useMotionValue(-500), y = useMotionValue(-500)
  const sx = useSpring(x, { stiffness: 120, damping: 20 })
  const sy = useSpring(y, { stiffness: 120, damping: 20 })
  useEffect(() => {
    const move = (e: globalThis.MouseEvent) => { x.set(e.clientX - 250); y.set(e.clientY - 250) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])
  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-3xl"
    />
  )
}

/** Texto que digita e apaga, alternando as palavras. */
export function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  useEffect(() => {
    const word = words[i % words.length]
    const done = !deleting && text === word
    const t = setTimeout(() => {
      if (done) return setDeleting(true)
      if (deleting && text === '') { setDeleting(false); setI(i + 1); return }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, done ? 1600 : deleting ? 40 : 80)
    return () => clearTimeout(t)
  }, [text, deleting, i, words])
  return (
    <span className="font-mono text-cyan-300">
      {text}<span className="blink">▍</span>
    </span>
  )
}

/** Card com inclinação 3D e brilho que acompanha o mouse. */
export function TiltCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const mx = useMotionValue(0.5), my = useMotionValue(0.5)
  const rx = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 })
  const bg = useTransform([mx, my], ([a, b]) =>
    `radial-gradient(400px circle at ${Number(a) * 100}% ${Number(b) * 100}%, rgba(168,85,247,0.18), transparent 60%)`)
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width); my.set((e.clientY - r.top) / r.height)
  }
  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={() => { mx.set(0.5); my.set(0.5) }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={`glass relative overflow-hidden rounded-2xl ${className}`}
    >
      <motion.div style={{ background: bg }} className="pointer-events-none absolute inset-0" />
      <div className="relative">{children}</div>
    </motion.div>
  )
}

/** Surge ao entrar na tela durante a rolagem. */
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Número que conta até o valor quando aparece na tela. */
export function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.6, onUpdate: n => setV(Math.round(n)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{v}{suffix}</span>
}
