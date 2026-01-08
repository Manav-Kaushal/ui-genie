import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HashIcon, LayoutIcon, TypeIcon } from "lucide-react";

type StyleGuideLayoutProps = {
  children: React.ReactNode;
};

const tabs = [
  {
    value: "colors",
    label: "Colors",
    icon: HashIcon,
  },
  {
    value: "typography",
    label: "Typography",
    icon: TypeIcon,
  },
  {
    value: "moodboard",
    label: "Moodboard",
    icon: LayoutIcon,
  },
] as const;

const StyleGuideLayout = ({ children }: StyleGuideLayoutProps) => {
  return (
    <Tabs defaultValue={tabs[0].value} className="w-full">
      <div className="mt-36 container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 items-center justify-between">
            <div>
              <h1 className="text-3xl lg:text-left text-center font-bold text-foreground">
                Style Guide
              </h1>
              <p className="text-muted-foreground mt-2 text-center lg:text-left">
                Manage your design projects and continue where you left off.
              </p>
            </div>

            <TabsList className="grid w-full sm:w-fit h-auto grid-cols-3 rounded-full backdrop-blur-xl bg-foreground/8 border border-foreground/12 saturate-150 p-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;

                return (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex items-center gap-2 rounded-xl data-[state=active]:bg-foreground/15 data-[state=active]:backdrop-blur-xl data-[state=active]:border data-[state=active]:border-foreground/12 transition-all duration-200 text-xs sm:text-sm"
                  >
                    <Icon className="size-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.value}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {children}
      </div>
    </Tabs>
  );
};

export default StyleGuideLayout;
