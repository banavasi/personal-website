# Content Directory

This directory contains all the content for the portfolio website. All text, data, and configuration that appears on the pages is stored here, making it easy to update content without modifying component code.

## Structure

- `home.ts` - Home page content (hero section, marquee, skills, featured projects)
- `about.ts` - About page content (bio, experience, education, tech stack)
- `projects.ts` - Projects page content (project listings)
- `contact.ts` - Contact page content (contact information, form labels)
- `layout.ts` - Layout content (navigation menu, footer)

## How to Update Content

### Home Page (`home.ts`)

```typescript
export const homeContent = {
  hero: {
    badge: 'SENIOR TECHNICAL LEAD @ ONEORIGIN', // Update your role/badge
    title: {
      line1: 'DELIVERING',
      line2: 'EXCELLENCE',
      line3: 'ACROSS THE STACK.',
    },
    description: '8+ years building...', // Update your description
    cta: {
      primary: { text: 'VIEW WORK', link: '/projects' },
      secondary: { text: 'CONTACT ME', link: '/contact' },
    },
  },
  marquee: {
    text: 'AI AUTOMATION • CLOUD NATIVE • ...', // Update skills marquee
  },
  coreSystems: {
    title: 'CORE_SYSTEMS',
    skills: [
      {
        icon: 'Terminal', // Icon name (must match lucide-react icon)
        title: 'AI & Automation',
        description: 'Your description here...',
        accentColor: 'green', // Options: "green", "blue", "red", "none"
      },
      // Add more skills...
    ],
  },
  selectedWork: {
    title: 'SELECTED_WORK',
    projects: [
      {
        title: 'Project Name',
        tags: ['TAG1', 'TAG2'],
        description: 'Project description...',
        image: '/images/project-image.png',
        link: '/projects',
      },
      // Add more projects...
    ],
  },
};
```

### About Page (`about.ts`)

```typescript
export const aboutContent = {
  header: {
    title: "ABOUT_ME",
    subtitle: "Your subtitle here...",
  },
  bio: {
    title: "BIO",
    paragraphs: [
      "First paragraph...",
      "Second paragraph...",
      // Add more paragraphs...
    ],
  },
  experience: {
    title: "EXPERIENCE",
    items: [
      {
        title: "Job Title",
        company: "Company Name",
        location: "City, State",
        period: "Current", // or "Previous"
        description: "Job description...",
        isCurrent: true, // Set to false for previous positions
      },
      // Add more experience items...
    ],
  },
  education: {
    title: "EDUCATION & CERTS",
    items: [
      {
        type: "education", // or "certification"
        icon: "GraduationCap", // Must match lucide-react icon
        title: "Degree/Certification Name",
        period: "2006 - 2010",
        description: "Details...",
        accentColor: "blue", // Options: "blue", "red", "green", "none"
      },
      // Add more education/cert items...
    ],
  },
  profile: {
    image: "/images/profile-placeholder.png",
    location: "Your Location",
    role: "Your Role",
    contactLink: "/contact",
  },
  techStack: {
    title: "TECH_STACK",
    categories: [
      {
        name: "CORE TECH",
        skills: ["Python", "TypeScript", "React", ...],
      },
      // Add more categories...
    ],
  },
};
```

### Projects Page (`projects.ts`)

```typescript
export const projectsContent = {
  header: {
    title: 'PROJECTS',
    description: 'Your projects description...',
  },
  projects: [
    {
      title: 'Project Name',
      role: 'Your Role',
      period: '2014 - 2017',
      description: 'Project description...',
      tags: ['Tag1', 'Tag2', 'Tag3'],
      image: '/images/project-image.png', // or null for no image
      accent: 'green', // Options: "green", "blue", "red", "none"
      githubUrl: '', // Optional: GitHub repository URL
      liveUrl: '', // Optional: Live demo URL
    },
    // Add more projects...
  ],
};
```

### Contact Page (`contact.ts`)

```typescript
export const contactContent = {
  header: {
    title: {
      line1: "LET'S",
      line2: 'CONNECT',
    },
    description: 'Your contact description...',
  },
  contactInfo: [
    {
      icon: 'Mail', // Must match lucide-react icon
      label: 'Email',
      value: 'your-email@example.com',
      href: 'mailto:your-email@example.com',
      accentColor: 'blue', // Options: "blue", "green", "none"
    },
    // Add more contact methods...
  ],
  location: {
    text: 'Based in Your City, State',
  },
  form: {
    title: 'SEND A MESSAGE',
    fields: {
      name: { label: 'Name', placeholder: 'JOHN DOE' },
      email: { label: 'Email', placeholder: 'JOHN@EXAMPLE.COM', type: 'email' },
      subject: { label: 'Subject', placeholder: 'PROJECT INQUIRY' },
      message: { label: 'Message', placeholder: 'TELL ME ABOUT YOUR PROJECT...' },
    },
    submitButton: {
      text: 'SEND MESSAGE',
    },
  },
};
```

### Layout (`layout.ts`)

```typescript
export const layoutContent = {
  navigation: {
    brand: {
      text: 'SHASHANK',
      highlight: '.',
      suffix: 'DEV',
    },
    items: [
      { name: 'HOME', path: '/' },
      { name: 'ABOUT', path: '/about' },
      { name: 'PROJECTS', path: '/projects' },
      { name: 'CONTACT', path: '/contact' },
    ],
  },
  footer: {
    name: 'YOUR NAME',
    tagline: 'Your Tagline',
    socialLinks: [
      {
        icon: 'Github', // Must match lucide-react icon
        href: 'https://github.com/yourusername',
        label: 'GitHub',
      },
      // Add more social links...
    ],
    copyright: {
      year: '2026',
      name: 'Your Name',
      rights: 'All rights reserved.',
    },
    designNote: 'Designed with',
    designStyle: 'Neo-Brutalism',
  },
};
```

## Icon Names

When specifying icons in content files, use the exact name from [lucide-react](https://lucide.dev/icons/). Common icons used:

- `Terminal`, `Code`, `Database`, `Layers`
- `GraduationCap`, `Award`, `Briefcase`, `MapPin`
- `Mail`, `Github`, `Linkedin`
- `ArrowRight`, `Send`, `ExternalLink`

## Accent Colors

Available accent colors:

- `"green"` - Neon green accent
- `"blue"` - Electric blue accent
- `"red"` - Alert red accent
- `"none"` - No accent (default styling)

## Notes

- All content files use TypeScript for type safety
- Images should be placed in `/client/public/images/` directory
- Icon names must exactly match lucide-react icon component names
- URLs should be absolute paths (starting with `/`) or full URLs (starting with `http://` or `https://`)
- The content structure is designed to be easily editable without touching component code

## Quick Updates

1. **Update your role**: Edit `home.ts` → `hero.badge`
2. **Update bio**: Edit `about.ts` → `bio.paragraphs`
3. **Add/remove projects**: Edit `projects.ts` → `projects` array
4. **Update contact info**: Edit `contact.ts` → `contactInfo` array
5. **Change navigation**: Edit `layout.ts` → `navigation.items`
6. **Update footer**: Edit `layout.ts` → `footer` object
