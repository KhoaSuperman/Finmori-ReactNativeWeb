import { cva, type VariantProps } from "class-variance-authority";
import { View, Text, type ViewProps } from "react-native";

import { cn } from "@/lib/cn";

const cardVariants = cva("rounded-2xl p-4", {
  variants: {
    variant: {
      elevated: "bg-white dark:bg-neutral-800 shadow-md shadow-black/10",
      outlined: "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700",
      filled: "bg-neutral-50 dark:bg-neutral-800",
    },
  },
  defaultVariants: {
    variant: "elevated",
  },
});

interface CardProps extends ViewProps, VariantProps<typeof cardVariants> {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function Card({
  title,
  subtitle,
  children,
  variant,
  className,
  ...props
}: CardProps) {
  return (
    <View className={cn(cardVariants({ variant }), className)} {...props}>
      {title && (
        <Text className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          {title}
        </Text>
      )}
      {subtitle && (
        <Text className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          {subtitle}
        </Text>
      )}
      {children && <View className="mt-3">{children}</View>}
    </View>
  );
}
