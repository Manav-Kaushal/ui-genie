import { cn } from "@/lib/utils";

type LiquidGlassButtonProps = {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "subtle";
  disabled?: boolean;
  style?: React.CSSProperties;
};

const LiquidGlassButton: React.FC<LiquidGlassButtonProps> = ({
  children,
  onClick,
  className,
  size = "md",
  variant = "default",
  disabled = false,
  style,
}) => {
  const sizeClasses = {
    sm: "px-2 py-1 text-xs rounded-lg",
    md: "px-4 py-2 text-sm rounded-xl",
    lg: "px-4 py-3 text-base rounded-2xl",
  };

  const variantClasses = {
    default: "backdrop-blur-xl bg-foreground/8 border border-foreground/12",
    subtle:
      "backdrop-blur-lg bg-foreground/5 border border-foreground/8 saturate-125",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={cn(
        // Base styles
        "relative transition-all duration-200 ease-out whitespace-nowrap",
        "text-foreground/90 font-medium",
        "flex items-center gap-2",
        "pointer-events-auto cursor-pointer",

        // Glassmorphism effect
        variantClasses[variant],

        // Size variants
        sizeClasses[size],

        // Interactive states
        "hover:bg-foreground/12 hover:border-foreground/16",
        "active:bg-foreground/6 active:scale-[0.98]",
        "focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 focus:ring-offset-transparent",

        // Disabled state
        disabled &&
          "opacity-50 cursor-not-allowed hover:bg-foreground/8 hover:border-foreground/12 active:scale-100",

        // Custom classes
        className,
      )}
    >
      {children}
    </button>
  );
};

export default LiquidGlassButton;
