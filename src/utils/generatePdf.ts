import { jsPDF } from 'jspdf';
import { profileData, experiencesData, educationData, projectsData } from '../data/portfolioData';
import { robotoRegularBase64, robotoBoldBase64 } from './robotoFont';

function buildPdfDocument(): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  // Register UTF-8 TrueType fonts
  doc.addFileToVFS('Roboto-Regular.ttf', robotoRegularBase64);
  doc.addFont('Roboto-Regular.ttf', 'Roboto', 'normal');

  doc.addFileToVFS('Roboto-Bold.ttf', robotoBoldBase64);
  doc.addFont('Roboto-Bold.ttf', 'Roboto', 'bold');

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 14;
  const contentWidth = pageWidth - margin * 2; // 182mm

  // Color Palette - Premium Dark Sleek Theme
  const cDarkBg = [11, 13, 19] as const;       // #0b0d13 (Primary Canvas)
  const cCardBg = [18, 21, 30] as const;       // #12151e (Card Surface)
  const cCardBorder = [34, 40, 56] as const;   // #222838 (Card Subtle Border)
  const cTextWhite = [255, 255, 255] as const; // #ffffff (Titles & Strong headers)
  const cTextZinc100 = [244, 244, 245] as const; // #f4f4f5 (High-contrast text)
  const cTextZinc300 = [212, 212, 216] as const; // #d4d4d8 (Readable Body)
  const cTextMuted = [148, 163, 184] as const; // #94a3b8 (Captions & Muted details)
  const cIndigo = [129, 140, 248] as const;    // #818cf8 (Vibrant Indigo accent)
  const cEmerald = [52, 211, 153] as const;    // #34d399 (Emerald validation accent)
  const cBlue = [96, 165, 250] as const;       // #60a5fa (Blue accent)

  const drawPageBackground = () => {
    doc.setFillColor(cDarkBg[0], cDarkBg[1], cDarkBg[2]);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');
  };

  // Helper: Draw clickable link with underline and PDF Link Annotation
  const drawClickableLink = (
    label: string,
    x: number,
    y: number,
    url: string,
    fontSize = 7.5,
    color: readonly [number, number, number] = cIndigo
  ): number => {
    doc.setFont('Roboto', 'bold');
    doc.setFontSize(fontSize);
    doc.setTextColor(color[0], color[1], color[2]);
    doc.text(label, x, y);
    const textWidth = doc.getTextWidth(label);

    // Subtle underline
    doc.setDrawColor(color[0], color[1], color[2]);
    doc.setLineWidth(0.15);
    doc.line(x, y + 0.5, x + textWidth, y + 0.5);

    // PDF Annotation link for standard PDF readers
    const fontHeightMm = fontSize * 0.3527;
    doc.link(x, y - fontHeightMm + 0.4, textWidth, fontHeightMm + 0.8, { url });

    return textWidth;
  };

  // Helper: Draw Section Header
  const drawSectionHeader = (numberStr: string, title: string, yPos: number) => {
    doc.setFont('Roboto', 'bold');
    doc.setFontSize(9.5);

    // Number prefix in Indigo
    doc.setTextColor(cIndigo[0], cIndigo[1], cIndigo[2]);
    doc.text(`${numberStr}.`, margin, yPos);
    const numWidth = doc.getTextWidth(`${numberStr}. `);

    // Uppercase Title in White
    doc.setTextColor(cTextWhite[0], cTextWhite[1], cTextWhite[2]);
    doc.text(title.toUpperCase(), margin + numWidth, yPos);

    // Divider Line
    doc.setDrawColor(cCardBorder[0], cCardBorder[1], cCardBorder[2]);
    doc.setLineWidth(0.35);
    doc.line(margin, yPos + 3, margin + contentWidth, yPos + 3);
  };

  // Helper: Draw Footer
  const drawFooter = (pageNumber: number, totalPages: number) => {
    const footerY = 284;
    doc.setDrawColor(cCardBorder[0], cCardBorder[1], cCardBorder[2]);
    doc.setLineWidth(0.3);
    doc.line(margin, footerY - 4, margin + contentWidth, footerY - 4);

    doc.setFont('Roboto', 'normal');
    doc.setFontSize(7.2);
    doc.setTextColor(cTextMuted[0], cTextMuted[1], cTextMuted[2]);
    doc.text(`${profileData.name} • Douradina - PR • ${profileData.phone} • ${profileData.email}`, margin, footerY);
    doc.text(`Página ${pageNumber} de ${totalPages}`, margin + contentWidth, footerY, { align: 'right' });
  };

  // Helper: Draw Pill Badge
  const drawBadge = (
    text: string,
    xRight: number,
    yPos: number,
    bg: readonly [number, number, number],
    textColor: readonly [number, number, number],
    border: readonly [number, number, number]
  ): number => {
    doc.setFont('Roboto', 'bold');
    doc.setFontSize(7);
    const textW = doc.getTextWidth(text);
    const pillW = textW + 5;
    const pillH = 4.6;
    const pillX = xRight - pillW;

    doc.setFillColor(bg[0], bg[1], bg[2]);
    doc.setDrawColor(border[0], border[1], border[2]);
    doc.setLineWidth(0.2);
    doc.roundedRect(pillX, yPos - 3.4, pillW, pillH, 1.2, 1.2, 'FD');

    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text(text, pillX + 2.5, yPos);

    return pillW;
  };

  // ==========================================
  // PAGE 1: HEADER, PERFIL & PROJETOS PRINCIPAIS
  // ==========================================
  drawPageBackground();

  // --- TOP HEADER ---
  let y = 16;

  // Name
  doc.setFont('Roboto', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(cTextWhite[0], cTextWhite[1], cTextWhite[2]);
  doc.text(profileData.name, margin, y);
  y += 5.5;

  // Role / Subtitle
  doc.setFont('Roboto', 'bold');
  doc.setFontSize(9.8);
  doc.setTextColor(cIndigo[0], cIndigo[1], cIndigo[2]);
  doc.text(profileData.roleTitle, margin, y);
  y += 5;

  // Contact Row 1: Telefone | Localização | E-mail
  doc.setFont('Roboto', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(cTextMuted[0], cTextMuted[1], cTextMuted[2]);
  const contactText1 = `${profileData.phone}   •   ${profileData.location}   •   ${profileData.email}`;
  doc.text(contactText1, margin, y);
  y += 4;

  // Contact Row 2: Interactive Links
  const link1 = 'linkedin.com/in/gabriel-suenaga';
  const link2 = 'github.com/xxsusuxx';
  const link3 = 'gabriel-suenaga.vercel.app';

  let currentLinkX = margin;
  currentLinkX += drawClickableLink(link1, currentLinkX, y, profileData.linkedin, 7.5);
  doc.setTextColor(cTextMuted[0], cTextMuted[1], cTextMuted[2]);
  doc.text('   •   ', currentLinkX, y);
  currentLinkX += doc.getTextWidth('   •   ');

  currentLinkX += drawClickableLink(link2, currentLinkX, y, profileData.github, 7.5);
  doc.setTextColor(cTextMuted[0], cTextMuted[1], cTextMuted[2]);
  doc.text('   •   ', currentLinkX, y);
  currentLinkX += doc.getTextWidth('   •   ');

  drawClickableLink(link3, currentLinkX, y, profileData.website, 7.5);
  y += 5.5;

  // Main Divider with Indigo accent notch
  doc.setDrawColor(cCardBorder[0], cCardBorder[1], cCardBorder[2]);
  doc.setLineWidth(0.4);
  doc.line(margin, y, margin + contentWidth, y);

  doc.setDrawColor(cIndigo[0], cIndigo[1], cIndigo[2]);
  doc.setLineWidth(1.2);
  doc.line(margin, y, margin + 30, y);
  y += 8;

  // --- 01. PERFIL PROFISSIONAL ---
  drawSectionHeader('01', 'Perfil Profissional', y);
  y += 6.5;

  doc.setFont('Roboto', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(cTextZinc300[0], cTextZinc300[1], cTextZinc300[2]);
  const bioLines = doc.splitTextToSize(profileData.bioText, contentWidth);
  doc.text(bioLines, margin, y, { lineHeightFactor: 1.38 });
  y += bioLines.length * 3.8 + 6;

  // --- 02. PROJETOS PRINCIPAIS & CASES ---
  drawSectionHeader('02', 'Projetos Principais & Cases (SaaS, MVP & IA)', y);
  y += 6.5;

  // Project 1: PetNexus
  const petnexusProj = projectsData.find(p => p.id === 'petnexus');
  if (petnexusProj) {
    const cardHeight = 44;
    // Card Box
    doc.setFillColor(cCardBg[0], cCardBg[1], cCardBg[2]);
    doc.setDrawColor(cCardBorder[0], cCardBorder[1], cCardBorder[2]);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, y, contentWidth, cardHeight, 1.5, 1.5, 'FD');

    // Left accent bar
    doc.setFillColor(cIndigo[0], cIndigo[1], cIndigo[2]);
    doc.rect(margin, y, 2, cardHeight, 'F');

    // Title
    doc.setFont('Roboto', 'bold');
    doc.setFontSize(8.8);
    doc.setTextColor(cTextWhite[0], cTextWhite[1], cTextWhite[2]);
    doc.text(petnexusProj.title, margin + 5, y + 5);

    // Badge
    drawBadge('🟢 MVP Completo • Sistema & Oferta', margin + contentWidth - 4, y + 5, [30, 27, 75], cIndigo, [67, 56, 202]);

    // Description
    doc.setFont('Roboto', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(cTextZinc300[0], cTextZinc300[1], cTextZinc300[2]);
    const petLines = doc.splitTextToSize(petnexusProj.description, contentWidth - 10);
    doc.text(petLines, margin + 5, y + 9.5, { lineHeightFactor: 1.35 });

    // Stack line
    doc.setFont('Roboto', 'bold');
    doc.setFontSize(7.2);
    doc.setTextColor(cTextMuted[0], cTextMuted[1], cTextMuted[2]);
    doc.text('Stack: Next.js 14 (App Router), TypeScript, Supabase (Auth/RLS/Realtime), PostgreSQL, Tailwind CSS, Zod', margin + 5, y + 26);

    // Clickable links
    doc.setFont('Roboto', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(cTextZinc100[0], cTextZinc100[1], cTextZinc100[2]);
    doc.text('• Sistema no Ar: ', margin + 5, y + 33);
    const w1 = doc.getTextWidth('• Sistema no Ar: ');
    drawClickableLink('https://petnexus.vercel.app/', margin + 5 + w1, y + 33, 'https://petnexus.vercel.app/', 7.5);

    doc.setFont('Roboto', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(cTextZinc100[0], cTextZinc100[1], cTextZinc100[2]);
    doc.text('• Página de Ofertas: ', margin + 5, y + 38.5);
    const w2 = doc.getTextWidth('• Página de Ofertas: ');
    drawClickableLink('https://petnexusoferta.vercel.app/', margin + 5 + w2, y + 38.5, 'https://petnexusoferta.vercel.app/', 7.5);

    y += cardHeight + 4;
  }

  // Project 2: Automação de Conteúdo, hub.xyz & Vídeos Para IA
  const youtubeProj = projectsData.find(p => p.id === 'automacao-youtube-ia');
  if (youtubeProj) {
    const cardHeight = 40;
    // Card Box
    doc.setFillColor(cCardBg[0], cCardBg[1], cCardBg[2]);
    doc.setDrawColor(cCardBorder[0], cCardBorder[1], cCardBorder[2]);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, y, contentWidth, cardHeight, 1.5, 1.5, 'FD');

    // Left accent bar (Emerald)
    doc.setFillColor(cEmerald[0], cEmerald[1], cEmerald[2]);
    doc.rect(margin, y, 2, cardHeight, 'F');

    // Title
    doc.setFont('Roboto', 'bold');
    doc.setFontSize(8.8);
    doc.setTextColor(cTextWhite[0], cTextWhite[1], cTextWhite[2]);
    doc.text(youtubeProj.title, margin + 5, y + 5);

    // Badge
    drawBadge('💎 R$ 130.70 Verificado (Renda Principal)', margin + contentWidth - 4, y + 5, [6, 78, 59], cEmerald, [5, 150, 105]);

    // Description
    doc.setFont('Roboto', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(cTextZinc300[0], cTextZinc300[1], cTextZinc300[2]);
    const ytLines = doc.splitTextToSize(youtubeProj.description, contentWidth - 10);
    doc.text(ytLines, margin + 5, y + 9.5, { lineHeightFactor: 1.35 });

    // Stack line
    doc.setFont('Roboto', 'bold');
    doc.setFontSize(7.2);
    doc.setTextColor(cTextMuted[0], cTextMuted[1], cTextMuted[2]);
    doc.text('Stack: hub.xyz, Treinamento de IA, Visão Computacional, Datasets de Vídeo, IA Generativa', margin + 5, y + 26);

    // Clickable link
    doc.setFont('Roboto', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(cTextZinc100[0], cTextZinc100[1], cTextZinc100[2]);
    doc.text('• Acesso hub.xyz (Código WWBDQ473): ', margin + 5, y + 33);
    const w3 = doc.getTextWidth('• Acesso hub.xyz (Código WWBDQ473): ');
    drawClickableLink('https://ai.hub.xyz/r/WWBDQ473', margin + 5 + w3, y + 33, 'https://ai.hub.xyz/r/WWBDQ473', 7.5, cEmerald);

    y += cardHeight + 4;
  }

  // Helper: Draw Experience Card
  const drawExperienceCard = (exp: typeof experiencesData[0]) => {
    let bulletsHeight = 0;
    exp.highlights.forEach(h => {
      const wrapped = doc.splitTextToSize(h, contentWidth - 14);
      bulletsHeight += wrapped.length * 3.7 + 1.2;
    });

    const cardH = 12 + bulletsHeight;

    // Card background
    doc.setFillColor(cCardBg[0], cCardBg[1], cCardBg[2]);
    doc.setDrawColor(cCardBorder[0], cCardBorder[1], cCardBorder[2]);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, y, contentWidth, cardH, 1.5, 1.5, 'FD');

    // Accent line by type
    const accentColor = exp.id === 'hub-audiovisual' ? cEmerald : (exp.id === 'petnexus' ? cIndigo : (exp.id === 'frontend-voluntario' ? cBlue : [245, 158, 11]));
    doc.setFillColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.rect(margin, y, 2, cardH, 'F');

    // Role
    doc.setFont('Roboto', 'bold');
    doc.setFontSize(8.8);
    doc.setTextColor(cTextWhite[0], cTextWhite[1], cTextWhite[2]);
    doc.text(exp.role, margin + 5, y + 4.8);

    // Period Pill (right)
    drawBadge(exp.period, margin + contentWidth - 4, y + 4.8, [15, 23, 42], cTextZinc300, [51, 65, 85]);

    // Company & Location
    doc.setFont('Roboto', 'bold');
    doc.setFontSize(7.6);
    const compColor = exp.id === 'hub-audiovisual' ? cEmerald : cIndigo;
    doc.setTextColor(compColor[0], compColor[1], compColor[2]);
    doc.text(`${exp.company}${exp.employmentType ? ' · ' + exp.employmentType : ''} • ${exp.location}`, margin + 5, y + 8.8);

    // Highlights bullets
    let bY = y + 13.5;
    exp.highlights.forEach(h => {
      // Bullet dot
      doc.setFont('Roboto', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(cIndigo[0], cIndigo[1], cIndigo[2]);
      doc.text('•', margin + 5, bY);

      // Bullet text
      doc.setFont('Roboto', 'normal');
      doc.setFontSize(7.6);
      doc.setTextColor(cTextZinc300[0], cTextZinc300[1], cTextZinc300[2]);
      const wrapped = doc.splitTextToSize(h, contentWidth - 14);
      doc.text(wrapped, margin + 9, bY, { lineHeightFactor: 1.32 });

      bY += wrapped.length * 3.7 + 1.2;
    });

    y += cardH + 3.5;
  };

  // --- 03. EXPERIÊNCIA PROFISSIONAL (Subindo para a Página 1) ---
  y += 2;
  drawSectionHeader('03', 'Experiência Profissional', y);
  y += 6.5;

  const page1Experiences = experiencesData.filter(e => e.id === 'hub-audiovisual' || e.id === 'petnexus');
  page1Experiences.forEach(exp => drawExperienceCard(exp));

  // Draw Page 1 Footer
  drawFooter(1, 2);

  // ==========================================
  // PAGE 2: EXPERIÊNCIA (CONTINUAÇÃO), FORMAÇÃO & COMPETÊNCIAS
  // (Sem o header anterior de repetição no topo)
  // ==========================================
  doc.addPage();
  drawPageBackground();
  y = 16; // Inicia direto no topo da página 2

  drawSectionHeader('03', 'Experiência Profissional (Continuação)', y);
  y += 6.5;

  const page2Experiences = experiencesData.filter(e => e.id === 'gazin-colchoes' || e.id === 'frontend-voluntario');
  page2Experiences.forEach(exp => drawExperienceCard(exp));

  y += 2;

  y += 2;

  // --- 04. FORMAÇÃO ACADÊMICA ---
  drawSectionHeader('04', 'Formação Acadêmica', y);
  y += 6.5;

  educationData.forEach((edu) => {
    const cardH = 15;

    doc.setFillColor(cCardBg[0], cCardBg[1], cCardBg[2]);
    doc.setDrawColor(cCardBorder[0], cCardBorder[1], cCardBorder[2]);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, y, contentWidth, cardH, 1.5, 1.5, 'FD');

    // Title
    doc.setFont('Roboto', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(cTextWhite[0], cTextWhite[1], cTextWhite[2]);
    doc.text(edu.title, margin + 5, y + 4.8);

    // Period Pill
    drawBadge(edu.period, margin + contentWidth - 4, y + 4.8, [15, 23, 42], cTextZinc300, [51, 65, 85]);

    // Institution
    doc.setFont('Roboto', 'bold');
    doc.setFontSize(7.6);
    doc.setTextColor(cIndigo[0], cIndigo[1], cIndigo[2]);
    doc.text(edu.institution, margin + 5, y + 8.8);

    // Details
    doc.setFont('Roboto', 'normal');
    doc.setFontSize(7.2);
    doc.setTextColor(cTextMuted[0], cTextMuted[1], cTextMuted[2]);
    doc.text(edu.description, margin + 5, y + 12.5);

    y += cardH + 3;
  });

  y += 3;

  // --- 05. PRINCIPAIS COMPETÊNCIAS & STACK ---
  drawSectionHeader('05', 'Principais Competências & Stack Técnica', y);
  y += 6.5;

  const skillGroups = [
    { category: 'Front-end & Mobile:', items: 'Next.js 14 (App Router), React, React Native, TypeScript, Tailwind CSS, HTML5, CSS3, UX/UI' },
    { category: 'Back-end & Database:', items: 'Supabase (Auth, RLS, Realtime), PostgreSQL, REST APIs, Zod, Python, PHP, MySQL' },
    { category: 'IA & Automações:', items: 'Treinamento de IA p/ Tarefas Manuais (hub.xyz), Datasets em Vídeo, Web Scraping, IA Generativa' },
    { category: 'Metodologia & Liderança:', items: 'SaaS Multi-Tenant, Git/GitHub, Deploy Vercel (CI/CD), Resiliência e Liderança de Turno Industrial' },
  ];

  skillGroups.forEach((sg) => {
    doc.setFont('Roboto', 'bold');
    doc.setFontSize(7.6);
    doc.setTextColor(cTextWhite[0], cTextWhite[1], cTextWhite[2]);
    doc.text(`• ${sg.category}`, margin + 2, y);

    const catW = doc.getTextWidth(`• ${sg.category} `);
    doc.setFont('Roboto', 'normal');
    doc.setFontSize(7.6);
    doc.setTextColor(cTextZinc300[0], cTextZinc300[1], cTextZinc300[2]);
    doc.text(sg.items, margin + 2 + catW, y);

    y += 5.2;
  });

  // Draw Page 2 Footer
  drawFooter(2, 2);

  return doc;
}

export function downloadResumePDF() {
  try {
    const doc = buildPdfDocument();
    doc.save('cv-gabriel-suenaga.pdf');
  } catch (err) {
    console.error('Erro ao gerar PDF do currículo:', err);
    // Fallback nativo
    window.print();
  }
}

export { buildPdfDocument };

