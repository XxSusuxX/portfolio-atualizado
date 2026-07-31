import React from 'react';
import { motion } from 'motion/react';
import {
  LayoutGrid,
  Bot,
  Cpu,
  Code2,
  CheckCircle2,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { servicesData, profileData } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    LayoutGrid: <LayoutGrid className="w-6 h-6 text-indigo-400" />,
    Bot: <Bot className="w-6 h-6 text-emerald-400" />,
    Cpu: <Cpu className="w-6 h-6 text-cyan-400" />,
    Code2: <Code2 className="w-6 h-6 text-purple-400" />
  };

  return (
    <section id="servicos" className="py-20 bg-zinc-950/70 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>Soluções & Atuação</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Serviços Especializados
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Desenvolvimento de produtos e automações com foco em entregas rápidas e escalabilidade.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 flex flex-col justify-between space-y-6 hover:border-zinc-700/80 transition-all hover:-translate-y-1 group"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 w-fit group-hover:scale-110 transition-transform">
                  {iconMap[service.icon]}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 pt-2 border-t border-zinc-800/60">
                  {service.highlights.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`${profileData.whatsappUrl}?text=Ol%C3%A1%20Gabriel!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors"
              >
                <span>Solicitar Proposta</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
