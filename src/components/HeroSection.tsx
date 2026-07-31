import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Github,
  Linkedin,
  MessageSquare,
  Globe,
  Mail,
  Sparkles,
  Terminal,
  ShieldCheck,
  Zap,
  Code,
  CheckCircle2,
  Cpu,
  Layers,
  ExternalLink,
  FileText,
  Download
} from 'lucide-react';
import { downloadResumePDF } from '../utils/generatePdf';
import { profileData } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'stack' | 'petnexus' | 'ia'>('petnexus');

  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-zinc-900">
      {/* Background Subtle Dot Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy (Left Column) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Minimalist Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span>Full-Stack & CEO • PetNexus SaaS</span>
            </motion.div>

            {/* Name & Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.05]">
                Gabriel <span className="text-zinc-400 font-normal">Suenaga</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-indigo-400 font-display tracking-tight">
                Desenvolvedor de Software & CEO
              </p>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {profileData.subtitle} Foco em código limpo, aceleração com IA e entregas de alto valor para o negócio.
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
            >
              {/* Recruiter CV Download Button */}
              <button
                onClick={() => {
                  downloadResumePDF();
                  onOpenResume();
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30 active:scale-95 border border-indigo-400/30 cursor-pointer"
              >
                <Download className="w-4 h-4 text-indigo-100 animate-bounce" />
                <span>Baixar Currículo (PDF)</span>
              </button>

              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:text-white transition-all active:scale-95"
              >
                <span>Explorar Projetos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800/80 transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Contato</span>
              </a>
            </motion.div>


            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-zinc-400 text-xs font-mono"
            >
              <span className="text-zinc-500">CONECTE-SE:</span>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 hover:text-indigo-400 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 hover:text-indigo-400 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={profileData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profileData.email}`}
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>

          </div>

          {/* Developer Snapshot & Core Pillars (Right Column) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Card */}
              <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-5 shadow-2xl backdrop-blur-xl space-y-4">
                
                {/* Header Window Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-mono font-semibold">
                    <Code className="w-3.5 h-3.5 text-indigo-400" />
                    <span>developer-snapshot.ts</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                    ● DISPONÍVEL
                  </span>
                </div>

                {/* Subheader */}
                <div className="text-xs font-mono text-zinc-400 flex items-center justify-between px-1">
                  <span>// Atuação Técnica & Produto</span>
                  <span className="text-indigo-400">3 Pilares Principais</span>
                </div>

                {/* Clear Visual Feature Cards */}
                <div className="space-y-3">
                  {/* Pillar 1: Front-End Moderno */}
                  <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-indigo-500/50 transition-colors group">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-indigo-950/60 text-indigo-400 border border-indigo-800/40 group-hover:scale-105 transition-transform flex-shrink-0">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-bold text-white font-display">Front-End & Interfaces Reativas</h3>
                          <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/40 px-1.5 py-0.5 rounded border border-indigo-900/50">Next.js + TS</span>
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-snug">
                          Aplicações ágeis com React 19, TypeScript, Tailwind CSS e validação estrita de dados com Zod.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pillar 2: SaaS Multi-Tenant */}
                  <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-emerald-500/50 transition-colors group">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 group-hover:scale-105 transition-transform flex-shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-bold text-white font-display">CEO & Arquiteto (PetNexus)</h3>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-900/50">PostgreSQL + RLS</span>
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-snug">
                          Plataforma SaaS Multi-Tenant real com Supabase, isolamento de dados RLS e visão de produto.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pillar 3: Automação & IA */}
                  <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-cyan-500/50 transition-colors group">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-800/40 group-hover:scale-105 transition-transform flex-shrink-0">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-bold text-white font-display">Automação B2B & Pair-Dev IA</h3>
                          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-900/50">Python + Bots</span>
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-snug">
                          Bots de WhatsApp, Web Scraping e utilização avançada de IA para acelerar entregas e soluções.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer specs pill */}
                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Douradina, PR • Remoto</span>
                  </div>
                  <span className="font-mono text-indigo-400 font-semibold">Gabriel Suenaga</span>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

