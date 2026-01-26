---
description: 
alwaysApply: true
---

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Astro 5, React 19, and Tailwind CSS 4. The site features a neo-brutalist design aesthetic with dark/light theme support and includes:

- Home page with hero, skills marquee, core systems, and featured projects
- About page with bio, experience, education, and tech stack
- Projects page with full project listings
- Contact page with contact information and form
- PDF resume generation using `@react-pdf/renderer`

## Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Format code (Prettier)
npx prettier --write "src/**/*.{js,jsx,ts,tsx,astro}"

# Type check (if needed)
npx tsc --noEmit
```

## Architecture

### Content Management System (CMS)

The site uses a **local static content system** rather than a headless CMS. All content is stored in TypeScript files in `src/content/`:

- `home.ts` - Hero section, marquee, core systems, featured projects
- `about.ts` - About page header, bio, experience, education, tech stack
- `projects.ts` - All project listings
- `contact.ts` - Contact page header, contact info, form labels
- `layout.ts` - Navigation menu and footer content
- `resume.ts` - Complete resume data (personal, experience, education, skills, etc.)

**Content Service** (`src/lib/cms/content-service.ts`): Provides a unified API for fetching content. All functions are async and return typed data. Import functions from here rather than directly from content files:

```typescript
import { getHomePageContent, getProjects, getResumeData } from '@/lib/cms/content-service';
```

**Type Definitions** (`src/types/content.ts`): All content types are defined here. Update types when modifying content structure.

### Component Structure

- **Astro Components** (`.astro`): Pages and layout components (`src/layouts/`, `src/pages/`)
- **React Components** (`.tsx`): Interactive components using React 19 with `@astrojs/react` integration
- **UI Components** (`src/components/ui/`): Radix UI primitives with custom styling (buttons, cards, dialogs, etc.)
- **Page Components** (`src/components/PageHome/`): Home page section components

### Theme System

The site uses `next-themes` for dark/light mode switching:
- Theme preference stored in localStorage
- Inline script in `main.astro` prevents flash of unstyled content
- Toggle component: `src/components/ThemeToggle.tsx`

### PDF Resume Generation

The resume PDF is generated server-side via Astro API route:

**Endpoint**: `src/pages/api/generate-pdf.ts` (GET)
**Component**: `src/components/ResumePDF.tsx` (React PDF document)

Key details:
- Uses `@react-pdf/renderer` to render PDF
- Converts profile image to base64 before rendering (prevents CORS issues)
- Returns PDF as downloadable attachment
- Access at `/api/generate-pdf`

### Styling

- **Tailwind CSS 4** with `@tailwindcss/vite` plugin
- **Custom CSS variables** for neo-brutalist theme (see `src/styles/global.css`)
- **Accent colors**: `neon-green` (#00FF41), `electric-blue` (#00D9FF), `alert-red` (#FF3333)
- **Design system**: Heavy borders (2-4px), hard shadows, bold typography

## Important Patterns

### Content Updates

When adding/modifying content:
1. Update the relevant file in `src/content/`
2. If changing structure, update types in `src/types/content.ts`
3. Update `src/content/README.md` if the change affects user-facing content structure

### Adding New Pages

1. Create `.astro` file in `src/pages/`
2. Use `src/layouts/main.astro` as the layout
3. Pass `content` prop with `title`, `description`, and `ogImage`
4. Add navigation item to `src/content/layout.ts`

### React Client Directives

- Use `client:load` for components that need to be interactive immediately (Header, ThemeToggle)
- Most other React components work without client directives due to Astro's React integration

### Icon Usage

Icons come from `lucide-react`. When specifying icon names in content files (e.g., `icon: 'Github'`), use the exact component name from lucide-react.

## Path Aliases

The `@/*` alias maps to `./src/*`:
```typescript
import { Component } from '@/components/Component';
import { function } from '@/lib/utils';
import { type } from '@/types/content';
```

## Prettier Configuration

Format with Prettier before committing:
- Single quotes
- Semi-colons
- 2 spaces (no tabs)
- 100 char print width
- Astro and Tailwind CSS plugins enabled
