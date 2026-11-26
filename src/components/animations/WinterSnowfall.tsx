'use client';

import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export type SnowIntensity = 'subtle' | 'hero' | 'ambient';

export interface WinterSnowfallProps {
  intensity?: SnowIntensity;
  className?: string;
  zIndex?: number;
}

type LayerKind = 'bg' | 'mid' | 'fg';

interface SnowFlake {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  driftAmp: number;
  driftFreq: number;
  phase: number;
  opacity: number;
  layer: LayerKind;
  windFactor: number;
}

const DENSITY_CONFIG: Record<
  SnowIntensity,
  { desktop: number; tablet: number; mobile: number }
> = {
  hero: { desktop: 74, tablet: 44, mobile: 24 },
  ambient: { desktop: 52, tablet: 32, mobile: 18 },
  subtle: { desktop: 38, tablet: 24, mobile: 14 },
};

function createFlake(width: number, height: number, layer: LayerKind, randomY: boolean): SnowFlake {
  if (layer === 'bg') {
    return {
      x: Math.random() * width,
      y: randomY ? Math.random() * height : -8 - Math.random() * 24,
      radius: 0.7 + Math.random() * 0.75,
      speedY: 0.22 + Math.random() * 0.24,
      driftAmp: 0.14 + Math.random() * 0.16,
      driftFreq: 0.4 + Math.random() * 0.4,
      phase: Math.random() * Math.PI * 2,
      opacity: 0.18 + Math.random() * 0.22,
      layer,
      windFactor: 0.45,
    };
  }
  if (layer === 'mid') {
    return {
      x: Math.random() * width,
      y: randomY ? Math.random() * height : -12 - Math.random() * 32,
      radius: 1.45 + Math.random() * 1.15,
      speedY: 0.52 + Math.random() * 0.42,
      driftAmp: 0.28 + Math.random() * 0.28,
      driftFreq: 0.55 + Math.random() * 0.45,
      phase: Math.random() * Math.PI * 2,
      opacity: 0.36 + Math.random() * 0.28,
      layer,
      windFactor: 0.85,
    };
  }
  // Foreground soft bokeh depth-of-field snow
  return {
    x: Math.random() * width,
    y: randomY ? Math.random() * height : -18 - Math.random() * 40,
    radius: 2.7 + Math.random() * 2.1,
    speedY: 1.0 + Math.random() * 0.65,
    driftAmp: 0.42 + Math.random() * 0.36,
    driftFreq: 0.65 + Math.random() * 0.5,
    phase: Math.random() * Math.PI * 2,
    opacity: 0.34 + Math.random() * 0.3,
    layer,
    windFactor: 1.25,
  };
}

/**
 * Multi-layer 60 FPS Canvas 2D Kashmir Snowfall Engine.
 * - 3 depth layers (background, midground, soft bokeh foreground)
 * - Organic multi-sine wind drift
 * - Zero per-frame React re-renders
 * - Auto-pauses when tab is hidden or section is scrolled offscreen
 * - Respects prefers-reduced-motion
 */
export default function WinterSnowfall({
  intensity = 'hero',
  className = '',
  zIndex = 6,
}: WinterSnowfallProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let flakes: SnowFlake[] = [];
    let rafId: number | null = null;
    let isVisible = true;
    let isTabVisible = typeof document !== 'undefined' ? !document.hidden : true;
    let lastTime = performance.now();
    let elapsed = 0;
    let slowFrameStreak = 0;
    let qualityScale = 1;

    // Pre-render a soft radial-gradient snow sprite to avoid per-frame ctx.filter blur cost
    const spriteSize = 32;
    const sprite = document.createElement('canvas');
    sprite.width = spriteSize;
    sprite.height = spriteSize;
    const sCtx = sprite.getContext('2d');
    if (sCtx) {
      const half = spriteSize / 2;
      const grad = sCtx.createRadialGradient(half, half, 0.5, half, half, half);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.42, 'rgba(244, 248, 255, 0.72)');
      grad.addColorStop(0.78, 'rgba(230, 240, 255, 0.18)');
      grad.addColorStop(1, 'rgba(230, 240, 255, 0)');
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, spriteSize, spriteSize);
    }

    const computeCount = (w: number) => {
      const cfg = DENSITY_CONFIG[intensity];
      if (w < 768) return cfg.mobile;
      if (w < 1200) return cfg.tablet;
      return cfg.desktop;
    };

    const initParticles = (w: number, h: number) => {
      const total = computeCount(w);
      const bgCount = Math.round(total * 0.46);
      const midCount = Math.round(total * 0.38);
      const fgCount = Math.max(3, total - bgCount - midCount);

      const next: SnowFlake[] = [];
      for (let i = 0; i < bgCount; i++) next.push(createFlake(w, h, 'bg', true));
      for (let i = 0; i < midCount; i++) next.push(createFlake(w, h, 'mid', true));
      for (let i = 0; i < fgCount; i++) next.push(createFlake(w, h, 'fg', true));
      flakes = next;
    };

    const drawStaticFrame = () => {
      ctx.clearRect(0, 0, width, height);
      const drawLimit = Math.floor(flakes.length * qualityScale);
      for (let i = 0; i < drawLimit; i++) {
        const f = flakes[i];
        ctx.globalAlpha = f.opacity;
        if (f.layer === 'fg') {
          const size = f.radius * 3.1;
          ctx.drawImage(sprite, f.x - size / 2, f.y - size / 2, size, size);
        } else {
          const size = f.radius * 2.4;
          ctx.drawImage(sprite, f.x - size / 2, f.y - size / 2, size, size);
        }
      }
      ctx.globalAlpha = 1;
    };

    const resize = () => {
      const parent = canvas.parentElement;
      const rect = parent ? parent.getBoundingClientRect() : canvas.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      initParticles(width, height);
      if (reducedMotion) {
        drawStaticFrame();
      }
    };

    resize();

    if (reducedMotion) {
      window.addEventListener('resize', resize, { passive: true });
      return () => {
        window.removeEventListener('resize', resize);
      };
    }

    const tick = (now: number) => {
      if (!isVisible || !isTabVisible) {
        rafId = null;
        return;
      }

      const rawDt = now - lastTime;
      lastTime = now;
      // Normalize to 60fps step, capped to avoid jumps after tab wake
      const dt = Math.min(rawDt, 48) / 16.667;
      elapsed += rawDt * 0.001;

      // Adaptive load protection
      if (rawDt > 34) {
        slowFrameStreak++;
        if (slowFrameStreak > 12 && qualityScale > 0.55) {
          qualityScale = Math.max(0.55, qualityScale - 0.15);
          slowFrameStreak = 0;
        }
      } else if (slowFrameStreak > 0) {
        slowFrameStreak--;
      }

      // Organic Kashmir mountain breeze (slowly shifts direction and gust strength)
      const wind =
        0.38 * Math.sin(elapsed * 0.22) +
        0.22 * Math.sin(elapsed * 0.57 + 1.4) +
        0.14 * Math.cos(elapsed * 0.11);

      ctx.clearRect(0, 0, width, height);
      const drawLimit = Math.floor(flakes.length * qualityScale);

      for (let i = 0; i < drawLimit; i++) {
        const f = flakes[i];
        const sway = Math.sin(elapsed * f.driftFreq + f.phase) * f.driftAmp;

        f.y += f.speedY * dt;
        f.x += (wind * f.windFactor + sway) * dt;

        // Wrap horizontally & respawn smoothly at top
        if (f.x > width + 14) f.x = -12;
        else if (f.x < -14) f.x = width + 12;

        if (f.y > height + 14) {
          const fresh = createFlake(width, height, f.layer, false);
          f.x = fresh.x;
          f.y = fresh.y;
          f.opacity = fresh.opacity;
          f.speedY = fresh.speedY;
        }

        ctx.globalAlpha = f.opacity;
        const size = f.layer === 'fg' ? f.radius * 3.1 : f.radius * 2.4;
        ctx.drawImage(sprite, f.x - size / 2, f.y - size / 2, size, size);
      }

      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (rafId === null && isVisible && isTabVisible) {
        lastTime = performance.now();
        rafId = requestAnimationFrame(tick);
      }
    };

    const stopLoop = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const handleVisibility = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) startLoop();
      else stopLoop();
    };

    const observer =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            (entries) => {
              const entry = entries[0];
              isVisible = Boolean(entry?.isIntersecting);
              if (isVisible) startLoop();
              else stopLoop();
            },
            { threshold: 0.02 }
          )
        : null;

    if (observer && canvas.parentElement) {
      observer.observe(canvas.parentElement);
    }

    window.addEventListener('resize', resize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);
    startLoop();

    return () => {
      stopLoop();
      observer?.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [intensity, reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`winter-snowfall-canvas ${className}`.trim()}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex,
      }}
    />
  );
}
