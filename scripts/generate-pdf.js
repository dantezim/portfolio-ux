import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const margin = 50;
  const pageWidth = 595.28; // A4
  const pageHeight = 841.89; // A4
  const contentWidth = pageWidth - margin * 2;

  let page = pdfDoc.addPage([pageWidth, pageHeight]);
  let y = pageHeight - margin;

  function checkNewPage(neededSpace = 40) {
    if (y - neededSpace < margin) {
      page = pdfDoc.addPage([pageWidth, pageHeight]);
      y = pageHeight - margin;
    }
  }

  function drawText(text, options = {}) {
    const font = options.font || fontRegular;
    const size = options.size || 10;
    const color = options.color || rgb(0.12, 0.12, 0.12);
    const align = options.align || "left";

    const width = font.widthOfTextAtSize(text, size);
    let x = margin;
    if (align === "center") {
      x = (pageWidth - width) / 2;
    } else if (align === "right") {
      x = pageWidth - margin - width;
    } else if (options.x) {
      x = options.x;
    }

    page.drawText(text, {
      x,
      y,
      size,
      font,
      color,
    });
    return width;
  }

  function drawParagraph(text, options = {}) {
    const font = options.font || fontRegular;
    const size = options.size || 10;
    const lineHeight = options.lineHeight || size * 1.35;
    const color = options.color || rgb(0.15, 0.15, 0.15);
    const indent = options.indent || 0;

    const words = text.split(" ");
    let currentLine = "";
    const maxWidth = contentWidth - indent;

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);

      if (testWidth > maxWidth && currentLine) {
        checkNewPage(lineHeight);
        page.drawText(currentLine, {
          x: margin + indent,
          y,
          size,
          font,
          color,
        });
        y -= lineHeight;
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }

    if (currentLine) {
      checkNewPage(lineHeight);
      page.drawText(currentLine, {
        x: margin + indent,
        y,
        size,
        font,
        color,
      });
      y -= lineHeight;
    }
  }

  function drawBullet(text, options = {}) {
    const size = options.size || 9.5;
    const lineHeight = options.lineHeight || 13;
    checkNewPage(lineHeight);
    
    // Draw bullet dot
    page.drawText("•", {
      x: margin + 8,
      y,
      size: size + 1,
      font: fontBold,
      color: rgb(0.2, 0.2, 0.2),
    });

    drawParagraph(text, {
      ...options,
      indent: 20,
      size,
      lineHeight,
    });
    y -= 3;
  }

  function drawDivider() {
    y -= 8;
    checkNewPage(10);
    page.drawLine({
      start: { x: margin, y },
      end: { x: pageWidth - margin, y },
      thickness: 0.75,
      color: rgb(0.8, 0.8, 0.8),
    });
    y -= 14;
  }

  function drawSectionHeading(title) {
    y -= 10;
    checkNewPage(25);
    drawText(title.toUpperCase(), { font: fontBold, size: 12, color: rgb(0.08, 0.08, 0.08) });
    y -= 14;
  }

  // --- HEADER ---
  drawText("PEDRO HENRIQUE ARMADA NALIS", { font: fontBold, size: 16, color: rgb(0.08, 0.08, 0.08) });
  y -= 16;
  drawText("Santos/SP", { font: fontRegular, size: 10, color: rgb(0.3, 0.3, 0.3) });
  y -= 13;
  drawText("Telefone: (13) 99161-2664", { font: fontRegular, size: 10, color: rgb(0.3, 0.3, 0.3) });
  y -= 13;
  drawText("E-mail: ph.armada.nalis@gmail.com", { font: fontRegular, size: 10, color: rgb(0.3, 0.3, 0.3) });
  y -= 13;
  drawText("LinkedIn: https://www.linkedin.com/in/pedro-henrique-armada-nalis-147136266/", { font: fontRegular, size: 10, color: rgb(0.17, 0.29, 0.67) });
  y -= 8;

  drawDivider();

  // --- TITLE / SUMMARY ---
  drawText("PRODUCT DESIGNER | UX DESIGN | UX WRITER | EXPERIÊNCIAS DIGITAIS | IA GENERATIVA", {
    font: fontBold,
    size: 10,
    color: rgb(0.1, 0.1, 0.1),
  });
  y -= 15;

  drawParagraph("Product Designer com experiência no desenvolvimento e evolução de produtos digitais, atuando em parceria com equipes de Design, Produto e Tecnologia para construir experiências centradas no usuário e orientadas por dados.", { size: 9.5 });
  y -= 6;
  drawParagraph("Experiência em Product Design, UX Research, Design de Interfaces, IA Generativa e Design Conversacional, com atuação na definição de fluxos, análise de métricas, evolução contínua de jornadas digitais e apoio à tomada de decisão baseada em comportamento do usuário.", { size: 9.5 });
  y -= 6;
  drawParagraph("Vivência em ambientes ágeis, colaboração com múltiplos stakeholders e construção de soluções escaláveis que equilibram necessidades de negócio, tecnologia e experiência do usuário.", { size: 9.5 });
  y -= 6;

  drawDivider();

  // --- COMPETÊNCIAS ---
  drawSectionHeading("Competências");

  drawText("UX & Product Design", { font: fontBold, size: 10, color: rgb(0.2, 0.2, 0.2) });
  y -= 13;
  const uxSkills = [
    "Product Design", "UX Design", "Design de Interfaces", "UX Research",
    "User Flows", "Jornada do Usuário", "Arquitetura da Informação", "Wireframes",
    "Prototipação", "UX Writing", "Design Thinking", "Testes de Usabilidade"
  ];
  for (const s of uxSkills) {
    drawBullet(s);
  }

  y -= 8;
  drawText("Dados & Estratégia", { font: fontBold, size: 10, color: rgb(0.2, 0.2, 0.2) });
  y -= 13;
  const dataSkills = [
    "Product Metrics", "Analytics", "Dashboards", "Data-driven Decision Making",
    "Stakeholder Management", "Metodologias Ágeis"
  ];
  for (const s of dataSkills) {
    drawBullet(s);
  }

  y -= 8;
  drawText("Metodologias", { font: fontBold, size: 10, color: rgb(0.2, 0.2, 0.2) });
  y -= 13;
  for (const s of ["Metodologias Ágeis", "Scrum", "Kanban"]) {
    drawBullet(s);
  }

  y -= 8;
  drawText("IA & Soluções Conversacionais", { font: fontBold, size: 10, color: rgb(0.2, 0.2, 0.2) });
  y -= 13;
  for (const s of ["IA Generativa", "Agentes de IA", "Design Conversacional", "Chatbots"]) {
    drawBullet(s);
  }

  y -= 8;
  drawText("Ferramentas", { font: fontBold, size: 10, color: rgb(0.2, 0.2, 0.2) });
  y -= 13;
  for (const s of ["Figma", "FigJam", "Miro", "Zenvia NLU", "IBM Watson", "Plataformas Low-code/No-code"]) {
    drawBullet(s);
  }

  y -= 8;
  drawText("Idiomas", { font: fontBold, size: 10, color: rgb(0.2, 0.2, 0.2) });
  y -= 13;
  drawBullet("Inglês fluente");

  drawDivider();

  // --- EXPERIÊNCIA PROFISSIONAL ---
  drawSectionHeading("Experiência Profissional");

  // Job 1
  drawText("ZENVIA MOBILE SERVICES — UX DESIGNER PLENO", { font: fontBold, size: 10.5, color: rgb(0.1, 0.1, 0.1) });
  y -= 12;
  drawText("2025 – Atual", { font: fontOblique, size: 9, color: rgb(0.4, 0.4, 0.4) });
  y -= 14;
  drawBullet("Atuação na evolução de produtos digitais e jornadas conversacionais, em parceria com equipes de Produto, Design e Tecnologia para uma grande empresa do segmento de Seguros.");
  drawBullet("Definição e acompanhamento de métricas estratégicas para apoiar decisões de produto, evolução da experiência e eficiência operacional.");
  drawBullet("Estruturei dashboards que apoiaram decisões de evolução do produto e monitoramento contínuo da experiência do usuário.");
  drawBullet("Conduzi análises de comportamento do usuário para identificar oportunidades de melhoria e apoiar decisões de evolução do produto.");
  drawBullet("Contribuí na concepção de agentes de IA, definindo fluxos, regras de decisão e estratégias de interação apoiadas por IA Generativa.");
  drawBullet("Articulação com múltiplos stakeholders para definição de soluções digitais alinhadas aos objetivos de negócio.");
  drawBullet("Atuação em iniciativas de inovação utilizando Design Thinking, metodologias ágeis e ferramentas colaborativas para construção de soluções escaláveis.");

  y -= 8;
  // Job 2
  drawText("RESOLV TECNOLOGIA E INOVAÇÃO LTDA — UX/UI DESIGNER JUNIOR", { font: fontBold, size: 10.5, color: rgb(0.1, 0.1, 0.1) });
  y -= 12;
  drawText("2024 – 2025", { font: fontOblique, size: 9, color: rgb(0.4, 0.4, 0.4) });
  y -= 14;
  drawBullet("Atuação na evolução contínua de produtos digitais escaláveis utilizados por clientes corporativos de diferentes segmentos.");
  drawBullet("Desenvolvimento de interfaces de alta fidelidade.");
  drawBullet("Estruturação de jornadas digitais.");
  drawBullet("Definição de fluxos de usuário.");
  drawBullet("Análise de comportamento para direcionamento de melhorias.");
  drawBullet("Colaboração entre Produto, Design e Desenvolvimento.");

  y -= 8;
  // Job 3
  drawText("INSTITUTO AMIGU — UX/UI DESIGNER JUNIOR", { font: fontBold, size: 10.5, color: rgb(0.1, 0.1, 0.1) });
  y -= 12;
  drawText("2025", { font: fontOblique, size: 9, color: rgb(0.4, 0.4, 0.4) });
  y -= 14;
  drawBullet("Participação no desenvolvimento da plataforma SouAmiGU, voltada para organização e inscrição de hackathons.");
  drawBullet("Estruturação do fluxo de negócio da plataforma e definição de regras de funcionamento.");
  drawBullet("Criação de fluxos de usuário e jornadas digitais.");
  drawBullet("Desenvolvimento de protótipos de alta fidelidade utilizando Figma.");
  drawBullet("Colaboração na definição da experiência do usuário e arquitetura funcional da plataforma.");

  y -= 8;
  // Job 4
  drawText("PORTOHACK 2023 — MENTOR", { font: fontBold, size: 10.5, color: rgb(0.1, 0.1, 0.1) });
  y -= 12;
  drawText("2023", { font: fontOblique, size: 9, color: rgb(0.4, 0.4, 0.4) });
  y -= 14;
  drawBullet("Atuação como mentor em hackathon focado em desafios do setor portuário.");
  drawBullet("Apoio técnico aos participantes na resolução de problemas e definição de soluções digitais.");
  drawBullet("Orientação em estruturação de ideias, tecnologia e experiência do usuário.");
  drawBullet("Colaboração em dinâmicas multidisciplinares de inovação e desenvolvimento ágil.");

  y -= 8;
  // Job 5
  drawText("RESOLV TECNOLOGIA E INOVAÇÃO LTDA — ASSISTENTE DE DESENVOLVIMENTO", { font: fontBold, size: 10.5, color: rgb(0.1, 0.1, 0.1) });
  y -= 12;
  drawText("2023 – 2024", { font: fontOblique, size: 9, color: rgb(0.4, 0.4, 0.4) });
  y -= 14;
  drawBullet("Apoio no desenvolvimento e manutenção de chatbots utilizando plataformas low-code/no-code.");
  drawBullet("Participação na estruturação de melhorias e automações em soluções conversacionais.");
  drawBullet("Colaboração com equipes técnicas e de produto em iniciativas de experiência do usuário.");
  drawBullet("Suporte na implementação e evolução de fluxos digitais.");

  drawDivider();

  // --- FORMAÇÃO ACADÊMICA ---
  drawSectionHeading("Formação Acadêmica");

  drawText("Universidade Santa Cecília", { font: fontBold, size: 10.5, color: rgb(0.1, 0.1, 0.1) });
  y -= 12;
  drawText("Sistemas de Informação — 2022 – 2025", { font: fontRegular, size: 9.5, color: rgb(0.3, 0.3, 0.3) });

  const pdfBytes = await pdfDoc.save();

  const publicDir = path.resolve(__dirname, "../public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const outputPath = path.join(publicDir, "curriculo-pedro-armada.pdf");
  fs.writeFileSync(outputPath, pdfBytes);
  console.log("PDF created successfully at:", outputPath);
}

createResume().catch(console.error);
