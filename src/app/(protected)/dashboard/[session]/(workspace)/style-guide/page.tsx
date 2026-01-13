import { TabsContent } from "@/components/ui/tabs";
import { MoodBoardImage } from "@/hooks/use-styles";
import {
  MoodBoardImagesQuery,
  StyleGuideQuery,
} from "@/lib/convex/query.config";
import { StyleGuide } from "@/redux/api/style-guide";
import { PaletteIcon } from "lucide-react";
import { ThemeContent } from "../../../_components/style-guide/theme";
import StyleGuideTypography from "../../../_components/style-guide/typography";
import StyleGuideMoodBoard from "../../../_components/style-guide/moodboard";

type StyleGuidePageProps = {
  searchParams: Promise<{ project: string }>;
};

const StyleGuidePage = async ({ searchParams }: StyleGuidePageProps) => {
  const projectId = (await searchParams).project;
  const existingStyleGuide = await StyleGuideQuery(projectId);

  const guide = existingStyleGuide.styleGuide
    ?._valueJSON as unknown as StyleGuide;

  const colorGuide = guide?.colorSections || [];
  const typographyGuide = guide?.typographySections || [];

  const existingMoodBoardImages = await MoodBoardImagesQuery(projectId);
  const guideImages = existingMoodBoardImages.images
    ._valueJSON as unknown as MoodBoardImage[];

  return (
    <div>
      <TabsContent value="colors" className="space-y-8">
        {guideImages?.length === 0 ? (
          <div className="space-y-8">
            <div className="text-center py-20">
              <div className="size-16 mx-auto mb-4 rounded-lg bg-muted flex items-center justify-center">
                <PaletteIcon className="size-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                No colors generated yet
              </h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
                Upload images to your mood board and generate an AI-powered
                style guide with colors and typography.
              </p>
            </div>
          </div>
        ) : (
          <ThemeContent colorGuide={colorGuide} />
        )}
      </TabsContent>

      <TabsContent value="typography">
        <StyleGuideTypography typographyGuide={typographyGuide} />
      </TabsContent>

      <TabsContent value="moodboard">
        <StyleGuideMoodBoard guideImages={guideImages} />
      </TabsContent>
    </div>
  );
};

export default StyleGuidePage;
