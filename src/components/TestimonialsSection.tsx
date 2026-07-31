import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, Award } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono">
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            <span>Recomendações & Mentoria</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Recomendações
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Avaliações e feedback técnico sobre minha dedicação e liderança de produto.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonialsData.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              <Quote className="w-10 h-10 text-indigo-500/20 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-base sm:text-lg text-zinc-200 italic font-sans leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1px]">
                  <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center font-bold text-xs text-indigo-400">
                    {t.author.charAt(0)}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white font-display">{t.author}</h4>
                  <p className="text-xs text-indigo-400">{t.role}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
