"use client";

import { TypographySection } from "@/redux/api/style-guide";
import { TypeIcon } from "lucide-react";

type StyleGuideTypographyProps = {
  typographyGuide: TypographySection[];
};

const StyleGuideTypography = ({
  typographyGuide,
}: StyleGuideTypographyProps) => {
  // Injecting used Google fonts from typography guide into our html head
  // useGoogleFonts(typographyGuide);

  return (
    <>
      {typographyGuide?.length === 0 ? (
        <div className="text-center py-20">
          <div className="size-16 mx-auto mb-4 rounded-lg bg-muted flex items-center justify-center">
            <TypeIcon className="size-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">
            No typography generated yet
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
            Generate a style guide to see typography recommendations.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-16">
          {typographyGuide.map((section, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-medium text-foreground/50">
                  {section.title}
                </h3>
              </div>
              <div className="flex flex-col divide-y divide-foreground/10 border-y border-foreground/10">
                {section.styles.map((style, styleIndex) => (
                  <div
                    key={styleIndex}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 items-center"
                  >
                    <div className="md:col-span-3 space-y-1.5">
                      <h4 className="font-medium text-foreground">
                        {style.name}
                      </h4>
                      <div className="text-xs text-muted-foreground space-y-0.5">
                        <p>{style.fontFamily}</p>
                        <p>
                          {style.fontWeight} • {style.fontSize} /{" "}
                          {style.lineHeight}
                        </p>
                      </div>
                    </div>
                    <div className="md:col-span-9">
                      <div
                        className="text-foreground truncate"
                        style={{
                          fontFamily: style.fontFamily,
                          fontSize: style.fontSize,
                          fontWeight: style.fontWeight,
                          lineHeight: style.lineHeight,
                          letterSpacing: style.letterSpacing || "normal",
                        }}
                      >
                        The quick brown fox jumps over the lazy dog
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default StyleGuideTypography;
