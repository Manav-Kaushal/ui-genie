import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names using `clsx` and `tailwind-merge`.
 * This ensures that Tailwind CSS classes overlap correctly without conflicts.
 *
 * @param inputs - List of class values (strings, objects, arrays, etc.)
 * @returns A merged string of class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generates a URL-friendly slug from a given name.
 * - Normalizes unicode characters (e.g., accents).
 * - Removes non-alphanumeric characters.
 * - Truncates to a maximum length.
 *
 * @param name - The input string to slugify.
 * @param maxLen - Maximum length of the resulting slug (default 80).
 * @returns A clean, lowercase, URL-safe string, or "untitled" if invalid.
 */
export const combinedSlug = (name: string, maxLen = 80): string => {
  const base = name;
  if (!base) return "untitled";

  let s = base
    .normalize("NFKD")
    .replace(/\p{M}+/gu, "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/^a-z0-9]/g, "");

  if (!s) s = "untitled";
  if (s.length > maxLen) s = s.slice(0, maxLen);

  return s;
};
