import { getYearsOfExperience } from '../src/lib/utils';

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
        text: 'VIEW WORK',
        link: '/projects',
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
  selectedWork: {
    title: 'SELECTED_WORK',
    projects: [
      {
        title: 'Eitracking System',
        tags: ['SYSTEM DESIGN', 'TRACKING'],
        description:
          'A comprehensive system for understanding, maintaining, and implementing tracking ideas. Built to handle complex data streams and provide real-time visualization.',
        image: '/images/project-eitracking.png',
        link: '/projects',
      },
      {
        title: 'ETF Calculator',
        tags: ['FINTECH', 'ALGORITHMS'],
        description:
          'Predictive analytics tool fetching historical stock prices to forecast ETF performance over a 5-year horizon, providing personalized investment recommendations.',
        image: '/images/project-etf.png',
        link: '/projects',
      },
    ],
    viewAllText: 'VIEW ALL PROJECTS',
  },
};
