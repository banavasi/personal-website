import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Calculate years of experience based on start date (August 2016)
 * @param startYearOrDate - The start year (number) or start date (Date). Default: August 1, 2016
 * @returns String in format "X+ years" where X is calculated from start date to today
 */
export function getYearsOfExperience(startYearOrDate: number | Date = 2016): string {
  // Convert year to August 1st of that year, or use the provided Date
  const startDate = typeof startYearOrDate === 'number' 
    ? new Date(startYearOrDate, 7, 1) // Month 7 = August (0-indexed)
    : startYearOrDate;
  
  const today = new Date();
  
  // Calculate the difference in years
  let years = today.getFullYear() - startDate.getFullYear();
  const monthDiff = today.getMonth() - startDate.getMonth();
  
  // If we haven't reached the start month yet this year, or if we're in the same month
  // but haven't reached the start day, subtract one year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < startDate.getDate())) {
    years--;
  }
  
  // Use the calculated years (minimum 0)
  return `${Math.max(0, years)}+ years`;
}
