import { Pressable, Text } from "react-native";

import { cn } from "@/lib/cn";

interface ChipProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  className?: string;
}

export function Chip({ label, selected = false, onPress, className }: ChipProps) {
  return (
    <Pressable
      onPress={onPress}
      className={cn(
        "self-start rounded-full border px-4 py-1.5",
        selected
          ? "border-primary-600 bg-primary-600 dark:border-primary-500 dark:bg-primary-500"
          : "border-neutral-300 bg-white active:bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800 dark:active:bg-neutral-700",
        className,
      )}
    >
      <Text
        className={cn(
          "text-sm font-medium",
          selected
            ? "text-white"
            : "text-neutral-700 dark:text-neutral-300",
        )}
      >
        {label}
      </Text>
    </Pressable>
  );
}
