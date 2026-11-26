'use client';

import React from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export interface WinterFogProps {
  position?: 'horizon' | 'bottom' | 'full';
  intensity?: 'subtle' | 'medium';
  className?: string;
  zIndex?: number;
}

/**
 * Multi-layer GPU-accelerated Himalayan winter mist.
 * Uses soft translucent CSS radial gradients moving horizontally at staggered speeds.
 * Strictly pointer-events: none and never opaque over text or controls.
 */
export default function WinterFog({
  position = 'horizon',
  intensity = 'subtle',
  className = '',
  zIndex = 5,
}: WinterFogProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={`winter-fog winter-fog--${position} winter-fog--${intensity} ${
        reducedMotion ? 'winter-fog--static' : ''
      } ${className}`.trim()}
      style={{ zIndex }}
    >
      <div className="winter-fog-layer winter-fog-layer--slow" />
      <div className="winter-fog-layer winter-fog-layer--mid" />
      <div className="winter-fog-layer winter-fog-layer--drift" />
    </div>
  );
}
