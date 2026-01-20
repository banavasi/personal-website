# Cockpit CMS Collections Setup Guide

This document describes how to set up Cockpit CMS collections to work with the personal website.

## Prerequisites

- Cockpit CMS v2.x installed and running
- Admin access to create collections and singletons

## Environment Variables

Add these to your `.env` file:

```env
# Cockpit CMS Configuration
COCKPIT_CMS_URL=https://your-cockpit-instance.com
COCKPIT_API_KEY=your-api-key-here
CMS_ENABLED=true
```

---

## Collections

### 1. `projects` - Portfolio Projects

| Field | Type | Options | Required |
|-------|------|---------|----------|
| title | Text | - | Yes |
| role | Text | - | Yes |
| period | Text | e.g., "2023 - Present" | Yes |
| description | Textarea | - | Yes |
| tags | Tags | - | Yes |
| image | Asset | Image only | Yes |
| accent | Select | Options: green, blue, red, none | Yes |
| githubUrl | Text | URL validation | No |
| liveUrl | Text | URL validation | No |
| featured | Boolean | Default: false | No |
| order | Number | For sorting | No |

### 2. `experiences` - Work Experience

| Field | Type | Options | Required |
|-------|------|---------|----------|
| period | Text | e.g., "2023 - Present" | Yes |
| title | Text | Job title | Yes |
| company | Text | Company name | Yes |
| location | Text | City, State | Yes |
| type | Select | Options: Full Time, Part Time, Contract, Internship | Yes |
| description | Textarea | Brief summary | No |
| highlights | List (Text) | Array of achievements | Yes |
| isCurrent | Boolean | Default: false | Yes |
| order | Number | For sorting (0 = most recent) | No |

### 3. `education` - Education History

| Field | Type | Options | Required |
|-------|------|---------|----------|
| period | Text | e.g., "2014 - 2017" | Yes |
| degree | Text | Degree name | Yes |
| institution | Text | School/University name | Yes |
| gpa | Text | e.g., "8.7 CGPA" | No |
| achievements | List (Text) | Notable achievements | No |
| order | Number | For sorting | No |

### 4. `certifications` - Professional Certifications

| Field | Type | Options | Required |
|-------|------|---------|----------|
| title | Text | Certification name | Yes |
| issuer | Text | Issuing organization | Yes |
| date | Text | e.g., "Issued Jan 2020" or "Target: Q2 2026" | Yes |
| credential | Text | Credential ID or "In Progress" | Yes |
| description | Textarea | Brief description | No |
| order | Number | For sorting | No |

### 5. `skillCategories` - Skill Groups

| Field | Type | Options | Required |
|-------|------|---------|----------|
| name | Text | Display name | Yes |
| slug | Text | Unique identifier (e.g., "languages", "infrastructure") | Yes |
| skills | List (Text) | Array of skill names | Yes |
| accentColor | Select | Options: green, blue, red, none | No |
| order | Number | For sorting | No |

**Recommended Slugs:**
- `languages` - Programming languages
- `infrastructure` - Cloud/DevOps tools
- `dataAI` - Databases and AI tools
- `frameworks` - Web frameworks
- `devops` - CI/CD and monitoring
- `architecture` - System design patterns
- `testing` - Testing tools
- `security` - Security practices
- `softSkills` - Non-technical skills

### 6. `coreSystems` - Home Page Skills

| Field | Type | Options | Required |
|-------|------|---------|----------|
| icon | Text | Lucide icon name (e.g., "Terminal", "Code", "Database") | Yes |
| title | Text | Skill title | Yes |
| description | Text | Brief description | Yes |
| accentColor | Select | Options: green, blue, red, none | Yes |
| order | Number | For sorting | No |

### 7. `achievements` - Stats/Metrics

| Field | Type | Options | Required |
|-------|------|---------|----------|
| value | Text | e.g., "40%", "50K+", "99.9%" | Yes |
| label | Text | e.g., "Faster Release Velocity" | Yes |
| order | Number | For sorting | No |

### 8. `tools` - Software Tools

| Field | Type | Options | Required |
|-------|------|---------|----------|
| name | Text | Tool name | Yes |
| icon | Text | Emoji or icon identifier | Yes |
| order | Number | For sorting | No |

### 9. `spokenLanguages` - Languages Spoken

| Field | Type | Options | Required |
|-------|------|---------|----------|
| name | Text | Language name | Yes |
| level | Number | 0-100 proficiency | Yes |
| order | Number | For sorting | No |

### 10. `expertiseAreas` - Areas of Expertise

| Field | Type | Options | Required |
|-------|------|---------|----------|
| title | Text | Area title | Yes |
| items | List (Text) | Array of sub-items | Yes |
| order | Number | For sorting | No |

---

## Singletons

### 1. `personalInfo` - Personal/Contact Information

| Field | Type | Options | Required |
|-------|------|---------|----------|
| name | Text | Full name | Yes |
| title | Text | Professional title | Yes |
| image | Asset | Profile photo | Yes |
| bio | Textarea | Brief bio | Yes |
| location | Text | City, State | Yes |
| contact | Repeater | See Contact Item structure | Yes |

**Contact Item Structure:**
| Sub-field | Type | Options |
|-----------|------|---------|
| icon | Text | Lucide icon name |
| label | Text | e.g., "Email", "LinkedIn" |
| value | Text | Display value |
| href | Text | Link URL |

### 2. `siteSettings` - Site-wide Settings

| Field | Type | Options | Required |
|-------|------|---------|----------|
| brandText | Text | e.g., "SHASHANK" | Yes |
| brandHighlight | Text | e.g., "_" | Yes |
| brandSuffix | Text | e.g., "SHANDILYA" | Yes |
| navigationItems | Repeater | { name, path } | Yes |
| footerName | Text | Footer display name | Yes |
| footerTagline | Text | Footer tagline | Yes |
| socialLinks | Repeater | { icon, href, label } | Yes |
| copyrightYear | Text | e.g., "2026" | Yes |
| copyrightName | Text | Name in copyright | Yes |
| copyrightRights | Text | e.g., "All rights reserved." | Yes |
| designNote | Text | e.g., "Designed with" | Yes |
| designStyle | Text | e.g., "Neo-Brutalism" | Yes |

### 3. `heroContent` - Home Page Hero Section

| Field | Type | Options | Required |
|-------|------|---------|----------|
| badge | Text | e.g., "SENIOR TECHNICAL LEAD @ ONEORIGIN" | Yes |
| titleLine1 | Text | First line of title | Yes |
| titleLine2 | Text | Second line of title | Yes |
| titleLine3 | Text | Third line of title | Yes |
| description | Textarea | Hero description | Yes |
| ctaPrimaryText | Text | Primary button text | Yes |
| ctaPrimaryLink | Text | Primary button link | Yes |
| ctaSecondaryText | Text | Secondary button text | Yes |
| ctaSecondaryLink | Text | Secondary button link | Yes |
| marqueeText | Text | Scrolling marquee text | Yes |

### 4. `aboutPageContent` - About Page Specific Content

| Field | Type | Options | Required |
|-------|------|---------|----------|
| headerTitle | Text | Page title | Yes |
| headerSubtitle | Text | Page subtitle | Yes |
| bioTitle | Text | Bio section title | Yes |
| bioParagraphs | List (Textarea) | Bio paragraphs | Yes |
| profileImage | Asset | Profile image | Yes |
| profileLocation | Text | Location display | Yes |
| profileRole | Text | Role display | Yes |
| profileContactLink | Text | Contact page link | Yes |

### 5. `contactPageContent` - Contact Page Specific Content

| Field | Type | Options | Required |
|-------|------|---------|----------|
| headerTitleLine1 | Text | First line of title | Yes |
| headerTitleLine2 | Text | Second line of title | Yes |
| headerDescription | Textarea | Page description | Yes |
| locationText | Text | Location display | Yes |
| formTitle | Text | Form section title | Yes |
| formNameLabel | Text | Name field label | Yes |
| formNamePlaceholder | Text | Name field placeholder | Yes |
| formEmailLabel | Text | Email field label | Yes |
| formEmailPlaceholder | Text | Email field placeholder | Yes |
| formSubjectLabel | Text | Subject field label | Yes |
| formSubjectPlaceholder | Text | Subject placeholder | Yes |
| formMessageLabel | Text | Message field label | Yes |
| formMessagePlaceholder | Text | Message placeholder | Yes |
| formSubmitText | Text | Submit button text | Yes |

---

## API Endpoints Reference

Once set up, the following endpoints will be available:

### Collections
```
GET /api/content/items/{collection}
GET /api/content/item/{collection}/{id}
POST /api/content/item/{collection}
DELETE /api/content/item/{collection}/{id}
```

### Singletons
```
GET /api/content/item/{singleton}
POST /api/content/item/{singleton}
```

### Authentication
All requests require the `Api-Key` header:
```
Api-Key: your-api-key-here
```

---

## Import Script

To quickly populate your CMS with the current static content, you can use the data migration script (run once after setup):

```bash
# From project root
npm run cms:migrate
```

This will read from `src/content/*.ts` files and populate the Cockpit CMS collections.

---

## Troubleshooting

### CMS Not Connecting
1. Verify `COCKPIT_CMS_URL` is correct (include protocol, no trailing slash)
2. Check `COCKPIT_API_KEY` has read permissions
3. Ensure `CMS_ENABLED=true` is set

### Content Not Updating
1. Cockpit uses caching - clear cache in Cockpit admin
2. For Astro SSG, rebuild the site to fetch new content
3. For SSR, content updates automatically

### Missing Fields
If a field is missing in CMS response, the fallback static content will be used for that entire content type. Ensure all required fields are filled.
