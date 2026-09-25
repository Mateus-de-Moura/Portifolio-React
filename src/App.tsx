import { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowDown, Briefcase, Check, Copy, GraduationCap, Mail, MapPin, MessageCircle, Phone, Rocket, Sparkles, Award, Languages } from 'lucide-react'
import { certificates, courses, education, experiences, languages, profile, projects, skillGroups, stats } from './data'
import { Counter, CursorGlow, Particles, Reveal, TiltCard, Typewriter } from './effects'

const nav = [
  ['sobre', 'Sobre'], ['experiencia', 'Experiência'], ['projetos', 'Projetos'], ['skills', 'Skills'], ['contato', 'Contato'],
]

function Section({ id, kicker, title, children }: { id: string; kicker: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
      <Reveal>
        <p className="font-mono text-sm text-cyan-400">// {kicker}</p>
        <h2 className="mt-2 text-4xl font-bold sm:text-5xl">{title}</h2>
        <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  )
}

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 font-mono text-xs text-purple-200">
    {children}
  </span>
)

export default function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const [copied, setCopied] = useState(false)
  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true); setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <Particles />
      <CursorGlow />
      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400" />

      {/* NAV */}
      <motion.header
        initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
        className="fixed inset-x-0 top-3 z-40 mx-auto flex w-[calc(100%-2rem)] max-w-5xl items-center justify-between rounded-full glass px-5 py-3"
      >
        <a href="#" className="font-mono font-semibold">
          <span className="text-purple-400">&lt;</span>MM<span className="text-cyan-400"> /&gt;</span>
        </a>
        <nav className="hidden gap-6 text-sm text-gray-300 md:flex">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="transition hover:text-cyan-300">{label}</a>
          ))}
        </nav>
        <a href="#contato" className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-4 py-1.5 text-sm font-medium shadow-lg shadow-purple-600/30 transition hover:scale-105">
          Contratar
        </a>
      </motion.header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-4 sm:px-6">
        <div className="grid-bg absolute inset-0 -z-10" />
        <div className="absolute -left-40 top-20 -z-10 h-96 w-96 animate-pulse rounded-full bg-purple-700/30 blur-3xl" />
        <div className="absolute -right-40 bottom-20 -z-10 h-96 w-96 animate-pulse rounded-full bg-cyan-600/20 blur-3xl" />

        <div className="mx-auto w-full max-w-6xl pt-24">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Aberto a novas oportunidades
          </motion.div>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
            {'Olá, eu sou'.split(' ').map((w, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }} className="mr-4 inline-block">{w}</motion.span>
            ))}
            <br />
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
              className="grad-text inline-block">{profile.name}</motion.span>
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="mt-6 text-xl sm:text-2xl">
            <span className="text-gray-400">&gt; </span><Typewriter words={profile.roles} />
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
            className="mt-6 max-w-2xl text-lg text-gray-400">
            Construo APIs, microsserviços e integrações em .NET que aguentam a operação real — do banco à tela, do deploy à observabilidade.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
            className="mt-10 flex flex-wrap gap-4">
            <a href="#projetos" className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-3 font-medium shadow-xl shadow-purple-600/30 transition hover:scale-105">
              <span className="relative z-10 flex items-center gap-2"><Rocket size={18} /> Ver projetos</span>
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition duration-500 group-hover:translate-x-full" />
            </a>
            <a href="#contato" className="rounded-xl glass px-6 py-3 font-medium transition hover:border-cyan-400/50 hover:text-cyan-300">
              Vamos conversar
            </a>
          </motion.div>
        </div>

        <motion.a href="#sobre" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-cyan-300">
          <ArrowDown />
        </motion.a>
      </section>

      {/* SOBRE */}
      <Section id="sobre" kicker="sobre mim" title="Quem sou eu">
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <TiltCard className="p-8">
              <Sparkles className="text-purple-400" />
              <p className="mt-4 text-lg leading-relaxed text-gray-300">{profile.summary}</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2"><MapPin size={16} className="text-cyan-400" />{profile.location}</span>
                <span className="flex items-center gap-2"><Briefcase size={16} className="text-cyan-400" />{profile.role}</span>
              </div>
            </TiltCard>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <TiltCard className="flex h-full flex-col justify-center p-6 text-center">
                  <div className="grad-text text-4xl font-bold sm:text-5xl"><Counter to={s.value} suffix={s.suffix} /></div>
                  <div className="mt-2 text-sm text-gray-400">{s.label}</div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* EXPERIÊNCIA */}
      <Section id="experiencia" kicker="trajetória" title="Experiência profissional">
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-purple-500 via-cyan-400 to-transparent sm:left-1/2" />
          {experiences.map((e, i) => (
            <Reveal key={e.company} delay={0.05}
              className={`relative mb-10 pl-12 sm:w-1/2 sm:pl-0 ${i % 2 ? 'sm:ml-auto sm:pl-10' : 'sm:pr-10'}`}>
              <span className={`absolute left-2.5 top-7 h-3.5 w-3.5 rounded-full border-2 border-cyan-300 bg-[#05050d] shadow-[0_0_16px_#22d3ee] ${i % 2 ? 'sm:-left-[7px]' : 'sm:left-auto sm:-right-[7px]'}`} />
              <TiltCard className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs text-cyan-400">{e.period}</span>
                  {e.current && <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs text-emerald-300">atual</span>}
                </div>
                <h3 className="mt-2 text-xl font-bold">{e.role}</h3>
                <p className="grad-text font-semibold">{e.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{e.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">{e.stack.map(s => <Chip key={s}>{s}</Chip>)}</div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROJETOS */}
      <Section id="projetos" kicker="projetos" title="O que eu construí">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.15}>
              <TiltCard className="group h-full">
                <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                  <div className="grid-bg absolute inset-0 opacity-60" />
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                    className="absolute -right-10 -top-10 h-48 w-48 rounded-full border-[24px] border-white/20" />
                  <div className="absolute bottom-4 left-5 font-mono text-sm text-black/70">{p.tag}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold transition group-hover:text-cyan-300">{p.title}</h3>
                  <p className="mt-3 text-gray-400">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{p.stack.map(s => <Chip key={s}>{s}</Chip>)}</div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" kicker="stack" title="Tecnologias">
        <div className="relative mb-12 overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            className="flex w-max gap-4">
            {[...Array(2)].flatMap((_, k) => skillGroups.flatMap(g => g.items).map(s => (
              <span key={s + k} className="glass whitespace-nowrap rounded-xl px-5 py-3 font-mono text-lg text-gray-200">{s}</span>
            )))}
          </motion.div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.1}>
              <TiltCard className="h-full p-6">
                <h3 className="grad-text text-lg font-bold">{g.title}</h3>
                <ul className="mt-4 space-y-2">
                  {g.items.map(s => (
                    <li key={s} className="flex items-center gap-2 text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />{s}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FORMAÇÃO */}
      <Section id="formacao" kicker="aprendizado contínuo" title="Formação & certificados">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal>
            <TiltCard className="h-full p-6">
              <GraduationCap className="text-purple-400" />
              {education.map(e => (
                <div key={e.title} className="mt-4">
                  <h3 className="font-bold">{e.title}</h3>
                  <p className="text-sm text-gray-400">{e.place} · <span className="text-cyan-400">{e.period}</span></p>
                </div>
              ))}
              <Languages className="mt-6 text-purple-400" />
              {languages.map(l => (
                <p key={l.name} className="mt-2 text-sm"><span className="font-semibold">{l.name}</span> <span className="text-gray-400">— {l.level}</span></p>
              ))}
            </TiltCard>
          </Reveal>
          <Reveal delay={0.1}>
            <TiltCard className="h-full p-6">
              <Award className="text-purple-400" />
              {certificates.map(c => (
                <div key={c.title} className="mt-4">
                  <h3 className="font-bold">{c.title}</h3>
                  <p className="text-sm text-gray-400">{c.place}</p>
                  <p className="font-mono text-xs text-cyan-400">{c.detail}</p>
                </div>
              ))}
            </TiltCard>
          </Reveal>
          <Reveal delay={0.2}>
            <TiltCard className="h-full p-6">
              <Sparkles className="text-purple-400" />
              <h3 className="mt-4 font-bold">Cursos complementares</h3>
              <div className="mt-4 flex flex-wrap gap-2">{courses.map(c => <Chip key={c}>{c}</Chip>)}</div>
            </TiltCard>
          </Reveal>
        </div>
      </Section>

      {/* CONTATO */}
      <Section id="contato" kicker="contato" title="Bora construir algo?">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl p-[1px]">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,#a855f7,#22d3ee,#3b82f6,#a855f7)]" />
            <div className="relative rounded-3xl bg-[#0a0a16] p-8 text-center sm:p-14">
              <p className="mx-auto max-w-xl text-lg text-gray-300">
                Tem uma vaga, um projeto ou uma ideia? Me chama — respondo rápido.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-3 font-medium shadow-xl shadow-purple-600/30 transition hover:scale-105">
                  <Mail size={18} /> {profile.email}
                </a>
                <button onClick={copyEmail} className="flex items-center gap-2 rounded-xl glass px-5 py-3 transition hover:text-cyan-300">
                  {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />} {copied ? 'Copiado!' : 'Copiar email'}
                </button>
                <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl glass px-5 py-3 transition hover:text-emerald-300">
                  <MessageCircle size={18} /> WhatsApp
                </a>
                <a href={`tel:+${profile.whatsapp}`} className="flex items-center gap-2 rounded-xl glass px-5 py-3 transition hover:text-cyan-300">
                  <Phone size={18} /> {profile.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <footer className="py-10 text-center font-mono text-sm text-gray-500">
        © {new Date().getFullYear()} {profile.name} · feito com React, Tailwind & Framer Motion
      </footer>
    </>
  )
}
