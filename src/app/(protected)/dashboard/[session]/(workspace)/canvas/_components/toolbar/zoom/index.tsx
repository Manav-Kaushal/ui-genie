"use client";

import { Button } from "@/components/ui/button";
import useInfiniteCanvas from "@/hooks/use-canvas";
import { setScale } from "@/redux/slice/viewport";
import { ZoomOutIcon } from "lucide-react";
import { useDispatch } from "react-redux";

const ZoomBar = () => {
  const { viewport } = useInfiniteCanvas();
  const dispatch = useDispatch();

  const handleZoomOut = () => {
    const newScale = Math.max(viewport.scale / 1.2, viewport.minScale);
    dispatch(setScale({ scale: newScale }));
  };

  return (
    <div className="col-span-1 flex justify-end items-center">
      <div className="flex items-center gap-1 backdrop-blur-xl bg-foreground/8 border border-foreground/12 saturate-150 rounded-full p-3">
        <Button
          variant="ghost"
          size="lg"
          onClick={handleZoomOut}
          className="size-9 p-0 rounded-full cursor-pointer hover:bg-foreground/12 border border-transparent hover:border-foreground/16 transition-all"
          title="Zoom Out"
        >
          <ZoomOutIcon className="size-4 text-primary/50" />
        </Button>
      </div>
    </div>
  );
};

export default ZoomBar;
