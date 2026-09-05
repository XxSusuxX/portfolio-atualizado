import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { downloadResumePDF } from '../utils/generatePdf';
import {
  X,
  Printer,
  Download,
  Copy,
  Check,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { profileData, educationData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const mainProjects = [
    {
      id: 'petnexus',
      title: 'PetNexus — Sistema SaaS de Gestão para Pet Shops',
      description: 'Arquitetura e desenvolvimento completo de uma plataforma em nuvem para gestão de pet shops. Inclui controle financeiro, agendamentos, caixa e portal do tutor.'
    },
    {
      id: 'goodreads-scraper',
      title: 'Goodreads Scraper & GUI (Automação em Python)',
      description: 'Aplicação em Python para extração automatizada de dados na web utilizando Scrapy e interface gráfica Tkinter com exportação estruturada.'
    },
    {
      id: 'douradina-multiservicos',
      title: 'Hub de Serviços e Automações Locais',
      description: 'Desenvolvimento de ecossistemas web e integração de fluxos automatizados para estabelecimentos comerciais.'
    }
  ];

  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = 'cv-gabrielsuenaga';
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  const handleCopyText = () => {
    const cleanLinkedin = profileData.linkedin.replace(/^https?:\/\/(www\.)?/, '');
    const cleanGithub = profileData.github.replace(/^https?:\/\/(www\.)?/, '');
    const cvText = `
${profileData.name} - Desenvolvedor de Software | Criador do PetNexus
Contato: ${profileData.phone} | ${profileData.location} | ${profileData.email}
LinkedIn: ${cleanLinkedin} | GitHub: ${cleanGithub} | Portfólio: ${profileData.website}

01. PERFIL PROFISSIONAL
Desenvolvedor de Software e criador de soluções focadas em automação e eficiência. Trajetória marcada por forte ética de trabalho, liderança operacional e capacidade de resolução prática de problemas em ambientes dinâmicos. Domínio em criação de sistemas web (Next.js, TypeScript, Python), automações e atendimento técnico ao cliente.

02. PROJETOS PRINCIPAIS
• PetNexus (SaaS): Plataforma completa para gestão e agendamento de pet shops.
• Goodreads Scraper & GUI: Automação em Python com interface gráfica para extração de dados.
• Hub de Soluções e Automações: Desenvolvimento web e integração de fluxos comerciais.

03. EXPERIÊNCIA PROFISSIONAL
• Desenvolvedor de Software & Fundador (Maio 2025 – Atual) | Suenaga Automações
  - Arquitetura de software, desenvolvimento de produtos digitais (PetNexus) e automações.
• Operador de Espumação (Noturno) (Maio 2024 – Março 2025) | Gazin Colchões
  - Responsável direto pela produção e controle de qualidade no turno da noite.
  - Liderança de equipe no setor, organização de tarefas e resolução de imprevistos em ambiente industrial sob pressão.
• Auxiliar Carga e Descarga (Junho 2023 – Setembro 2023) | Gazin
  - Gestão de fluxo de logística, organização de depósitos, agilidade e trabalho em equipe em ritmo acelerado.
• Atendente Técnico – Loja de Informática (Março 2021 – Julho 2021) | Virtual Tec Sistemas
  - Atendimento presencial a clientes, suporte técnico e auxílio na resolução de dúvidas e problemas de informática.

04. FORMAÇÃO ACADÊMICA
• Técnico em Desenvolvimento de Sistemas (2022 - 2023) - Colégio Estadual Cleoracy Aparecida Gil
• Engenheiro Front-end (2023 - 2024) - EBAC

05. PRINCIPAIS COMPETÊNCIAS
Desenvolvimento de Software, Python, JavaScript, TypeScript, Next.js, Suporte Técnico, Resolução de Problemas, Liderança Operacional, Trabalho em Equipe.
    `.trim();

    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 cv-modal-backdrop">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Controls Bar */}
          <div className="no-print p-4 sm:p-5 bg-zinc-900 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-3 sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-indigo-950 text-indigo-400 border border-indigo-800/50">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white font-display">
                  Currículo Profissional — {profileData.name}
                </h3>
                <p className="text-xs text-zinc-400">
                  Pronto para visualização, cópia ou download em PDF.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleCopyText}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold border border-zinc-700 transition-all active:scale-95 cursor-pointer"
                title="Copiar texto do currículo"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? 'Copiado!' : 'Copiar Texto'}</span>
              </button>

              <button
                onClick={downloadResumePDF}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all active:scale-95 border border-indigo-400/40 cursor-pointer"
                title="Baixar PDF do Currículo"
              >
                <Download className="w-4 h-4 text-indigo-100 animate-bounce" />
                <span>Baixar PDF (.pdf)</span>
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold border border-zinc-700 transition-all active:scale-95 cursor-pointer"
                title="Imprimir via navegador"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Imprimir</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Document Content */}
          <div className="overflow-y-auto p-6 sm:p-10 print:p-0 space-y-6 print:space-y-4 bg-zinc-950 text-zinc-200 printable-cv font-sans">
            
            {/* Personal Info Header */}
            <div className="border-b border-zinc-800 pb-5 print:pb-3 space-y-3 print:space-y-2 cv-section-block">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl print:text-2xl font-extrabold text-white font-display tracking-tight">
                    {profileData.name}
                  </h1>
                  <p className="text-lg print:text-sm font-bold text-indigo-400 mt-1 font-display">
                    Desenvolvedor de Software | Criador do PetNexus
                  </p>
                </div>
                <div className="text-xs font-mono text-zinc-400 space-y-1 sm:text-right">
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-indigo-400" /> {profileData.phone}
                  </p>
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" /> {profileData.location}
                  </p>
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-indigo-400" /> {profileData.email}
                  </p>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 text-xs font-mono pt-1 text-zinc-300">
                <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-1">
                  <Linkedin className="w-3.5 h-3.5 text-indigo-400" /> {profileData.linkedin.replace(/^https?:\/\/(www\.)?/, '')}
                </a>
                <a href={profileData.github} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-1">
                  <Github className="w-3.5 h-3.5 text-indigo-400" /> {profileData.github.replace(/^https?:\/\/(www\.)?/, '')}
                </a>
                <a href={`https://${profileData.website}`} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-indigo-400" /> {profileData.website}
                </a>
              </div>
            </div>

            {/* 01. Perfil Profissional */}
            <div className="space-y-1.5 cv-section-block">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                <span>01.</span> Perfil Profissional
              </h2>
              <p className="text-xs sm:text-sm print:text-xs text-zinc-300 leading-relaxed font-normal">
                Desenvolvedor de Software e criador de soluções tecnológicas focadas em eficiência operacional e automação. Trajetória profissional marcada por resiliência, liderança de equipe em ambiente industrial sob pressão e transição focada para a tecnologia. Experiência na criação do sistema SaaS PetNexus do zero, desenvolvimento de automações em Python/TypeScript e histórico prático em atendimento técnico ao cliente.
              </p>
            </div>

            {/* 02. Projetos */}
            <div className="space-y-2.5 cv-section-block">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                <span>02.</span> Projetos Principais
              </h2>
              <div className="grid grid-cols-1 gap-2.5">
                {mainProjects.map((proj) => (
                  <div key={proj.id} className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1 cv-card">
                    <h3 className="text-xs sm:text-sm font-bold text-white font-display">{proj.title}</h3>
                    <p className="text-xs text-zinc-300 leading-relaxed">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 03. Experiência Profissional (Exatamente do LinkedIn) */}
            <div className="space-y-3 cv-section-block">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                <span>03.</span> Experiência Profissional
              </h2>
              <div className="space-y-3">

                {/* 1. Suenaga Automações */}
                <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2 cv-card">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-white font-display">Desenvolvedor de Software & Fundador</h3>
                      <p className="text-xs font-semibold text-indigo-400">Suenaga Automações • Douradina - PR</p>
                    </div>
                    <span className="text-xs font-mono text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                      Maio 2025 – Atual
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-zinc-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span>Desenvolvimento do SaaS PetNexus e soluções de automação comercial com Next.js, Python e Supabase.</span>
                    </li>
                  </ul>
                </div>

                {/* 2. Gazin - Operador de Espumação (Noturno) */}
                <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2 cv-card">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-white font-display">Operador de Espumação (Noturno)</h3>
                      <p className="text-xs font-semibold text-indigo-400">Gazin Colchões • Douradina - PR</p>
                    </div>
                    <span className="text-xs font-mono text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                      Maio 2024 – Março 2025
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-zinc-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span>Operação de maquinário, responsabilidade direta sobre produção, abastecimento e controle de qualidade.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span>Liderança da equipe no turno da noite, distribuição de tarefas, tomada de decisão e resolução de imprevistos sob pressão.</span>
                    </li>
                  </ul>
                </div>

                {/* 3. Gazin - Auxiliar Carga e Descarga */}
                <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2 cv-card">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-white font-display">Auxiliar Carga e Descarga</h3>
                      <p className="text-xs font-semibold text-indigo-400">Gazin • Douradina - PR</p>
                    </div>
                    <span className="text-xs font-mono text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                      Junho 2023 – Setembro 2023
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-zinc-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span>Atuação na rotina logística de transporte e organização de depósito, com foco em agilidade, atenção aos detalhes e trabalho em equipe.</span>
                    </li>
                  </ul>
                </div>

                {/* 4. Virtual Tec Sistemas - Atendente Técnico */}
                <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2 cv-card">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-white font-display">Atendente Técnico – Loja de Informática</h3>
                      <p className="text-xs font-semibold text-indigo-400">Virtual Tec Sistemas • Douradina - PR</p>
                    </div>
                    <span className="text-xs font-mono text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                      Março 2021 – Julho 2021
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-zinc-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span>Atendimento presencial a clientes, suporte técnico e auxílio na resolução de dúvidas e problemas de informática.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* 04. Formação Acadêmica */}
            <div className="space-y-2 cv-section-block">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                <span>04.</span> Formação Acadêmica
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-1 cv-card">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-xs font-bold text-white font-display">Técnico em Desenvolvimento de Sistemas</h3>
                    <span className="text-[10px] font-mono text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">2022 – 2023</span>
                  </div>
                  <p className="text-[11px] font-semibold text-indigo-400">Colégio Estadual Cleoracy Aparecida Gil</p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-1 cv-card">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-xs font-bold text-white font-display">Engenheiro Front-End</h3>
                    <span className="text-[10px] font-mono text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">2023 – 2024</span>
                  </div>
                  <p className="text-[11px] font-semibold text-indigo-400">EBAC - Escola Britânica de Artes Criativas e Tecnologia</p>
                </div>
              </div>
            </div>

            {/* 05. Competências */}
            <div className="space-y-2 pt-2 border-t border-zinc-800 cv-section-block">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                <span>05.</span> Principais Competências
              </h2>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  "Desenvolvimento de Software",
                  "Python",
                  "JavaScript / TypeScript",
                  "React / Next.js",
                  "Suporte Técnico & Atendimento",
                  "Liderança Operacional",
                  "Resolução de Problemas",
                  "Trabalho em Equipe",
                  "Automação de Processos"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-medium text-indigo-300 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-zinc-900 text-center text-[11px] text-zinc-400 font-mono cv-section-block">
              Gabriel Suenaga • Douradina - PR • {profileData.phone} • {profileData.email}
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
