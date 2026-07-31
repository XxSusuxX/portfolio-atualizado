import { jsPDF } from 'jspdf';
import { profileData, experiencesData, educationData, projectsData } from '../data/portfolioData';

export function downloadResumePDF() {
  try {
    const link = document.createElement('a');
    link.href = '/cv-gabrielsuenaga.pdf';
    link.download = 'cv-gabrielsuenaga.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error('Direct download failed, generating PDF via jsPDF...', err);
    generateJsPdf();
  }
}

function generateJsPdf() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
  const pageHeight = doc.internal.pageSize.getHeight(); // 297mm
  const margin = 12;
  const contentWidth = pageWidth - margin * 2; // 186mm
  let y = 14;

  const setPageBackground = () => {
    doc.setFillColor(12, 12, 15); // #0c0c0f
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
  y += 6.5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(129, 140, 248); // #818cf8 (Indigo)
  doc.text(profileData.roleTitle, margin, y);
  y += 5.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(161, 161, 170); // zinc-400

  // Line 1: Phone & Location & Email
  const contactLine1 = `Phone: ${profileData.phone}   |   ${profileData.location}   |   ${profileData.email}`;
  doc.text(contactLine1, margin, y);
  y += 4;

  // Line 2: Links
  const contactLine2 = `linkedin.com/in/gabriel-suenaga   |   github.com/xxsusuxx   |   ${profileData.website}`;
  doc.text(contactLine2, margin, y);
  y += 5.5;

  doc.setDrawColor(39, 39, 42); // zinc-800
  doc.setLineWidth(0.3);
  doc.line(margin, y, pageWidth - margin, y);
  y += 6;

  // Section Header helper
  const drawSectionHeader = (number: string, title: string) => {
    checkPageBreak(10);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    
    // Number prefix in indigo, title in white
    doc.setTextColor(129, 140, 248);
    doc.text(`${number}.`, margin, y);
    const numWidth = doc.getTextWidth(`${number}. `);

    doc.setTextColor(255, 255, 255);
    doc.text(title.toUpperCase(), margin + numWidth, y);
    y += 5.5;
  };

  // --- 01. PERFIL PROFISSIONAL ---
  drawSectionHeader('01', 'Perfil Profissional');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(212, 212, 216);

  const bioLines = doc.splitTextToSize(profileData.bioText, contentWidth);
  checkPageBreak(bioLines.length * 3.8 + 4);
  doc.text(bioLines, margin, y);
  y += bioLines.length * 3.8 + 5;

  // --- 02. PROJETOS PRINCIPAIS ---
  drawSectionHeader('02', 'Projetos Principais');

  const mainProjects = projectsData.filter(
    p => p.id === 'petnexus' || p.id === 'douradina-multiservicos' || p.id === 'goodreads-scraper'
  );

  mainProjects.forEach((proj) => {
    const descLines = doc.splitTextToSize(proj.description, contentWidth - 8);
    const cardHeight = 8 + descLines.length * 3.8 + 3;

    checkPageBreak(cardHeight + 2);

    // Card Container
    doc.setFillColor(20, 20, 25);
    doc.setDrawColor(39, 39, 42);
    doc.roundedRect(margin, y, contentWidth, cardHeight, 1.5, 1.5, 'FD');

    // Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(255, 255, 255);
    doc.text(proj.title, margin + 4, y + 4.5);

    // Description
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(212, 212, 216);
    doc.text(descLines, margin + 4, y + 8.5);

    y += cardHeight + 3;
  });
  y += 2;

  // --- 03. EXPERIÊNCIA PROFISSIONAL ---
  drawSectionHeader('03', 'Experiência Profissional');

  experiencesData.forEach((exp) => {
    // Calculate total lines for highlights
    let highlightsHeight = 0;
    exp.highlights.forEach(h => {
      const wrapped = doc.splitTextToSize(`v  ${h}`, contentWidth - 10);
      highlightsHeight += wrapped.length * 3.8;
    });

    const cardHeight = 11 + highlightsHeight + 3;
    checkPageBreak(cardHeight + 2);

    // Card Box
    doc.setFillColor(20, 20, 25);
    doc.setDrawColor(39, 39, 42);
    doc.roundedRect(margin, y, contentWidth, cardHeight, 1.5, 1.5, 'FD');

    // Role
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(255, 255, 255);
    doc.text(exp.role, margin + 4, y + 4.5);

    // Period
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(161, 161, 170);
    doc.text(exp.period, pageWidth - margin - 4, y + 4.5, { align: 'right' });

    // Company & Location
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.8);
    doc.setTextColor(129, 140, 248);
    doc.text(`${exp.company} • ${exp.location}`, margin + 4, y + 8.5);

    // Highlights Bullets
    let currentBulletY = y + 12.5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.6);

    exp.highlights.forEach(h => {
      // Checkmark icon indicator
      doc.setTextColor(129, 140, 248);
      doc.text('v', margin + 4, currentBulletY);

      doc.setTextColor(212, 212, 216);
      const wrapped = doc.splitTextToSize(h, contentWidth - 12);
      doc.text(wrapped, margin + 8, currentBulletY);

      currentBulletY += wrapped.length * 3.8;
    });

    y += cardHeight + 3;
  });
  y += 2;

  // --- 04. FORMAÇÃO ACADÊMICA ---
  drawSectionHeader('04', 'Formação Acadêmica');

  educationData.forEach((edu) => {
    const cardHeight = 11;
    checkPageBreak(cardHeight + 2);

    doc.setFillColor(20, 20, 25);
    doc.setDrawColor(39, 39, 42);
    doc.roundedRect(margin, y, contentWidth, cardHeight, 1.5, 1.5, 'FD');

    // Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(255, 255, 255);
    doc.text(edu.title, margin + 4, y + 4.5);

    // Period
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(161, 161, 170);
    doc.text(edu.period, pageWidth - margin - 4, y + 4.5, { align: 'right' });

    // Institution
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.8);
    doc.setTextColor(129, 140, 248);
    doc.text(edu.institution, margin + 4, y + 8.5);

    y += cardHeight + 3;
  });
  y += 2;

  // --- 05. PRINCIPAIS COMPETÊNCIAS ---
  drawSectionHeader('05', 'Principais Competências');

  const skills = [
    "Next.js / React",
    "TypeScript",
    "Supabase (Auth/RLS)",
    "PostgreSQL",
    "Python",
    "APIs REST",
    "Web Scraping (Scrapy/Selenium)",
    "Tailwind CSS",
    "Visão de Produto & SaaS Multi-Tenant"
  ];

  checkPageBreak(18);

  let currentX = margin;
  let currentY = y;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);

  skills.forEach((skill) => {
    const textWidth = doc.getTextWidth(skill);
    const boxWidth = textWidth + 6;
    const boxHeight = 5.5;

    if (currentX + boxWidth > pageWidth - margin) {
      currentX = margin;
      currentY += boxHeight + 2.5;
    }

    doc.setFillColor(20, 20, 25);
    doc.setDrawColor(39, 39, 42);
    doc.roundedRect(currentX, currentY, boxWidth, boxHeight, 1, 1, 'FD');

    doc.setTextColor(165, 180, 252);
    doc.text(skill, currentX + 3, currentY + 3.8);

    currentX += boxWidth + 2.5;
  });

  // Save PDF
  doc.save('cv-gabrielsuenaga.pdf');
}
