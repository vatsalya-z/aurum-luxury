'use client';

import React from 'react';
import WinterSnowfall, { SnowIntensity } from './WinterSnowfall';
import WinterFog from './WinterFog';

export interface WinterEnvironmentProps {
  snow?: boolean;
  fog?: boolean;
  intensity?: SnowIntensity;
  fogPosition?: 'horizon' | 'bottom' | 'full';
  fogIntensity?: 'subtle' | 'medium';
  frostGlow?: boolean;
  snowZIndex?: number;
  fogZIndex?: number;
}

/**
 * Centralized, configurable Kashmir winter environmental orchestrator.
 * Combines layered snowfall, atmospheric Himalayan mist, and optional subtle winter light sheen.
 * All layers are strictly pointer-events: none and aria-hidden.
 */
export default function WinterEnvironment({
  snow = true,
  fog = true,
  intensity = 'hero',
  fogPosition = 'horizon',
  fogIntensity = 'subtle',
  frostGlow = false,
  snowZIndex = 6,
  fogZIndex = 5,
}: WinterEnvironmentProps) {
  return (
    <div className="winter-environment-layer" aria-hidden="true">
      {frostGlow && <div className="winter-frost-sheen" />}
      {fog && (
        <WinterFog
          position={fogPosition}
          intensity={fogIntensity}
          zIndex={fogZIndex}
        />
      )}
      {snow && <WinterSnowfall intensity={intensity} zIndex={snowZIndex} />}
    </div>
  );
}
