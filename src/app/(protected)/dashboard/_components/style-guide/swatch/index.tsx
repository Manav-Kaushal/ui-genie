import { cn } from "@/lib/utils";

type ColorSwatchProps = {
  name: string;
  value: string;
  className?: string;
};

const ColorSwatch = ({ name, value, className }: ColorSwatchProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className="size-12 rounded-lg border border-border/20 shrink-0"
        style={{ backgroundColor: value }}
      />
      <div className="space-y-1 min-w-0 flex-1">
        <h4 className="text-sm font-medium text-foreground">{name}</h4>
        <p className="text-xs text-muted-foreground font-mono uppercase">
          {value}
        </p>
      </div>
    </div>
  );
};

export default ColorSwatch;
