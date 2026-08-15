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

  const mainProjects = projectsData.filter(p => p.id === 'petnexus' || p.id === 'douradina-multiservicos' || p.id === 'goodreads-scraper');

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
${profileData.name} - ${profileData.roleTitle}
Contato: ${profileData.phone} | ${profileData.location} | ${profileData.email}
LinkedIn: ${cleanLinkedin} | GitHub: ${cleanGithub} | Portfolio: ${profileData.website}

01. PERFIL PROFISSIONAL
${profileData.bioText}

02. PROJETOS PRINCIPAIS
1. PetNexus (SaaS Multi-Tenant): Arquitetura e desenvolvimento completo de um SaaS para gestão inteligente do ecossistema pet.
2. Douradina MultiServiços: Hub de serviços para Douradina-PR e região que conecta clientes a profissionais.
3. Goodreads Scraper & GUI: Programa em Python para extração automatizada de citações e metadados.

03. EXPERIÊNCIA PROFISSIONAL
• Fundador e Desenvolvedor Full-Stack (Maio 2025 – Atual) | PetNexus (SaaS)
• Criador de Conteúdo & Desenvolvedor Freelance (Agosto 2025 – Atual) | Autônomo
• Desenvolvedor Front-end (Voluntário) (Nov 2023 – Abr 2024) | Projeto Base
• Operador de Espumação Noturno & Líder de Setor (Maio 2024 – Março 2025) | Gazin Colchões

04. FORMAÇÃO ACADÊMICA
• Técnico em Desenvolvimento de Sistemas (2022 - 2023) - Colégio Estadual Cleoracy Aparecida Gil
• Engenheiro Front-end (2023 - 2024) - EBAC

05. PRINCIPAIS COMPETÊNCIAS
Next.js / React, TypeScript, Supabase (Auth/RLS), PostgreSQL, Python, APIs REST, Web Scraping (Scrapy/Selenium), Tailwind CSS, Visão de Produto & SaaS Multi-Tenant.
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
          {/* Modal Header Controls (Hidden on print) */}
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
                title="Baixar PDF do Currículo (cv-gabrielsuenaga.pdf)"
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

          {/* Printable Document Body */}
          <div className="overflow-y-auto p-6 sm:p-10 print:p-0 space-y-6 print:space-y-4 bg-zinc-950 text-zinc-200 printable-cv font-sans">
            
            {/* Header / Personal Info */}
            <div className="border-b border-zinc-800 pb-5 print:pb-3 space-y-3 print:space-y-2 cv-section-block">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl print:text-2xl font-extrabold text-white font-display tracking-tight">
                    {profileData.name}
                  </h1>
                  <p className="text-lg print:text-sm font-bold text-indigo-400 mt-1 font-display">
                    {profileData.roleTitle}
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

              {/* Social / Portfolio Links */}
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
                {profileData.bioText}
              </p>
            </div>

            {/* 02. Projetos Principais */}
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

            {/* 03. Experiência Profissional */}
            <div className="space-y-3 cv-section-block">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                <span>03.</span> Experiência Profissional
              </h2>
              <div className="space-y-3">
                {experiencesData.map((exp) => (
                  <div key={exp.id} className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2 cv-card">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-white font-display">{exp.role}</h3>
                        <p className="text-xs font-semibold text-indigo-400">{exp.company} • {exp.location}</p>
                      </div>
                      <span className="text-xs font-mono text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-1 text-xs text-zinc-300">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 04. Formação Acadêmica */}
            <div className="space-y-2 cv-section-block">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                <span>04.</span> Formação Acadêmica
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {educationData.map((edu) => (
                  <div key={edu.id} className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-1 cv-card">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-xs font-bold text-white font-display">{edu.title}</h3>
                      <span className="text-[10px] font-mono text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">{edu.period}</span>
                    </div>
                    <p className="text-[11px] font-semibold text-indigo-400">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 05. Principais Competências */}
            <div className="space-y-2 pt-2 border-t border-zinc-800 cv-section-block">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                <span>05.</span> Principais Competências
              </h2>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  "Next.js / React",
                  "TypeScript",
                  "Supabase (Auth/RLS)",
                  "PostgreSQL",
                  "Python",
                  "APIs REST",
                  "Web Scraping (Scrapy/Selenium)",
                  "Tailwind CSS",
                  "Visão de Produto & SaaS Multi-Tenant"
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

            {/* Footer Notice */}
            <div className="pt-3 border-t border-zinc-900 text-center text-[11px] text-zinc-400 font-mono cv-section-block">
              Gabriel Suenaga • Douradina - PR • {profileData.phone} • {profileData.email}
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
