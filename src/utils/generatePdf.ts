import { jsPDF } from 'jspdf';
import { profileData, educationData, experiencesData, projectsData } from '../data/portfolioData';

export function downloadResumePDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 12;
  const contentWidth = pageWidth - margin * 2;
  let y = 14;

  // Dark sleek background
  const setPageBackground = () => {
    doc.setFillColor(15, 15, 18); // #0f0f12
    doc.rect(0, 0, pageWidth, pageHeight, 'F');
  };

  setPageBackground();

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      setPageBackground();
      y = 14;
    }
  };

  // --- HEADER ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text(profileData.name, margin, y);
  y += 7;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(129, 140, 248); // #818cf8 (Indigo)
  doc.text(profileData.roleTitle, margin, y);
  y += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(161, 161, 170); // zinc-400
  const contactText = `${profileData.location}  |  ${profileData.phone}  |  ${profileData.email}`;
  doc.text(contactText, margin, y);
  y += 4;

  const linksText = `LinkedIn: linkedin.com/in/gabrielsuenaga  |  GitHub: github.com/xxsusuxxs  |  Portfolio: gabriel-suenaga.vercel.app`;
  doc.text(linksText, margin, y);
  y += 6;

  doc.setDrawColor(39, 39, 42); // zinc-800
  doc.setLineWidth(0.4);
  doc.line(margin, y, pageWidth - margin, y);
  y += 6;

  const drawSectionHeader = (number: string, title: string) => {
    checkPageBreak(10);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(129, 140, 248);
    doc.text(`${number}. ${title.toUpperCase()}`, margin, y);
    y += 5;
  };

  // --- 01. PERFIL PROFISSIONAL ---
  drawSectionHeader('01', 'Perfil Profissional');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(212, 212, 216);
  
  const bio = "Desenvolvedor de Software com forte perfil arquitetural e de produto, focado na criação de aplicações reais e escaláveis. Atualmente, sou fundador e Desenvolvedor Full-Stack do PetNexus, um SaaS Multi-Tenant complexo para o ecossistema pet. Especialista em acelerar o ciclo de desenvolvimento utilizando Inteligência Artificial como parceira de pair-programming. Possuo background sólido em automação de processos, integração de APIs e resiliência prática adquirida através de vivências intensas e determinação em entregar resultados sob qualquer circunstância. Busco sempre alinhar código limpo com impacto direto no negócio.";
  
  const bioLines = doc.splitTextToSize(bio, contentWidth);
  checkPageBreak(bioLines.length * 4);
  doc.text(bioLines, margin, y);
  y += bioLines.length * 4 + 4;

  // --- 02. FORMAÇÃO ACADÊMICA ---
  drawSectionHeader('02', 'Formação Acadêmica');
  
  educationData.forEach((edu) => {
    checkPageBreak(12);
    doc.setFillColor(24, 24, 27);
    doc.roundedRect(margin, y, contentWidth, 11, 1.5, 1.5, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(255, 255, 255);
    doc.text(edu.title, margin + 3, y + 4.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(161, 161, 170);
    doc.text(edu.period, pageWidth - margin - 3, y + 4.5, { align: 'right' });

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(129, 140, 248);
    doc.text(`${edu.institution} - ${edu.status}`, margin + 3, y + 8.5);

    y += 13;
  });
  y += 2;

  // --- 03. EXPERIÊNCIA PROFISSIONAL ---
  drawSectionHeader('03', 'Experiência Profissional');

  experiencesData.slice(0, 4).forEach((exp) => {
    const highlightsText = exp.highlights;
    const estimatedHeight = 11 + highlightsText.length * 4.2;
    checkPageBreak(estimatedHeight);

    doc.setFillColor(24, 24, 27);
    doc.roundedRect(margin, y, contentWidth, estimatedHeight - 2, 1.5, 1.5, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(255, 255, 255);
    doc.text(exp.role, margin + 3, y + 4.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(161, 161, 170);
    doc.text(exp.period, pageWidth - margin - 3, y + 4.5, { align: 'right' });

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(129, 140, 248);
    doc.text(`${exp.company} • ${exp.location}`, margin + 3, y + 8.5);

    let itemY = y + 12.5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(212, 212, 216);

    highlightsText.forEach((h) => {
      const wrapped = doc.splitTextToSize(`• ${h}`, contentWidth - 8);
      doc.text(wrapped, margin + 4, itemY);
      itemY += wrapped.length * 3.6;
    });

    y += estimatedHeight + 2;
  });

  // --- 04. PROJETOS EM DESTAQUE ---
  drawSectionHeader('04', 'Projetos Em Destaque');

  const mainProjects = projectsData.filter(
    (p) => p.id === 'petnexus' || p.id === 'douradina-multiservicos' || p.id === 'goodreads-scraper'
  );

  mainProjects.forEach((proj) => {
    const stackText = `Stack: ${proj.stack.join(', ')}`;
    const descLines = doc.splitTextToSize(proj.description, contentWidth - 8);
    const projHeight = 11 + descLines.length * 3.6 + 5;

    checkPageBreak(projHeight);

    doc.setFillColor(24, 24, 27);
    doc.roundedRect(margin, y, contentWidth, projHeight - 2, 1.5, 1.5, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(255, 255, 255);
    doc.text(proj.title, margin + 3, y + 4.5);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(165, 180, 252);
    doc.text(proj.badgeText, pageWidth - margin - 3, y + 4.5, { align: 'right' });

    let lineY = y + 8.5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(212, 212, 216);
    doc.text(descLines, margin + 3, lineY);

    lineY += descLines.length * 3.6 + 1;
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7);
    doc.setTextColor(161, 161, 170);
    doc.text(stackText, margin + 3, lineY);

    y += projHeight + 2;
  });

  // --- 05. PRINCIPAIS TECNOLOGIAS ---
  drawSectionHeader('05', 'Principais Tecnologias & Competências');
  checkPageBreak(12);

  const skillsList = [
    "Next.js / React", "TypeScript", "Tailwind CSS", "Supabase & Auth",
    "PostgreSQL & RLS", "Zod Schema", "Python (Selenium/Scrapy)", "APIs RESTful",
    "Multi-Tenancy", "IA em Pair-Programming", "Automações B2B", "Git / GitHub Workflow"
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(212, 212, 216);

  const skillsText = skillsList.join('   |   ');
  const wrappedSkills = doc.splitTextToSize(skillsText, contentWidth);
  doc.text(wrappedSkills, margin, y);
  y += wrappedSkills.length * 4 + 4;

  // --- FOOTER ---
  checkPageBreak(8);
  doc.setDrawColor(39, 39, 42);
  doc.line(margin, y, pageWidth - margin, y);
  y += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(113, 113, 122);
  doc.text(`Gabriel Suenaga • ${profileData.email} • ${profileData.phone} • ${profileData.website}`, pageWidth / 2, y, { align: 'center' });

  // Download directly as cv-gabrielsuenaga.pdf
  doc.save('cv-gabrielsuenaga.pdf');
}
