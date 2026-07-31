import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FolderGit2,
  ExternalLink,
  MessageSquare,
  Layers,
  CheckCircle2,
  Cpu,
  Database,
  ShieldCheck,
  Zap,
  X,
  Code2,
  Bot,
  Github
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'saas', label: 'SaaS & Multi-Tenant' },
    { id: 'automation', label: 'Automações & Bots' },
    { id: 'web', label: 'Aplicações Web' }
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projetos" className="py-20 bg-zinc-950 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Casos Práticos & SaaS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Projetos em Destaque
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Sistemas em produção com código limpo, arquitetura multi-tenant e automação B2B.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Flagship SaaS Highlight (PetNexus) - Always Prominent */}
        {selectedCategory === 'all' || selectedCategory === 'saas' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 rounded-3xl bg-gradient-to-br from-indigo-950/60 via-zinc-900 to-zinc-950 border border-indigo-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: SaaS Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    Destaque Principal • SaaS
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-semibold border border-emerald-800/40">
                    Em Desenvolvimento Ativo
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-white font-display">
                  PetNexus <span className="text-zinc-400 font-normal text-2xl">— SaaS Multi-Tenant</span>
                </h3>

                <p className="text-zinc-300 text-base leading-relaxed">
                  Arquitetura e desenvolvimento de um SaaS para gestão inteligente de pet shops e clínicas. Atuando de ponta a ponta: desde a modelagem relacional de banco de dados no PostgreSQL/Supabase com Row Level Security (RLS) até o front-end otimizado em Next.js.
                </p>

                {/* Stack Tags */}
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-mono font-semibold">
                    Stack Tecnológica:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js (App Router)", "TypeScript", "React", "Supabase (Auth/RLS)", "PostgreSQL", "Zod", "Tailwind CSS"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-indigo-300 text-xs font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architecture Highlights Bullets */}
                <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider font-mono">
                    <Database className="w-4 h-4 text-indigo-400" />
                    <span>Destaques da Arquitetura:</span>
                  </div>
                  <ul className="text-xs text-zinc-300 space-y-1.5 font-sans">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Isolamento Multi-Tenant seguro:</strong> Dados isolados rigorosamente por tenant via RLS no Supabase.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Validação End-to-End com Zod:</strong> Prevenção de inconsistências no envio de formulários e APIs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Pair-Programming com IA:</strong> Ciclo acelerado de decisões arquiteturais e refatoração limpa.</span>
                    </li>
                  </ul>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setActiveModalProject(projectsData[0])}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all"
                  >
                    Ver Detalhes da Arquitetura
                  </button>

                  <a
                    href="https://wa.me/5544998289752?text=Ol%C3%A1%20Gabriel!%20Quero%20conhecer%20mais%20detalhes%20do%20PetNexus."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Solicitar Apresentação</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Architectural Mockup Box */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-5 font-mono text-xs text-zinc-300 shadow-2xl space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-zinc-400">
                    <span className="flex items-center gap-1.5 text-indigo-400">
                      <ShieldCheck className="w-4 h-4" /> petnexus-db-schema.sql
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40">
                      RLS ACTIVE
                    </span>
                  </div>

                  <div className="space-y-1.5 text-[11px] leading-relaxed">
                    <p className="text-zinc-500">-- Supabase Multi-Tenant RLS Policy</p>
                    <p className="text-purple-400">CREATE POLICY <span className="text-indigo-300">"Tenant Isolation Policy"</span></p>
                    <p className="pl-3 text-cyan-300">ON <span className="text-amber-300">petshops_data</span></p>
                    <p className="pl-3 text-zinc-400">FOR ALL USING (</p>
                    <p className="pl-6 text-emerald-400">tenant_id = auth.jwt() -&gt;&gt; 'tenant_id'</p>
                    <p className="pl-3 text-zinc-400">);</p>
                    <p className="text-zinc-500 pt-1">// Next.js Server Action + Zod</p>
                    <p className="text-indigo-300">const <span className="text-cyan-300">PetSchema</span> = z.object(&#123; name: z.string().min(2) &#125;);</p>
                  </div>

                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[10px] text-zinc-400">
                    <span>Database: PostgreSQL 16</span>
                    <span>Auth: Supabase OAuth/JWT</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        ) : null}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .filter((p) => p.id !== 'petnexus')
            .map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700/80 p-6 flex flex-col justify-between transition-all hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  
                  {/* Card Header Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-xs font-mono font-medium text-indigo-400">
                      {project.badgeText || project.category.toUpperCase()}
                    </span>
                    {project.category === 'automation' ? (
                      <Bot className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Code2 className="w-5 h-5 text-cyan-400" />
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-zinc-950 border border-zinc-800/80 text-[11px] font-mono text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Actions Footer */}
                <div className="pt-6 mt-4 border-t border-zinc-800/60 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
                  >
                    <span>Saber Mais</span>
                    <span>→</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-medium transition-all shadow-sm shadow-indigo-900/20"
                        title="Acessar projeto em produção (Live Demo)"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Ver Site</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-mono transition-all"
                        title="Ver código no GitHub"
                      >
                        <Github className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Repositório</span>
                      </a>
                    )}

                    {project.whatsappDemoUrl && (
                      <a
                        href={project.whatsappDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-emerald-400 hover:text-emerald-300 transition-all"
                        title="Contato no WhatsApp para este projeto"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl rounded-2xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 text-xs font-mono font-medium border border-indigo-800/50">
                  {activeModalProject.badgeText}
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm text-zinc-400">{activeModalProject.tagline}</p>
              </div>

              <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
                <p>{activeModalProject.fullDescription || activeModalProject.description}</p>

                {activeModalProject.architectureSpecs && (
                  <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                    <h4 className="text-xs font-bold text-indigo-400 uppercase font-mono tracking-wider">
                      Arquitetura & Especificações Técnicas:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {activeModalProject.architectureSpecs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase font-mono tracking-wider">
                    Tecnologias Utilizadas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.stack.map((s) => (
                      <span key={s} className="px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-indigo-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-end gap-3">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold"
                >
                  Fechar
                </button>
                {activeModalProject.demoUrl && (
                  <a
                    href={activeModalProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Acessar Site (Live Demo)</span>
                  </a>
                )}
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs font-mono font-semibold transition-all"
                  >
                    <Github className="w-3.5 h-3.5 text-zinc-300" />
                    <span>Ver no GitHub</span>
                  </a>
                )}
                {activeModalProject.whatsappDemoUrl && (
                  <a
                    href={activeModalProject.whatsappDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Conversar sobre este Projeto</span>
                  </a>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
