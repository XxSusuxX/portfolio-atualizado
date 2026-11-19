'use client';

import React, { useEffect, useRef, useState } from 'react';

export const TOTAL_FRAMES = 252;
export const FRAME_PREFIX = '/statue/Continue_seamlessly_from_the_exact_fec07780_';
export const FRAME_PATHS = Array.from(
  { length: TOTAL_FRAMES },
  (_, i) => `${FRAME_PREFIX}${String(i).padStart(3, '0')}.png`
);

export interface StatueSequenceCanvasProps {
  /** Normalized scroll progress from 0 to 1 (passed as ref for 0 React re-renders) */
  progressRef: React.MutableRefObject<number>;
}

/**
 * Midground Classical Statue Sequence Canvas (252 Frames Mountain Parallax)
 * Features:
 * - Progressive 3-tier preloader: Priority 000-030 -> Stride pass -> Background asynchronous fill.
 * - GPU texture pre-decoding (`img.decode()`) to eliminate rendering drops.
 * - 100% opaque, pin-sharp frame rendering with zero black bleed and zero flickering.
 * - Explicit `globalAlpha = 1.0` restoration before painting Chapter 4 Dark Scrim,
 *   completely fixing the flashing/flickering at the end of the page.
 */
export const StatueSequenceCanvas: React.FC<StatueSequenceCanvasProps> = ({
  progressRef,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const loadedRef = useRef<boolean[]>(new Array(TOTAL_FRAMES).fill(false));
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  // Progressive Priority Preloader for 252 Frames with GPU texture decoding
  useEffect(() => {
    let cancelled = false;

    const loadSingleFrame = async (idx: number): Promise<void> => {
      if (loadedRef.current[idx] || cancelled) return;

      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = FRAME_PATHS[idx];

        img.onload = async () => {
          if (cancelled) {
            resolve();
            return;
          }
          if ('decode' in img) {
            try {
              await img.decode();
            } catch {
              // Ignore decoding error; image will still draw
            }
          }
          if (!cancelled) {
            imagesRef.current[idx] = img;
            loadedRef.current[idx] = true;
            if (idx === 0) setFirstFrameReady(true);
          }
          resolve();
        };

        img.onerror = () => {
          resolve();
        };
      });
    };

    const preloadSequence = async () => {
      // 1. Immediate priority: Initial ~30 frames (000 to 030) for instant interactive display
      const priorityBatch: number[] = [];
      for (let i = 0; i <= 30 && i < TOTAL_FRAMES; i++) {
        priorityBatch.push(i);
      }
      await Promise.all(priorityBatch.map(loadSingleFrame));
      if (cancelled) return;

      // 2. Stride pass (every 4th frame) to guarantee smooth scrubbing across the entire scroll
      const strideIndices: number[] = [];
      for (let i = 31; i < TOTAL_FRAMES; i += 4) {
        if (!loadedRef.current[i]) strideIndices.push(i);
      }
      await Promise.all(strideIndices.map(loadSingleFrame));
      if (cancelled) return;

      // 3. Batched asynchronous background fill for all remaining frames
      const remaining: number[] = [];
      for (let i = 31; i < TOTAL_FRAMES; i++) {
        if (!loadedRef.current[i]) remaining.push(i);
      }

      const BATCH_SIZE = 8;
      for (let i = 0; i < remaining.length; i += BATCH_SIZE) {
        if (cancelled) break;
        const chunk = remaining.slice(i, i + BATCH_SIZE);
        await Promise.all(chunk.map(loadSingleFrame));
      }
    };

    preloadSequence();

    return () => {
      cancelled = true;
    };
  }, []);

  // 60FPS High-DPI Canvas render loop (Zero React re-renders, Zero Flicker)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let rafId = 0;
    let smoothedProgress = progressRef.current || 0;
    let lastDrawnImg: HTMLImageElement | null = null;

    // Fast lookup for best loaded frame
    const getBestAvailableImage = (targetIdx: number): HTMLImageElement | null => {
      const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, targetIdx));
      if (loadedRef.current[clamped] && imagesRef.current[clamped]) {
        return imagesRef.current[clamped];
      }
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const back = clamped - offset;
        if (back >= 0 && loadedRef.current[back] && imagesRef.current[back]) {
          return imagesRef.current[back];
        }
        const fwd = clamped + offset;
        if (fwd < TOTAL_FRAMES && loadedRef.current[fwd] && imagesRef.current[fwd]) {
          return imagesRef.current[fwd];
        }
      }
      return lastDrawnImg;
    };

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const targetW = Math.floor(window.innerWidth * dpr);
      const targetH = Math.floor(window.innerHeight * dpr);
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const render = () => {
      const targetProgress = progressRef.current || 0;
      smoothedProgress += (targetProgress - smoothedProgress) * 0.15;

      const cw = canvas.width;
      const ch = canvas.height;

      // Strict clamping prevents negative values or overscroll flip at bottom of page
      const clampedProgress = Math.max(0, Math.min(1, smoothedProgress));

      // Exact mapping to 252 frames (0 to 251)
      const frameFloat = clampedProgress * (TOTAL_FRAMES - 1);
      const targetIdx = Math.round(frameFloat);

      const img = getBestAvailableImage(targetIdx);

      if (img) {
        lastDrawnImg = img;

        const iw = img.naturalWidth || 1280;
        const ih = img.naturalHeight || 720;
        const isMobile = window.innerWidth < 768;

        // Mobile (<768px): Frame statue face & hand centered in upper/central half of the screen
        // Desktop (>=768px): Full-bleed cover with smooth camera pan
        const baseScale = isMobile
          ? Math.max((cw / iw) * 1.42, (ch * 0.68) / ih)
          : Math.max(cw / iw, ch / ih);
        const dw = iw * baseScale;
        const dh = ih * baseScale;

        // Camera horizontal pan across the 4 chapters (desktop only, strictly clamped)
        let shiftXNorm = 0;
        if (window.innerWidth >= 1024) {
          if (clampedProgress < 0.25) {
            const t = clampedProgress / 0.25;
            const ease = t * t * (3 - 2 * t);
            shiftXNorm = ease * 0.12;
          } else if (clampedProgress < 0.72) {
            shiftXNorm = 0.12;
          } else {
            const t = Math.min(1, Math.max(0, (clampedProgress - 0.72) / 0.28));
            const ease = t * t * (3 - 2 * t);
            shiftXNorm = 0.12 * (1 - ease);
          }
        }

        const dx = (cw - dw) * 0.5 + shiftXNorm * cw;
        const dy = isMobile ? ch * 0.03 : (ch - dh) * 0.5;

        // Clear only uncovered margins if shift creates side letterbox (zero full-canvas black wipe)
        ctx.fillStyle = '#050508';
        if (dx > 0) {
          ctx.fillRect(0, 0, Math.ceil(dx), ch);
        }
        if (dx + dw < cw) {
          ctx.fillRect(
            Math.floor(dx + dw),
            0,
            cw - Math.floor(dx + dw),
            ch
          );
        }
        if (dy > 0) {
          ctx.fillRect(0, 0, cw, Math.ceil(dy));
        }
        if (dy + dh < ch) {
          ctx.fillRect(0, Math.floor(dy + dh), cw, ch - Math.floor(dy + dh));
        }

        // Draw current frame at 100% opacity - ZERO black bleed, pin-sharp clarity
        ctx.globalAlpha = 1.0;
        ctx.drawImage(img, dx, dy, dw, dh);

        // Native subtle Dark Scrim keeping the 252-frame statue animation clearly visible up to frame 251
        if (clampedProgress > 0.55) {
          const scrimAlpha = Math.min(0.46, ((clampedProgress - 0.55) / 0.35) * 0.46);
          ctx.globalAlpha = 1.0;
          ctx.fillStyle = `rgba(5, 5, 8, ${scrimAlpha})`;
          ctx.fillRect(0, 0, cw, ch);
        }
      } else {
        ctx.fillStyle = '#050508';
        ctx.fillRect(0, 0, cw, ch);
      }

      // Update hero halo opacity directly via ref (zero React state re-renders)
      if (haloRef.current) {
        const haloOpacity = Math.max(0, 1 - clampedProgress * 4.2);
        haloRef.current.style.opacity = (haloOpacity * 0.55).toFixed(3);
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
    };
  }, [progressRef]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-obsidian">
      {/* Soft Volumetric Spotlight Halo behind statue in Hero */}
      <div
        ref={haloRef}
        style={{
          opacity: 0.55,
          transform: 'translate(-50%, -52%)',
        }}
        className="hidden sm:block absolute top-1/2 left-1/2 w-[460px] h-[460px] md:w-[600px] md:h-[600px] rounded-full bg-white/[0.04] blur-3xl z-10 pointer-events-none"
      />

      {/* 252-Frame Sequence Canvas */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full block transition-opacity duration-500 ${
          firstFrameReady ? 'opacity-90 md:opacity-95' : 'opacity-0'
        }`}
      />

      {/* Cinematic Vignette Scrim for Magazine Editorial Contrast (Desktop) */}
      <div
        className="hidden md:block absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(5,5,8,0.85) 0%, rgba(5,5,8,0.48) 45%, rgba(5,5,8,0.15) 100%)',
        }}
      />
      <div
        className="hidden md:block absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 60% 45%, transparent 32%, rgba(5,5,8,0.80) 100%)',
        }}
      />

      {/* Mobile Lower-Half Contrast Gradient (< 768px): keeps upper statue face & hand clear while ensuring 100% text contrast below */}
      <div
        className="block md:hidden absolute inset-x-0 bottom-0 h-[62%] z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #0a0a0a 45%, transparent 100%)',
        }}
      />

      {/* Subtle Editorial Film Grain */}
      <div className="absolute inset-0 z-20 editorial-grain opacity-45 pointer-events-none" />
    </div>
  );
};
