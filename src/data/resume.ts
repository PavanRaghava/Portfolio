export type ResumeLink = {
  label: string
  href: string
}

export type ResumeExperience = {
  company: string
  role: string
  location?: string
  start: string
  end: string
  highlights: string[]
}

export type ResumeProject = {
  name: string
  description: string
  tech: string[]
  links?: ResumeLink[]
}

export type ResumeEducation = {
  school: string
  degree: string
  start?: string
  end?: string
}

export type Resume = {
  name: string
  headline: string
  location?: string
  summary: string
  email?: string
  links: ResumeLink[]
  skills: string[]
  experience: ResumeExperience[]
  projects: ResumeProject[]
  education: ResumeEducation[]
}

// Replace this with your real resume details.
export const RESUME: Resume = {
  name: 'Pavan Raghava',
  headline: 'Software Developer',
  location: 'India',
  summary:
    'I build clean, fast, and user-friendly web apps. I enjoy designing modern UI, solving problems, and shipping features end-to-end.',
  email: 'your-email@example.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/PavanRaghava' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/your-handle' },
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'HTML',
    'CSS',
    'Git',
    'REST APIs',
  ],
  experience: [
    {
      company: 'Company Name',
      role: 'Role Title',
      location: 'Remote / City',
      start: '2025',
      end: 'Present',
      highlights: [
        'Shipped a key feature that improved user experience and performance.',
        'Collaborated with cross-functional teams to deliver on-time releases.',
      ],
    },
  ],
  projects: [
    {
      name: 'Project Name',
      description:
        'A short, results-focused description of what this project does and why it matters.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      links: [{ label: 'Repo', href: 'https://github.com/your/repo' }],
    },
  ],
  education: [
    {
      school: 'Your College / University',
      degree: 'Your Degree',
      start: '2021',
      end: '2025',
    },
  ],
}

