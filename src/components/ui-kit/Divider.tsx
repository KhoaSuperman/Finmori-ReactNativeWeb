import { View } from "react-native";

import { cn } from "@/lib/cn";

interface DividerProps {
  spacing?: "sm" | "md" | "lg";
  className?: string;
}

const spacingClasses = {
  sm: "my-2",
  md: "my-4",
  lg: "my-6",
} as const;

export function Divider({ spacing = "md", className }: DividerProps) {
  return (
    <View
      className={cn(
        "h-px bg-neutral-200 dark:bg-neutral-700",
        spacingClasses[spacing],
        className,
      )}
    />
  );
}
