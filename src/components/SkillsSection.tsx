import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Database, Cpu, Sparkles, Check, Search } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, categoryId: cat.id, categoryTitle: cat.title }))
  );

  const filteredSkills = allSkills.filter((s) => {
    const matchesCategory = activeCategory === 'all' || s.categoryId === activeCategory;
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 bg-zinc-950 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>Tech Stack & Competências</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Minhas Habilidades
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Competências estruturadas em front-end moderno, ecossistema TypeScript, PostgreSQL e automação.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Todas
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Buscar habilidade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Skills Tags Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: idx * 0.03 }}
              className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all hover:scale-105 ${
                skill.isKeySkill
                  ? 'bg-zinc-900/90 border-indigo-500/40 shadow-lg shadow-indigo-950/20'
                  : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white font-display truncate">
                  {skill.name}
                </span>
                {skill.isKeySkill && (
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                )}
              </div>

              <div className="mt-2.5 flex items-center justify-between text-[10px] text-zinc-400 font-mono">
                <span className="truncate opacity-70">{skill.categoryTitle.split(' ')[0]}</span>
                {skill.level && (
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] font-medium border ${
                      skill.level === 'Uso Diário'
                        ? 'bg-indigo-950/80 text-indigo-300 border-indigo-800/60 font-semibold'
                        : skill.level === 'Projetos Reais'
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800/60 font-semibold'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                    }`}
                  >
                    {skill.level}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category Breakdown Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-3"
            >
              <h3 className="text-lg font-bold text-white font-display">
                {cat.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {cat.description}
              </p>
              <div className="pt-3 border-t border-zinc-800/60 flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
