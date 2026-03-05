import { View, type ViewProps } from 'react-native';

import { cn } from '@/lib/cn';

export type ThemedViewProps = ViewProps & {
  type?: 'background' | 'backgroundElement' | 'backgroundSelected';
};

const typeClasses: Record<NonNullable<ThemedViewProps['type']>, string> = {
  background: 'bg-bg-primary',
  backgroundElement: 'bg-bg-secondary',
  backgroundSelected: 'bg-bg-tertiary',
};

export function ThemedView({ className, type = 'background', ...otherProps }: ThemedViewProps) {
  return (
    <View
      className={cn(typeClasses[type], className)}
      {...otherProps}
    />
  );
}
