import { useEffect, useMemo, useState } from 'react'
import {
  heroContent,
  aboutContent,
  problemContent,
  solutionContent,
  impactContent,
  teamContent,
  trackRecordContent,
  partnersContent,
  contactContent,
  branding,
} from './content/siteContent'
import { useInView } from './hooks/useInView'
import { useCountUp } from './hooks/useCountUp'
import { Icon } from './components/Icon'
import './index.css'

const navItems = [
  { label: 'Who we are', href: '#about' },
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Impact', href: '#impact' },
  { label: 'Team', href: '#team' },
  { label: 'Milestones', href: '#track-record' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
]

const StatCounter = ({ target, suffix = '', prefix = '', decimals = 0, inView }) => {
  const value = useCountUp({ end: target, duration: 1800, inView })
  const formatted = useMemo(() => {
    const displayNumber = decimals ? Number(value.toFixed(decimals)) : Math.round(value)
    const formattedNumber = Number.isFinite(displayNumber)
      ? displayNumber.toLocaleString('en-US', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : '0'
    return `${prefix}${formattedNumber}${suffix}`
  }, [value, suffix, prefix, decimals])
  return <span>{formatted}</span>
}

const SectionWrapper = ({ id, className = '', children }) => (
  <section id={id} className={`relative overflow-hidden ${className}`}>
    <div className="section-container">{children}</div>
  </section>
)

function App() {
  const [scrollOffset, setScrollOffset] = useState(0)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMotionPreference = (event) => setReduceMotion(event.matches)
    setReduceMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleMotionPreference)

    return () => mediaQuery.removeEventListener('change', handleMotionPreference)
  }, [])

  useEffect(() => {
    if (reduceMotion) {
      setScrollOffset(0)
      return
    }

    const handleScroll = () => {
      setScrollOffset(window.scrollY * 0.18)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [reduceMotion])

  const closeMobileNav = () => setMobileNavOpen(false)

  const heroStyle = {
    transform: reduceMotion ? 'none' : `scale(1.05) translateY(${scrollOffset * 0.08}px)`,
    backgroundImage: `url(${heroContent.backgroundImage})`,
  }

  const { elementRef: impactRef, inView: impactInView } = useInView()
  const { elementRef: problemRef, inView: problemInView } = useInView()
  const { elementRef: solutionRef, inView: solutionInView } = useInView()
  const { elementRef: teamRef, inView: teamInView } = useInView()

  return (
    <div className="bg-white font-body text-slate-800">
      <header className="sticky top-0 z-40 border-b border-teal/30 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-6">
          <a href="#hero" className="flex items-center gap-3 focus-outline">
            <img
              src={branding.logo}
              alt={branding.alt}
              className="h-12 w-auto rounded-xl bg-white object-contain p-1.5 shadow-md shadow-navy/10"
              loading="eager"
              decoding="async"
            />
            <div className="flex flex-col leading-none">
              <span className="text-base font-semibold uppercase tracking-[0.18em] text-navy">TREM</span>
              <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.22em] text-slate-400 whitespace-nowrap">
                Technology Research & Engineering
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition duration-200 hover:text-navy focus-outline"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-teal px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-teal/30 transition duration-200 hover:-translate-y-0.5 focus-outline"
            >
              Request demo
            </a>
          </nav>

          <button
            type="button"
            className="rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:border-teal hover:text-teal focus-outline lg:hidden"
            onClick={() => setMobileNavOpen((prev) => !prev)}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {mobileNavOpen && (
          <div id="mobile-menu" className="border-t border-slate-200 bg-white shadow-lg lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base font-semibold text-slate-700"
                  onClick={closeMobileNav}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMobileNav}
                className="rounded-full bg-teal px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-teal/20"
              >
                Request demo
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section
          id="hero"
          className="relative overflow-hidden bg-midnight text-white"
        >
          <div
            className="absolute inset-0 origin-center scale-105 bg-cover bg-center bg-no-repeat transition-transform duration-700 will-change-transform"
            style={heroStyle}
            aria-hidden="true"
          />
          <div className="dark-overlay" aria-hidden="true" />
          <div className="section-container relative z-10 pb-32 pt-28 lg:pb-40 lg:pt-36">
            <div className="max-w-3xl space-y-6">
              <span className="badge">
                <svg className="h-4 w-4 text-teal" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <circle cx="10" cy="10" r="9" className="text-teal/20" />
                  <circle cx="10" cy="10" r="3" />
                </svg>
                {heroContent.badge}
              </span>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                {heroContent.title}
              </h1>
              <p className="max-w-2xl text-lg text-white/80 md:text-xl">{heroContent.subtitle}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={heroContent.primaryCta.href}
                  className="rounded-full bg-teal px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-teal/40 transition hover:-translate-y-1 focus-outline"
                >
                  {heroContent.primaryCta.label}
                </a>
                <a
                  href={heroContent.secondaryCta.href}
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:border-white focus-outline"
                >
                  {heroContent.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </section>

        <SectionWrapper id="about" className="bg-softgray">
          <div className="space-y-12">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <span className="inline-flex items-center justify-center gap-2 rounded-full bg-navy/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-navy/30">
                About TREM
              </span>
              <h2 className="font-heading text-4xl font-bold text-navy md:text-5xl">{aboutContent.title}</h2>
              <p className="text-lg text-slate-600 md:text-xl leading-relaxed">{aboutContent.description}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {aboutContent.pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/95 p-6 text-left shadow-sm shadow-navy/10 transition duration-300 hover:-translate-y-1 hover:shadow-elevated"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-transparent to-gold/10" aria-hidden="true" />
                  <div className="relative space-y-3">
                    <Icon name={pillar.icon} className="h-7 w-7 text-teal" />
                    <h3 className="text-lg font-semibold text-navy">{pillar.title}</h3>
                    <p className="text-sm text-slate-600">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              {aboutContent.gallery.map((item, index) => (
                <div
                  key={item.src}
                  className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/80 shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-elevated"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="problem">
          <div ref={problemRef} className="space-y-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="section-title text-navy">{problemContent.title}</h2>
              <p className="mt-4 text-lg text-slate-600 md:text-xl">{problemContent.description}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {problemContent.stats.map((stat, index) => {
                const isNumber = typeof stat.value === 'number'
                return (
                  <div
                    key={stat.label}
                    className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/95 px-6 py-8 text-center shadow-sm shadow-navy/10 transition duration-300 hover:-translate-y-1 hover:shadow-elevated"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-transparent to-gold/10" aria-hidden="true" />
                    <div className="relative space-y-3">
                      <Icon name={stat.icon} className="mx-auto h-6 w-6 text-teal" />
                      <div className="text-3xl font-bold text-navy">
                        {isNumber ? (
                          <StatCounter
                            target={problemInView ? stat.value : 0}
                            suffix={stat.suffix ?? (typeof stat.value === 'number' ? '%' : '')}
                            inView={problemInView}
                          />
                        ) : (
                          stat.value
                        )}
                      </div>
                      <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="solution" className="bg-softgray">
          <div ref={solutionRef} className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] xl:gap-16">
            <div className="space-y-8">
              <h2 className="section-title">{solutionContent.title}</h2>
              <p className="section-subtitle">{solutionContent.description}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {solutionContent.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex flex-col gap-1 rounded-2xl border border-white/70 bg-white/95 px-4 py-4 shadow-sm shadow-navy/10"
                  >
                    <span className="text-3xl font-semibold text-teal leading-none">
                      {metric.value}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{metric.label}</span>
                  </div>
                ))}
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {solutionContent.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="group relative overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-white via-white to-teal/10 p-6 shadow-sm shadow-navy/10 transition duration-300 hover:-translate-y-1 hover:shadow-elevated"
                  >
                    <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-teal/10 blur-2xl transition duration-300 group-hover:bg-teal/20" />
                    <h3 className="text-lg font-semibold text-navy">{feature.title}</h3>
                    <p className="mt-3 text-sm text-slate-600">{feature.description}</p>
                    <Icon name="arrow" className="mt-6 h-6 w-6 text-teal/80 transition duration-300 group-hover:translate-x-1" />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-teal/25 via-transparent to-gold/25 blur-3xl" aria-hidden="true" />
              <div className="relative w-full overflow-hidden rounded-[32px] border border-white/70 bg-white/95 p-6 shadow-card">
                {solutionContent.chartImage && (
                  <div className="mb-6 overflow-hidden rounded-2xl border border-white/70 shadow-sm shadow-navy/10">
                    <img
                      src={solutionContent.chartImage}
                      alt="TREM surgical device prototype comparison visual"
                      className="w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Performance comparison</p>
                    <p className="mt-1 text-lg font-semibold text-navy">Manual vs TREM vs Market</p>
                  </div>
                  <span className="rounded-full bg-gold/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Live data
                  </span>
                </div>
                <div className="space-y-5">
                  {[
                    { label: 'Manual ligation', value: 36, color: 'bg-slate-400' },
                    { label: 'Market devices', value: 22, color: 'bg-gold/70' },
                    { label: 'TREM device', value: 7, color: 'bg-teal' },
                  ].map((item) => {
                    const progressWidth = `${Math.min((item.value / 40) * 100, 100)}%`
                    return (
                      <div key={item.label} className="space-y-2">
                        <div className="flex items-center justify-between text-sm font-medium text-slate-600">
                          <span>{item.label}</span>
                          <span>{item.value} min</span>
                        </div>
                        <div
                          className="relative h-3 rounded-full bg-softgray"
                          style={{ '--progress-width': progressWidth }}
                        >
                          <div
                            className={`absolute inset-y-0 left-0 rounded-full ${item.color} ${solutionInView ? 'animate-progress-grow' : ''}`}
                            style={reduceMotion || !solutionInView ? { width: progressWidth } : undefined}
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="mt-6 rounded-2xl bg-softgray px-4 py-3 text-sm text-slate-600">
                  Time representational data based on 30+ surgeon interviews and procedural modeling.
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="impact" className="bg-gradient-to-b from-white via-softgray/60 to-white">
          <div ref={impactRef} className="space-y-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div className="space-y-4">
                <h2 className="section-title text-navy">Impact / Metrics</h2>
                <p className="section-subtitle max-w-2xl">{impactContent.summary}</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                {impactContent.highlights.map((item, index) => (
                  <div
                    key={item.label}
                    className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/95 px-6 py-8 shadow-sm shadow-navy/15 transition duration-300 hover:-translate-y-1 hover:shadow-elevated"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-transparent to-gold/10" aria-hidden="true" />
                    <div className="relative flex h-full flex-col justify-between gap-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{item.label}</p>
                      <p className="text-4xl font-semibold text-navy">
                        <StatCounter
                          target={impactInView ? item.value : 0}
                          suffix={item.suffix ?? ''}
                          prefix={item.prefix ?? ''}
                          decimals={item.decimals ?? 0}
                          inView={impactInView}
                        />
                      </p>
                      <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-teal">
                        <Icon name="chart" className="h-4 w-4" /> quantified impact
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-white/70 bg-white/95 p-8 shadow-card lg:p-10">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Operating efficiency</p>
                  <p className="text-2xl font-semibold text-navy">+23 hours</p>
                  <p className="text-sm text-slate-600">
                    Average operating time reclaimed per day in a single clinical centre by automating vessel closure.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Economic value</p>
                  <p className="text-2xl font-semibold text-navy">€38,000</p>
                  <p className="text-sm text-slate-600">
                    Potential daily savings when combining reduced labour hours, consumables, and postoperative complications.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Clinical confidence</p>
                  <p className="text-2xl font-semibold text-navy">2× efficiency</p>
                  <p className="text-sm text-slate-600">
                    Feedback from 30+ surgeons validates faster closure, consistent hemostasis, and lower fatigue in long procedures.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 rounded-2xl bg-softgray/60 px-6 py-5 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal/15 text-teal">
                    <Icon name="clock" className="h-4 w-4" />
                  </span>
                  <span>
                    Metrics derived from simulations, clinical workflows, and partner hospital pilots conducted in 2024–2025.
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Icon name="network" className="h-4 w-4" />
                  </span>
                  <span>Data set includes >30 surgeons across abdominal, vascular, and trauma specialities.</span>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="team" className="bg-softgray">
          <div ref={teamRef} className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="section-title">{teamContent.title}</h2>
              <p className="mx-auto max-w-3xl text-base text-slate-600">
                Multidisciplinary team bridging surgical practice, engineering rigor, and product systems design.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {teamContent.members.map((member, index) => (
                <article
                  key={member.name}
                  className={`group relative flex flex-col rounded-[28px] border border-white/20 bg-white/80 p-6 shadow-card transition duration-300 hover:-translate-y-2 hover:shadow-elevated focus-within:ring-2 focus-within:ring-teal/80 ${
                    teamInView ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="relative mb-5 h-40 w-full overflow-hidden rounded-3xl bg-gradient-to-br from-teal/40 via-white to-navy/30 shadow-inner">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                        style={member.objectPosition ? { objectPosition: member.objectPosition } : undefined}
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-white">
                        {member.name
                          .split(' ')
                          .map((part) => part[0])
                          .join('')
                          .substring(0, 2)}
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-navy">{member.name}</h3>
                  <p className="text-sm font-medium uppercase tracking-wide text-teal">{member.role}</p>
                  <p className="mt-3 text-sm text-slate-600">{member.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="track-record" className="bg-softgray">
          <div className="space-y-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="section-title text-navy">{trackRecordContent.title}</h2>
                  <p className="section-subtitle max-w-2xl text-slate-600">
                    Recognised by leading innovation programs and validated through patent diligence and clinical pilots.
                  </p>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gold/15 px-4 py-2 text-sm font-semibold text-gold shadow-sm shadow-gold/20">
                  <Icon name="star" className="h-5 w-5" />
                  Med-tech accolades & IP protection
                </span>
              </div>
              {trackRecordContent.highlightImage && (
                <div className="relative overflow-hidden rounded-[36px] border border-white/40 bg-white/90 shadow-elevated">
                  <img
                    src={trackRecordContent.highlightImage.src}
                    alt={trackRecordContent.highlightImage.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" aria-hidden="true" />
                </div>
              )}
            </div>
            <div className="relative">
              <div className="absolute inset-x-0 -bottom-6 h-24 rounded-full bg-gradient-to-t from-navy/5 to-transparent blur-3xl" aria-hidden="true" />
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {trackRecordContent.milestones.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/60 bg-white px-6 py-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-elevated"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">{item.year}</p>
                    <h3 className="mt-3 text-lg font-semibold text-navy">{item.title}</h3>
                    <p className="mt-4 text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="partners" className="bg-softgray">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="section-title">{partnersContent.title}</h2>
              <p className="mx-auto max-w-3xl text-base text-slate-600">{partnersContent.description}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {partnersContent.partners.map((partner, index) => (
                <div
                  key={partner.name}
                  className="flex h-24 min-w-[200px] items-center justify-center rounded-[28px] border border-white/70 bg-white/95 px-8 text-center shadow-sm shadow-navy/10 transition duration-300 hover:-translate-y-1 hover:shadow-elevated"
                  role="listitem"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {partner.logo ? (
                    <img src={partner.logo} alt={partner.name} className="max-h-12 object-contain" loading="lazy" />
                  ) : (
                    <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                      {partner.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="contact">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h2 className="section-title text-navy">{contactContent.title}</h2>
              <p className="section-subtitle">{contactContent.description}</p>
              <div className="flex flex-wrap gap-4">
                <a href={`mailto:${contactContent.email}`} className="focus-outline inline-flex items-center gap-2 text-teal">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 4h16v16H4z" strokeWidth="1.3" />
                    <path d="M4 7l8 6 8-6" strokeWidth="1.3" />
                  </svg>
                  {contactContent.email}
                </a>
                <a
                  href={contactContent.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-outline inline-flex items-center gap-2 text-teal"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5C1.11 6 0 4.881 0 3.5S1.11 1 2.5 1c1.37 0 2.48 1.119 2.48 2.5zM.22 8h4.56V24H.22zM8.56 8h4.37v2.17h.06c.61-1.07 2.1-2.17 4.33-2.17 4.63 0 5.48 3.04 5.48 6.99V24h-4.76v-7.62c0-1.81-.03-4.14-2.52-4.14-2.53 0-2.92 1.98-2.92 4.01V24H8.56z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
            <form
              data-netlify="true"
              name="contact"
              method="POST"
              className="glass-card space-y-4"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:
                  <input name="bot-field" />
                </label>
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    className="focus-outline rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-inner"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    className="focus-outline rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-inner"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
                Organisation
                <input
                  type="text"
                  name="organisation"
                  className="focus-outline rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-inner"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
                How can we help?
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="focus-outline rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-inner"
                />
              </label>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="rounded-full bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-navy/30 transition hover:-translate-y-0.5 focus-outline"
                >
                  Send message
                </button>
                <button
                  type="button"
                  className="rounded-full border border-navy/20 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-navy transition hover:bg-navy/5 focus-outline"
                >
                  Request a demo
                </button>
                <button
                  type="button"
                  className="rounded-full border border-teal/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-teal transition hover:bg-teal/5 focus-outline"
                >
                  Download pitch deck
                </button>
              </div>
              <p className="text-xs text-slate-500">
                By submitting this form you agree to receive updates from TREM. We respect your privacy and will
                never share your information.
              </p>
            </form>
          </div>
        </SectionWrapper>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-6">
          <div className="space-y-2 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} TREM — Technology Research and Engineering (in Medicine).</p>
            <p className="text-xs">
              Accessibility: Fully keyboard navigable, high-contrast compliant design. <a href="#contact" className="text-teal">Contact us</a> for alternate formats.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
            <a href="#hero" className="transition hover:text-navy">Back to top</a>
            <a href="#contact" className="transition hover:text-navy">Contact</a>
            <a href="#" className="transition hover:text-navy">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
