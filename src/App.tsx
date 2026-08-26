import type { ReactNode } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { RESUME } from './data/resume'

type Theme = 'dark' | 'light'

function getInitialTheme(): Theme {
  const stored = localStorage.getItem('theme')
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light'
}

function setThemeOnDocument(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

function IconArrowRight(props: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={props.className}>
      <path
        fillRule="evenodd"
        d="M11.22 4.22a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06l4.22-4.22H3a.75.75 0 0 1 0-1.5h12.44l-4.22-4.22a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function IconMail(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path
        d="M4.5 7.5h15v9h-15v-9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M5.2 8.2 12 13.2l6.8-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconMapPin(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path
        d="M12 21s7-4.6 7-11a7 7 0 1 0-14 0c0 6.4 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  )
}

function IconLinkedIn(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={props.className}>
      <path d="M6.94 6.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 8.7h3.1V20H3.4V8.7ZM9.2 8.7h3v1.55h.04c.42-.8 1.45-1.65 2.98-1.65 3.18 0 3.77 2.1 3.77 4.82V20h-3.1v-5.64c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98V20H9.2V8.7Z" />
    </svg>
  )
}

function IconGithub(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={props.className}>
      <path
        fillRule="evenodd"
        d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.86-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.04 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.27 2.75 1.05A9.24 9.24 0 0 1 12 6.9c.85 0 1.71.12 2.51.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.46.1 2.72.64.71 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .26.18.59.69.48A10.27 10.27 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function IconMoon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path
        d="M21 14.6A8.6 8.6 0 0 1 9.4 3a7.5 7.5 0 1 0 11.6 11.6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconSun(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path
        d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={[
        'rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-900/[0.02] dark:border-white/10 dark:bg-white/5 dark:shadow-none',
        className ?? '',
      ].join(' ')}
    >
      {children}
    </div>
  )
}

function Pill({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-white/80">
      {children}
    </span>
  )
}

function Kicker({ children }: { children: string }) {
  return (
    <div className="text-xs font-semibold tracking-[0.22em] text-emerald-700/80 dark:text-emerald-300/80">
      {children.toUpperCase()}
    </div>
  )
}

function Section({
  id,
  kicker,
  title,
  align = 'left',
  children,
}: {
  id: string
  kicker: string
  title: string
  align?: 'left' | 'center'
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14">
      <div className={align === 'center' ? 'text-center' : ''}>
        <Kicker>{kicker}</Kicker>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="mt-7">{children}</div>
    </section>
  )
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode
  title: string
  children: ReactNode
}) {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 text-emerald-700">{icon}</div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-slate-900">{title}</div>
          <div className="mt-2 text-sm leading-6 text-slate-600">{children}</div>
        </div>
      </div>
    </Card>
  )
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())

  useEffect(() => {
    setThemeOnDocument(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const nav = useMemo(
    () => [
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Experience', href: '#experience' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
    [],
  )

  const linkedin = RESUME.links.find((l) => l.label.toLowerCase() === 'linkedin')
  const github = RESUME.links.find((l) => l.label.toLowerCase() === 'github')

  return (
    <div className="min-h-dvh bg-[#f6f9fb] text-slate-900 dark:bg-[#070B14] dark:text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#f6f9fb]/80 backdrop-blur dark:border-white/10 dark:bg-[#070B14]/70">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <a href="#top" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
            {RESUME.brand}
          </a>
          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-6 sm:flex">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-600 hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? (
                <IconSun className="h-5 w-5" />
              ) : (
                <IconMoon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-5 pb-24 pt-14 sm:px-6">
        <section className="py-14">
          <div className="max-w-3xl">
            {RESUME.availability ? (
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {RESUME.availability}
              </div>
            ) : null}

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
              {RESUME.name}
            </h1>

            <div className="mt-3 text-base text-slate-600 dark:text-white/70 sm:text-lg">
              {RESUME.roleLine ?? RESUME.headline}
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-white/70 sm:text-base">
              {RESUME.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
              >
                View projects <IconArrowRight className="h-4 w-4" />
              </a>
              <a
                href={RESUME.email ? `mailto:${RESUME.email}` : '#contact'}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
              >
                <IconMail className="h-4 w-4" /> Get in touch
              </a>
            </div>

            {RESUME.location ? (
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-500 dark:text-white/60">
                <IconMapPin className="h-4 w-4" />
                {RESUME.location}
              </div>
            ) : null}
          </div>
        </section>

        <Section id="about" kicker="About" title="Professional summary">
          <div className="max-w-3xl text-sm leading-7 text-slate-600 dark:text-white/70 sm:text-base">
            Frontend Engineer with 4+ years of experience designing and building scalable,
            component-driven web applications using Angular and React. Skilled in TypeScript,
            JavaScript (ES6+), and RESTful/GraphQL API integration, with a focus on
            performance-optimised, accessible, and responsive UI architecture. Experienced across
            healthcare, enterprise SaaS, and AI-powered platforms, working in Agile/Scrum
            environments with close cross-functional collaboration across product, backend, and QA
            teams.
          </div>
        </Section>

        <Section id="skills" kicker="Skills" title="Technical toolkit">
          <div className="grid gap-5 md:grid-cols-3">
            {RESUME.skillGroups.map((group) => (
              <Card key={group.title} className="h-full">
                <div className="text-xs font-semibold tracking-[0.22em] text-emerald-700/80 dark:text-emerald-300/80">
                  {group.title.toUpperCase()}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="experience" kicker="Experience" title="Where I've worked">
          <div className="grid gap-5">
            {RESUME.experience.map((x) => (
              <Card key={`${x.company}-${x.role}-${x.start}`}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-base font-semibold text-slate-900 dark:text-white">
                      {x.role}
                    </div>
                    <div className="mt-1 text-sm text-slate-600 dark:text-white/70">
                      {x.company}
                      {x.location ? <span>{` · ${x.location}`}</span> : null}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-emerald-700/80 dark:text-emerald-300/80">
                    {x.start} – {x.end}
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {x.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-white/70">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="projects" kicker="Projects" title="Selected work">
          <div className="grid gap-5 md:grid-cols-2">
            {RESUME.projects.map((p) => (
              <Card key={p.name} className="h-full">
                {p.category ? (
                  <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700/80 dark:bg-emerald-500/15 dark:text-emerald-300/90">
                    {p.category}
                  </div>
                ) : null}

                <div className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                  {p.name}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>

                <ul className="mt-5 space-y-3">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-white/70">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {p.links?.length ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-emerald-700 hover:underline dark:text-emerald-300"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
        </Section>

        <section className="py-14">
          <div className="grid gap-5 md:grid-cols-3">
            <InfoCard
              title="Education"
              icon={
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
                  <path
                    d="M12 3 2.5 8.2 12 13.4l9.5-5.2L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.5 10.1V16c0 2.3 3.1 4.2 6.5 4.2s6.5-1.9 6.5-4.2v-5.9"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            >
              <div className="space-y-2">
                {RESUME.education.map((e) => (
                  <div key={`${e.school}-${e.degree}`}>
                    <div>{e.degree}</div>
                    <div className="text-slate-500">{e.school}</div>
                    {e.end ? <div className="mt-1 text-emerald-700/80">{e.end}</div> : null}
                  </div>
                ))}
              </div>
            </InfoCard>

            <InfoCard
              title="Certifications"
              icon={
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
                  <path
                    d="M12 2.8 14.1 7l4.6.7-3.3 3.2.8 4.6L12 13.5 7.8 15.5l.8-4.6-3.3-3.2L9.9 7 12 2.8Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            >
              <div className="space-y-1">
                {RESUME.certifications.map((c) => (
                  <div key={c}>{c}</div>
                ))}
              </div>
            </InfoCard>

            <InfoCard
              title="Languages"
              icon={
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
                  <path
                    d="M5 6.5h8.5M5 10.5h6M5 14.5h4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 18.5c3.5 0 6.5-2.9 6.5-6.5S17.5 5.5 14 5.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              }
            >
              {RESUME.languages.join(' · ')}
            </InfoCard>
          </div>
        </section>

        <Section id="contact" kicker="Contact" title="Let's build something" align="center">
          <div className="mx-auto max-w-2xl text-center text-sm leading-7 text-slate-600 dark:text-white/70 sm:text-base">
            Available for frontend engineering roles and collaborations. The fastest way to reach me
            is email.
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {RESUME.email ? (
              <a
                href={`mailto:${RESUME.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
              >
                <IconMail className="h-4 w-4" />
                {RESUME.email}
              </a>
            ) : null}

            {linkedin ? (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
              >
                <IconLinkedIn className="h-4 w-4" />
                LinkedIn
              </a>
            ) : null}
          </div>

          <footer className="mt-16 border-t border-slate-200/70 pt-10 dark:border-white/10">
            <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
              <div className="text-sm text-slate-500 dark:text-white/60">
                © {new Date().getFullYear()} {RESUME.name} · {RESUME.location}
              </div>
              <div className="flex items-center gap-3">
                {RESUME.email ? (
                  <a
                    href={`mailto:${RESUME.email}`}
                    aria-label="Email"
                    className="rounded-lg border border-slate-200 bg-white p-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    <IconMail className="h-5 w-5" />
                  </a>
                ) : null}
                {linkedin ? (
                  <a
                    href={linkedin.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="rounded-lg border border-slate-200 bg-white p-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    <IconLinkedIn className="h-5 w-5" />
                  </a>
                ) : null}
                {github ? (
                  <a
                    href={github.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="rounded-lg border border-slate-200 bg-white p-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    <IconGithub className="h-5 w-5" />
                  </a>
                ) : null}
              </div>
            </div>
          </footer>
        </Section>
      </main>
    </div>
  )
}

