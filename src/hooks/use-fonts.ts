"use client";

import { TypographySection } from "@/redux/api/style-guide";
import { useEffect } from "react";

const generateGoogleFontsUrl = (sections: TypographySection[]) => {
  const fonts = new Map<string, Set<string>>();

  sections.forEach((section) => {
    section.styles.forEach((style) => {
      if (style.fontFamily) {
        if (!fonts.has(style.fontFamily)) {
          fonts.set(style.fontFamily, new Set());
        }
        // Extract numeric weight or default to 400
        const weight = style.fontWeight.replace(/\D/g, "") || "400";
        fonts.get(style.fontFamily)?.add(weight);
      }
    });
  });

  if (fonts.size === 0) return null;

  const families = Array.from(fonts.entries())
    .map(([family, weights]) => {
      const weightStr = Array.from(weights).sort().join(";");
      return `family=${family.replace(/\s+/g, "+")}:wght@${weightStr}`;
    })
    .join("&");

  return `https://fonts.googleapis.com/css2?${families}&display=swap`;
};

export const useGoogleFonts = (typographyGuide: TypographySection[]) => {
  useEffect(() => {
    const url = generateGoogleFontsUrl(typographyGuide);
    if (!url) return;

    // Check if link already exists
    const existingLink = document.querySelector(`link[href="${url}"]`);
    if (existingLink) return;

    const link = document.createElement("link");
    link.href = url;
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Cleanup not typically needed for font loading as standard behavior is to keep them
    // but we could remove if strict cleanup is desired.
    // For now, let's keep it simple and just append.
    return () => {
      // Optional: remove link on unmount if you want to avoid font pollution
      // document.head.removeChild(link);
    };
  }, [typographyGuide]);
};
