import { getYearsOfExperience } from '../lib/utils';

const yearsOfExperience = getYearsOfExperience(2016);

export const homeContent = {
  hero: {
    badge: 'SENIOR TECHNICAL LEAD @ ONEORIGIN',
    title: {
      line1: 'DELIVERING',
      line2: 'EXCELLENCE',
      line3: 'ACROSS THE STACK.',
    },
    description: `${yearsOfExperience} building AI-powered automation, cloud-native platforms, and scalable systems that drive business impact.`,
    cta: {
      primary: {
        text: 'DOWNLOAD RESUME',
        link: '/resume.pdf',
      },
      secondary: {
        text: 'CONTACT ME',
        link: '/contact',
      },
    },
  },
  marquee: {
    text: 'AI AUTOMATION • CLOUD NATIVE • PYTHON • TYPESCRIPT • REACT • AWS • KUBERNETES • SYSTEM DESIGN • MICROSERVICES • TERRAFORM •',
  },
  coreSystems: {
    title: 'CORE_SYSTEMS',
    skills: [
      {
        icon: 'Terminal',
        title: 'AI & Automation',
        description: 'Architecting intelligent frameworks that reduce manual operations by 60%.',
        accentColor: 'green' as const,
      },
      {
        icon: 'Code',
        title: 'Cloud Native',
        description:
          'Designing scalable, multi-tenant platforms serving 50K+ users with high availability.',
        accentColor: 'blue' as const,
      },
      {
        icon: 'Database',
        title: 'Leadership',
        description: 'Leading distributed teams, mentoring 10+ engineers, and driving results.',
        accentColor: 'red' as const,
      },
      {
        icon: 'Layers',
        title: 'Global Impact',
        description: 'Building enterprise-grade solutions deployed worldwide across continents.',
        accentColor: 'none' as const,
      },
    ],
  },
  systemArchitecture: {
    title: 'SYSTEM_ARCHITECTURE',
    runtime: {
      title: 'RUNTIME_ENVIRONMENT',
      experience: [
        {
          status: 'CURRENT',
          company: 'OneOrigin',
          role: 'Senior Technical Lead',
          period: '2023 - Present',
          description:
            'Leading the technical vision and execution of enterprise-grade cloud platforms. Driving AI automation initiatives and mentoring the next generation of technical leaders.',
          isCurrent: true,
        },
        {
          status: 'PREVIOUS',
          company: 'OneOrigin',
          role: 'Senior Software Engineer',
          period: '2022 - 2023',
          description:
            'Spearheaded the migration from monolithic architecture to microservices, integrated AI capabilities, and optimized infrastructure for performance and cost.',
          isCurrent: false,
        },
        {
          status: 'PREVIOUS',
          company: 'OneOrigin',
          role: 'Technical Team Lead',
          period: '2020 - 2022',
          description:
            'Led distributed teams across time zones in building and maintaining high-availability systems with 50K+ active users and 99.9% uptime SLA.',
          isCurrent: false,
        },
        {
          status: 'PREVIOUS',
          company: 'OneOrigin',
          role: 'Software Engineer',
          period: '2018 - 2020',
          description:
            'Developed full-stack features for enterprise platforms, focusing on performance, accessibility, and user experience.',
          isCurrent: false,
        },
        {
          status: 'PREVIOUS',
          company: 'OneOrigin',
          role: 'UI Developer',
          period: '2017 - 2018',
          description:
            'Started journey at OneOrigin focusing on front-end development and learning the foundations of modern web engineering.',
          isCurrent: false,
        },
        {
          status: 'PREVIOUS',
          company: 'cityon.net',
          role: 'Intern - UI Development',
          period: '2016',
          description:
            'First professional experience where I learned the fundamentals of web development and collaborative software engineering.',
          isCurrent: false,
        },
      ],
    },
    packages: {
      title: 'INSTALLED_PACKAGES',
      categories: [
        {
          name: 'LANGUAGES & RUNTIMES',
          accentColor: 'green' as const,
          skills: ['Python', 'TypeScript', 'JavaScript', 'Node.js', 'Go', 'SQL', 'Bash'],
        },
        {
          name: 'INFRASTRUCTURE',
          accentColor: 'blue' as const,
          skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'GitLab CI', 'Nginx'],
        },
        {
          name: 'DATA & AI',
          accentColor: 'red' as const,
          skills: [
            'PostgreSQL',
            'MongoDB',
            'Redis',
            'ElasticSearch',
            'PyTorch',
            'OpenAI API',
            'LangChain',
          ],
        },
        {
          name: 'FRAMEWORKS & TOOLS',
          accentColor: 'none' as const,
          skills: ['React', 'Next.js', 'Vue.js', 'FastAPI', 'Django', 'Express', 'Astro'],
        },
      ],
    },
  },
};
