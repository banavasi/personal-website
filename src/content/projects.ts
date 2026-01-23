export const projectsContent = {
  header: {
    title: 'PROJECTS',
    description:
      'A selection of technical projects, architectural designs, and algorithmic solutions.',
  },
  projects: [
    // ========== LATEST & FLAGSHIP PROJECTS ==========
    {
      title: 'bootcn-vue',
      role: 'Author & Maintainer',
      period: '2023 - Present',
      description:
        'Modern, type-safe Bootstrap + Vue 3 component library with CLI for rapid UI development. Takes a copy-paste approach similar to shadcn/ui - components are added directly to your project via CLI, giving you full control and customization. Published to npm with 5+ packages and comprehensive Storybook documentation.',
      tags: ['Vue 3', 'TypeScript', 'Bootstrap 5', 'Component Library', 'CLI', 'Open Source'],
      image: '/images/project-bootcn.png',
      accent: 'green' as const,
      githubUrl: 'https://github.com/banavasi/Bootcn-vue',
      liveUrl: 'https://banavasi.github.io/Bootcn-vue/',
      featured: true,
    },
    {
      title: 'GraphPulse',
      role: 'Architect & Developer',
      period: '2024',
      description:
        'Production-ready GraphRAG database MVP with hybrid vector/graph search capabilities. Built with FastAPI, PostgreSQL 16, and Apache AGE. Features 49+ API endpoints, vector embeddings, graph-based knowledge extraction, multi-user RBAC, and cost tracking. Integrates with OpenRouter for LLM capabilities.',
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'Graph Database', 'Vector Search', 'RAG', 'AI/ML'],
      image: '/images/project-graphpulse.png',
      accent: 'blue' as const,
      githubUrl: '',
      liveUrl: '',
      featured: true,
    },
    {
      title: 'Gatekeeper',
      role: 'Architect & Developer',
      period: '2024',
      description:
        'Multi-tenant authentication & authorization platform with 3-line API protection. Built with Bun, Hono, Next.js, PostgreSQL, Redis, and Better-Auth. Features per-tenant usage rules, comprehensive audit logging, rate limiting, and extensible middleware system. Designed for SaaS applications requiring robust security.',
      tags: ['Bun', 'Hono', 'Next.js', 'PostgreSQL', 'Redis', 'Auth', 'Multi-tenant'],
      image: '/images/project-gatekeeper.png',
      accent: 'red' as const,
      githubUrl: '',
      liveUrl: '',
      featured: true,
    },
    {
      title: 'Email Tracking System',
      role: 'Architect & Developer',
      period: '2024',
      description:
        'Phase 1 implementation of an email tracking system with webhook support. Built with Node.js, TypeScript, Express, Gmail API, Docker, and MongoDB. Features email sending, open tracking pixel, click tracking, webhook event processing, unsubscribe handling, and queue-based processing.',
      tags: ['Node.js', 'TypeScript', 'Express', 'Gmail API', 'Docker', 'MongoDB', 'Webhooks'],
      image: '/images/project-email-tracking.png',
      accent: 'green' as const,
      githubUrl: '',
      liveUrl: '',
    },

    // ========== ASU PARTNERSHIP PROJECTS ==========
    {
      title: 'ASU Admissions Application UI',
      role: 'Frontend Developer',
      period: '2014 - 2017',
      description:
        'ASU Undergraduate Admissions Application UI - built with Vue.js 3.4.29, Bootstrap 5.3.3, RDS Vue UI, Maz-UI, VeeValidate, and Vue i18n. Features comprehensive admissions application form, internationalization support, form validation, and analytics tracking. Deployed across production, staging, and dev environments.',
      tags: ['Vue.js', 'Bootstrap', 'TypeScript', 'Forms', 'i18n', 'Validation'],
      image: '/images/project-naa.png',
      accent: 'blue' as const,
      githubUrl: '',
      liveUrl: 'https://apply.apps.asu.edu',
    },
    {
      title: 'ASU Starbucks College Achievement Plan',
      role: 'Developer',
      period: 'Partnership since 2014',
      description:
        "Supporting the Starbucks College Achievement Plan (SCAP) - a partnership between ASU and Starbucks providing 100% tuition coverage for eligible partners pursuing their first bachelor's degree. The program offers 180+ online degree programs with full upfront tuition, no repayment requirements, and includes a pathway program for admission eligibility. Over 10,000 Starbucks partners have graduated through this program.",
      tags: ['Partnership', 'EdTech', 'Higher Education', 'Tuition Coverage', 'Online Learning'],
      image: '/images/project-starbucks.png',
      accent: 'green' as const,
      githubUrl: '',
      liveUrl: 'https://starbucks.asu.edu',
    },
    {
      title: 'ASU Uber Education Partnership',
      role: 'Developer',
      period: 'Ongoing Partnership',
      description:
        'Supporting the ASU-Uber Education Partnership providing 100% tuition coverage for eligible Uber drivers and family members. Program offers 80+ ASU online undergraduate degrees for drivers with Gold/Platinum/Diamond status and 2,000+ lifetime trips. Features family transfer option, FAFSA-based aid processing, and flexible online learning. Includes informational webinars and comprehensive support resources.',
      tags: ['Partnership', 'EdTech', 'Driver Education', 'Online Learning', 'Tuition Coverage'],
      image: '/images/project-uber.png',
      accent: 'blue' as const,
      githubUrl: '',
      liveUrl: 'https://uber.asu.edu',
    },
    {
      title: 'SMS - Student Management System',
      role: 'Full Stack Developer',
      period: 'ASU Internal',
      description:
        'Full-stack application connecting students with Teaching Assistants (TAs) and Research Assistants (RAs) at ASU. Used by internal teachers and assistants to process payroll, enable student applications, manage TA/RA assignments, and track changes throughout the semester. Streamlines the administrative workflow for academic appointments.',
      tags: ['Full Stack', 'EdTech', 'Payroll', 'Assignment Management', 'Higher Education'],
      image: '/images/project-sms.png',
      accent: 'red' as const,
      githubUrl: '',
      liveUrl: '',
    },

    // ========== ONEORIGIN INTERNAL PROJECTS ==========
    {
      title: 'OneOrigin AI Platform (Sia)',
      role: 'Senior Technical Lead',
      period: '2023 - Present',
      description:
        "Leading the development of Sia - OneOrigin's unified artificial intelligence engine that powers multiple internal applications. Sia serves as the intelligence core for AI-driven automation, real-time data analysis, and continuous learning. The platform enables workflow automation, intelligent document processing, and powers applications across OneOrigin's product suite. OneOrigin is an AI and technology company founded in 2015, specializing in EdTech transformation.",
      tags: ['AI', 'Automation', 'TypeScript', 'Python', 'Platform Architecture', 'EdTech'],
      image: '/images/project-sia.png',
      accent: 'green' as const,
      githubUrl: 'https://github.com/oneorigin-inc/oneorigin.us',
      liveUrl: 'https://www.oneorigin.us/',
    },
    {
      title: 'AIRR - AI-Powered Rapid Recognition',
      role: 'Technical Lead',
      period: '2023 - Present',
      description:
        "AI-powered co-pilot specifically designed for transcript evaluation and credit transfer automation. Part of OneOrigin's EdTech platform, AIRR automates the evaluation of student transcripts, processes credit transfers with high accuracy, and helps educational institutions reclaim time through intelligent automation. Integrates with major CRM and Student Information Systems.",
      tags: ['AI/ML', 'EdTech', 'Transcript Processing', 'Automation', 'Document Analysis'],
      image: '/images/project-airr.png',
      accent: 'blue' as const,
      githubUrl: '',
      liveUrl: '',
    },
    {
      title: 'HR Assist - GenAI Recruitment Platform',
      role: 'Technical Lead',
      period: '2023 - Present',
      description:
        'Generative AI application that automates recruitment, onboarding, and deployment processes. The platform calls candidates for interviews, processes transcripts automatically, and uses AI to understand and analyze candidate qualifications. Streamlines the entire recruitment workflow from initial screening to deployment, reducing manual effort in HR operations.',
      tags: ['GenAI', 'HR Tech', 'Recruitment', 'Automation', 'Interview Scheduling'],
      image: '/images/project-hr-assist.png',
      accent: 'red' as const,
      githubUrl: '',
      liveUrl: '',
    },
  ],
};
