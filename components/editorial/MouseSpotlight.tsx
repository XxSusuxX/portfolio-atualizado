'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Atmospheric Museum Torch / Interactive Mouse Spotlight
 * Follows the cursor with smooth momentum interpolation (lerp),
 * casting a luminous illumination beam that lights up the dark background,
 * vertical architectural grid, and classical bronze statue beneath.
 */
export const MouseSpotlight: React.FC = () => {
  const outerLightRef = useRef<HTMLDivElement>(null);
  const coreLightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse / trackpad)
    if (typeof window === 'undefined') return;
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let isVisible = false;
    let currentOpacity = 0;
    let targetOpacity = 0;
    let isOverClickable = false;
    let currentScale = 1;
    let targetScale = 1;
    let rafId = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        targetOpacity = 1;
      }

      // Detect interactive elements (links, buttons) to dynamically expand spotlight
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest('a, button, [role="button"]');
      if (interactive) {
        if (!isOverClickable) {
          isOverClickable = true;
          targetScale = 1.25;
        }
      } else {
        if (isOverClickable) {
          isOverClickable = false;
          targetScale = 1.0;
        }
      }
    };

    const onMouseEnter = () => {
      isVisible = true;
      targetOpacity = 1;
    };

    const onMouseLeave = () => {
      isVisible = false;
      targetOpacity = 0;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    const tick = () => {
      // Smooth lerp: outer torch has gentle trailing weight (0.10)
      currentX += (mouseX - currentX) * 0.10;
      currentY += (mouseY - currentY) * 0.10;

      currentOpacity += (targetOpacity - currentOpacity) * 0.08;
      currentScale += (targetScale - currentScale) * 0.10;

      // 1. Broad Ambient Spotlight (Illuminates darkened background & sculpture)
      if (outerLightRef.current) {
        outerLightRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${currentScale})`;
        outerLightRef.current.style.opacity = currentOpacity.toFixed(3);
      }

      // 2. Focused Atmospheric Core Beam
      if (coreLightRef.current) {
        coreLightRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${currentScale})`;
        coreLightRef.current.style.opacity = (currentOpacity * (isOverClickable ? 1 : 0.9)).toFixed(3);
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[15] pointer-events-none overflow-hidden">
      {/* 1. Broad Museum Spotlight Beam (Lifts the dark background and reveals sculpture details) */}
      <div
        ref={outerLightRef}
        aria-hidden="true"
        style={{
          width: '780px',
          height: '780px',
          background:
            'radial-gradient(circle closest-side, rgba(255, 255, 255, 0.22) 0%, rgba(200, 220, 240, 0.10) 30%, rgba(59, 130, 246, 0.05) 55%, transparent 100%)',
          mixBlendMode: 'screen',
          willChange: 'transform, opacity',
        }}
        className="absolute top-0 left-0 rounded-full opacity-0 transition-opacity duration-300"
      />

      {/* 2. Concentrated Luminous Core Glow (Adds tangible volume of light around the cursor) */}
      <div
        ref={coreLightRef}
        aria-hidden="true"
        style={{
          width: '320px',
          height: '320px',
          background:
            'radial-gradient(circle closest-side, rgba(255, 255, 255, 0.32) 0%, rgba(220, 235, 255, 0.14) 40%, transparent 100%)',
          mixBlendMode: 'plus-lighter',
          willChange: 'transform, opacity',
        }}
        className="absolute top-0 left-0 rounded-full opacity-0 blur-2xl transition-opacity duration-300"
      />
    </div>
  );
};
