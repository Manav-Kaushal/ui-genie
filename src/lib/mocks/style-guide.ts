// Generate mock data for style guide

export const mockStyleGuide = {
  colorSections: [
    {
      title: "Primary Colors",
      swatches: [
        {
          name: "Primary - 500",
          hexColor: "#6366f1",
          description: "Main brand color, used for primary buttons and links",
        },
        {
          name: "Primary - 600",
          hexColor: "#4f46e5",
          description: "Darker shade for hover states",
        },
        {
          name: "Primary - 400",
          hexColor: "#818cf8",
          description: "Lighter shade for accents",
        },
        {
          name: "Primary - 100",
          hexColor: "#e0e7ff",
          description: "Very light shade for backgrounds",
        },
      ],
    },
    {
      title: "Secondary & Accent Colors",
      swatches: [
        {
          name: "Secondary - Teal",
          hexColor: "#14b8a6",
          description: "Used for success states or alternative actions",
        },
        {
          name: "Accent - Pink",
          hexColor: "#ec4899",
          description: "Used for highlights and badges",
        },
        {
          name: "Accent - Amber",
          hexColor: "#f59e0b",
          description: "Used for warnings or attention",
        },
      ],
    },
    {
      title: "UI Component Colors",
      swatches: [
        {
          name: "Surface - White",
          hexColor: "#ffffff",
          description: "Main background color",
        },
        {
          name: "Surface - Gray 50",
          hexColor: "#f9fafb",
          description: "Alternative background color",
        },
        {
          name: "Border - Gray 200",
          hexColor: "#e5e7eb",
          description: "Used for borders and dividers",
        },
        {
          name: "Surface - Dark",
          hexColor: "#111827",
          description: "Dark background for sidebars or footers",
        },
      ],
    },
    {
      title: "Status & Feedback Colors",
      swatches: [
        {
          name: "Success",
          hexColor: "#22c55e",
          description: "Job complete, success messages",
        },
        {
          name: "Error",
          hexColor: "#ef4444",
          description: "Errors, destructive actions",
        },
        {
          name: "Warning",
          hexColor: "#f97316",
          description: "Warnings, cautionary messages",
        },
        {
          name: "Info",
          hexColor: "#3b82f6",
          description: "Information, tips",
        },
      ],
    },
  ],
};
