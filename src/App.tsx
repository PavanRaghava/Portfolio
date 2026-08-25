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
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
}

function Pill({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/85">
      {children}
    </span>
  )
}

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 py-10 sm:py-14">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-fuchsia-400/40 via-sky-400/30 to-transparent" />
      </div>
      {children}
    </section>
  )
}

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur sm:p-6">
      {children}
    </div>
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
      { label: 'Education', href: '#education' },
      { label: 'Contact', href: '#contact' },
    ],
    [],
  )

  return (
    <div className="min-h-dvh bg-slate-50 text-slate-900 dark:bg-[#070811] dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-320px] h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-sky-500/20 to-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-[-320px] right-[-200px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-sky-500/10 via-violet-500/15 to-fuchsia-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur dark:bg-black/20">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="group flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-tr from-fuchsia-500 to-sky-400 text-sm font-semibold text-white shadow-md shadow-fuchsia-500/10">
              {RESUME.name
                .split(' ')
                .slice(0, 2)
                .map((p) => p[0]?.toUpperCase())
                .join('')}
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">{RESUME.name}</div>
              <div className="text-xs text-slate-600 dark:text-white/65">
                {RESUME.headline}
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-4 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-700 hover:text-slate-950 dark:text-white/70 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            <a
              href={RESUME.links.find((l) => l.label.toLowerCase() === 'github')?.href ?? '#'}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-gradient-to-tr from-fuchsia-500 to-sky-400 px-3 py-2 text-sm font-semibold text-white shadow-md shadow-fuchsia-500/10 hover:opacity-95"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
        <section className="py-10 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-white/75">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Available for opportunities
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                {RESUME.name}
              </h1>
              <p className="mt-3 max-w-2xl text-base text-slate-700 dark:text-white/75 sm:text-lg">
                {RESUME.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {RESUME.email ? (
                  <a
                    href={`mailto:${RESUME.email}`}
                    className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  >
                    Email me
                  </a>
                ) : null}
                <a
                  href="#projects"
                  className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  See projects
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border border-black/10 bg-transparent px-4 py-2 text-sm font-medium text-slate-800 hover:bg-black/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
                >
                  Contact
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {RESUME.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-600 underline-offset-4 hover:underline dark:text-white/70"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <Card>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm text-slate-600 dark:text-white/65">Role</div>
                  <div className="mt-1 text-lg font-semibold text-slate-950 dark:text-white">
                    {RESUME.headline}
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-gradient-to-tr from-fuchsia-500/15 to-sky-400/10 px-3 py-2 text-xs text-white/80 dark:text-white/85">
                  {RESUME.location ?? '—'}
                </div>
              </div>

              <div className="mt-5">
                <div className="text-sm text-slate-600 dark:text-white/65">Top skills</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {RESUME.skills.slice(0, 10).map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        <Section id="about" title="About">
          <Card>
            <p className="text-sm leading-7 text-slate-700 dark:text-white/75">
              {RESUME.summary}
            </p>
          </Card>
        </Section>

        <Section id="skills" title="Skills">
          <Card>
            <div className="flex flex-wrap gap-2">
              {RESUME.skills.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </Card>
        </Section>

        <Section id="experience" title="Experience">
          <div className="grid gap-4">
            {RESUME.experience.map((x) => (
              <Card key={`${x.company}-${x.role}-${x.start}`}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-base font-semibold text-slate-950 dark:text-white">
                      {x.role}
                    </div>
                    <div className="mt-1 text-sm text-slate-700 dark:text-white/70">
                      {x.company}
                      {x.location ? <span className="text-slate-500 dark:text-white/55">{` • ${x.location}`}</span> : null}
                    </div>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-white/65">
                    {x.start} – {x.end}
                  </div>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-white/75">
                  {x.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-4 md:grid-cols-2">
            {RESUME.projects.map((p) => (
              <Card key={p.name}>
                <div className="text-base font-semibold text-slate-950 dark:text-white">
                  {p.name}
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-white/75">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/5 dark:text-white/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.links?.length ? (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-slate-700 underline-offset-4 hover:underline dark:text-white/75"
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

        <Section id="education" title="Education">
          <div className="grid gap-4">
            {RESUME.education.map((e) => (
              <Card key={`${e.school}-${e.degree}`}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-base font-semibold text-slate-950 dark:text-white">
                      {e.school}
                    </div>
                    <div className="mt-1 text-sm text-slate-700 dark:text-white/75">
                      {e.degree}
                    </div>
                  </div>
                  {e.start || e.end ? (
                    <div className="text-sm text-slate-600 dark:text-white/65">
                      {e.start ?? ''} {e.start && e.end ? '–' : ''} {e.end ?? ''}
                    </div>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <Card>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm text-slate-600 dark:text-white/65">
                  Want to work together?
                </div>
                <div className="mt-1 text-base font-semibold text-slate-950 dark:text-white">
                  Let’s build something great.
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {RESUME.email ? (
                  <a
                    href={`mailto:${RESUME.email}`}
                    className="rounded-xl bg-gradient-to-tr from-fuchsia-500 to-sky-400 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-fuchsia-500/10 hover:opacity-95"
                  >
                    Email
                  </a>
                ) : null}
                {RESUME.links.slice(0, 3).map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </Card>
        </Section>

        <footer className="mt-10 border-t border-black/10 py-8 text-sm text-slate-600 dark:border-white/10 dark:text-white/60">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} {RESUME.name}</div>
            <div className="flex flex-wrap gap-4">
              {nav.map((i) => (
                <a
                  key={i.href}
                  href={i.href}
                  className="hover:text-slate-950 dark:hover:text-white"
                >
                  {i.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

