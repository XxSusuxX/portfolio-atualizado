'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUpRight, Compass, Layers, Target } from 'lucide-react';
import { PROFILE_DATA } from '@/data/portfolioData';
import { StatueSequenceCanvas } from './StatueSequenceCanvas';
import { EditorialGridOverlay } from './EditorialGridOverlay';
import { EditorialHeader } from './EditorialHeader';
import { MouseSpotlight } from './MouseSpotlight';
import { SelectedWorkShowcase } from './SelectedWorkShowcase';
import { ScrollTypewriter } from './ScrollTypewriter';

const PILLARS = [
  {
    code: '01',
    title: 'Douradina, PR',
    description: 'Consistência e execução longe dos grandes centros.',
    icon: Compass,
    accent: 'text-amber-300 border-amber-300/30',
  },
  {
    code: '02',
    title: 'Full-Stack & IA',
    description: 'Sistemas web, SaaS multi-tenant e automações no WhatsApp.',
    icon: Layers,
    accent: 'text-cyan-300 border-cyan-300/30',
  },
  {
    code: '03',
    title: 'Foco em Resultado',
    description: 'Engenharia orientada ao problema real de cada negócio.',
    icon: Target,
    accent: 'text-emerald-300 border-emerald-300/30',
  },
];

export const EditorialPortfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<number>(0);
  const magneticBtnRef = useRef<HTMLAnchorElement>(null);

  const [activeSection, setActiveSection] = useState(0);
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      // =========================================================
      // 1. MASTER SCROLLTRIGGER (scrub: 0.8)
      // Sincroniza os 252 frames com os capítulos editoriais
      // =========================================================
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.8,
        onUpdate: (self) => {
          const p = self.progress;
          progressRef.current = p;

          // Mapeamento dos 4 itens da navbar ao longo do scroll:
          // 0: Início (0.00 - 0.23)
          // 1: Construção (0.23 - 0.48)
          // 2: Projetos (0.48 - 0.82)
          // 3: Contato (0.82 - 1.00)
          const nextSection =
            p < 0.23 ? 0 : p < 0.48 ? 1 : p < 0.82 ? 2 : 3;
          setActiveSection((prev) => (prev !== nextSection ? nextSection : prev));
        },
      });

      // =========================================================
      // 2. PARALLAX CAMADA 1: BACKGROUND PROFUNDO (yPercent: -10%)
      // =========================================================
      gsap.to('.parallax-bg-layer', {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8,
        },
      });

      // =========================================================
      // 3. PARALLAX CAMADA 2: MIDGROUND / ESTÁTUA (yPercent: -4%, scale: 1 -> 1.06)
      // =========================================================
      gsap.to('.parallax-mid-layer', {
        yPercent: -4,
        scale: 1.06,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8,
        },
      });

      // =========================================================
      // 4. HERO DEPTH LAYER (Velocidade Parallax Intermediária: yPercent -16%)
      // Mantém 100% de opacidade nos primeiros 320px enquanto termina a digitação e dissolve antes do header
      // =========================================================
      gsap.to('.hero-depth-layer', {
        yPercent: -16,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section-trigger',
          start: 'top+=320 top',
          end: 'bottom 35%',
          scrub: 0.6,
        },
      });

      // =========================================================
      // 5. PARALLAX CAMADA 3: FOREGROUND / ELEMENTOS DE PRIMEIRO PLANO (yPercent: -35%)
      // =========================================================
      gsap.to('.parallax-fg-floating', {
        yPercent: -35,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8,
        },
      });

      // Revelação suave de cada capítulo
      const sections = gsap.utils.toArray<HTMLElement>('.editorial-reveal');
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 82%',
              end: 'bottom 18%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      });

      // Stagger dos cards de projetos
      gsap.fromTo(
        '.work-card',
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#projetos-grid',
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleNavigateSection = (index: number) => {
    if (!containerRef.current) return;
    const totalScrollable = containerRef.current.scrollHeight - window.innerHeight;
    // 0: Início, 1: Construção, 2: Projetos, 3: Contato
    const targets = [0, 0.30, 0.62, 0.94];
    const targetY = totalScrollable * (targets[index] ?? 0);
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  // Rastreamento magnético do botão CTA
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!magneticBtnRef.current) return;
    const rect = magneticBtnRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    setBtnOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setBtnOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[440vh] bg-obsidian text-offwhite overflow-x-clip"
    >
      {/* =========================================================
          CAMADA 1 — BACKGROUND PROFUNDO (Velocidade Lenta: yPercent -10%)
          Atmosfera dark graphite, luz volumétrica e título arquitetônico atrás da estátua
          ========================================================= */}
      <div className="parallax-bg-layer fixed inset-0 z-0 pointer-events-none overflow-hidden will-change-transform">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#070a12] to-[#04060b]" />

        {/* Volumetric light beam 1: Gold / Amber */}
        <div
          className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vh] rounded-full blur-[140px] opacity-40 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(212, 175, 55, 0.02) 50%, transparent 80%)',
          }}
        />

        {/* Volumetric light beam 2: Neon Mint / Cyan */}
        <div
          className="absolute top-[35%] -right-[15%] w-[75vw] h-[75vh] rounded-full blur-[150px] opacity-35 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(0, 245, 212, 0.08) 0%, rgba(0, 245, 212, 0.015) 55%, transparent 80%)',
          }}
        />

        {/* Subtle Monumental Grid Matrix */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Depth Layer Typography behind the statue silhouette (Z-Index Layering) */}
        <div className="hidden md:flex absolute inset-x-0 top-[22%] justify-center select-none pointer-events-none">
          <span className="font-serif text-[13vw] leading-none tracking-[0.18em] uppercase text-white/[0.035] whitespace-nowrap">
            SUENAGA
          </span>
        </div>

        {/* Regional Coordinates */}
        <div className="hidden sm:block absolute bottom-7 left-10 font-mono text-[9px] tracking-[0.35em] uppercase text-white/[0.08] select-none">
          DOURADINA, PR // LAT 23° 22&apos; S // LON 53° 17&apos; W
        </div>
      </div>

      {/* =========================================================
          CAMADA 2 — MIDGROUND / SUJEITO PRINCIPAL (yPercent -4%, Scale 1 -> 1.06)
          O canvas da estátua percorrendo os 252 frames sincronizados com o scroll
          ========================================================= */}
      <div className="parallax-mid-layer fixed inset-0 z-10 pointer-events-none overflow-hidden will-change-transform">
        <StatueSequenceCanvas progressRef={progressRef} />
      </div>

      {/* Atmospheric Museum Torch / Interactive Mouse Spotlight */}
      <MouseSpotlight />

      {/* Fixed 4-Column Architectural Vertical Grid (Overlay) */}
      <EditorialGridOverlay />

      {/* Minimalist Top Bar (with Backdrop Blur & Gradient Mask) & Drawer */}
      <EditorialHeader
        activeSection={activeSection}
        onNavigateSection={handleNavigateSection}
      />

      {/* =========================================================
          CAMADA 3 — FOREGROUND / NARRATIVA ESCANEÁVEL EM 4 CAPÍTULOS
          ========================================================= */}
      <main className="relative z-20 w-full px-5 sm:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto min-h-[440vh] flex flex-col justify-between gap-20 sm:gap-28 lg:gap-36">
          {/* =========================================================
              CAPÍTULO 01 — HERO (Frames 000–062 | Scroll 0%–25%)
              Scrub Typewriter + Depth Layering
              ========================================================= */}
          <section className="hero-section-trigger shrink-0 relative min-h-screen flex flex-col justify-end pb-14 sm:pb-24 pt-28">
            <div className="hero-depth-layer max-w-3xl will-change-transform relative">
              {/* Subtle right-side contour mask creating depth overlap with the statue */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute -right-12 -top-8 w-56 h-56 rounded-full blur-2xl pointer-events-none opacity-45"
                style={{
                  background:
                    'radial-gradient(circle, rgba(5,5,8,0.75) 0%, transparent 70%)',
                }}
              />

              <span className="font-mono text-[10px] sm:text-xs tracking-[0.24em] uppercase text-amber-300/90 block mb-3">
                GABRIEL SUENAGA • ENGENHARIA DE SOFTWARE &amp; IA
              </span>

              <ScrollTypewriter
                as="h1"
                text="Construindo ideias que escalam."
                isHero
                initialChars={11}
                cursorColor="gold"
                className="font-serif text-[clamp(1.95rem,6vw,5.25rem)] leading-[1.16] sm:leading-[1.05] tracking-[-0.02em] text-offwhite font-normal mb-5"
              />

              <p className="font-sans text-sm sm:text-lg leading-relaxed text-offwhite/85 font-light max-w-xl border-l-2 border-amber-300/40 pl-4">
                Do zero à arquitetura de sistemas, automações e produtos digitais.
              </p>
            </div>

            {/* Minimal Scroll Cue */}
            <div className="mt-8 sm:mt-12 flex items-center gap-3">
              <span className="block w-7 h-[1px] bg-amber-300/50" />
              <span className="font-mono text-[10px] tracking-[0.26em] uppercase text-muted">
                Role para explorar
              </span>
            </div>
          </section>

          {/* =========================================================
              CAPÍTULO 02 — A CONSTRUÇÃO (Scroll 25%–50%)
              3 Pilares ultra-diretos
              ========================================================= */}
          <section className="shrink-0 relative min-h-screen flex items-center py-20">
            <div className="editorial-reveal max-w-3xl w-full">
              <span className="font-mono text-[10px] tracking-[0.26em] uppercase text-cyan-300/90 block mb-2">
                01 // CONSTRUÇÃO
              </span>

              <ScrollTypewriter
                as="h2"
                text="A Construção."
                initialChars={1}
                cursorColor="mint"
                className="font-serif text-[clamp(1.9rem,4.8vw,4rem)] leading-[1.16] sm:leading-[1.06] text-offwhite mb-8 font-normal"
              />

              {/* 3 Pilares: grid-cols-1 gap-4 on mobile -> 3 cols on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                {PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.code}
                      className="p-5 rounded-sm border border-white/10 bg-black/40 backdrop-blur-[2px] hover:border-white/25 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-[10px] tracking-[0.22em] text-muted">
                          [{pillar.code}]
                        </span>
                        <div
                          className={`w-7 h-7 rounded-full border flex items-center justify-center ${pillar.accent}`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl text-offwhite font-normal mb-1.5">
                        {pillar.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm leading-relaxed text-offwhite/75 font-light">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* =========================================================
              CAPÍTULO 03 — MÉTODO & PROJETOS (Scroll 50%–75%)
              ========================================================= */}
          <section className="shrink-0 relative min-h-screen flex flex-col justify-center py-20">
            <div className="editorial-reveal mb-8 max-w-2xl">
              <span className="font-mono text-[10px] tracking-[0.26em] uppercase text-amber-300/90 block mb-2">
                02 // MÉTODO &amp; PROJETOS
              </span>

              <ScrollTypewriter
                as="h2"
                text="Do código ao produto."
                initialChars={1}
                cursorColor="gold"
                className="font-serif text-[clamp(1.9rem,4.8vw,4rem)] leading-[1.16] sm:leading-[1.06] text-offwhite font-normal mb-3"
              />

              <p className="font-sans text-sm sm:text-base text-offwhite/80 font-light">
                Sistemas em produção criados para resolver dores reais.
              </p>
            </div>

            {/* Grid de 4 Projetos Reais */}
            <SelectedWorkShowcase />
          </section>

          {/* =========================================================
              CAPÍTULO 04 — FECHAMENTO (Scroll 75%–100%)
              Convite direto + CTAs + Rodapé
              ========================================================= */}
          <section className="shrink-0 relative min-h-screen flex flex-col justify-between pb-12 sm:pb-20 pt-24">
            <div className="editorial-reveal max-w-2xl my-auto mb-12">
              <span className="font-mono text-[10px] tracking-[0.26em] uppercase text-emerald-300/90 block mb-2">
                03 // PRÓXIMO CAPÍTULO
              </span>

              <ScrollTypewriter
                as="h2"
                text="Vamos construir o próximo."
                initialChars={1}
                cursorColor="mint"
                className="font-serif text-[clamp(1.95rem,5.2vw,4.5rem)] leading-[1.16] sm:leading-[1.05] text-offwhite mb-4 font-normal"
              />

              <p className="font-sans text-sm sm:text-lg leading-relaxed text-offwhite/85 font-light mb-8">
                Aberto a novos projetos, consultorias e desafios de engenharia.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-5">
                <a
                  ref={magneticBtnRef}
                  href={PROFILE_DATA.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transform: `translate(${btnOffset.x}px, ${btnOffset.y}px)`,
                  }}
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-offwhite text-obsidian hover:bg-white hover:shadow-[0_0_28px_rgba(255,255,255,0.22)] font-mono text-xs tracking-[0.2em] uppercase transition-all duration-300 w-full sm:w-auto"
                >
                  <span>Iniciar um Projeto</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={PROFILE_DATA.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 border border-white/25 hover:border-white text-offwhite font-mono text-xs tracking-[0.18em] uppercase transition-all duration-300 w-full sm:w-auto"
                >
                  <span>Explorar GitHub</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Editorial Footer & Signature */}
            <div className="editorial-reveal pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-serif text-xl sm:text-2xl text-offwhite tracking-wider block">
                  GABRIEL SUENAGA
                </span>
                <span className="font-mono text-[10px] tracking-[0.24em] text-muted uppercase">
                  Engenharia de Software &amp; Inteligência Artificial
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-[11px] tracking-[0.16em] uppercase text-muted">
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
          </section>
        </div>
      </main>
    </div>
  );
};
