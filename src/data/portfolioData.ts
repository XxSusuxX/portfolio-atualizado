import { ProfileData, Project, Experience, Education, SkillCategory, Testimonial, Service } from '../types';

export const profileData: ProfileData = {
  name: "Gabriel Suenaga",
  roleTitle: "Desenvolvedor de Software & CEO",
  subtitle: "Criador do PetNexus (SaaS Multi-Tenant) e especialista em Next.js, TypeScript e automações B2B.",
  bioText: "Desenvolvedor Full-Stack e Criador do PetNexus (SaaS Multi-Tenant). Especialista em Next.js, React, TypeScript, PostgreSQL (Supabase) e automações B2B com Python. Concilio determinação diária e aceleração por IA com foco em código limpo, autonomia e impacto no negócio.",
  location: "Douradina, PR - Brasil",
  phone: "(44) 99828-9752",
  email: "gabriel.hneus@gmail.com",
  website: "www.gabrielsuenaga.com.br",
  github: "https://github.com/xxsusuxxs",
  linkedin: "https://linkedin.com/in/gabrielsuenaga",
  instagram: "https://instagram.com/gabrielsu.dev",
  whatsappUrl: "https://wa.me/5544998289752"
};

export const projectsData: Project[] = [
  {
    id: "petnexus",
    title: "PetNexus — SaaS Multi-Tenant",
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
    description: "Hub de serviços para Douradina-PR e região que conecta clientes a profissionais de manutenção, reformas e limpezas através de formulários dinâmicos e atendimento integrado via WhatsApp.",
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
    title: "Goodreads Scraper & GUI App",
    category: "automation",
    featured: false,
    tagline: "Coleta e estruturação de dados com interface gráfica (Scrapy + Tkinter)",
    description: "Programa em Python para extração automatizada de citações e metadados com interface gráfica intuitiva em Tkinter, validação de dados e exportação personalizável em JSON ou CSV.",
    fullDescription: "Desenvolvido com Scrapy para web scraping de alta velocidade e Tkinter + Pillow para a interface de usuário. Permite definir a quantidade de páginas, validar entradas e acompanhar o progresso em tempo real, entregando uma solução completa sem necessidade de linha de comando.",
    stack: ["Python 3.10", "Scrapy", "Tkinter", "Pillow", "JSON", "CSV", "Web Scraping"],
    badgeText: "Web Scraping & GUI",
    githubUrl: "https://github.com/XxSusuxX/goodreads-scraper"
  },
  {
    id: "wandinha-ebac",
    title: "Wandinha",
    category: "web",
    featured: false,
    tagline: "Landing Page Temática & UI Design (EBAC)",
    description: "Landing page desenvolvida para uma fanpage da série Wandinha com foco em geração de tráfego e aperfeiçoamento em front-end na EBAC, com estilização CSS imersiva e UI Design.",
    fullDescription: "Desenvolvido como uma landing page para uma fanpage da série com o objetivo de gerar tráfego, além de projeto de aperfeiçoamento em front-end na EBAC (Escola Britânica de Artes Criativas e Tecnologia). O desafio consistiu na personalização e adaptação de um layout e arquivo CSS estruturado para criar uma experiência visual envolvente e responsiva sobre a personagem Wandinha Addams.",
    stack: ["HTML5", "CSS3", "JavaScript", "UI/UX Design", "Vercel"],
    badgeText: "UI & Front-End",
    demoUrl: "https://wandinha.vercel.app/"
  },
  {
    id: "calculadora-react-native",
    title: "Calculadora React Native",
    category: "web",
    featured: false,
    tagline: "Aplicativo Mobile em React Native, Android Studio & Expo",
    description: "Calculadora mobile desenvolvida com React Native e Expo, emulada no Android Studio. Possui layout responsivo, manipulação de eventos e componentes modulares.",
    fullDescription: "Aplicativo mobile de calculadora construído com React Native e Expo, testado e emulado via Android Studio. A aplicação é dividida em componentes modulares (App.js, buttons.js, display.js) com manipulação de eventos de clique, formato dinâmico para telas e cálculo em tempo real.",
    stack: ["React Native", "Expo", "Android Studio", "JavaScript", "npm"],
    badgeText: "Mobile App",
    githubUrl: "https://github.com/XxSusuxX/Calculadora-React-Native"
  },
  {
    id: "cadastro-php",
    title: "Cadastro-PHP",
    category: "web",
    featured: false,
    tagline: "Sistema de Autenticação e Cadastro (PHP, MySQL & JS)",
    description: "Sistema completo de autenticação e cadastro de usuários composto por formulário interativo, login seguro, validações em JavaScript e área restrita protegida por sessão.",
    fullDescription: "Desenvolvido de forma independente como projeto freelancer para autenticação e gestão de cadastros. O sistema possui 4 módulos principais: landing page, formulário de cadastro com validações dinâmicas em JavaScript, login e área restrita protegida por sessão com persistência no MySQL via phpMyAdmin.",
    stack: ["PHP", "MySQL", "phpMyAdmin", "JavaScript", "HTML5", "CSS3"],
    badgeText: "PHP & MySQL",
    githubUrl: "https://github.com/XxSusuxX/Cadastro-PHP"
  },
  {
    id: "susu-art-market",
    title: "Susu - Art Market (Hobby Showcase)",
    category: "web",
    featured: false,
    tagline: "Vitrine estática de arte digital e tradicional com e-commerce simulado",
    description: "Site para exibição de desenhos e ilustrações (nanquim, fan art e ilustrações estilizadas) com simulação visual de carrinho de compras e navegação responsiva.",
    fullDescription: "O Susu - Art Market é um site estático construído para apresentar uma coleção pessoal de artes (desenhos tradicionais a lápis/nanquim, fan arts e ilustrações). O projeto simula a experiência de navegação de um e-commerce de arte independente com cabeçalho, história da loja, grade de produtos e simulação de carrinho.",
    stack: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    badgeText: "Art Showcase & Web",
    demoUrl: "https://susu-art-market.vercel.app/"
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
      "Stack de ponta: Next.js (App Router), React, TypeScript, Supabase (PostgreSQL, Row Level Security - RLS, Auth).",
      "Modelagem relacional para agendamentos, estoque, prontuários de pets e financeiro com isolamento total de dados entre clientes.",
      "Aceleração de entregas utilizando IA para revisão arquitetural, testes e qualidade de código."
    ],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "RLS", "Zod"]
  },
  {
    id: "freelance-dev",
    role: "Criador de Conteúdo & Desenvolvedor Freelance",
    company: "Autônomo / Projetos Próprios",
    period: "Agosto 2025 – Atual",
    location: "Douradina, PR • Remoto",
    type: "freelancer",
    highlightBadge: "Em Destaque • Foco & Garra",
    highlights: [
      "Concilio o trabalho como servente de obras com a dedicação diária ao estudo de programação, desenvolvimento de software e criação de conteúdo.",
      "Desenvolvimento de scripts de automação em Python (Selenium, Scrapy, Tkinter) para extração e estruturação de dados (Web Scraping).",
      "Criação e edição de conteúdo focado em tecnologia e jogos no YouTube, estudando retenção de público, edição e algoritmos."
    ],
    stack: ["Python", "Selenium", "Scrapy", "Tkinter", "APIs REST", "YouTube / Edição"]
  },
  {
    id: "gazin-colchoes",
    role: "Operador de Espumação Noturno & Líder de Setor",
    company: "Gazin Colchões",
    period: "Maio 2024 – Março 2025 (11 meses)",
    location: "Douradina, PR",
    type: "leadership",
    highlightBadge: "Liderança de Turno",
    highlights: [
      "Operação da máquina de espumação e liderança da equipe do setor no turno da noite, organizando e distribuindo tarefas de produção.",
      "Como colaborador mais experiente do setor, fui responsável por garantir a segurança, resolver imprevistos operacionais e otimizar o desempenho coletivo.",
      "Vivência que fortaleceu minha liderança prática, gestão de crise, pontualidade e tomada de decisão em ambiente industrial."
    ],
    stack: ["Liderança de Equipe", "Gestão Operacional", "Controle de Qualidade", "Resolução de Problemas"]
  },
  {
    id: "projeto-base",
    role: "Desenvolvedor Front-end (Voluntário)",
    company: "Projeto Base (Saúde Mental & Psicanálise)",
    period: "Novembro 2023 – Abril 2024 (6 meses)",
    location: "Remoto",
    type: "volunteer",
    highlights: [
      "Atuação no desenvolvimento web do projeto social voltado para ampliar o acesso à psicanálise e cuidar da saúde mental.",
      "Construção de componentes front-end responsivos e otimização da experiência do usuário (UX/UI)."
    ],
    stack: ["React", "JavaScript", "HTML5/CSS3", "UX/UI"]
  },
  {
    id: "gazin-logistica",
    role: "Auxiliar de Carga e Descarga",
    company: "Gazin",
    period: "Junho 2023 – Setembro 2023 (4 meses)",
    location: "Douradina, PR",
    type: "operational",
    highlights: [
      "Rotina de descarga e organização de estoque de grandes eletrodomésticos.",
      "Desenvolvimento de alta resistência ao trabalho pesado, agilidade, atenção a detalhes e trabalho em equipe sob pressão."
    ]
  },
  {
    id: "virtual-tec",
    role: "Atendente Técnico",
    company: "Virtual Tec Sistemas (Loja de Informática)",
    period: "Março 2021 – Julho 2021 (5 meses)",
    location: "Douradina, PR",
    type: "support",
    highlights: [
      "Atendimento presencial e suporte técnico a clientes, auxílio na escolha de produtos e montagem/manutenção de sistemas.",
      "Desenvolvimento de comunicação clara, empatia e visão focada em resolver os problemas reais do usuário final."
    ]
  }
];

export const educationData: Education[] = [
  {
    id: "tecnico-ds",
    title: "Técnico em Desenvolvimento de Sistemas",
    institution: "Colégio Estadual Cleoracy Aparecida Gil",
    period: "Jan 2022 – Jul 2023",
    status: "Formado (Melhor Aluno da Turma em 2023)",
    description: "Formação técnica abrangendo lógica de programação, orientação a objetos, banco de dados (PHP, MySQL) e desenvolvimento web. Eleito o melhor aluno da turma em 2023 pelo excelente desempenho acadêmico e dedicação."
  },
  {
    id: "ebac-frontend",
    title: "Engenheiro Front-end (Curso Livre Profissionalizante)",
    institution: "EBAC - Escola Britânica de Artes Criativas e Tecnologia",
    period: "Jul 2023 – Jul 2024",
    status: "Certificado Concluído",
    description: "Especialização em ecossistema JavaScript/TypeScript moderno, frameworks reativos (React, Vue.js), automação com GruntJS, qualidade de código com ESLint e arquitetura CSS."
  },
  {
    id: "devaprender-python",
    title: "Lógica de Programação & Python Essencial",
    institution: "Dev Aprender",
    period: "Concluído em Abril 2025",
    status: "Certificado",
    description: "Módulos focados em automação de tarefas com Python, lógica estruturada, manipulação de arquivos e estruturas de dados avançadas."
  },
  {
    id: "ebac-plano-carreira",
    title: "Plano de Carreira & Desenvolvimento Profissional",
    institution: "EBAC",
    period: "Concluído em Novembro 2023",
    status: "Certificado",
    description: "Mapeamento de metas de carreira, aprimoramento de soft skills, estratégia de presença no mercado e planejamento profissional."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Front-end Moderno",
    description: "Construção de interfaces de alto impacto, acessíveis e focadas em conversão.",
    skills: [
      { name: "Next.js (App Router)", level: "Uso Diário", isKeySkill: true },
      { name: "React 19", level: "Uso Diário", isKeySkill: true },
      { name: "TypeScript", level: "Uso Diário", isKeySkill: true },
      { name: "Tailwind CSS", level: "Uso Diário", isKeySkill: true },
      { name: "Zod Schema Validation", level: "Uso Diário", isKeySkill: true },
      { name: "React Hook Form", level: "Conhecimento Prático" },
      { name: "Vue.js", level: "Fundamentos" },
      { name: "UI/UX & Web Design", level: "Conhecimento Prático" }
    ]
  },
  {
    id: "backend-data",
    title: "Back-end, Dados & Cloud",
    description: "Infraestrutura escalável, bancos de dados e segurança de acesso.",
    skills: [
      { name: "Supabase & Auth", level: "Uso Diário", isKeySkill: true },
      { name: "PostgreSQL & Modelagem", level: "Uso Diário", isKeySkill: true },
      { name: "Row Level Security (RLS)", level: "Uso Diário", isKeySkill: true },
      { name: "Python", level: "Conhecimento Prático", isKeySkill: true },
      { name: "APIs RESTful & Webhooks", level: "Uso Diário", isKeySkill: true },
      { name: "Node.js & Express", level: "Conhecimento Prático" }
    ]
  },
  {
    id: "produto-ia",
    title: "Produto, IA & Automação",
    description: "Visão de produto e ecossistema de autonomia e produtividade com IA.",
    skills: [
      { name: "Visão de Produto & SaaS", level: "Projetos Reais", isKeySkill: true },
      { name: "Arquitetura Multi-Tenant", level: "Projetos Reais", isKeySkill: true },
      { name: "IA no Dev (Pair-Programming)", level: "Uso Diário", isKeySkill: true },
      { name: "Automação WhatsApp (Bots)", level: "Projetos Reais", isKeySkill: true },
      { name: "Selenium & Pytest (QA)", level: "Conhecimento Prático" },
      { name: "Scrapy & Web Scraping", level: "Conhecimento Prático" },
      { name: "Git & GitHub Workflow", level: "Uso Diário" }
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
