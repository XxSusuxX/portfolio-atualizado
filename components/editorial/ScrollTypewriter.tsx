'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export interface ScrollTypewriterProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  /** If true, types initial phrase on mount and scrubs the rest on Hero scroll */
  isHero?: boolean;
  /** Number of characters visible at the start of the scroll trigger */
  initialChars?: number;
  /** Cursor color theme */
  cursorColor?: 'gold' | 'mint';
}

/**
 * Scrub-synchronized Typewriter Reveal
 * - Reveals text character-by-character linked to GSAP ScrollTrigger (scrub).
 * - Renders a glowing vertical cursor (|) that advances along with the active character.
 * - Groups words in `whitespace-nowrap` spans and keeps unrevealed characters in flow (opacity-0)
 *   so words NEVER break mid-word and layout NEVER shifts during typing.
 */
export const ScrollTypewriter: React.FC<ScrollTypewriterProps> = ({
  text,
  className = '',
  as: Tag = 'h2',
  isHero = false,
  initialChars,
  cursorColor = 'gold',
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const totalChars = text.length;
  const heroInitialTarget = Math.min(totalChars, initialChars ?? 11); // "Construindo"
  const defaultStart = isHero ? heroInitialTarget : (initialChars ?? 1);

  const [visibleCount, setVisibleCount] = useState<number>(isHero ? 1 : defaultStart);
  const countRef = useRef<number>(isHero ? 1 : defaultStart);

  // For Hero: measured initial typing ("Construindo" at 40ms/char) or immediate sync if scrolled
  useEffect(() => {
    if (!isHero) return;

    if (window.scrollY >= 300) {
      countRef.current = totalChars;
      setVisibleCount(totalChars);
      return;
    }

    if (window.scrollY >= 15) {
      const p = Math.min(1, window.scrollY / 300);
      const synced = Math.min(
        totalChars,
        Math.max(heroInitialTarget, Math.round(heroInitialTarget + p * (totalChars - heroInitialTarget)))
      );
      countRef.current = synced;
      setVisibleCount(synced);
      return;
    }

    let current = 1;
    const interval = setInterval(() => {
      current += 1;
      if (current >= heroInitialTarget) {
        current = heroInitialTarget;
        clearInterval(interval);
      }
      if (window.scrollY < 15) {
        countRef.current = current;
        setVisibleCount(current);
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isHero, heroInitialTarget, totalChars]);

  // GSAP ScrollTrigger scrub binding (2x slower reveal cadence)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    const startChars = isHero ? heroInitialTarget : (initialChars ?? 1);

    const trigger = ScrollTrigger.create({
      ...(isHero
        ? {
            start: 0,
            end: 300,
            scrub: 0.45,
          }
        : {
            trigger: el,
            start: 'top 94%',
            end: 'top 50%',
            scrub: 0.5,
          }),
      onUpdate: (self) => {
        const p = Math.max(0, Math.min(1, self.progress));
        const nextCount = Math.min(
          totalChars,
          Math.max(startChars, Math.round(startChars + p * (totalChars - startChars)))
        );
        if (nextCount !== countRef.current) {
          countRef.current = nextCount;
          setVisibleCount(nextCount);
        }
      },
    });

    if (trigger.progress > 0) {
      const nextCount = Math.min(
        totalChars,
        Math.max(startChars, Math.round(startChars + trigger.progress * (totalChars - startChars)))
      );
      countRef.current = nextCount;
      setVisibleCount(nextCount);
    }

    return () => {
      trigger.kill();
    };
  }, [text, totalChars, isHero, initialChars, heroInitialTarget]);

  // Split text into words with start/end character offsets so native font kerning stays intact
  const words = text.split(' ');
  let runningIndex = 0;
  const wordTokens = words.map((word, wIdx) => {
    const startIdx = runningIndex;
    const endIdx = startIdx + word.length;
    runningIndex += word.length + 1; // +1 for space
    return {
      word,
      wIdx,
      startIdx,
      endIdx,
      spaceGlobalIdx: endIdx,
      isLastWord: wIdx === words.length - 1,
    };
  });

  const cursorBorderClass =
    cursorColor === 'mint'
      ? 'border-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.9)]'
      : 'border-amber-300 shadow-[0_0_12px_rgba(252,211,77,0.9)]';

  const renderCursor = () => (
    <span
      aria-hidden="true"
      className={`inline-block w-0 h-[0.86em] border-r-[2px] sm:border-r-[2.5px] align-baseline translate-y-[0.07em] animate-pulse ${cursorBorderClass}`}
    />
  );

  return (
    <Tag
      ref={containerRef as React.RefObject<HTMLHeadingElement>}
      className={`relative break-normal hyphens-none ${className}`}
      aria-label={text}
    >
      {wordTokens.map((token) => {
        const revealedInWord = Math.max(
          0,
          Math.min(token.word.length, visibleCount - token.startIdx)
        );
        const revealedPart = token.word.slice(0, revealedInWord);
        const hiddenPart = token.word.slice(revealedInWord);
        const cursorIndex = visibleCount - 1;
        const isCursorInsideWord =
          cursorIndex >= token.startIdx && cursorIndex < token.endIdx;
        const isCursorOnSpace =
          !token.isLastWord && cursorIndex === token.spaceGlobalIdx;

        return (
          <React.Fragment key={token.wIdx}>
            <span className="inline-block whitespace-nowrap">
              {revealedPart}
              {isCursorInsideWord && renderCursor()}
              {hiddenPart.length > 0 && (
                <span className="opacity-0 select-none" aria-hidden="true">
                  {hiddenPart}
                </span>
              )}
            </span>
            {!token.isLastWord && (
              <>
                {' '}
                {isCursorOnSpace && renderCursor()}
              </>
            )}
          </React.Fragment>
        );
      })}
    </Tag>
  );
};
