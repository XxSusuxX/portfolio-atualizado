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
import { profileData, experiencesData, educationData, projectsData } from '../data/portfolioData';

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
      description: 'Arquitetura e desenvolvimento completo de uma plataforma em nuvem para automação e gestão de pet shops. Inclui controle financeiro, agendamentos sem conflito, gestão de caixa e portal do tutor.'
    },
    {
      id: 'goodreads-scraper',
      title: 'Goodreads Scraper & GUI (Automação)',
      description: 'Aplicação em Python para extração e estruturação automatizada de dados na web utilizando Scrapy e interface gráfica Tkinter. Conta com tratamento de exceções e exportação em JSON/CSV.'
    },
    {
      id: 'douradina-multiservicos',
      title: 'Hub de Serviços e Automações Locais',
      description: 'Desenvolvimento de ecossistemas web e integração de fluxos automatizados via API para estabelecimentos comerciais e prestadores de serviço.'
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
${profileData.name} - Desenvolvedor de Software | Automação & Projetos
Contato: ${profileData.phone} | ${profileData.location} | ${profileData.email}
LinkedIn: ${cleanLinkedin} | GitHub: ${cleanGithub} | Portfólio: ${profileData.website}

01. PERFIL PROFISSIONAL
Desenvolvedor de Software e criador do PetNexus (SaaS), com forte bagagem em automação de processos, desenvolvimento web e suporte técnico. Experiência na identificação de gargalos operacionais e na criação de soluções digitais eficientes utilizando Python, JavaScript, TypeScript e Next.js. Histórico comprovado de disciplina, liderança de equipe sob pressão e facilidade de comunicação.

02. PROJETOS PRINCIPAIS
• PetNexus (SaaS): Plataforma completa para gestão e agendamento de pet shops.
• Goodreads Scraper & GUI: Automação em Python com interface intuitiva para extração de dados.
• Hub de Soluções e Automações: Desenvolvimento web e integração de bots via APIs.

03. EXPERIÊNCIA PROFISSIONAL
• Fundador & Desenvolvedor (2025 – Atual) | Suenaga Automações & PetNexus
  - Arquitetura de software, desenvolvimento de produtos digitais e integração de APIs.
• Atendente Técnico & Suporte (2021) | Virtual Tec Sistemas
  - Atendimento consultivo, diagnóstico de hardware/software e suporte técnico centrado no cliente.
• Operador Noturno & Líder de Equipe (2024 – 2025) | Gazin Colchões
  - Gestão de fluxo de produção, liderança de setor noturno e resolução proativa de problemas.

04. FORMAÇÃO ACADÊMICA
• Técnico em Desenvolvimento de Sistemas | Colégio Estadual Cleoracy Aparecida Gil (2022 - 2023)
• Engenheiro Front-end | EBAC - Escola Britânica de Artes Criativas e Tecnologia (2023 - 2024)

05. PRINCIPAIS COMPETÊNCIAS
Linguagens/Stack: Python, JavaScript, TypeScript, React, Next.js, HTML/CSS, Tailwind CSS.
Automação & Dados: Web Scraping (Scrapy, Selenium), APIs REST, Supabase, PostgreSQL, Tkinter.
Soft Skills & Suporte: Resolução de Problemas, Liderança de Equipe, Atendimento ao Cliente, Métricas & CX.
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
          {/* Modal Header Controls */}
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

          {/* Document Body */}
          <div className="overflow-y-auto p-6 sm:p-10 print:p-0 space-y-6 print:space-y-4 bg-zinc-950 text-zinc-200 printable-cv font-sans">
            
            {/* Header / Personal Info */}
            <div className="border-b border-zinc-800 pb-5 print:pb-3 space-y-3 print:space-y-2 cv-section-block">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl print:text-2xl font-extrabold text-white font-display tracking-tight">
                    {profileData.name}
                  </h1>
                  <p className="text-lg print:text-sm font-bold text-indigo-400 mt-1 font-display">
                    Desenvolvedor de Software | Automação & Criador de Produtos Digital
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

              {/* Social Links */}
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
                Desenvolvedor de Software focado no desenvolvimento de soluções digitais, sistemas web e automações de processos. Experiência na concepção e construção de produtos SaaS do zero (como o PetNexus), integrando interfaces modernas em Next.js a automações em Python. Apresento forte capacidade analítica para resolução de problemas, histórico de liderança de equipe em ambiente sob pressão e facilidade de comunicação para suporte técnico e atendimento ao cliente.
              </p>
            </div>

            {/* 02. Projetos Principais */}
            <div className="space-y-2.5 cv-section-block">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                <span>02.</span> Projetos de Software em Destaque
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

            {/* 03. Experiência Profissional */}
            <div className="space-y-3 cv-section-block">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                <span>03.</span> Experiência Profissional
              </h2>
              <div className="space-y-3">

                {/* Projeto Próprio / Dev */}
                <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2 cv-card">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-white font-display">Fundador & Desenvolvedor de Software</h3>
                      <p className="text-xs font-semibold text-indigo-400">Suenaga Automações & PetNexus • Douradina - PR</p>
                    </div>
                    <span className="text-xs font-mono text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                      Maio 2025 – Atual
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-zinc-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span>Desenvolvimento e arquitetura completa da plataforma SaaS PetNexus utilizando Next.js, TypeScript e Supabase.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="
