import { View, type ViewProps } from 'react-native';

import { cn } from '@/lib/cn';

export type ThemedViewProps = ViewProps & {
  type?: 'background' | 'backgroundElement' | 'backgroundSelected';
};

const typeClasses: Record<NonNullable<ThemedViewProps['type']>, string> = {
  background: 'bg-surface dark:bg-surface-dark',
  backgroundElement: 'bg-surface-element dark:bg-surface-element-dark',
  backgroundSelected: 'bg-surface-selected dark:bg-surface-selected-dark',
};

export function ThemedView({ className, type = 'background', ...otherProps }: ThemedViewProps) {
  return (
    <View
      className={cn(typeClasses[type], className)}
      {...otherProps}
    />
  );
}
