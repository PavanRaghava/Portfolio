export type ResumeLink = {
  label: string
  href: string
}

export type ResumeSkillGroup = {
  title: string
  items: string[]
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
  category?: string
  tech: string[]
  highlights: string[]
  links?: ResumeLink[]
}

export type ResumeEducation = {
  school: string
  degree: string
  start?: string
  end?: string
}

export type Resume = {
  brand: string
  name: string
  headline: string
  roleLine?: string
  location?: string
  availability?: string
  summary: string
  email?: string
  links: ResumeLink[]
  skills: string[]
  skillGroups: ResumeSkillGroup[]
  experience: ResumeExperience[]
  projects: ResumeProject[]
  education: ResumeEducation[]
  certifications: string[]
  languages: string[]
}

export const RESUME: Resume = {
  brand: 'Pavan Portfolio',
  name: 'Pavan Raghava Bonigeni',
  headline: 'Frontend Engineer',
  roleLine: 'Frontend Engineer · Angular · React · TypeScript',
  location: 'Hyderabad, India',
  availability: 'Open to frontend roles',
  summary:
    '4+ years building scalable, component-driven web applications across healthcare, enterprise SaaS, and AI-powered platforms.',
  email: 'pavanraghavabonigeni@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pavan-raghava-bonigeni-2b12a816b/' },
    { label: 'GitHub', href: 'https://github.com/PavanRaghava' },
  ],
  skills: [
    'Angular',
    'React',
    'TypeScript',
    'JavaScript (ES6+)',
    'RxJS',
    'NgRx',
    'RESTful APIs',
    'GraphQL',
    'Next.js',
    'WCAG',
  ],
  skillGroups: [
    {
      title: 'Frameworks & libraries',
      items: ['Angular', 'React', 'Next.js', 'RxJS', 'NgRx'],
    },
    {
      title: 'Languages',
      items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS'],
    },
    {
      title: 'APIs & State',
      items: ['RESTful APIs', 'GraphQL', 'NgRx', 'React Hooks', 'Context API'],
    },
    {
      title: 'CMS & Tools',
      items: ['Strapi CMS', 'Git', 'Jira', 'Confluence', 'Angular CLI'],
    },
    {
      title: 'Architecture & performance',
      items: [
        'Component-based architecture',
        'Lazy loading',
        'Code splitting',
        'Responsive & accessible UI (WCAG)',
        'Cross-browser compatibility',
      ],
    },
    {
      title: 'Ways of working',
      items: ['Agile/Scrum', 'Code reviews', 'CI/CD-aware development', 'SEO fundamentals'],
    },
  ],
  experience: [
    {
      company: 'Archents IT India Pvt Ltd',
      role: 'Software Engineer – L3 (Frontend Engineer)',
      location: 'Hyderabad, India',
      start: 'Dec 2021',
      end: 'Present',
      highlights: [
        'Developed and maintained scalable frontend applications in Angular and React across multiple product domains.',
        'Engineered reusable, modular UI component libraries that accelerated development cycles and improved long-term maintainability.',
        'Collaborated with product managers, backend engineers, and QA within Agile/Scrum delivery processes.',
        'Integrated RESTful APIs and GraphQL services to power real-time, data-driven user experiences.',
        'Optimized application performance by refining component rendering, API call strategies, and lazy loading to reduce page load time.',
        'Used RxJS to manage asynchronous data streams and improve application responsiveness.',
        'Applied modern frontend best practices including code splitting, clean architecture, and semantic HTML for accessibility.',
        'Ensured responsive design and cross-browser compatibility across mobile, tablet, and desktop viewports.',
        'Participated in code reviews, debugging sessions, and performance profiling to maintain code quality standards.',
      ],
    },
  ],
  projects: [
    {
      category: 'Healthcare',
      name: 'India Doctor-Patient Web Application',
      tech: ['Angular', 'REST APIs', 'WCAG'],
      highlights: [
        'Built a healthcare platform enabling doctor-patient interactions, including appointment scheduling, secure messaging, and patient record management.',
        'Integrated RESTful APIs for real-time medical data, including patient records and appointment availability.',
        'Implemented feature-rich dashboards and push-notification systems to support user engagement.',
        'Applied performance optimization techniques (lazy loading, change-detection tuning) to improve data-loading speed.',
        'Delivered a WCAG-aligned, responsive UI across all device form factors.',
      ],
    },
    {
      category: 'Enterprise SaaS',
      name: 'Admin Portal Application',
      tech: ['React', 'RBAC', 'State management'],
      highlights: [
        'Built a React-based admin portal to manage and monitor user account operations.',
        'Streamlined verification workflows to reduce manual processing effort and improve operational efficiency.',
        'Implemented Role-Based Access Control (RBAC) to enforce system security policies.',
        'Built a support-ticket dashboard for issue tracking and resolution management.',
        'Optimized component state management and UI rendering for performance.',
      ],
    },
    {
      category: 'Marketing / CMS',
      name: 'Corporate Website',
      tech: ['Angular', 'Strapi CMS', 'GraphQL'],
      highlights: [
        'Contributed to a corporate website with responsive, user-friendly interfaces.',
        'Integrated Strapi CMS with GraphQL for dynamic content management.',
        'Improved SEO through optimized metadata handling, semantic page structure, and Core Web Vitals tuning.',
      ],
    },
    {
      category: 'In progress',
      name: 'APEX – Agentic Project, Engineering & Execution Platform',
      tech: ['Next.js', 'TypeScript', 'AI Agents'],
      highlights: [
        'Building an AI-powered platform to automate the software development lifecycle from BRD through execution.',
        'Developing a scalable enterprise frontend with Next.js and TypeScript for complex, high-throughput workflows.',
        'Implementing AI-agent-driven modules for process modeling, automated test scenario generation, and QA automation.',
        'Integrating Jira and Confluence APIs for end-to-end project planning and execution tracking.',
        'Architecting a UI system to support workflow visualization and high-performance rendering.',
      ],
    },
  ],
  education: [
    {
      school: 'Santhiram Engineering College, Nandyal, India',
      degree: 'Bachelor of Technology (B.Tech), Computer Science Engineering',
      end: '2020',
    },
  ],
  certifications: [
    'FreeCodeCamp Certified – Angular (Basic)',
    'FreeCodeCamp Certified – Responsive Web Design',
  ],
  languages: ['English', 'Telugu', 'Hindi'],
}

