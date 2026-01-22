/**
 * Content Service
 *
 * Provides a unified API for fetching content from local static content files.
 */

import type {
  Project,
  Experience,
  Education,
  Certification,
  SkillCategory,
  CoreSystem,
  PersonalInfo,
  SiteSettings,
  HeroContent,
  Achievement,
  Tool,
  SpokenLanguage,
  ExpertiseArea,
  AccentColor,
} from '@/types/content';

// Import static content
import { projectsContent as staticProjects } from '@/content/projects';
import { resumeData as staticResume } from '@/content/resume';
import { homeContent as staticHome } from '@/content/home';
import { aboutContent as staticAbout } from '@/content/about';
import { contactContent as staticContact } from '@/content/contact';
import { layoutContent as staticLayout } from '@/content/layout';

// ============================================
// Projects
// ============================================

export async function getProjects(): Promise<Project[]> {
  return staticProjects.projects.map((p, index) => ({
    ...p,
    order: index,
  }));
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return staticProjects.projects
    .filter((p) => p.featured)
    .slice(0, 4)
    .map((p, index) => ({
      ...p,
      order: index,
    }));
}

export function getProjectsHeader() {
  return staticProjects.header;
}

// ============================================
// Experience
// ============================================

export async function getExperiences(): Promise<Experience[]> {
  return staticResume.experience.map((exp, index) => ({
    ...exp,
    isCurrent: index === 0,
    order: index,
  }));
}

// ============================================
// Education
// ============================================

export async function getEducation(): Promise<Education[]> {
  return staticResume.education.map((edu, index) => ({
    ...edu,
    order: index,
  }));
}

// ============================================
// Certifications
// ============================================

export async function getCertifications(): Promise<Certification[]> {
  return staticResume.certifications.map((cert, index) => ({
    ...cert,
    order: index,
  }));
}

// ============================================
// Skills
// ============================================

export async function getSkillCategories(): Promise<SkillCategory[]> {
  // Transform from nested object to array
  const skillsMap: Record<string, { name: string; accentColor: AccentColor }> = {
    languages: { name: 'Languages & Runtimes', accentColor: 'green' },
    infrastructure: { name: 'Infrastructure', accentColor: 'blue' },
    dataAI: { name: 'Data & AI', accentColor: 'red' },
    frameworks: { name: 'Frameworks & Tools', accentColor: 'none' },
    devops: { name: 'DevOps', accentColor: 'green' },
    architecture: { name: 'Architecture', accentColor: 'blue' },
    testing: { name: 'Testing', accentColor: 'red' },
    security: { name: 'Security', accentColor: 'none' },
    softSkills: { name: 'Soft Skills', accentColor: 'green' },
  };

  return Object.entries(staticResume.skills).map(([key, skills], index) => ({
    name: skillsMap[key]?.name || key,
    slug: key,
    skills: skills as string[],
    accentColor: skillsMap[key]?.accentColor || 'none',
    order: index,
  }));
}

// ============================================
// Core Systems (Home page)
// ============================================

export async function getCoreSystems(): Promise<CoreSystem[]> {
  return staticHome.coreSystems.skills.map((skill, index) => ({
    ...skill,
    icon: skill.icon as CoreSystem['icon'],
    order: index,
  }));
}

// ============================================
// Achievements
// ============================================

export async function getAchievements(): Promise<Achievement[]> {
  return staticResume.achievements.map((ach, index) => ({
    ...ach,
    order: index,
  }));
}

// ============================================
// Tools
// ============================================

export async function getTools(): Promise<Tool[]> {
  return staticResume.tools.map((tool, index) => ({
    ...tool,
    order: index,
  }));
}

// ============================================
// Spoken Languages
// ============================================

export async function getSpokenLanguages(): Promise<SpokenLanguage[]> {
  return staticResume.languages.map((lang, index) => ({
    ...lang,
    order: index,
  }));
}

// ============================================
// Expertise Areas
// ============================================

export async function getExpertiseAreas(): Promise<ExpertiseArea[]> {
  return staticResume.expertise.map((exp, index) => ({
    ...exp,
    order: index,
  }));
}

// ============================================
// Personal Info
// ============================================

export async function getPersonalInfo(): Promise<PersonalInfo> {
  return {
    name: staticResume.personal.name,
    title: staticResume.personal.title,
    image: staticResume.personal.image,
    bio: staticResume.personal.bio,
    location: staticResume.personal.contact.find((c) => c.icon === 'MapPin')?.value || '',
    contact: staticResume.personal.contact.map((c) => ({
      ...c,
      icon: c.icon as PersonalInfo['contact'][0]['icon'],
    })),
  };
}

// ============================================
// Site Settings
// ============================================

export async function getSiteSettings(): Promise<SiteSettings> {
  return {
    brandText: staticLayout.navigation.brand.text,
    brandHighlight: staticLayout.navigation.brand.highlight,
    brandSuffix: staticLayout.navigation.brand.suffix,
    navigationItems: staticLayout.navigation.items,
    footerName: staticLayout.footer.name,
    footerTagline: staticLayout.footer.tagline,
    socialLinks: staticLayout.footer.socialLinks.map((link) => ({
      ...link,
      icon: link.icon as SiteSettings['socialLinks'][0]['icon'],
    })),
    copyrightYear: staticLayout.footer.copyright.year,
    copyrightName: staticLayout.footer.copyright.name,
    copyrightRights: staticLayout.footer.copyright.rights,
    designNote: staticLayout.footer.designNote,
    designStyle: staticLayout.footer.designStyle,
  };
}

// ============================================
// Hero Content
// ============================================

export async function getHeroContent(): Promise<HeroContent> {
  return {
    badge: staticHome.hero.badge,
    titleLine1: staticHome.hero.title.line1,
    titleLine2: staticHome.hero.title.line2,
    titleLine3: staticHome.hero.title.line3,
    description: staticHome.hero.description,
    ctaPrimaryText: staticHome.hero.cta.primary.text,
    ctaPrimaryLink: staticHome.hero.cta.primary.link,
    ctaSecondaryText: staticHome.hero.cta.secondary.text,
    ctaSecondaryLink: staticHome.hero.cta.secondary.link,
    marqueeText: staticHome.marquee.text,
  };
}

// ============================================
// Home Page Content (combined)
// ============================================

export async function getHomePageContent() {
  const [hero, coreSystems, experiences, skillCategories, featuredProjects] = await Promise.all([
    getHeroContent(),
    getCoreSystems(),
    getExperiences(),
    getSkillCategories(),
    getFeaturedProjects(),
  ]);

  return {
    hero,
    coreSystems: {
      title: staticHome.coreSystems.title,
      skills: coreSystems,
    },
    systemArchitecture: {
      title: staticHome.systemArchitecture.title,
      runtime: {
        title: staticHome.systemArchitecture.runtime.title,
        experience: experiences.map((exp) => ({
          status: exp.isCurrent ? 'CURRENT' : 'PREVIOUS',
          company: exp.company,
          role: exp.title,
          period: exp.period,
          description: exp.description || exp.highlights[0] || '',
          isCurrent: exp.isCurrent,
        })),
      },
      packages: {
        title: staticHome.systemArchitecture.packages.title,
        categories: skillCategories.slice(0, 4).map((cat) => ({
          name: cat.name,
          accentColor: cat.accentColor || 'none',
          skills: cat.skills,
        })),
      },
    },
    selectedWork:
      featuredProjects.length > 0
        ? {
            title: 'SELECTED_WORK',
            projects: featuredProjects.map((p) => ({
              title: p.title,
              tags: p.tags,
              description: p.description,
              image: p.image,
              link: p.liveUrl || p.githubUrl || '#',
            })),
            viewAllText: 'VIEW ALL PROJECTS',
          }
        : undefined,
  };
}

// ============================================
// About Page Content (combined)
// ============================================

export async function getAboutPageContent() {
  const [personalInfo, experiences, education, certifications, skillCategories] = await Promise.all(
    [getPersonalInfo(), getExperiences(), getEducation(), getCertifications(), getSkillCategories()]
  );

  return {
    header: {
      title: staticAbout.header.title,
      subtitle: staticAbout.header.subtitle,
    },
    bio: {
      title: staticAbout.bio.title,
      paragraphs: staticAbout.bio.paragraphs,
    },
    experience: {
      title: staticAbout.experience.title,
      items: experiences.map((exp) => ({
        title: exp.title,
        company: exp.company,
        location: exp.location,
        period: exp.period,
        description: exp.description || exp.highlights.join(' '),
        isCurrent: exp.isCurrent,
      })),
    },
    education: {
      title: staticAbout.education.title,
      items: [
        ...education.map((edu) => ({
          type: 'education' as const,
          icon: 'GraduationCap',
          title: edu.institution,
          period: edu.period,
          description: edu.degree + (edu.gpa ? ` - ${edu.gpa}` : ''),
          accentColor: 'blue' as const,
        })),
        ...certifications.map((cert) => ({
          type: 'certification' as const,
          icon: 'Award',
          title: cert.title,
          period: cert.date,
          description: `${cert.issuer} - ${cert.credential}`,
          accentColor: 'red' as const,
        })),
      ],
    },
    profile: {
      image: personalInfo.image,
      location: personalInfo.location,
      role: personalInfo.title,
      contactLink: '/contact',
    },
    techStack: {
      title: staticAbout.techStack.title,
      categories: skillCategories.slice(0, 3).map((cat) => ({
        name: cat.name,
        skills: cat.skills,
      })),
    },
  };
}

// ============================================
// Contact Page Content
// ============================================

export async function getContactPageContent() {
  const personalInfo = await getPersonalInfo();

  return {
    header: staticContact.header,
    contactInfo: personalInfo.contact
      .filter((c) => c.icon !== 'MapPin')
      .map((c, index) => ({
        ...c,
        accentColor: (['blue', 'green', 'none'] as const)[index % 3],
      })),
    location: staticContact.location,
    form: staticContact.form,
  };
}

// ============================================
// Projects Page Content (combined)
// ============================================

export async function getProjectsPageContent() {
  const projects = await getProjects();

  return {
    header: staticProjects.header,
    projects,
  };
}

// ============================================
// Resume Data (combined)
// ============================================

export async function getResumeData() {
  const [
    personalInfo,
    experiences,
    education,
    certifications,
    skillCategories,
    tools,
    languages,
    achievements,
    expertise,
  ] = await Promise.all([
    getPersonalInfo(),
    getExperiences(),
    getEducation(),
    getCertifications(),
    getSkillCategories(),
    getTools(),
    getSpokenLanguages(),
    getAchievements(),
    getExpertiseAreas(),
  ]);

  // Transform skill categories back to skills object format
  const skills = skillCategories.reduce(
    (acc, cat) => {
      acc[cat.slug as keyof typeof acc] = cat.skills;
      return acc;
    },
    { ...staticResume.skills }
  );

  return {
    personal: {
      name: personalInfo.name,
      title: personalInfo.title,
      image: personalInfo.image,
      bio: personalInfo.bio,
      contact: personalInfo.contact,
    },
    experience: experiences.map((exp) => ({
      period: exp.period,
      title: exp.title,
      company: exp.company,
      location: exp.location,
      type: exp.type,
      highlights: exp.highlights,
    })),
    education,
    certifications,
    skills,
    tools,
    languages,
    achievements,
    expertise,
    keywords: staticResume.keywords,
  };
}
