// ============================================
// Content Type Definitions
// These types define the structure of all content
// used across the website and stored in local content files
// ============================================

// Common types
export type AccentColor = 'green' | 'blue' | 'red' | 'none';
export type LucideIconName =
  | 'Mail'
  | 'Linkedin'
  | 'Github'
  | 'MapPin'
  | 'Terminal'
  | 'Code'
  | 'Database'
  | 'Layers'
  | 'GraduationCap'
  | 'Award'
  | 'Briefcase'
  | 'Building';

// ============================================
// Projects
// ============================================
export interface Project {
  _id?: string;
  title: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  image: string;
  accent: AccentColor;
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  order?: number;
  _created?: number;
  _modified?: number;
}

export interface ProjectsContent {
  header: {
    title: string;
    description: string;
  };
  projects: Project[];
}

// ============================================
// Experience
// ============================================
export interface Experience {
  _id?: string;
  period: string;
  title: string;
  company: string;
  location: string;
  type: 'Full Time' | 'Part Time' | 'Contract' | 'Internship';
  description?: string;
  highlights: string[];
  isCurrent: boolean;
  order?: number;
  _created?: number;
  _modified?: number;
}

// ============================================
// Education
// ============================================
export interface Education {
  _id?: string;
  period: string;
  degree: string;
  institution: string;
  gpa?: string;
  achievements?: string[];
  order?: number;
  _created?: number;
  _modified?: number;
}

// ============================================
// Certifications
// ============================================
export interface Certification {
  _id?: string;
  title: string;
  issuer: string;
  date: string;
  credential: string;
  description?: string;
  order?: number;
  _created?: number;
  _modified?: number;
}

// ============================================
// Skills
// ============================================
export interface SkillCategory {
  _id?: string;
  name: string;
  slug: string;
  skills: string[];
  accentColor?: AccentColor;
  order?: number;
  _created?: number;
  _modified?: number;
}

export interface Skills {
  languages: string[];
  infrastructure: string[];
  dataAI: string[];
  frameworks: string[];
  devops: string[];
  architecture: string[];
  testing: string[];
  security: string[];
  softSkills: string[];
}

// ============================================
// Core Systems (Home page skills)
// ============================================
export interface CoreSystem {
  _id?: string;
  icon: LucideIconName;
  title: string;
  description: string;
  accentColor: AccentColor;
  order?: number;
  _created?: number;
  _modified?: number;
}

// ============================================
// Personal/Profile Info
// ============================================
export interface ContactLink {
  icon: LucideIconName;
  label: string;
  value: string;
  href: string;
  accentColor?: AccentColor;
}

export interface PersonalInfo {
  _id?: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  location: string;
  contact: ContactLink[];
  _created?: number;
  _modified?: number;
}

// ============================================
// Site Settings
// ============================================
export interface NavigationItem {
  name: string;
  path: string;
}

export interface SocialLink {
  icon: LucideIconName;
  href: string;
  label: string;
}

export interface SiteSettings {
  _id?: string;
  // Brand
  brandText: string;
  brandHighlight: string;
  brandSuffix: string;
  // Navigation
  navigationItems: NavigationItem[];
  // Footer
  footerName: string;
  footerTagline: string;
  socialLinks: SocialLink[];
  copyrightYear: string;
  copyrightName: string;
  copyrightRights: string;
  designNote: string;
  designStyle: string;
  _created?: number;
  _modified?: number;
}

// ============================================
// Home Page Content
// ============================================
export interface HeroContent {
  _id?: string;
  badge: string;
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  description: string;
  ctaPrimaryText: string;
  ctaPrimaryLink: string;
  ctaSecondaryText: string;
  ctaSecondaryLink: string;
  marqueeText: string;
  _created?: number;
  _modified?: number;
}

// ============================================
// About Page Content
// ============================================
export interface AboutPageContent {
  _id?: string;
  headerTitle: string;
  headerSubtitle: string;
  bioTitle: string;
  bioParagraphs: string[];
  profileImage: string;
  profileLocation: string;
  profileRole: string;
  profileContactLink: string;
  _created?: number;
  _modified?: number;
}

// ============================================
// Contact Page Content
// ============================================
export interface ContactPageContent {
  _id?: string;
  headerTitleLine1: string;
  headerTitleLine2: string;
  headerDescription: string;
  locationText: string;
  formTitle: string;
  formNameLabel: string;
  formNamePlaceholder: string;
  formEmailLabel: string;
  formEmailPlaceholder: string;
  formSubjectLabel: string;
  formSubjectPlaceholder: string;
  formMessageLabel: string;
  formMessagePlaceholder: string;
  formSubmitText: string;
  _created?: number;
  _modified?: number;
}

// ============================================
// Achievements/Stats
// ============================================
export interface Achievement {
  _id?: string;
  value: string;
  label: string;
  order?: number;
  _created?: number;
  _modified?: number;
}

// ============================================
// Tools
// ============================================
export interface Tool {
  _id?: string;
  name: string;
  icon: string;
  order?: number;
  _created?: number;
  _modified?: number;
}

// ============================================
// Languages (spoken)
// ============================================
export interface SpokenLanguage {
  _id?: string;
  name: string;
  level: number; // 0-100
  order?: number;
  _created?: number;
  _modified?: number;
}

// ============================================
// Expertise Areas
// ============================================
export interface ExpertiseArea {
  _id?: string;
  title: string;
  items: string[];
  order?: number;
  _created?: number;
  _modified?: number;
}

// ============================================
// Resume Data (Combined)
// ============================================
export interface ResumeData {
  personal: PersonalInfo;
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  skills: Skills;
  tools: Tool[];
  languages: SpokenLanguage[];
  achievements: Achievement[];
  expertise: ExpertiseArea[];
  keywords: string[];
}
