import { useState } from "react";
import { Text, TextInput, View, type TextInputProps } from "react-native";

import { cn } from "@/lib/cn";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  hint?: string;
}

export function Input({ label, error, hint, className, ...props }: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View className="gap-1.5">
      {label && (
        <Text className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </Text>
      )}
      <TextInput
        className={cn(
          "rounded-xl border bg-white px-4 py-3 text-base text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100",
          error
            ? "border-red-500"
            : focused
              ? "border-primary-500"
              : "border-neutral-300 dark:border-neutral-600",
          className,
        )}
        placeholderTextColor="#A3A3A3"
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
        {...props}
      />
      {error && <Text className="text-xs text-red-500">{error}</Text>}
      {hint && !error && (
        <Text className="text-xs text-neutral-400 dark:text-neutral-500">{hint}</Text>
      )}
    </View>
  );
}
