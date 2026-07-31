import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Award,
  Sparkles,
  ShieldAlert,
  FileText,
  Printer
} from 'lucide-react';
import { experiencesData, educationData } from '../data/portfolioData';

interface ExperienceSectionProps {
  onOpenResume?: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="experiencia" className="py-20 bg-zinc-950/80 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
            <span>Trajetória Profissional & Formação</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Experiência & Formação
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            A união da liderança prática, arquitetura de software e formação técnica contínua.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-2xl bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'experience'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Experiência Profissional</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Formação Acadêmica</span>
            </button>
          </div>
        </div>

        {/* Experience Timeline View */}
        {activeTab === 'experience' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiencesData.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`rounded-2xl border p-6 sm:p-8 transition-all ${
                  exp.type === 'founder'
                    ? 'bg-gradient-to-r from-indigo-950/40 via-zinc-900 to-zinc-900 border-indigo-500/40 shadow-xl shadow-indigo-950/20'
                    : exp.type === 'leadership'
                    ? 'bg-zinc-900/60 border-amber-500/30'
                    : 'bg-zinc-900/50 border-zinc-800'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                        {exp.role}
                      </h3>
                      {exp.highlightBadge && (
                        <span className="px-3 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/50 text-xs font-semibold">
                          {exp.highlightBadge}
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-semibold text-indigo-400 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-indigo-400" />
                      <span>{exp.company}</span>
                    </p>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-zinc-400 font-mono">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-400">
                      <MapPin className="w-3 h-3 text-zinc-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights Bullet List */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 pt-2 border-t border-zinc-800/60">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Stack Pills if available */}
                {exp.stack && (
                  <div className="pt-4 mt-4 border-t border-zinc-800/40 flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span key={s} className="px-2.5 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                        {s}
                      </span>
                    ))}
                  </div>
                )}

              </motion.div>
            ))}
          </div>
        )}

        {/* Education View */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {educationData.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800/50 flex items-center justify-center text-indigo-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      {edu.title}
                    </h3>
                    <p className="text-xs font-semibold text-indigo-400 mt-1">
                      {edu.institution}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>{edu.period}</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40 text-[10px]">
                    {edu.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Recruiter CV Download CTA Banner */}
        {onOpenResume && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-indigo-950/60 via-zinc-900 to-zinc-900 border border-indigo-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
          >
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/50 text-xs font-mono font-semibold">
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                <span>Para Recrutadores e Gestores</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Precisa do Currículo em formato PDF?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
                Acesse a versão compilada e formatada do currículo com destaque para os projetos principais e histórico completo.
              </p>
            </div>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all active:scale-95 flex-shrink-0"
            >
              <Printer className="w-4 h-4 text-indigo-200" />
              <span>Abrir & Baixar Currículo (PDF)</span>
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
};
