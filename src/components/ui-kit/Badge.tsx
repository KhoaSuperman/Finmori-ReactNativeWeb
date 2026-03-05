import { cva, type VariantProps } from "class-variance-authority";
import { Text, View } from "react-native";

import { cn } from "@/lib/cn";

const badgeVariants = cva("self-start rounded-full px-2.5 py-0.5", {
  variants: {
    variant: {
      default: "bg-neutral-100 dark:bg-neutral-800",
      success: "bg-green-100 dark:bg-green-900",
      warning: "bg-yellow-100 dark:bg-yellow-900",
      error: "bg-red-100 dark:bg-red-900",
      info: "bg-blue-100 dark:bg-blue-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const textVariants = cva("text-xs font-medium", {
  variants: {
    variant: {
      default: "text-neutral-700 dark:text-neutral-300",
      success: "text-green-700 dark:text-green-300",
      warning: "text-yellow-700 dark:text-yellow-300",
      error: "text-red-700 dark:text-red-300",
      info: "text-blue-700 dark:text-blue-300",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  label: string;
  className?: string;
}

export function Badge({ label, variant, className }: BadgeProps) {
  return (
    <View className={cn(badgeVariants({ variant }), className)}>
      <Text className={cn(textVariants({ variant }))}>
        {label}
      </Text>
    </View>
  );
}
