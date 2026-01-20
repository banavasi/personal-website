import * as React from "react";

export function useComposition<T extends HTMLElement>({
  onKeyDown,
  onCompositionStart,
  onCompositionEnd,
}: {
  onKeyDown?: (e: React.KeyboardEvent<T>) => void;
  onCompositionStart?: (e: React.CompositionEvent<T>) => void;
  onCompositionEnd?: (e: React.CompositionEvent<T>) => void;
}) {
  return {
    onKeyDown: (e: React.KeyboardEvent<T>) => {
      onKeyDown?.(e);
    },
    onCompositionStart: (e: React.CompositionEvent<T>) => {
      onCompositionStart?.(e);
    },
    onCompositionEnd: (e: React.CompositionEvent<T>) => {
      onCompositionEnd?.(e);
    },
  };
}
