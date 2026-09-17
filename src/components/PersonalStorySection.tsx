import React from 'react';
import { motion } from 'motion/react';
import {
  HeartHandshake,
  Flame,
  Sparkles,
  ArrowUpRight,
  Video,
  TrendingUp,
  Compass,
  CheckCircle2,
  Clock,
  Zap,
  Coins,
  ExternalLink
} from 'lucide-react';
import { HubEarningsCard } from './HubEarningsCard';

export const PersonalStorySection: React.FC = () => {
  return (
    <section id="pessoal" className="py-20 bg-zinc-950/90 border-b border-zinc-900 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-950/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-950/15 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title & Badge Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono">
            <HeartHandshake className="w-3.5 h-3.5 text-rose-400" />
            <span>Jornada Pessoal & Execução</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Minha História & Foco em Resultados
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            A rotina de resiliência e independência pessoal, somada à capacidade de gerar valor imediato com tecnologia e IA.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Personal Journey & Independence Card (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 space-y-6 h-full flex flex-col justify-between relative overflow-hidden group hover:border-zinc-700/80 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-rose-950/50 border border-rose-800/40 text-rose-400">
                      <Compass className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-rose-400 uppercase tracking-wider">
                      // Virada de Chave & Determinação
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                    Autonomia Real
                  </span>
                </div>

                <div className="space-y-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
                  <p className="text-zinc-200 font-medium">
                    "Para conquistar minha independência e arcar com meus custos, trabalho como servente. É um trabalho honesto e duro que sustenta minha rotina enquanto me dedico inteiramente à programação."
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Essa realidade de conciliar o trabalho pesado com o estudo constante fortaleceu minha <strong className="text-white">disciplina, ética profissional e resiliência</strong>. Cada hora livre é canalizada com foco absoluto para o desenvolvimento do SaaS PetNexus, projetos de automação B2B e evolução contínua em engenharia de software.
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Busco uma oportunidade no mercado de tecnologia onde possa aplicar toda essa garra, autonomia e capacidade de entrega para transformar a realidade e gerar valor real para a equipe.
                  </p>
                </div>
              </div>

              {/* Core Personal Values Badges */}
              <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-center gap-2.5">
                  <Flame className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block">Determinação</span>
                    <span className="text-[10px] text-zinc-500 font-mono">Foco 100% no Futuro</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block">Autonomia</span>
                    <span className="text-[10px] text-zinc-500 font-mono">Gestão & Execução</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block">Resiliência</span>
                    <span className="text-[10px] text-zinc-500 font-mono">Superação Diária</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right Column: hub.xyz & AI Video Automation (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-zinc-900/90 via-zinc-900 to-indigo-950/30 border border-zinc-800 space-y-6 h-full flex flex-col justify-between relative overflow-hidden group hover:border-indigo-500/40 transition-colors"
            >
              <div className="space-y-4">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-indigo-950/80 border border-indigo-800/50 text-indigo-400">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider block">
                        hub.xyz & IA
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        Treinamento de IA • Tarefas Manuais
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-800/50 font-semibold">
                    R$ 130.70 Verificado
                  </span>
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white font-display text-base font-bold">
                    <Coins className="w-4 h-4 text-emerald-400" />
                    <span>Fonte Principal de Renda & Valor Imediato</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Após finalizar a versão inicial do MVP do PetNexus, migrei o foco estratégico para geração de valor com liquidez imediata no <strong className="text-white">hub.xyz</strong> — ensinando inteligência artificial a executar tarefas manuais do cotidiano (como carpir, lavar louça e ações práticas) através de vídeos demonstrativos.
                  </p>
                  
                  {/* Official Hub Earnings Card Embedded */}
                  <div className="pt-1">
                    <HubEarningsCard allowZoom={true} />
                  </div>

                  {/* Key Time / Dedication Highlight Box */}
                  <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Menos de 2h por dia • Alta Eficiência</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-normal">
                      Produzindo vídeos demonstrativos em <strong className="text-white">menos de 2 horas por dia</strong>, gerei <strong className="text-emerald-400 font-semibold">R$ 130.70 em apenas 3 dias</strong> com status de Contribuidor Verificado no Hub, consolidando este projeto como minha fonte principal de renda.
                    </p>
                  </div>
                </div>

                {/* Objectives & Scalability */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                    <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Meta: Subir frequência e tornar renda principal</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Alavancar capital para reinvestir em novos negócios</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                    <Video className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Ensinando IA com vídeos práticos (carpir, lavar louça, etc.)</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-zinc-800 space-y-2.5">
                <a
                  href="https://ai.hub.xyz/r/WWBDQ473"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-950/50 group/btn"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Acessar hub.xyz (Código: WWBDQ473)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="#projetos"
                  className="w-full py-2 px-3 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 font-mono text-xs transition-colors flex items-center justify-center gap-1.5 border border-zinc-800"
                >
                  <span>Ver Especificações Técnicas nos Projetos</span>
                  <span>↓</span>
                </a>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
