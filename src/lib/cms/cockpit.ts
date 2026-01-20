/**
 * Cockpit CMS Client
 * 
 * A type-safe client for interacting with Cockpit CMS API.
 * Supports both collections and singletons with automatic fallback to static content.
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
  AboutPageContent,
  ContactPageContent,
  Achievement,
  Tool,
  SpokenLanguage,
  ExpertiseArea,
  CockpitResponse,
  CockpitSingletonResponse,
} from "@/types/content";

// Environment configuration
const COCKPIT_URL = import.meta.env.COCKPIT_CMS_URL || process.env.COCKPIT_CMS_URL || "";
const COCKPIT_API_KEY = import.meta.env.COCKPIT_API_KEY || process.env.COCKPIT_API_KEY || "";
const CMS_ENABLED = import.meta.env.CMS_ENABLED === "true" || process.env.CMS_ENABLED === "true";

interface FetchOptions {
  filter?: Record<string, unknown>;
  sort?: Record<string, 1 | -1>;
  limit?: number;
  skip?: number;
  populate?: number; // Populate linked content depth
}

/**
 * Base fetch function with error handling and caching
 */
async function cockpitFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T | null> {
  if (!CMS_ENABLED || !COCKPIT_URL || !COCKPIT_API_KEY) {
    console.log("[CMS] Cockpit CMS is disabled or not configured, using static content");
    return null;
  }

  const url = `${COCKPIT_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Api-Key": COCKPIT_API_KEY,
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      console.error(`[CMS] Error fetching ${endpoint}: ${response.status} ${response.statusText}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`[CMS] Failed to fetch from Cockpit:`, error);
    return null;
  }
}

/**
 * Get items from a collection
 */
async function getCollection<T>(
  collection: string,
  options: FetchOptions = {}
): Promise<T[] | null> {
  const params = new URLSearchParams();
  
  if (options.filter) {
    params.append("filter", JSON.stringify(options.filter));
  }
  if (options.sort) {
    params.append("sort", JSON.stringify(options.sort));
  }
  if (options.limit) {
    params.append("limit", options.limit.toString());
  }
  if (options.skip) {
    params.append("skip", options.skip.toString());
  }
  if (options.populate) {
    params.append("populate", options.populate.toString());
  }

  const queryString = params.toString();
  const endpoint = `/api/content/items/${collection}${queryString ? `?${queryString}` : ""}`;
  
  const response = await cockpitFetch<CockpitResponse<T>>(endpoint);
  return response?.data || null;
}

/**
 * Get a single item from a collection by ID
 */
async function getCollectionItem<T>(
  collection: string,
  id: string
): Promise<T | null> {
  const endpoint = `/api/content/item/${collection}/${id}`;
  const response = await cockpitFetch<{ data: T }>(endpoint);
  return response?.data || null;
}

/**
 * Get a singleton
 */
async function getSingleton<T>(name: string): Promise<T | null> {
  const endpoint = `/api/content/item/${name}`;
  const response = await cockpitFetch<CockpitSingletonResponse<T>>(endpoint);
  return response?.data || null;
}

// ============================================
// Content-specific fetchers with fallbacks
// ============================================

/**
 * Get all projects
 */
export async function getProjects(): Promise<Project[] | null> {
  return getCollection<Project>("projects", {
    sort: { order: 1, _created: -1 },
  });
}

/**
 * Get featured projects
 */
export async function getFeaturedProjects(): Promise<Project[] | null> {
  return getCollection<Project>("projects", {
    filter: { featured: true },
    sort: { order: 1 },
    limit: 4,
  });
}

/**
 * Get single project by ID
 */
export async function getProject(id: string): Promise<Project | null> {
  return getCollectionItem<Project>("projects", id);
}

/**
 * Get all experiences
 */
export async function getExperiences(): Promise<Experience[] | null> {
  return getCollection<Experience>("experiences", {
    sort: { order: 1, _created: -1 },
  });
}

/**
 * Get all education entries
 */
export async function getEducation(): Promise<Education[] | null> {
  return getCollection<Education>("education", {
    sort: { order: 1 },
  });
}

/**
 * Get all certifications
 */
export async function getCertifications(): Promise<Certification[] | null> {
  return getCollection<Certification>("certifications", {
    sort: { order: 1 },
  });
}

/**
 * Get skill categories
 */
export async function getSkillCategories(): Promise<SkillCategory[] | null> {
  return getCollection<SkillCategory>("skillCategories", {
    sort: { order: 1 },
  });
}

/**
 * Get core systems (home page skills)
 */
export async function getCoreSystems(): Promise<CoreSystem[] | null> {
  return getCollection<CoreSystem>("coreSystems", {
    sort: { order: 1 },
  });
}

/**
 * Get achievements
 */
export async function getAchievements(): Promise<Achievement[] | null> {
  return getCollection<Achievement>("achievements", {
    sort: { order: 1 },
  });
}

/**
 * Get tools
 */
export async function getTools(): Promise<Tool[] | null> {
  return getCollection<Tool>("tools", {
    sort: { order: 1 },
  });
}

/**
 * Get spoken languages
 */
export async function getSpokenLanguages(): Promise<SpokenLanguage[] | null> {
  return getCollection<SpokenLanguage>("spokenLanguages", {
    sort: { order: 1 },
  });
}

/**
 * Get expertise areas
 */
export async function getExpertiseAreas(): Promise<ExpertiseArea[] | null> {
  return getCollection<ExpertiseArea>("expertiseAreas", {
    sort: { order: 1 },
  });
}

// ============================================
// Singleton fetchers
// ============================================

/**
 * Get personal info
 */
export async function getPersonalInfo(): Promise<PersonalInfo | null> {
  return getSingleton<PersonalInfo>("personalInfo");
}

/**
 * Get site settings
 */
export async function getSiteSettings(): Promise<SiteSettings | null> {
  return getSingleton<SiteSettings>("siteSettings");
}

/**
 * Get hero content
 */
export async function getHeroContent(): Promise<HeroContent | null> {
  return getSingleton<HeroContent>("heroContent");
}

/**
 * Get about page content
 */
export async function getAboutPageContent(): Promise<AboutPageContent | null> {
  return getSingleton<AboutPageContent>("aboutPageContent");
}

/**
 * Get contact page content
 */
export async function getContactPageContent(): Promise<ContactPageContent | null> {
  return getSingleton<ContactPageContent>("contactPageContent");
}

// ============================================
// Utility functions
// ============================================

/**
 * Check if CMS is available and configured
 */
export function isCmsEnabled(): boolean {
  return CMS_ENABLED && !!COCKPIT_URL && !!COCKPIT_API_KEY;
}

/**
 * Get CMS status for debugging
 */
export function getCmsStatus(): {
  enabled: boolean;
  configured: boolean;
  url: string;
} {
  return {
    enabled: CMS_ENABLED,
    configured: !!COCKPIT_URL && !!COCKPIT_API_KEY,
    url: COCKPIT_URL ? `${COCKPIT_URL.substring(0, 20)}...` : "Not configured",
  };
}

// Export the raw fetch for custom queries
export { cockpitFetch, getCollection, getSingleton, getCollectionItem };
