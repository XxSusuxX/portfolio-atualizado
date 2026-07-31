import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  User,
  Building2,
  Code2,
  Cpu,
  Sparkles,
  MapPin,
  Briefcase,
  Copy,
  Check,
  ShieldCheck,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [copiedBio, setCopiedBio] = useState(false);

  const handleCopyBio = () => {
    navigator.clipboard.writeText(profileData.bioText);
    setCopiedBio(true);
    setTimeout(() => setCopiedBio(false), 2000);
  };

  const stats = [
    { label: 'Empresa Principal', value: 'PetNexus', sub: 'SaaS Multi-Tenant' },
    { label: 'Automação B2B', value: 'Python / Bots', sub: 'Automação & Scraping' },
    { label: 'Especialidade', value: 'TypeScript & Next.js', sub: 'Front & Fullstack' },
    { label: 'Produtividade', value: 'IA Pair-Dev', sub: 'Aceleração Real' }
  ];

  return (
    <section id="sobre" className="py-20 bg-zinc-950 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono">
            <User className="w-3.5 h-3.5 text-indigo-400" />
            <span>Perfil Profissional</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Sobre Mim
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Combinando autonomia executiva, código escalável e visão pragmática de negócios.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bio Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4 relative">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">
                  // Apresentação Executiva
                </span>
                <button
                  onClick={handleCopyBio}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white text-xs font-mono transition-colors"
                >
                  {copiedBio ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Bio</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-sans">
                {profileData.bioText}
              </p>

              <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
                <span className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800">
                  📍 {profileData.location}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800">
                  ⚡ CEO & Fundador
                </span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800">
                  💼 Full-Stack Eng.
                </span>
              </div>
            </div>

            {/* Core Values / Engineering Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-2">
                <div className="flex items-center gap-2 text-indigo-400">
                  <ShieldCheck className="w-4 h-4" />
                  <h4 className="text-sm font-bold text-white font-display">Arquitetura Sólida</h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Foco em TypeScript, schemas estritos com Zod, separação clara de responsabilidades e código de fácil manutenção.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Zap className="w-4 h-4" />
                  <h4 className="text-sm font-bold text-white font-display">Aceleração com IA</h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Utilização de LLMs avançados para pair-programming, testes automatizados e prototipagem ágil sem perder a qualidade.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Key Metrics Matrix */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-1 hover:border-zinc-700 transition-colors"
                >
                  <span className="text-[10px] font-mono font-semibold text-zinc-500 uppercase tracking-wider block">
                    {stat.label}
                  </span>
                  <div className="text-lg font-bold text-white font-display">
                    {stat.value}
                  </div>
                  <span className="text-xs text-indigo-400 font-mono block">
                    {stat.sub}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Direct Focus Highlight */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-zinc-900 to-zinc-900 border border-indigo-500/20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-wider">
                  Objetivo Profissional
                </span>
                <ArrowUpRight className="w-4 h-4 text-indigo-400" />
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Aberto a posições como <strong className="text-white">Desenvolvedor Frontend / Full-Stack</strong> (Júnior a Pleno) e parcerias em automação B2B. Pronto para impactar squads técnicas e entregar produtos do zero à produção.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

