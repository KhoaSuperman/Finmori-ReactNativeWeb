import { cva, type VariantProps } from "class-variance-authority";
import { Pressable, Text, type PressableProps } from "react-native";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "items-center justify-center",
  {
    variants: {
      variant: {
        primary: "bg-primary-600 active:bg-primary-700",
        secondary: "bg-neutral-800 dark:bg-neutral-200 active:bg-neutral-900 dark:active:bg-neutral-300",
        outline: "bg-transparent border border-primary-600 active:bg-primary-50 dark:active:bg-primary-900",
        ghost: "bg-transparent active:bg-neutral-100 dark:active:bg-neutral-800",
        danger: "bg-red-600 active:bg-red-700",
      },
      size: {
        sm: "px-3 py-1.5 rounded-lg",
        md: "px-5 py-2.5 rounded-xl",
        lg: "px-7 py-3.5 rounded-2xl",
      },
      fullWidth: {
        true: "w-full",
      },
      disabled: {
        true: "opacity-50",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

const textVariants = cva("font-semibold", {
  variants: {
    variant: {
      primary: "text-white",
      secondary: "text-white dark:text-neutral-900",
      outline: "text-primary-600 dark:text-primary-400",
      ghost: "text-primary-600 dark:text-primary-400",
      danger: "text-white",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface ButtonProps extends Omit<PressableProps, "children">, Omit<ButtonVariantProps, "disabled"> {
  title: string;
  disabled?: boolean;
}

export function Button({
  title,
  variant,
  size,
  disabled = false,
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      className={cn(buttonVariants({ variant, size, fullWidth, disabled }), className)}
      disabled={disabled}
      {...props}
    >
      <Text className={cn(textVariants({ variant, size }))}>
        {title}
      </Text>
    </Pressable>
  );
}
