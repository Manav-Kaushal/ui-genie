"use client";

import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

const useInfiniteCanvas = () => {
  const dispatch = useDispatch<AppDispatch>();

  const viewport = useAppSelector((state) => state.viewport);
  const entityState = useAppSelector((state) => state.shapes.shapes);

  return {
    viewport,
    entityState,
  };
};

export default useInfiniteCanvas;
