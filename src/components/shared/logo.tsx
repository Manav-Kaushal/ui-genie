import { appConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";

type LogoSize = "xs" | "sm" | "md" | "lg" | "xl";

interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: LogoSize;
  href?: string | null;
  "data-testid"?: string;
}

const SIZE_CLASSES: Record<LogoSize, string> = {
  xs: "text-base",
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-3xl",
} as const;

const Logo = React.forwardRef<HTMLSpanElement, LogoProps>(
  (
    {
      className,
      size = "lg",
      href = "/",
      style,
      "data-testid": testId = "logo",
      ...props
    },
    ref
  ) => {
    const name = appConfig?.name;

    if (!name) {
      if (process.env.NODE_ENV === "development") {
        console.error("[Logo] appConfig.name is not defined");
      }
      return null;
    }

    const logoElement = (
      <span
        ref={ref}
        className={cn(
          "font-bold text-foreground cursor-pointer",
          "transition-opacity duration-300 hover:opacity-80",
          "active:scale-95 active:transition-transform",
          SIZE_CLASSES[size],
          className
        )}
        style={{
          fontFamily: "var(--font-borel), sans-serif",
          ...style,
        }}
        data-testid={testId}
        {...props}
      >
        {name}
      </span>
    );

    if (href === null) {
      return logoElement;
    }

    return (
      <Link
        href={href}
        aria-label={`${name} - Go to homepage`}
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
      >
        {logoElement}
      </Link>
    );
  }
);

Logo.displayName = "Logo";

export default Logo;
export { Logo, type LogoProps, type LogoSize };
