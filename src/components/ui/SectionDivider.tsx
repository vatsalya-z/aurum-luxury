'use client';

import React from 'react';

export interface SectionDividerProps {
  variant?: 'hairline' | 'ornament';
  tone?: 'dark' | 'light';
  className?: string;
}

/**
 * Reusable luxury architectural divider with champagne-gold hairline
 * and optional centered diamond ornament.
 */
export default function SectionDivider({
  variant = 'ornament',
  tone = 'dark',
  className = '',
}: SectionDividerProps) {
  return (
    <div
      className={`section-divider section-divider--${tone} ${className}`.trim()}
      aria-hidden="true"
    >
      <span className="section-divider-line section-divider-line--left" />
      {variant === 'ornament' && (
        <span className="section-divider-ornament">✦</span>
      )}
      <span className="section-divider-line section-divider-line--right" />
    </div>
  );
}
