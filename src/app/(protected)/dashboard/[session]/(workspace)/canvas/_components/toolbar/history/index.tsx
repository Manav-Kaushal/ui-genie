"use client";

import { Redo2Icon, Undo2Icon } from "lucide-react";

const HistoryPill = () => {
  return (
    <div className="col-span-1 flex justify-start items-center">
      <div
        className="inline-flex items-center rounded-full backdrop-blur-xl bg-foreground/8 border border-foreground/12 saturate-150"
        aria-hidden
      >
        <span className="inline-grid size-9 place-items-center rounded-full hover:bg-foreground/12 transition-all cursor-pointer">
          <Undo2Icon size={18} className="opacity-80 stroke-[1.75]" />
        </span>

        <span className="mx-1 h-5 w-px rounded bg-foreground/16" />

        <span className="inline-grid size-9 place-items-center rounded-full hover:bg-foreground/12 transition-all cursor-pointer">
          <Redo2Icon size={18} className="opacity-80 stroke-[1.75]" />
        </span>
      </div>
    </div>
  );
};

export default HistoryPill;
