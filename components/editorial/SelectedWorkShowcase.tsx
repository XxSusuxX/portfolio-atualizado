'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA } from '@/data/portfolioData';

export interface ProjectCardData {
  id: string;
  title: string;
  tag: string;
  tagHighlight?: boolean;
  description: string;
  tags: string[];
  image: string;
  fallbackImage?: string;
  secondaryImage?: string;
  secondaryLabel?: string;
  href: string;
}

const FEATURED_PROJECTS: ProjectCardData[] = [
  {
    id: 'petnexus',
    title: 'PetNexus',
    tag: 'SAAS • GESTÃO & VENDAS',
    description:
      'Sistema completo para pet shops com agendamentos, clientes, controle operacional e página de vendas de alta conversão.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
    image: '/projects/petnexus.png',
    secondaryImage: '/projects/petnexusoferta.png',
    secondaryLabel: 'Página de Vendas',
    href: 'https://petnexus.vercel.app/',
  },
  {
    id: 'rsam-b2b',
    title: 'RSAM B2B',
    tag: 'B2B MARKETPLACE • EM DESENVOLVIMENTO',
    tagHighlight: true,
    description:
      'Marketplace atacadista conectando indústrias e fornecedores brasileiros a distribuidores.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    image: '/projects/rsam-b2b.jpg',
    fallbackImage: '/projects/rsam-b2b.png',
    href: PROFILE_DATA.githubUrl,
  },
  {
    id: 'granja-suenaga',
    title: 'Granja Suenaga',
    tag: 'AGROTECH • SISTEMA SOB MEDIDA',
    description:
      'Sistema de gestão avícola desenvolvido sob medida para controle de estoque, ração, insumos e plantel.',
    tags: ['React', 'TypeScript', 'Supabase'],
    image: '/projects/granja-suenaga.png',
    href: PROFILE_DATA.githubUrl,
  },
  {
    id: 'douradina-multiservicos',
    title: 'Douradina MultiServiços',
    tag: 'PLATAFORMA LOCAL • UTILIDADES',
    description:
      'Hub digital unificado de serviços locais para Douradina e região, conectando clientes e prestadores com agilidade.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    image: '/projects/douradinamultiservicos.png',
    href: 'https://douradinamultiservicos.vercel.app/',
  },
];

export const SelectedWorkShowcase: React.FC = () => {
  return (
    <div id="projetos-grid" className="w-full">
      {/* Compact Header Row */}
      <div className="work-header-row flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.24em] uppercase text-offwhite font-medium">
            PROJETOS EM DESTAQUE
          </span>
          <span className="hidden sm:block w-12 h-[1px] bg-white/20" />
        </div>

        <a
          href={PROFILE_DATA.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.18em] uppercase text-muted hover:text-amber-200 transition-colors w-fit"
        >
          <span>Repositórios no GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Responsive Project Cards Grid (grid-cols-1 gap-4 on mobile -> 4 cols on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {FEATURED_PROJECTS.map((project) => (
          <a
            key={project.id}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="work-card group flex flex-col justify-between border border-white/10 hover:border-amber-300/40 transition-all duration-500 rounded-lg overflow-hidden bg-black/40 hover:bg-black/60 backdrop-blur-[2px]"
          >
            {/* Top Real Project Thumbnail */}
            <div className="relative aspect-video w-full overflow-hidden rounded-t-lg border-b border-white/10 bg-obsidian">
              <img
                src={project.image}
                alt={`Preview do projeto ${project.title}`}
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (project.fallbackImage && !target.dataset.fallbackApplied) {
                    target.dataset.fallbackApplied = 'true';
                    target.src = project.fallbackImage;
                  }
                }}
                className="aspect-video w-full object-cover rounded-t-lg border-b border-white/10 transition-transform duration-700 group-hover:scale-[1.04]"
              />

              {/* Subtle Hover Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/15 opacity-55 group-hover:opacity-25 transition-opacity duration-300 pointer-events-none" />

              {/* Integrated Sales Page Secondary Preview for PetNexus */}
              {project.secondaryImage && (
                <div className="absolute bottom-2 right-2 z-10 flex items-center gap-1.5 px-1.5 py-1 rounded bg-black/80 border border-white/15 backdrop-blur-md">
                  <img
                    src={project.secondaryImage}
                    alt={`${project.title} - ${project.secondaryLabel}`}
                    loading="lazy"
                    className="w-8 h-5 object-cover rounded-[2px] border border-white/10"
                  />
                  <span className="font-mono text-[8px] tracking-wider uppercase text-offwhite/90 pr-0.5">
                    {project.secondaryLabel}
                  </span>
                </div>
              )}
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  {project.tagHighlight ? (
                    <span className="inline-block px-2 py-0.5 rounded-sm border border-amber-400/30 bg-amber-400/10 font-mono text-[9px] tracking-[0.16em] uppercase text-amber-300">
                      {project.tag}
                    </span>
                  ) : (
                    <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-amber-300/85">
                      {project.tag}
                    </span>
                  )}
                  <ArrowUpRight className="w-3.5 h-3.5 text-offwhite/40 group-hover:text-amber-200 transition-colors shrink-0 mt-0.5" />
                </div>

                <h3 className="font-serif text-lg sm:text-xl text-offwhite group-hover:text-amber-200 transition-colors font-normal tracking-wide">
                  {project.title}
                </h3>

                <p className="mt-2 font-sans text-xs text-offwhite/75 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="mt-4 pt-3 border-t border-white/[0.07] flex flex-wrap items-center gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-sm bg-white/[0.04] border border-white/10 font-mono text-[9px] tracking-wider text-offwhite/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
