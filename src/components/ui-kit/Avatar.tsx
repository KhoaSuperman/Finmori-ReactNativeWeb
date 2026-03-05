import { Image } from "expo-image";
import { Text, View } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const avatarVariants = cva(
  "items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-14 w-14",
        xl: "h-20 w-20",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const textVariants = cva("font-semibold text-primary-700 dark:text-primary-200", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-lg",
      xl: "text-2xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const imageSizeMap = {
  sm: 32,
  md: 40,
  lg: 56,
  xl: 80,
} as const;

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  src?: string;
  initials?: string;
  className?: string;
}

export function Avatar({ src, initials, size = "md", className }: AvatarProps) {
  const resolvedSize = size ?? "md";

  if (src) {
    return (
      <Image
        source={{ uri: src }}
        style={{
          width: imageSizeMap[resolvedSize],
          height: imageSizeMap[resolvedSize],
          borderRadius: 9999,
        }}
      />
    );
  }

  return (
    <View className={cn(avatarVariants({ size }), className)}>
      <Text className={cn(textVariants({ size }))}>
        {initials ?? "?"}
      </Text>
    </View>
  );
}
