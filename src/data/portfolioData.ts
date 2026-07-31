import { ProfileData, Project, Experience, Education, SkillCategory, Testimonial, Service } from '../types';

export const profileData: ProfileData = {
  name: "Gabriel Suenaga",
  roleTitle: "Desenvolvedor de Software & CEO",
  subtitle: "Criador do PetNexus (SaaS Multi-Tenant) e especialista em Next.js, TypeScript e automações B2B.",
  bioText: "Desenvolvedor de Software com forte perfil arquitetural e de produto, focado na criação de aplicações reais e escaláveis. Criador e Desenvolvedor Full-Stack do PetNexus (SaaS Multi-Tenant). Especialista em ecossistema JavaScript/TypeScript (Next.js, React, Node.js), bancos relacionais (PostgreSQL/Supabase) e automações em Python. Especialista em acelerar o ciclo de desenvolvimento utilizando IA para pair-programming e entregar resultados de alto impacto com código limpo e autonomia.",
  location: "Douradina, PR - Brasil",
  phone: "(44) 99828-9752",
  email: "gabriel.hneus@gmail.com",
  website: "gabriel-suenaga.vercel.app",
  github: "https://github.com/xxsusuxx",
  linkedin: "https://linkedin.com/in/gabriel-suenaga",
  instagram: "https://instagram.com/gabrielsu.dev",
  whatsappUrl: "https://wa.me/5544998289752"
};

export const projectsData: Project[] = [
  {
    id: "petnexus",
    title: "PetNexus (SaaS Multi-Tenant)",
    category: "saas",
    featured: true,
    featuredOrder: 1,
    tagline: "Plataforma SaaS Multi-Tenant para gestão inteligente de Pet Shops",
    description: "Arquitetura e desenvolvimento completo de um SaaS para gestão inteligente do ecossistema pet, atuando desde a modelagem do banco de dados relacional (PostgreSQL/Supabase) até o front-end em Next.js.",
    fullDescription: "O PetNexus foi construído com foco em isolamento de dados por empresa (Multi-Tenancy com RLS), alta performance no front-end com Next.js App Router, validação estrita de esquemas com Zod e autenticação via Supabase Auth. A plataforma unifica agendamentos, estoque, prontuários de pets e financeiro com UX moderna.",
    stack: ["Next.js (App Router)", "React", "TypeScript", "Supabase", "PostgreSQL", "RLS", "Zod", "Tailwind CSS"],
    architectureSpecs: [
      "Isolamento Multi-Tenant seguro com Row Level Security (RLS) no Supabase",
      "Modelagem relacional otimizada no PostgreSQL para agendamentos e prontuários",
      "Validação estrita end-to-end com Zod e formulários otimizados com React Hook Form",
      "Desenvolvimento acelerado com IA em Pair-Programming para ciclos rápidos de entrega"
    ],
    metrics: [
      { label: "Arquitetura", value: "Multi-Tenant" },
      { label: "Segurança", value: "Supabase RLS" },
      { label: "Validação", value: "Zod Schema" }
    ],
    badgeText: "🚀 Projeto Principal • SaaS",
    whatsappDemoUrl: "https://wa.me/5544998289752?text=Ol%C3%A1%20Gabriel!%20Gostaria%20de%20saber%20mais%20sobre%20a%20arquitetura%20do%20PetNexus."
  },
  {
    id: "douradina-multiservicos",
    title: "Douradina MultiServiços",
    category: "web",
    featured: true,
    featuredOrder: 2,
    tagline: "Plataforma de contratação e gestão de serviços locais com WhatsApp & IA",
    description: "Hub de serviços para Douradina-PR e região que conecta clientes a profissionais de manutenção, reformas e limpezas através de formulários dinâmicos e atendimento integrado via WhatsApp & IA.",
    fullDescription: "A Douradina MultiServiços é uma plataforma regional desenvolvida para centralizar a solicitação e orçamento de múltiplos serviços residenciais e comerciais (construção, reparos, limpeza pós-obra, capina, elétrica, etc.). Possui fluxo de triagem dinâmico, orçamentos diretamente direcionados para o WhatsApp e arquitetura preparada para automação com inteligência artificial.",
    stack: ["React", "TypeScript", "Tailwind CSS", "WhatsApp API", "UX/UI Design", "Vercel"],
    architectureSpecs: [
      "Seleção múltipla de serviços com formulário de triagem de orçamento interativo",
      "Encaminhamento automatizado de solicitações diretamente para o WhatsApp de atendimento",
      "Arquitetura desenhada para integração com IA conversacional para pré-atendimento e agendamento",
      "Design responsivo de alta conversão para Douradina-PR e cidades vizinhas"
    ],
    metrics: [
      { label: "Atuação", value: "Douradina-PR e Região" },
      { label: "Serviços", value: "Multi-Atendimento" },
      { label: "Orçamentos", value: "WhatsApp Direct" }
    ],
    badgeText: "🌐 Plataforma Local & Web",
    demoUrl: "https://douradinamultiservicos.vercel.app/",
    whatsappDemoUrl: "https://wa.me/5544998289752?text=Ol%C3%A1%20Gabriel!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Douradina%20MultiServi%C3%A7os."
  },
  {
    id: "goodreads-scraper",
    title: "Goodreads Scraper & GUI",
    category: "automation",
    featured: false,
    tagline: "Coleta e estruturação de dados com interface gráfica (Scrapy + Tkinter)",
    description: "Programa em Python para extração automatizada de citações e metadados com interface gráfica (Scrapy + Tkinter) para raspagem e estruturação de dados.",
    fullDescription: "Desenvolvido com Scrapy para web scraping de alta velocidade e Tkinter + Pillow para a interface de usuário. Permite definir a quantidade de páginas, validar entradas e acompanhar o progresso em tempo real, entregando uma solução completa sem necessidade de linha de comando.",
    stack: ["Python 3.10", "Scrapy", "Tkinter", "Pillow", "JSON", "CSV", "Web Scraping"],
    badgeText: "Web Scraping & GUI",
    githubUrl: "https://github.com/XxSusuxX/goodreads-scraper"
  }
];

export const experiencesData: Experience[] = [
  {
    id: "petnexus",
    role: "Fundador e Desenvolvedor Full-Stack",
    company: "PetNexus (SaaS)",
    period: "Maio 2025 – Atual",
    location: "Remoto / Douradina, PR",
    type: "founder",
    highlightBadge: "Atualmente • SaaS Próprio",
    highlights: [
      "Arquitetura e desenvolvimento completo do PetNexus, um SaaS Multi-Tenant para gestão inteligente de pet shops e clínicas veterinárias.",
      "Stack de ponta: Next.js (App Router), React, TypeScript, Supabase (PostgreSQL, Row Level Security - RLS, Auth) e Zod.",
      "Modelagem relacional para agendamentos, estoque, prontuários de pets e financeiro com isolamento total de dados."
    ],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "RLS", "Zod"]
  },
  {
    id: "freelance-dev",
    role: "Criador de Conteúdo & Desenvolvedor Freelance",
    company: "Autônomo",
    period: "Agosto 2025 – Atual",
    location: "Projetos Próprios",
    type: "freelancer",
    highlightBadge: "Em Destaque",
    highlights: [
      "Desenvolvimento de scripts de automação em Python (Selenium, Scrapy, Tkinter) para extração e estruturação de dados.",
      "Concilio o trabalho prático com dedicação diária ao estudo de arquitetura de software, programação e criação de conteúdo."
    ],
    stack: ["Python", "Selenium", "Scrapy", "Tkinter", "APIs REST"]
  },
  {
    id: "frontend-voluntario",
    role: "Desenvolvedor Front-end (Voluntário)",
    company: "Projeto Base (Saúde Mental & Psicanálise)",
    period: "Nov 2023 – Abr 2024",
    location: "Remoto",
    type: "freelancer",
    highlightBadge: "Projeto Social",
    highlights: [
      "Atuação no desenvolvimento web do projeto social voltado para ampliar o acesso à psicanálise e cuidar da saúde mental.",
      "Construção de componentes front-end responsivos e otimização da experiência do usuário (UX/UI)."
    ],
    stack: ["React", "JavaScript", "CSS3", "UX/UI"]
  },
  {
    id: "gazin-colchoes",
    role: "Operador de Espumação Noturno & Líder de Setor",
    company: "Gazin Colchões",
    period: "Maio 2024 – Março 2025",
    location: "Douradina, PR",
    type: "leadership",
    highlightBadge: "Liderança de Turno",
    highlights: [
      "Operação da máquina de espumação e liderança da equipe do setor no turno da noite, organizando tarefas de produção.",
      "Como colaborador mais experiente, responsável por garantir a segurança, resolver imprevistos e otimizar o desempenho coletivo.",
      "Vivência que fortaleceu minha liderança prática, gestão de crise, pontualidade e tomada de decisão em ambiente industrial."
    ],
    stack: ["Liderança de Equipe", "Gestão Operacional", "Controle de Qualidade"]
  }
];

export const educationData: Education[] = [
  {
    id: "tecnico-ds",
    title: "Técnico em Desenvolvimento de Sistemas",
    institution: "Colégio Estadual Cleoracy Aparecida Gil (Melhor Aluno da Turma)",
    period: "2022 - 2023",
    status: "Formado",
    description: "Formação técnica abrangendo lógica de programação, orientação a objetos, banco de dados e desenvolvimento web."
  },
  {
    id: "ebac-frontend",
    title: "Engenheiro Front-end",
    institution: "EBAC (Escola Britânica de Artes Criativas e Tecnologia)",
    period: "2023 - 2024",
    status: "Concluído",
    description: "Especialização em ecossistema JavaScript/TypeScript moderno, frameworks reativos e arquitetura CSS."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Front-end Moderno",
    description: "Construção de interfaces de alto impacto e escaláveis.",
    skills: [
      { name: "Next.js / React", level: "Uso Diário", isKeySkill: true },
      { name: "TypeScript", level: "Uso Diário", isKeySkill: true },
      { name: "Tailwind CSS", level: "Uso Diário", isKeySkill: true }
    ]
  },
  {
    id: "backend-data",
    title: "Back-end & Banco de Dados",
    description: "Infraestrutura escalável, bancos de dados e segurança de acesso.",
    skills: [
      { name: "Supabase (Auth/RLS)", level: "Uso Diário", isKeySkill: true },
      { name: "PostgreSQL", level: "Uso Diário", isKeySkill: true },
      { name: "Python", level: "Conhecimento Prático", isKeySkill: true },
      { name: "APIs REST", level: "Uso Diário", isKeySkill: true }
    ]
  },
  {
    id: "produto-ia",
    title: "Produto & Automação",
    description: "Visão de produto e ecossistema de autonomia com IA.",
    skills: [
      { name: "Web Scraping (Scrapy/Selenium)", level: "Conhecimento Prático", isKeySkill: true },
      { name: "Visão de Produto & SaaS Multi-Tenant", level: "Projetos Reais", isKeySkill: true }
    ]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "mariles",
    quote: "Gabriel é um aluno determinado, focado e proativo, sempre aberto para aprender e motivado por desafios.",
    author: "Mariles Carvalho",
    role: "Consultora de Carreira"
  },
  {
    id: "sergio",
    quote: "Gabriel possui excelentes habilidades técnicas e aprende muito rápido. Recomendo-o sem ressalvas.",
    author: "Sergio Melato",
    role: "Professor de Tecnologia"
  }
];

export const servicesData: Service[] = [
  {
    id: "whatsapp-bots",
    title: "Bots Inteligentes para WhatsApp",
    description: "Automação do fluxo de vendas, suporte, agendamento e cobrança diretamente no canal preferido do seu cliente.",
    icon: "Bot",
    highlights: ["Atendimento Automático 24/7", "Disparo de Boletos & Lembretes", "Integração via Webhooks"]
  },
  {
    id: "process-automation",
    title: "Automação de Processos & Scraping",
    description: "Eliminação de tarefas manuais repetitivas via scripts Python defensivos e raspagem estratégica de dados web.",
    icon: "Cpu",
    highlights: ["Scripts em Python & Selenium", "Captura de Dados com Scrapy", "Monitoramento de Erros"]
  },
  {
    id: "custom-web-apps",
    title: "Aplicações Web Modernas",
    description: "Interfaces com Next.js, React e Tailwind CSS projetadas para alta performance, velocidade SEO e conversão de usuários.",
    icon: "Code2",
    highlights: ["Design Responsivo & Clean", "Código Limpo & Tipado em TS", "Integração Contínua"]
  }
];
