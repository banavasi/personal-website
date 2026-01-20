/// <reference types="react" />
/// <reference types="react-dom" />

// Force React JSX types to be used
import type React from 'react';

// Explicitly merge React's JSX namespace into the global JSX namespace
declare global {
  namespace JSX {
    // @ts-ignore - Override Astro's JSX types with React's
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
    interface Element extends React.JSX.Element {}
    interface ElementClass extends React.JSX.ElementClass {}
    interface ElementAttributesProperty extends React.JSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute extends React.JSX.ElementChildrenAttribute {}
    interface IntrinsicAttributes extends React.JSX.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T> extends React.JSX.IntrinsicClassAttributes<T> {}
  }
}
