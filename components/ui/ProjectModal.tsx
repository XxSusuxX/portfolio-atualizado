'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Github,
  MessageCircle,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import { ProjectItem } from '@/data/portfolioData';
import { soundFX } from '@/utils/soundEffects';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            className="fixed inset-0 bg-graphite/75 backdrop-blur-md"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-cream border border-graphite/10 shadow-2xl text-graphite p-6 sm:p-9"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              aria-label="Fechar modal"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-cream-dark hover:bg-accent-orange hover:text-white text-graphite flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4 pr-12">
              <span className="px-3 py-1 rounded-full bg-accent-orange text-white font-mono text-xs font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-graphite/10 font-mono text-xs font-semibold text-graphite">
                {project.status}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-graphite tracking-tight">
              {project.title}
            </h3>
            <p className="font-mono text-xs sm:text-sm text-accent-orange font-semibold mt-1">
              {project.subtitle}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl bg-white border border-graphite/10 p-3.5 shadow-sm"
                >
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-graphite-muted">
                    {m.label}
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base text-graphite mt-0.5 block">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Full Overview */}
            <div className="space-y-3 mb-6">
              <h4 className="font-mono text-xs uppercase tracking-widest text-graphite-muted flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-orange" />
                Visão Geral do Projeto
              </h4>
              <p className="text-sm sm:text-base text-graphite/90 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Architecture Specs */}
            <div className="rounded-2xl bg-white border border-graphite/10 p-5 mb-6 space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-graphite font-bold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-accent-orange" />
                Arquitetura & Destaques Técnicos
              </h4>
              <ul className="space-y-2.5">
                {project.architecture.map((spec, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-graphite/85"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="mb-8">
              <h4 className="font-mono text-xs uppercase tracking-widest text-graphite-muted flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-accent-orange" />
                Stack Tecnológica
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, idx) => (
                  <span
                    key={tech}
                    style={{
                      backgroundColor: project.badgeColors[idx % project.badgeColors.length],
                    }}
                    className="px-3 py-1 rounded-full text-white font-mono text-xs font-bold shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons Footer */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-graphite/10">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="flex-1 min-w-[180px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent-orange hover:bg-accent-orangeHover text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider shadow-orange-glow transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Acessar Projeto / Demo
                </a>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-graphite hover:bg-graphite-light text-white font-mono text-xs sm:text-sm font-semibold transition-all"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>

              <a
                href={project.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs sm:text-sm font-semibold transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Conversar sobre este Case
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
