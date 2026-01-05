"use client";

import Logo from "@/components/shared/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { navigation } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { useQuery } from "convex/react";
import {
  CircleQuestionMarkIcon,
  HashIcon,
  LayoutTemplateIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { api } from "../../../../../../../convex/_generated/api";
import { Id } from "../../../../../../../convex/_generated/dataModel";

type TabProps = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const Navbar = () => {
  const pathname = usePathname();
  const params = useSearchParams();
  const projectId = params.get("project");
  const hasCanvas = pathname.includes("canvas");
  const hasStyleGuide = pathname.includes("style-guide");

  const project = useQuery(
    api.projects.getProject,
    projectId ? { projectId: projectId as Id<"projects"> } : "skip"
  );

  const tabs: TabProps[] = [
    {
      label: "Canvas",
      href: `${navigation.dashboard.home}/${navigation.dashboard.canvas}?project=${projectId}`,
      icon: <HashIcon className="size-4" />,
    },
    {
      label: "Style Guide",
      href: `${navigation.dashboard.home}/${navigation.dashboard.styleGuide}?project=${projectId}`,
      icon: <LayoutTemplateIcon className="size-4" />,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 p-6 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-4">
        <Link href={navigation.dashboard.home} className="-mb-2.5">
          <Logo size="lg" />
        </Link>
        {!hasCanvas ||
          (!hasStyleGuide && (
            <div className="lg:inline-block hidden rounded-full text-primary/80 border border-white/12 backdrop-blur-xl bg-foreground/8 px-4 py-2 text-sm saturate-150">
              Project / {project?.name}
            </div>
          ))}
      </div>

      <div className="lg:flex hidden items-center justify-center gap-2">
        <div className="flex items-center gap-2 backdrop-blur-xl bg-foreground/8 border border-foreground/12 rounded-full p-2 saturate-150">
          {tabs.map((t) => (
            <Link
              href={t.href}
              key={t.href}
              className={cn(
                "group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition",
                `${pathname}?project=${projectId}` === t.href
                  ? "bg-foreground/12 text-foreground border border-foreground/16"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-foreground/6 border border-transparent"
              )}
            >
              <span
                className={cn(
                  `${pathname}?project=${projectId}` === t.href
                    ? "opacity-100"
                    : "opacity-70 group-hover:opacity-90"
                )}
              >
                {t.icon}
              </span>
              <span>{t.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 justify-end">
        <span className="text-sm text-muted-foreground">TODO: credits</span>
        <Button
          variant="secondary"
          className="rounded-full size-12 flex items-center justify-center backdrop-blur-xl bg-foreground/8 border border-foreground/12 saturate-150 hover:bg-foreground/12"
        >
          <CircleQuestionMarkIcon className="size-5 text-foreground" />
        </Button>
        <Avatar className="size-12 ml-2">
          <AvatarImage />
          <AvatarFallback>
            <UserIcon className="size-5 text-background" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
