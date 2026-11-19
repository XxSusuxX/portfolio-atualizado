'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { PROFILE_DATA } from '@/data/portfolioData';

export interface EditorialHeaderProps {
  activeSection: number; // 0: Inicio, 1: Construcao, 2: Projetos, 3: Contato
  onNavigateSection: (index: number) => void;
}

const NAV_ITEMS = [
  { label: 'INÍCIO', index: 0 },
  { label: 'CONSTRUÇÃO', index: 1 },
  { label: 'PROJETOS', index: 2 },
  { label: 'CONTATO', index: 3 },
];

export const EditorialHeader: React.FC<EditorialHeaderProps> = ({
  activeSection,
  onNavigateSection,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 24;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleJump = (idx: number) => {
    setDrawerOpen(false);
    onNavigateSection(idx);
  };

  const currentNavLabel = NAV_ITEMS[activeSection]?.label ?? 'INÍCIO';

  return (
    <>
      {/* Top Minimal Museum Navbar with Scroll Gradient Mask & Backdrop Blur */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 px-5 sm:px-12 lg:px-20 transition-all duration-300 pointer-events-none ${
          isScrolled
            ? 'py-4 sm:py-5 backdrop-blur-md bg-gradient-to-b from-[#050508]/95 via-[#050508]/80 to-transparent [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]'
            : 'py-5 sm:py-7 bg-gradient-to-b from-[#050508]/70 to-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          {/* Brand Wordmark */}
          <button
            onClick={() => handleJump(0)}
            className="pointer-events-auto font-serif text-base sm:text-xl tracking-[0.12em] text-offwhite hover:text-white transition-colors text-left shrink-0"
          >
            Gabriel Suenaga
          </button>

          {/* Center Navigation Links (Desktop >= 768px) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10 pointer-events-auto">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.index;
              return (
                <button
                  key={item.label}
                  onClick={() => handleJump(item.index)}
                  className="relative py-1 font-mono text-[11px] tracking-[0.22em] uppercase transition-colors text-left whitespace-nowrap"
                >
                  <span className={isActive ? 'text-offwhite' : 'text-muted hover:text-offwhite'}>
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="navActiveUnderline"
                      className="absolute left-0 -bottom-1 w-4 h-[2px] bg-amber-300"
                      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Mobile Active Pill + 3x3 Museum Grid Menu Trigger */}
          <div className="flex items-center gap-3 pointer-events-auto">
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Abrir índice do portfólio"
              className="inline-flex items-center gap-2.5 px-3 py-1.5 md:p-2 md:-mr-2 rounded-full md:rounded-none border border-white/15 md:border-transparent bg-black/50 md:bg-transparent backdrop-blur-md md:backdrop-blur-none text-offwhite/90 hover:text-white transition-colors group"
            >
              <span className="md:hidden font-mono text-[10px] tracking-[0.2em] uppercase text-amber-300">
                {currentNavLabel}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-110 shrink-0"
              >
                {[2, 9, 16].map((y) =>
                  [2, 9, 16].map((x) => (
                    <rect
                      key={`${x}-${y}`}
                      x={x}
                      y={y}
                      width="2.2"
                      height="2.2"
                      fill="currentColor"
                    />
                  ))
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Left Side Vertical Progress Indicator (Desktop Only) */}
      <aside
        aria-label="Indicador de capítulos"
        className="hidden lg:flex fixed left-7 xl:left-10 top-1/2 -translate-y-1/2 z-40 flex-col gap-4 pointer-events-auto"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.index;
          return (
            <button
              key={item.label}
              onClick={() => handleJump(item.index)}
              aria-label={`Ir para ${item.label}`}
              className="group flex items-center gap-3 py-1 focus:outline-none"
            >
              <span
                className={`block h-[2px] transition-all duration-500 ${
                  isActive
                    ? 'w-7 bg-amber-300 shadow-[0_0_12px_rgba(252,211,77,0.65)]'
                    : 'w-2 bg-white/25 group-hover:w-4 group-hover:bg-white/60'
                }`}
              />
            </button>
          );
        })}
      </aside>

      {/* Fullscreen Editorial Index Drawer (Mobile & Desktop) */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-xl px-5 sm:px-12 lg:px-20 py-6 sm:py-8 flex flex-col justify-between overflow-y-auto"
          >
            <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between">
              <span className="font-serif text-lg sm:text-xl tracking-[0.12em] text-offwhite">
                Gabriel Suenaga
              </span>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Fechar menu"
                className="p-2 text-offwhite/80 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 my-auto py-8">
              <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4">
                <span className="font-mono text-[10px] tracking-[0.25em] text-muted uppercase mb-1">
                  NAVEGAÇÃO
                </span>
                {NAV_ITEMS.map((item, idx) => {
                  const isActive = activeSection === item.index;
                  return (
                    <button
                      key={item.label}
                      onClick={() => handleJump(item.index)}
                      className="group flex items-baseline gap-4 sm:gap-6 text-left py-2.5 border-b border-white/[0.08]"
                    >
                      <span
                        className={`font-mono text-xs transition-colors ${
                          isActive ? 'text-amber-300' : 'text-muted group-hover:text-amber-300'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <span
                        className={`font-serif text-2xl sm:text-4xl lg:text-5xl transition-transform duration-300 group-hover:translate-x-2 ${
                          isActive ? 'text-amber-200' : 'text-offwhite'
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="lg:col-span-5 flex flex-col justify-end gap-6 border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-6 lg:pt-0 lg:pl-12">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-muted uppercase block mb-2">
                    CONTATO DIRETO
                  </span>
                  <a
                    href={PROFILE_DATA.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-serif text-xl sm:text-2xl text-offwhite hover:text-amber-200 transition-colors"
                  >
                    (44) 99828-9752
                    <ArrowUpRight className="w-5 h-5 text-muted" />
                  </a>
                  <p className="font-mono text-xs text-muted mt-1.5">{PROFILE_DATA.email}</p>
                </div>

                <div className="flex flex-wrap gap-5 font-mono text-xs tracking-widest uppercase text-muted">
                  <a
                    href={PROFILE_DATA.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-offwhite transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={PROFILE_DATA.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-offwhite transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${PROFILE_DATA.email}`}
                    className="hover:text-offwhite transition-colors"
                  >
                    Email
                  </a>
                  <a
                    href={PROFILE_DATA.cvUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-300 hover:underline"
                  >
                    Currículo (PDF)
                  </a>
                </div>
              </div>
            </div>

            <div className="max-w-[1440px] w-full mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[10px] tracking-[0.22em] text-muted uppercase border-t border-white/[0.07] pt-4">
              <span>{PROFILE_DATA.workMode}</span>
              <span>© {new Date().getFullYear()} GABRIEL SUENAGA</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
