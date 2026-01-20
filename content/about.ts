import { getYearsOfExperience } from '../src/lib/utils';

const yearsOfExperience = getYearsOfExperience(2016);

export const aboutContent = {
  header: {
    title: "ABOUT_ME",
    subtitle: "Senior Technical Lead & Solutions Architect based in Scottsdale, Arizona.",
  },
  bio: {
    title: "BIO",
    paragraphs: [
      `I am a Senior Technical Lead with ${yearsOfExperience} of expertise in building scalable, high-performance systems. From AI-driven automation to cloud-native platforms, I specialize in architecting solutions that drive real business impact.`,
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
        period: "Current",
        description: "Leading hands-on technical leadership and automation initiatives. Aligning technology with organizational goals and mentoring engineering teams to deliver enterprise-grade AI solutions.",
        isCurrent: true,
      },
      {
        title: "Senior Software Engineer",
        company: "SIXT Research & Development",
        location: "",
        period: "Previous",
        description: "Contributed to high-scale cloud platforms and microservices architecture for global mobility solutions.",
        isCurrent: false,
      },
      {
        title: "Project Associate",
        company: "Cognizant Technology Solutions",
        location: "",
        period: "Previous",
        description: "Delivered technology solutions for global clients, focusing on system maintenance and implementation.",
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
    image: "/images/profile-placeholder.png",
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
