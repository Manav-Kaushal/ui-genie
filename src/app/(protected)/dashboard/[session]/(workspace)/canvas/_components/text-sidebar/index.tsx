"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import { TextShape, updateShape } from "@/redux/slice/shapes";
import { useAppSelector } from "@/redux/store";
import {
  BoldIcon,
  ItalicIcon,
  PaletteIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

type TextSidebarProps = {
  isOpen: boolean;
};

const fontFamilies = [
  "Inter, sans-serif",
  "Arial, sans-serif",
  "Verdana, sans-serif",
  "Helvetica, sans-serif",
  "Georgia, serif",
  "Times New Roman, serif",
  "Courier New, monospace",
  "Monaco, monospace",
  "system-ui, sans-serif",
];

const TextSidebar = ({ isOpen }: TextSidebarProps) => {
  const dispatch = useDispatch();
  const selectedShapes = useAppSelector((state) => state.shapes.selected);
  const shapesEntities = useAppSelector(
    (state) => state.shapes.shapes.entities,
  );

  const selectedTextShape = Object.keys(selectedShapes)
    .map((id) => shapesEntities[id])
    .find((shape) => shape?.type === "text") as TextShape | undefined;

  const updateTextProperty = (property: keyof TextShape, value: any) => {
    if (!selectedTextShape) return;

    dispatch(
      updateShape({
        id: selectedTextShape.id,
        patch: { [property]: value },
      }),
    );
  };

  const [colorInput, setColorInput] = useState(
    selectedTextShape?.fill || "#ffffff",
  );

  const handleColorChange = (color: string) => {
    setColorInput(color);
    if (/^[0-9A-F]{6}$/i.test(color) || /^#[0-9A-F]{3}$/i.test(color)) {
      updateTextProperty("fill", color);
    }
  };

  if (!isOpen || !selectedTextShape) return null;

  return (
    <div
      className={cn(
        "fixed right-5 top-1/2 transform -translate-y-1/2 w-80 backdrop-blur-xl bg-foreground/8 border border-foreground/12 gap-2 p-3 saturate-150 rounded-lg z-50 transition-transform duration-300",
        isOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      <div className="p-4 flex flex-col gap-10 overflow-y-auto max-h-[calc(100vh-8rem)]">
        <div className="space-y-2">
          <Label className="text-foreground/80">Font Family</Label>
          <Select
            value={selectedTextShape?.fontFamily}
            onValueChange={(value) => updateTextProperty("fontFamily", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a font family" />
            </SelectTrigger>
            <SelectContent>
              {fontFamilies.map((font) => (
                <SelectItem
                  key={font}
                  value={font}
                  className="text-foreground hover:bg-foreground/10"
                >
                  <span style={{ fontFamily: font }}>{font.split(",")[0]}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-foreground/80">
            Font Size: {selectedTextShape?.fontSize}px
          </Label>
          <Slider
            value={[selectedTextShape?.fontSize]}
            onValueChange={(value) => updateTextProperty("fontSize", value)}
            min={8}
            max={128}
            step={1}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-foreground/80">
            Font Weight: {selectedTextShape?.fontWeight}
          </Label>
          <Slider
            value={[selectedTextShape?.fontWeight]}
            onValueChange={(value) => updateTextProperty("fontWeight", value)}
            min={100}
            max={900}
            step={100}
            className="w-full"
          />
        </div>

        <div className="space-y-3">
          <Label className="text-foreground/80">Style</Label>
          <div className="flex gap-2">
            <Toggle
              pressed={selectedTextShape?.fontWeight >= 600}
              onPressedChange={(pressed) =>
                updateTextProperty("fontWeight", pressed ? 700 : 400)
              }
              className="data-[state=on]:bg-blue-500 data-[state=on]:text-foreground rounded-md"
            >
              <BoldIcon className="size-4" />
            </Toggle>
            <Toggle
              pressed={selectedTextShape?.fontStyle === "italic"}
              onPressedChange={(pressed) =>
                updateTextProperty("fontStyle", pressed ? "italic" : "normal")
              }
              className="data-[state=on]:bg-blue-500 data-[state=on]:text-foreground rounded-md"
            >
              <ItalicIcon className="size-4" />
            </Toggle>
            <Toggle
              pressed={selectedTextShape?.textDecoration === "underline"}
              onPressedChange={(pressed) =>
                updateTextProperty(
                  "textDecoration",
                  pressed ? "underline" : "none",
                )
              }
              className="data-[state=on]:bg-blue-500 data-[state=on]:text-foreground rounded-md"
            >
              <UnderlineIcon className="size-4" />
            </Toggle>
            <Toggle
              pressed={selectedTextShape?.textDecoration === "line-through"}
              onPressedChange={(pressed) =>
                updateTextProperty(
                  "textDecoration",
                  pressed ? "line-through" : "none",
                )
              }
              className="data-[state=on]:bg-blue-500 data-[state=on]:text-foreground rounded-md"
            >
              <StrikethroughIcon className="size-4" />
            </Toggle>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-foreground/80 flex items-center gap-2">
            <PaletteIcon className="size-4" />
            Text Color
          </Label>
          <div className="flex gap-2">
            <Input
              value={colorInput}
              onChange={(e) => handleColorChange(e.target.value)}
              placeholder="#ffffff"
              className="bg-foreground/5 border-foreground/10 text-foreground flex-1"
            />
            <div
              className="size-8 rounded border border-foreground/12"
              style={{ backgroundColor: colorInput }}
            />
            <div
              className="size-10 rounded border border-foreground/20 cursor-pointer"
              style={{ backgroundColor: selectedTextShape?.fill || "#ffffff" }}
              onClick={() => {
                const input = document.createElement("input");
                input.type = "color";
                input.value = selectedTextShape?.fill || "#ffffff";
                input.onchange = (e) => {
                  const color = (e.target as HTMLInputElement).value;
                  setColorInput(color);
                  updateTextProperty("fill", color);
                };
                input.click();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSidebar;
