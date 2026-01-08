"use client";

import { fetchProjectsSuccess } from "@/redux/slice/projects";
import { useAppDispatch } from "@/redux/store";
import { useEffect } from "react";

type ProjectsProviderProps = {
  children: React.ReactNode;
  initialProjects: any;
};

const ProjectsProvider = ({
  children,
  initialProjects,
}: ProjectsProviderProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (initialProjects?._valueJSON) {
      const projectsData = initialProjects._valueJSON;
      dispatch(
        fetchProjectsSuccess({
          projects: projectsData,
          total: projectsData.length,
        })
      );
    }
  }, [dispatch, initialProjects]);

  return <>{children}</>;
};

export default ProjectsProvider;
