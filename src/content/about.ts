export const aboutContent = {
  header: {
    title: "ABOUT_ME",
    subtitle: "Senior Technical Lead & Solutions Architect based in Scottsdale, Arizona.",
  },
  bio: {
    title: "BIO",
    paragraphs: [
      "I am a Senior Technical Lead with 8+ years of expertise in building scalable, high-performance systems. From AI-driven automation to cloud-native platforms, I specialize in architecting solutions that drive real business impact.",
      "Currently at OneOrigin, I lead distributed teams to build intelligent automation frameworks that reduce manual operations and accelerate development cycles. I have designed multi-tenant cloud platforms serving over 50K+ users with high availability.",
      'My technical philosophy centers on "structural honesty"—building systems that are as robust and scalable as they are elegant.',
    ],
  },
  experience: {
    title: "EXPERIENCE",
    items: [
      {
        title: "Senior Technical Lead",
        company: "OneOrigin",
        location: "Scottsdale, AZ",
        period: "2023 - Present",
        description: "Leading the technical vision and execution of enterprise-grade cloud platforms. Driving AI automation initiatives and mentoring the next generation of technical leaders. Architected cloud platforms serving thousands of users, boosting release velocity by 40%.",
        isCurrent: true,
      },
      {
        title: "Senior Software Engineer",
        company: "OneOrigin",
        location: "Scottsdale, AZ",
        period: "2022 - 2023",
        description: "Spearheaded the migration from monolithic architecture to microservices, integrated AI capabilities, and optimized infrastructure. Achieved 50% faster deployment cycles and increased UX engagement by 25%.",
        isCurrent: false,
      },
      {
        title: "Technical Team Lead",
        company: "OneOrigin",
        location: "Scottsdale, AZ",
        period: "2020 - 2022",
        description: "Led distributed teams across time zones in building and maintaining high-availability systems with 50K+ active users and 99.9% uptime SLA. Reduced production incidents by 35%.",
        isCurrent: false,
      },
      {
        title: "Software Engineer",
        company: "OneOrigin",
        location: "Scottsdale, AZ",
        period: "2018 - 2020",
        description: "Developed full-stack features for enterprise platforms, focusing on performance, accessibility, and user experience. Built responsive web applications using React, TypeScript, and modern CSS frameworks.",
        isCurrent: false,
      },
      {
        title: "UI Developer",
        company: "OneOrigin",
        location: "Scottsdale, AZ",
        period: "2017 - 2018",
        description: "Started my journey at OneOrigin focusing on front-end development and learning the foundations of modern web engineering. Developed pixel-perfect UI components achieving WCAG AA compliance.",
        isCurrent: false,
      },
      {
        title: "Intern - UI Development",
        company: "cityon.net",
        location: "",
        period: "2016",
        description: "My first professional experience where I learned the fundamentals of web development and collaborative software engineering.",
        isCurrent: false,
      },
    ],
  },
  education: {
    title: "EDUCATION & CERTS",
    items: [
      {
        type: "education",
        icon: "GraduationCap",
        title: "Shivaji University",
        period: "2006 - 2010",
        description: "Bachelor's Degree in Computer Science",
        accentColor: "blue" as const,
      },
      {
        type: "certification",
        icon: "Award",
        title: "Red Hat Certified Engineer",
        period: "Issued Jan 2010",
        description: "Credential ID: 805010461145397",
        accentColor: "red" as const,
      },
    ],
  },
  profile: {
    image: "/images/shashankshandilya.png",
    location: "Scottsdale, Arizona",
    role: "Senior Technical Lead",
    contactLink: "/contact",
  },
  techStack: {
    title: "TECH_STACK",
    categories: [
      {
        name: "CORE TECH",
        skills: ["Python", "TypeScript", "React", "Node.js", "AWS", "Docker", "Kubernetes"],
      },
      {
        name: "DATA & AI",
        skills: ["Machine Learning", "AI Automation", "PostgreSQL", "MongoDB", "Redis"],
      },
      {
        name: "ARCHITECTURE",
        skills: ["Microservices", "System Design", "CI/CD", "Terraform", "Cloud Native"],
      },
    ],
  },
};
