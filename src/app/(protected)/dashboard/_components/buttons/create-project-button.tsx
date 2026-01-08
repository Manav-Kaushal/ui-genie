"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useProjectCreation } from "@/hooks/use-project";
import { PlusIcon } from "lucide-react";

const CreateProjectButton = () => {
  const { createProject, isCreating, canCreate } = useProjectCreation();

  return (
    <Button
      variant="default"
      onClick={() => createProject()}
      disabled={!canCreate || isCreating}
      className="flex items-center gap-2 cursor-pointer rounded-full"
    >
      {isCreating ? (
        <Spinner className="size-4" />
      ) : (
        <PlusIcon className="size-4" />
      )}
      {isCreating ? "Creating..." : "New Project"}
    </Button>
  );
};

export default CreateProjectButton;
