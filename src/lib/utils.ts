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

/**
 * Calculates the bounding box of a polyline.
 * @param points - Array of points defining the polyline.
 * @returns Object with minX, minY, maxX, maxY, width, and height.
 */
export const polylineBox = (
  points: ReadonlyArray<{ x: number; y: number }>,
) => {
  if (points.length === 0) {
    return { minX: 0, minY: 0, maxX: 0, maxY: 0, width: 0, height: 0 };
  }
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;

  for (let i = 0; i < points.length; i++) {
    const { x, y } = points[i];
    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
  }
  return { minX, minY, maxX, maxY, width: maxX - minX, height: maxY - minY };
};
