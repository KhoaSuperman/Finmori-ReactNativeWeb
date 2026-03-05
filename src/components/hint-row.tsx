import React, { type ReactNode } from 'react';
import { View } from 'react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

type HintRowProps = {
  title?: string;
  hint?: ReactNode;
};

export function HintRow({ title = 'Try editing', hint = 'app/index.tsx' }: HintRowProps) {
  return (
    <View className="flex-row items-center justify-between gap-3">
      <ThemedText type="small" className="shrink-0">{title}</ThemedText>
      <ThemedView type="backgroundSelected" className="shrink rounded-lg px-2 py-0.5">
        <ThemedText variant="secondary" numberOfLines={1}>{hint}</ThemedText>
      </ThemedView>
    </View>
  );
}
