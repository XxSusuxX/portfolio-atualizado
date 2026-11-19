export interface ProjectItem {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  stack: string[];
  badgeColors: string[];
  category: 'SaaS' | 'IA & Automação' | 'Python & Scraping' | 'Web App';
  status: string;
  previewTheme: 'petnexus' | 'youtube-ia' | 'goodreads' | 'douradina' | 'carine';
  githubUrl: string;
  liveUrl?: string;
  whatsappUrl: string;
  architecture: string[];
  metrics: { label: string; value: string }[];
  featuredRibbon?: string;
}

export interface SkillBarItem {
  name: string;
  percentage: number;
  tag: string;
}

export interface AboutStoryBlock {
  id: string;
  icon: 'flame' | 'code' | 'layers' | 'bot' | 'hammer' | 'wheat';
  title: string;
  subtitle: string;
  text: string;
  badge: string;
}

export interface JourneyMilestone {
  id: string;
  period: string;
  title: string;
  role: string;
  category: 'rural' | 'industrial' | 'construction' | 'tech' | 'saas';
  icon: string;
  description: string;
  learnedSkill: string;
  badge: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  badge: string;
  accentColor: 'cyan' | 'orange' | 'sky';
  description: string;
  highlights: string[];
  skills: string[];
  link?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  highlight: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  quote: string;
  highlight: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: 'bot' | 'cpu' | 'code';
  features: string[];
}

export interface CodeSnippet {
  id: string;
  filename: string;
  language: string;
  title: string;
  description: string;
  code: string;
}

export const PROFILE_DATA = {
  name: 'Gabriel Suenaga',
  age: '21 anos',
  location: 'Douradina, Paraná — Brasil',
  workMode: 'Douradina, PR • Remoto / Híbrido',
  role: 'Desenvolvedor de Software | Next.js • React • TypeScript • Python | Automação & SaaS',
  heroTitle: 'Olá, eu sou o Gabriel Suenaga.',
  heroSubtitle:
    'Desenvolvedor de Software Full-Stack (Next.js, React, TypeScript, Python & FastAPI). Proativo, trabalhador incansável e criador de sistemas: sei o que fazer, como criar, gerenciar e executar do zero até a produção.',
  executivePitch:
    'Não tive as oportunidades de mão beijada: aprendi o valor do trabalho duro capinando na roça, descarregando caminhões, liderando turnos na fábrica e pegando no pesado na construção civil. Toda essa resiliência é canalizada em noites de código limpo, arquitetura multi-tenant escalável e automações de alta entrega.',
  summaryQuote:
    'Minha jornada na tecnologia não é convencional: divido minha rotina trabalhando na construção civil — colocando a mão na massa na caixaria, amarração e concreto — e dedicando minhas noites para escrever código limpo, criar SaaS e automatizar processos.',
  email: 'gabriel.hneus@gmail.com',
  phone: '(44) 99828-9752',
  portfolioUrl: 'https://gabriel-suenaga.vercel.app/',
  whatsappUrl:
    'https://wa.me/5544998289752?text=Ol%C3%A1%20Gabriel!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.',
  githubUrl: 'https://github.com/xxsusuxx',
  linkedinUrl: 'https://www.linkedin.com/in/gabriel-suenaga',
  instagramUrl: 'https://instagram.com/gabrielsu.dev',
  cvUrl: '/cv-gabrielsuenaga.pdf',
};

export const MARQUEE_ITEMS_TRACK1 = [
  '🌾 CAPINANDO EM ROÇA: FORÇA DE VONTADE DESDE CEDO',
  '📦 CARGA & DESCARGA PESADA: LOGÍSTICA SOB PRESSÃO',
  '⚙️ LÍDER NOTURNO & OPERADOR DE ESPUMAÇÃO NA FÁBRICA GAZIN',
  '🏗️ PEDREIRO & SERVENTE: CAIXARIA, AMARRAÇÃO DE FERRO E CONCRETO',
  '💻 DESENVOLVEDOR FULL-STACK: CRIADOR DO PETNEXUS SAAS',
  '🔥 DISCIPLINA INEGOCIÁVEL: DIA NO TRABALHO PESADO, NOITE NO CÓDIGO',
  '⚡ SEI CRIAR, GERENCIAR E EXECUTAR ATÉ O FIM',
];

export const MARQUEE_ITEMS_TRACK2 = [
  'PROATIVO & RESOLUTIVO',
  'CRIAR • GERENCIAR • EXECUTAR',
  'NEXT.JS 14 (APP ROUTER)',
  'SUPABASE RLS & REALTIME',
  'TYPESCRIPT & STRICT TYPING',
  'PYTHON, FASTAPI & SCRAPING',
  'BOTS DE WHATSAPP 24/7',
  'DISCIPLINA FORJADA NO TRABALHO REAL',
  'PRONTO PARA PRODUÇÃO',
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: 'roca',
    period: 'Primeiros Anos & Juventude',
    title: 'Capinando em Roça & Trabalho Braçal',
    role: 'Trabalho no Campo',
    category: 'rural',
    icon: '🌾',
    description:
      'Desde muito jovem conheci o peso do sol quente, da enxada e da terra. Aprendi com a minha família que ninguém entrega nada de graça e que o esforço contínuo é o único caminho para construir algo próprio.',
    learnedSkill: 'Resiliência bruta, humildade e ética de trabalho incansável.',
    badge: 'RAÍZES & DISCIPLINA',
  },
  {
    id: 'carga-gazin',
    period: 'Jun 2023 – Set 2023',
    title: 'Carga & Descarga de Grande Porte',
    role: 'Auxiliar de Logística (Gazin)',
    category: 'industrial',
    icon: '📦',
    description:
      'Descarga rápida de carretas com fogões, geladeiras e móveis pesados. Manutenção de ritmo acelerado sem comprometer a integridade dos produtos e organização rigorosa do depósito.',
    learnedSkill: 'Velocidade, atenção máxima a detalhes e trabalho em equipe sob cobrança física.',
    badge: 'LOGÍSTICA PESADA',
  },
  {
    id: 'espumacao-gazin',
    period: 'Mai 2024 – Mar 2025 (11 meses)',
    title: 'Operador de Espumação & Líder de Turno Noturno',
    role: 'Líder de Equipe Noturna (Gazin Colchões)',
    category: 'industrial',
    icon: '⚙️',
    description:
      'Operação da complexa máquina química de espumação e, como colaborador mais experiente, responsável pela liderança do turno da noite: distribuição de metas, resolução de crises operacionais e zero acidentes.',
    learnedSkill: 'Liderança prática, calma sob pressão, gestão de risco e responsabilidade executiva.',
    badge: 'LIDERANÇA INDUSTRIAL',
  },
  {
    id: 'construcao-civil',
    period: 'Set 2026 – Presente (Rotina Diurna)',
    title: 'Servente de Obras & Construção Civil',
    role: 'Assistente Operacional de Obras',
    category: 'construction',
    icon: '🏗️',
    description:
      'Coloco a mão na massa na caixaria de madeira, amarração de armações de ferro, virador de betoneira e transporte de concreto. O trabalho que sustenta minha independência enquanto dedico as noites aos meus sistemas.',
    learnedSkill: 'Foco inabalável, cumprimento de cronogramas e orgulho de construir com as próprias mãos.',
    badge: 'EXECUÇÃO DIÁRIA',
  },
  {
    id: 'tech-formation',
    period: '2022 – 2024',
    title: 'Técnico em Sistemas & Front-End EBAC',
    role: 'Estudante Destaque & Desenvolvedor',
    category: 'tech',
    icon: '🎓',
    description:
      'Melhor aluno da turma no Colégio Estadual Cleoracy Aparecida Gil e Engenheiro Front-end pela EBAC. Noites adentro estudando documentações oficiais, arquitetura limpa, TypeScript e bancos de dados.',
    learnedSkill: 'Estruturação lógica, tipagem estrita, performance web e padrões de projeto.',
    badge: 'FORMAÇÃO TÉCNICA',
  },
  {
    id: 'saas-petnexus',
    period: '2025 – Presente',
    title: 'Criador & Arquiteto do PetNexus SaaS',
    role: 'Desenvolvedor Full-Stack & Criador de Soluções',
    category: 'saas',
    icon: '💻',
    description:
      'Criação do zero de um SaaS Multi-Tenant completo em produção (petnexus.vercel.app), com isolamento de dados via Row Level Security (RLS), Supabase Realtime, PDV, agenda e automação via WhatsApp.',
    learnedSkill: 'Visão de produto end-to-end, modelagem SQL, segurança RLS e entrega de valor real.',
    badge: 'PRODUTO EM PRODUÇÃO',
  },
];

export const HUD_SKILLS: SkillBarItem[] = [
  {
    name: 'Next.js 14 / React / Tailwind CSS',
    percentage: 96,
    tag: 'App Router • SSR • Interfaces Reativas',
  },
  {
    name: 'TypeScript & Node.js',
    percentage: 94,
    tag: 'Strict Typing • Zod • APIs REST',
  },
  {
    name: 'Python, FastAPI & Web Scraping',
    percentage: 92,
    tag: 'Scrapy • Tkinter GUI • Automações',
  },
  {
    name: 'Supabase / PostgreSQL & SaaS',
    percentage: 91,
    tag: 'Multi-Tenant • Row Level Security (RLS) • Realtime',
  },
  {
    name: 'Automações, Bots & IA',
    percentage: 95,
    tag: 'WhatsApp Webhooks • Pipelines de Vídeo com IA',
  },
];

export const HUD_STORY_BLOCKS: AboutStoryBlock[] = [
  {
    id: 'resilience',
    icon: 'flame',
    title: 'Resiliência Forjada no Trabalho Pesado',
    subtitle: 'Da roça e canteiro de obras ao código limpo',
    text: 'Minha rotina me ensinou o que é disciplina real: acordar cedo para o trabalho braçal e passar as noites debruçado sobre código e arquitetura. Não me assusto com problemas complexos nem com prazos apertados.',
    badge: 'ÉTICA & FORÇA',
  },
  {
    id: 'executive',
    icon: 'code',
    title: 'Proatividade, Gestão e Entrega',
    subtitle: 'Sei o que fazer, como criar, gerenciar e executar',
    text: 'Não dependo de supervisão constante para entregar. Sei mapear requisitos de negócio, modelar bancos de dados seguros, desenhar interfaces intuitivas e colocar sistemas no ar prontos para uso.',
    badge: 'AUTONOMIA TOTAL',
  },
  {
    id: 'saas',
    icon: 'layers',
    title: 'Visão de Produto & Arquitetura Real (PetNexus)',
    subtitle: 'Plataforma Multi-Tenant em produção',
    text: 'Criei o PetNexus do zero: um ecossistema white-label com isolamento rígido por tenant_id via Supabase RLS, sincronização instantânea em tempo real, PDV, agenda e notificações via WhatsApp.',
    badge: 'SAAS PRODUÇÃO',
  },
  {
    id: 'ai-automation',
    icon: 'bot',
    title: 'Automação Comercial & IA Pragmática',
    subtitle: 'Eliminando gargalos operacionais B2B',
    text: 'Desenvolvo bots de atendimento inteligentes no WhatsApp, pipelines de vídeo com IA generativa e scrapers de alta velocidade com Python para transformar dados brutos em decisões de negócio.',
    badge: 'AUTOMAÇÃO B2B',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'mariles',
    author: 'Mariles Carvalho',
    role: 'Consultora de Carreira',
    quote:
      'Gabriel é um aluno determinado, focado e extremamente proativo, sempre aberto para aprender e motivado por desafios. Sua capacidade de conciliar o trabalho duro com a evolução técnica é admirável.',
    highlight: 'Focado, Proativo & Determinado',
  },
  {
    id: 'sergio',
    author: 'Sergio Melato',
    role: 'Professor de Tecnologia',
    quote:
      'Gabriel possui excelentes habilidades técnicas e aprende muito rápido. Tem uma facilidade incomum para assimilar conceitos complexos e aplicar diretamente na prática. Recomendo-o sem ressalvas.',
    highlight: 'Aprende Rápido & Excelência Técnica',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'whatsapp-bots',
    title: 'Bots Inteligentes para WhatsApp',
    description:
      'Automação completa do fluxo de vendas, agendamentos, triagem de clientes e notificações automáticas 24/7.',
    icon: 'bot',
    features: [
      'Atendimento Automático 24/7 sem quedas',
      'Disparo de Boletos, Pix & Lembretes',
      'Integração via Webhooks com ERP/Bancos legados',
    ],
  },
  {
    id: 'process-automation',
    title: 'Automação de Processos & Scraping',
    description:
      'Eliminação de tarefas manuais repetitivas via scripts em Python defensivos, web scraping veloz e pipelines de IA.',
    icon: 'cpu',
    features: [
      'Pipelines com Python, Scrapy & Selenium',
      'Interfaces Desktop com Tkinter para clientes',
      'Geração de relatórios automáticos em JSON/CSV',
    ],
  },
  {
    id: 'custom-web-apps',
    title: 'Aplicações Web Modernas & SaaS',
    description:
      'Sistemas web de ponta construídos com Next.js 14, React e Supabase, projetados para alta performance e segurança.',
    icon: 'code',
    features: [
      'Arquitetura Multi-Tenant isolada com RLS',
      'Sincronização em tempo real (Supabase Realtime)',
      'Código 100% tipado com TypeScript & Zod',
    ],
  },
];

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    id: 'rls-sql',
    filename: 'petnexus-db-schema.sql',
    language: 'sql',
    title: 'Isolamento Multi-Tenant com Supabase RLS (PetNexus)',
    description: 'Garante que cada pet shop só acesse seus próprios dados via JWT claim.',
    code: `-- Supabase Multi-Tenant Row Level Security Policy
ALTER TABLE petshops_data ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tenant Isolation Policy"
ON petshops_data
FOR ALL
USING (
  tenant_id = (auth.jwt() ->> 'tenant_id')::uuid
);

-- Realtime Channel Subscription
-- Frontend: const channel = supabase.channel('operacao-live');`,
  },
  {
    id: 'scrapy-py',
    filename: 'goodreads_spider.py',
    language: 'python',
    title: 'Scrapy Spider com Tratamento Defensivo & GUI',
    description: 'Extrator assíncrono conectado à interface gráfica Tkinter.',
    code: `import scrapy
from pydantic import BaseModel

class QuoteItem(BaseModel):
    quote: str
    author: str
    tags: list[str]

class GoodreadsSpider(scrapy.Spider):
    name = "goodreads"
    start_urls = ["https://www.goodreads.com/quotes"]

    def parse(self, response):
        for quote in response.css("div.quoteDetails"):
            yield {
                "text": quote.css("div.quoteText::text").get(),
                "author": quote.css("span.authorOrTitle::text").get(),
            }`,
  },
  {
    id: 'webhook-ts',
    filename: 'whatsapp-webhook.ts',
    language: 'typescript',
    title: 'Webhook do Bot com Triagem de IA',
    description: 'Recebe eventos do WhatsApp e orquestra o atendimento inteligente.',
    code: `export async function POST(req: Request) {
  const payload = await req.json();
  const { from, message } = parseWhatsAppEvent(payload);

  // Consulta status e despacha para agente de IA
  const aiResponse = await generateAgentReply({
    clientNumber: from,
    userPrompt: message,
    tenantId: payload.tenant_id,
  });

  await sendWhatsAppText(from, aiResponse);
  return Response.json({ success: true });
}`,
  },
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'petnexus-saas',
    role: 'Desenvolvedor de Software (Projetos Autorais & SaaS)',
    company: 'PetNexus',
    period: 'Jun 2026 – Set 2026 (Em evolução contínua)',
    duration: 'SaaS Autoral',
    location: 'Douradina, Paraná, Brasil',
    badge: 'DESTAQUE TECH • SAAS',
    accentColor: 'cyan',
    description:
      'Arquitetura e desenvolvimento completo do PetNexus, um ecossistema SaaS autoral focado na gestão inteligente e automação para pet shops.',
    highlights: [
      'Criação do sistema end-to-end com React, Next.js, TypeScript, Tailwind CSS e Supabase.',
      'Modelagem de banco de dados relacional multi-tenant (RLS), regras de negócio, agenda, PDV e integrações.',
      'Deploy em produção: https://petnexus.vercel.app/',
    ],
    skills: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Multi-Tenant SaaS'],
    link: 'https://petnexus.vercel.app/',
  },
  {
    id: 'construcao-civil',
    role: 'Assistente de Construção (Servente)',
    company: 'Construção Civil (Informal)',
    period: 'Set 2026 – Presente',
    duration: 'Atual • Rotina Diurna',
    location: 'Douradina, Paraná, Brasil',
    badge: 'RESILIÊNCIA & EXECUÇÃO',
    accentColor: 'orange',
    description:
      'Atuação na execução de etapas operacionais em canteiros de obras durante o dia enquanto dedico as noites à engenharia de software.',
    highlights: [
      'Montagem de caixarias de madeira, amarração de ferragens para estruturas/pilares e preparo de concreto com betoneira.',
      'Organização logística do canteiro, ritmo produtivo intenso e cumprimento rigoroso de cronogramas.',
      'Competências consolidadas: disciplina diária inegociável, trabalho sob pressão, senso de urgência e trabalho em equipe.',
    ],
    skills: ['Disciplina Diária', 'Trabalho sob Pressão', 'Senso de Urgência', 'Trabalho em Equipe'],
  },
  {
    id: 'gazin-espumacao',
    role: 'Operador de Espumação (Noturno) & Líder de Equipe',
    company: 'Gazin Colchões',
    period: 'Mai 2024 – Mar 2025',
    duration: '11 meses',
    location: 'Douradina, Paraná, Brasil',
    badge: 'LIDERANÇA DE TURNO',
    accentColor: 'sky',
    description:
      'Responsabilidade direta na operação da máquina de espumação, controle de qualidade e liderança da equipe do turno da noite.',
    highlights: [
      'Como membro mais experiente do turno noturno, liderei a equipe organizando e distribuindo tarefas conforme prioridades.',
      'Resolução rápida de imprevistos operacionais, garantia de segurança e otimização do desempenho coletivo.',
    ],
    skills: ['Liderança de Equipe', 'Tomada de Decisão', 'Controle de Qualidade', 'Gestão de Crise'],
  },
  {
    id: 'gazin-logistica',
    role: 'Auxiliar de Carga e Descarga',
    company: 'Gazin',
    period: 'Jun 2023 – Set 2023',
    duration: '4 meses',
    location: 'Douradina, Paraná, Brasil',
    badge: 'LOGÍSTICA & AGILIDADE',
    accentColor: 'sky',
    description:
      'Rotina logística de descarga e organização estratégica de depósito de grande porte.',
    highlights: [
      'Organização e realocação de produtos para fluxo logístico eficiente, mantendo alta produtividade em ritmos acelerados.',
    ],
    skills: ['Agilidade Operacional', 'Atenção a Detalhes', 'Logística'],
  },
  {
    id: 'virtual-tec',
    role: 'Atendente Técnico – Loja de Informática',
    company: 'Virtual Tec Sistemas',
    period: 'Mar 2021 – Jul 2021',
    duration: '5 meses',
    location: 'Douradina, Paraná, Brasil',
    badge: 'BASE TECH & UX',
    accentColor: 'cyan',
    description:
      'Suporte técnico presencial, diagnóstico de hardware/software e atendimento consultivo ao cliente.',
    highlights: [
      'Tradução de necessidades técnicas de forma acessível e empatia com usuários — base direta para minha visão atual de UX/UI centrada no usuário final.',
    ],
    skills: ['Suporte Técnico', 'Hardware & Software', 'Comunicação Clara', 'Foco no Usuário'],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'ebac',
    degree: 'Curso Livre — Engenheiro Front-end',
    institution: 'EBAC - Escola Britânica de Artes Criativas e Tecnologia',
    period: 'Jul 2023 – Jul 2024',
    highlight: 'Arquitetura Front-end, React, TypeScript, UI/UX e ecossistema moderno.',
  },
  {
    id: 'cleoracy',
    degree: 'Técnico em Desenvolvimento de Sistemas',
    institution: 'Colégio Estadual Cleoracy Aparecida Gil (Melhor Aluno da Turma)',
    period: 'Jan 2022 – Jul 2023',
    highlight: 'Formação técnica completa em lógica, programação, banco de dados e engenharia de software.',
  },
  {
    id: 'civico-militar',
    degree: 'Ensino Fundamental e Médio',
    institution: 'Colégio Estadual Cívico-Militar Douradina',
    period: 'Jan 2014 – Dez 2021',
    highlight: 'Base educacional sólida marcada por disciplina e dedicação.',
  },
];

export const CERTIFICATIONS_DATA: string[] = [
  'Lógica de programação - Python essencial',
  'Fundamentos de codificação',
  'Lógica de programação II: pratique com desenhos, animações e um jogo',
  'Introdução à Programação',
  'Plano de Carreira',
];

export const LANGUAGES_DATA: { lang: string; level: string }[] = [
  { lang: 'Português', level: 'Nativo / Bilíngue' },
  { lang: 'Espanhol', level: 'Elementar / Básico' },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'petnexus',
    title: 'PetNexus — Sistema SaaS Multi-Tenant para Pet Shops',
    shortTitle: 'PetNexus SaaS',
    subtitle: 'Ecossistema SaaS Autoral Completo para Gestão e Automação de Pet Shops',
    description:
      'Sistema SaaS multi-tenant completo end-to-end: agenda, operação ao vivo, PDV, prontuário e Supabase.',
    fullDescription:
      'Projeto principal destacado no currículo e LinkedIn (https://petnexus.vercel.app/): Arquitetura e desenvolvimento completo do PetNexus, um ecossistema SaaS autoral focado na gestão inteligente e automação para pet shops. Criado end-to-end com React, Next.js, TypeScript e Supabase (PostgreSQL, Auth, Row Level Security e Realtime), unificando o Painel Admin (Agenda, Operação Ao Vivo, PDV, Prontuário, Equipe, Financeiro) e o Portal do Cliente/Tutor.',
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase'],
    badgeColors: ['#FF7A2F', '#7C3AED', '#10B981', '#3B82F6'],
    category: 'SaaS',
    status: '🟢 Em Produção • SaaS Principal',
    previewTheme: 'petnexus',
    featuredRibbon: 'SAAS PRINCIPAL',
    githubUrl: 'https://github.com/xxsusuxx',
    liveUrl: 'https://petnexus.vercel.app/',
    whatsappUrl:
      'https://wa.me/5544998289752?text=Ol%C3%A1%20Gabriel!%20Vi%20o%20PetNexus%20SaaS%20no%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20sua%20arquitetura.',
    architecture: [
      'Desenvolvimento end-to-end de regras de negócio, modelagem relacional e interface reativa',
      'Isolamento Multi-Tenant seguro com Row Level Security (RLS) no Supabase / PostgreSQL',
      'Sincronização em tempo real (Supabase Realtime) entre recepção, operação estética/clínica e tutor',
      'Módulos integrados de Agenda visual, PDV/Caixa, Prontuário, Fidelidade e automação via WhatsApp',
      'Validação estrita com TypeScript & Zod e deploy contínuo na Vercel (petnexus.vercel.app)',
    ],
    metrics: [
      { label: 'Produção', value: 'petnexus.vercel.app' },
      { label: 'Arquitetura', value: 'Multi-Tenant RLS' },
      { label: 'Stack', value: 'Next.js + Supabase' },
    ],
  },
  {
    id: 'goodreads-scraper',
    title: 'Goodreads Scraper & GUI (Python + Tkinter)',
    shortTitle: 'Goodreads Scraper',
    subtitle: 'Automação em Python com Interface Gráfica para Extração de Dados',
    description:
      'Automação em Python (Scrapy) com interface em Tkinter para extração, validação e estruturação de dados.',
    fullDescription:
      'Destaque oficial do currículo LinkedIn: ferramenta desktop completa em Python que combina o poder do framework Scrapy para web scraping de alta velocidade com uma interface gráfica amigável em Tkinter e Pillow. Permite configurar páginas, validar entradas em tempo real e exportar dados estruturados e limpos em JSON ou CSV sem precisar de linha de comando.',
    stack: ['Python', 'Scrapy', 'Tkinter', 'JSON/CSV'],
    badgeColors: ['#FF7A2F', '#10B981', '#3B82F6', '#7C3AED'],
    category: 'Python & Scraping',
    status: '🐍 Open Source no GitHub',
    previewTheme: 'goodreads',
    githubUrl: 'https://github.com/xxsusuxx/goodreads-scraper',
    liveUrl: 'https://github.com/xxsusuxx/goodreads-scraper',
    whatsappUrl:
      'https://wa.me/5544998289752?text=Ol%C3%A1%20Gabriel!%20Vi%20o%20projeto%20Goodreads%20Scraper%20no%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.',
    architecture: [
      'Motor de extração assíncrono construído com Scrapy para coleta e paginação veloz',
      'Interface gráfica desktop (GUI) construída em Tkinter + Pillow com feedback visual de progresso',
      'Pipeline de higienização, validação e estruturação automática para exportação JSON e CSV',
      'Arquitetura modular em Python 3.10 documentada no GitHub',
    ],
    metrics: [
      { label: 'Engine', value: 'Python + Scrapy' },
      { label: 'Interface', value: 'Tkinter Desktop GUI' },
      { label: 'Output', value: 'JSON & CSV Clean' },
    ],
  },
  {
    id: 'youtube-automation-ia',
    title: 'Canais no YouTube & Automação de Vídeo com IA',
    shortTitle: 'Automação YouTube IA',
    subtitle: 'Pipelines Automatizados de Produção Audiovisual & IA Generativa',
    description:
      'Pipelines em Python e IA para roteirização, síntese neural, edição programática e gestão de canais.',
    fullDescription:
      'Destaque oficial do currículo LinkedIn: desenvolvimento de pipelines end-to-end para produção e edição automatizada de vídeos com Inteligência Artificial. Otimiza todo o fluxo de criação de conteúdo digital — desde a geração de roteiros e síntese de voz neural via APIs de IA até a montagem audiovisual programática com Python e FFmpeg, legendagem dinâmica e publicação.',
    stack: ['Python', 'APIs de IA', 'FFmpeg', 'Automação'],
    badgeColors: ['#FF7A2F', '#8B5CF6', '#06B6D4', '#10B981'],
    category: 'IA & Automação',
    status: '🤖 Pipeline Automatizado',
    previewTheme: 'youtube-ia',
    featuredRibbon: 'IA & MÍDIA',
    githubUrl: 'https://github.com/xxsusuxx',
    liveUrl:
      'https://wa.me/5544998289752?text=Ol%C3%A1%20Gabriel!%20Quero%20saber%20mais%20sobre%20sua%20Automa%C3%A7%C3%A3o%20de%20V%C3%ADdeo%20e%20Canais%20com%20IA.',
    whatsappUrl:
      'https://wa.me/5544998289752?text=Ol%C3%A1%20Gabriel!%20Gostaria%20de%20saber%20mais%20sobre%20os%20pipelines%20de%20IA%20para%20YouTube.',
    architecture: [
      'Integração com LLMs e APIs de síntese de voz neural para geração automatizada de narrativas',
      'Edição e renderização programática de vídeo/áudio em lote utilizando Python e FFmpeg',
      'Geração sincronizada de legendas dinâmicas, metadados de SEO e thumbnails',
      'Redução drástica do tempo de pós-produção com execução autônoma',
    ],
    metrics: [
      { label: 'Core', value: 'Python + FFmpeg' },
      { label: 'Inteligência', value: 'APIs Generativas' },
      { label: 'Fluxo', value: 'Batch Automation' },
    ],
  },
  {
    id: 'douradina-multiservicos',
    title: 'Douradina MultiServiços — Hub Web & WhatsApp',
    shortTitle: 'MultiServiços Hub',
    subtitle: 'Plataforma Regional de Contratação de Serviços com Triagem Inteligente',
    description:
      'Hub web que conecta clientes a profissionais locais com triagem dinâmica e orçamento direto no WhatsApp.',
    fullDescription:
      'Plataforma digital desenvolvida para Douradina-PR e região com foco em conectar moradores e empresas a serviços de manutenção, reformas e limpezas. Conta com formulário interativo de seleção múltipla, triagem automatizada de demanda e integração direta com a API do WhatsApp para agilizar orçamentos.',
    stack: ['React', 'TypeScript', 'Tailwind', 'WhatsApp API'],
    badgeColors: ['#FF7A2F', '#06B6D4', '#7C3AED', '#10B981'],
    category: 'Web App',
    status: '🟢 Em Produção',
    previewTheme: 'douradina',
    githubUrl: 'https://github.com/xxsusuxx',
    liveUrl: 'https://douradinamultiservicos.vercel.app/',
    whatsappUrl:
      'https://wa.me/5544998289752?text=Ol%C3%A1%20Gabriel!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Douradina%20MultiServi%C3%A7os.',
    architecture: [
      'Seleção múltipla de serviços com triagem dinâmica de escopo e urgência',
      'Formatação automatizada de pedido e despacho direto para atendimento via WhatsApp',
      'Interface mobile-first de alta conversão otimizada para carregamento instantâneo',
    ],
    metrics: [
      { label: 'Região', value: 'Douradina-PR' },
      { label: 'Integração', value: 'WhatsApp Direct' },
      { label: 'Deploy', value: 'Vercel Live' },
    ],
  },
  {
    id: 'carine-nunes-portfolio',
    title: 'Carine Nunes — Portfólio Digital Editorial',
    shortTitle: 'Carine Nunes Web',
    subtitle: 'Aplicação Web Editorial de Alta Performance & UI/UX',
    description:
      'Portfólio profissional mobile-first com galeria otimizada de alta resolução e captação comercial.',
    fullDescription:
      'Aplicação web desenvolvida com React, TypeScript e Tailwind CSS para apresentação editorial e comercial no segmento da moda. Destaca ensaios fotográficos com carregamento otimizado, métricas de perfil e integração direta com redes sociais e WhatsApp para parcerias com marcas.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX'],
    badgeColors: ['#FF7A2F', '#EC4899', '#8B5CF6', '#3B82F6'],
    category: 'Web App',
    status: '🟢 Em Produção',
    previewTheme: 'carine',
    githubUrl: 'https://github.com/xxsusuxx',
    liveUrl: 'https://carine-nunes.vercel.app/',
    whatsappUrl:
      'https://wa.me/5544998289752?text=Ol%C3%A1%20Gabriel!%20Vi%20o%20projeto%20Carine%20Nunes%20no%20seu%20portf%C3%B3lio.',
    architecture: [
      'Layout editorial responsivo mobile-first com tipografia e contraste refinados',
      'Galeria de alta definição com otimização de assets e transições suaves',
      'Funil direto para fechamento de parcerias comerciais via WhatsApp e Instagram/TikTok',
    ],
    metrics: [
      { label: 'Segmento', value: 'Editorial & Moda' },
      { label: 'UX/UI', value: 'Mobile-First' },
      { label: 'Deploy', value: 'carine-nunes.vercel.app' },
    ],
  },
];
