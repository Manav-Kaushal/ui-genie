import { Spinner } from "@/components/ui/spinner";

const DashboardLoading = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center ">
      <div className="flex flex-col items-center gap-4 text-center">
        <Spinner className="size-8 text-primary" />
        <div className="space-y-1">
          <p className="text-sm font-medium text-foreground">
            Loading Dashboard
          </p>
          <p className="text-xs text-muted-foreground">
            Preparing your workspace...
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardLoading;
