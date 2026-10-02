export type Language = "pt" | "en";

export interface ProjectTranslation {
  title: string;
  description: string;
  tags: string[];
}

export interface ExperienceTranslation {
  id: string;
  company: string;
  role: string;
  period: string;
  badge?: string;
  isCurrent?: boolean;
  description: string[];
  tags: string[];
}

export const TRANSLATIONS = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato",
      viewLinkedIn: "Veja meu LinkedIn",
      downloadResume: "Baixar currículo",
    },
    hero: {
      role: "Product / UX Designer",
      titleLine1: "Transformando",
      titleLine2: "ideias em",
      titleHighlight: "experiências digitais",
      subtitle:
        "Product Designer focado em soluções que agregam ao negócio e melhoram a experiência do usuário, orientado a dados.",
      ctaProjects: "Ver meus projetos",
      ctaContact: "Vamos conversar",
    },
    profileCard: {
      name: "Pedro Armada",
      role: "Product Designer",
      statusAvailable: "Disponível",
      areasHeader: "Áreas de atuação",
      skills: ["UX Design", "UI Design", "UX Research", "Chatbots", "Design System"],
      stats: [
        { val: "-60%", label: "TMA (Atendimento)" },
        { val: "-20%", label: "Transbordo" },
        { val: "+10%", label: "Retenção" },
      ],
    },
    projectsSection: {
      badge: "Portfólio",
      title: "Projetos",
      ctaHaveProject: "Tem um projeto em mente? →",
      viewCaseStudy: "Ver case study →",
      viewAllBehance: "Ver todos os projetos no Behance",
      items: [
        {
          title: "Redesign do Skoob",
          description:
            "Pesquisa de UX com o objetivo de entender o comportamento dos leitores e desenhar a nova funcionalidade de comunidades de leitura no Skoob.",
          tags: ["UX Research", "UX Design", "Comunidades"],
        },
        {
          title: "Farmácias Forbi - Jornada de Atendimento (Em construção 🚧)",
          description:
            "Fluxo conversacional para uma grande rede de farmácias, cujo objetivo era automatizar a jornada dos clientes e reduzir o TMA.",
          tags: ["UX Design", "Chatbots", "Design Conversacional"],
        },
        {
          title: "Agente de IA (Em construção 🚧)",
          description:
            "Criação de um agente de IA focado em apoiar novos colaboradores no processo de Onboarding de uma empresa.",
          tags: ["IA Generativa", "UX Design", "Documentação"],
        },
      ],
    },
    timeline: {
      badge: "Experiência Profissional",
      titlePrefix: "Trajetória & ",
      titleHighlight: "Impacto",
      subtitle:
        "Histórico de atuação profissional focado em criar experiências centradas no usuário e orientadas por dados, atuando entre UX, Produto e Tecnologia.",
      experiences: [
        {
          id: "zenvia",
          company: "Zenvia Mobile Services",
          role: "Analista de Experiência do Usuário",
          period: "09/2025 – 07/2026",
          badge: "Seguros & IA Generativa",
          isCurrent: true,
          description: [
            "Design de Jornadas & IA Estratégica: Concepção e estruturação de jornadas conversacionais de ponta a ponta (WhatsApp e Webchat), desde a criação de personas até fluxos de diálogo e árvores de decisão no Miro, integrando IA Generativa (Gemini) como suporte estratégico na tomada de decisão de UX para grande player de Seguros.",
            "Métricas de Produto & Melhoria Contínua: Criação e padronização de métricas e KPIs de experiência através de Zenvia NLU e ferramentas de IA generativa (Gemini e Miro AI), mapeando pontos de atrito, taxas de abandono e gargalos de jornada para embasar decisões de produto e otimização contínua.",
            "Agente de IA Especialista em UX: Desenvolvimento de um agente de IA customizado para automação de rotinas de UX na squad, agilizando etapas de discovery, diagnóstico rápido de atrito em fluxos conversacionais e geração automatizada de indicadores de performance.",
            "Destaque em Hackathon & Iniciativa AI First: Reconhecimento com destaque de Melhor Documentação no Hackathon interno de agentes de IA, viabilizando melhores resultados para o time e atuando como multiplicador na implementação da estratégia corporativa AI First da Zenvia.",
          ],
          tags: [
            "Product Design",
            "UX Research",
            "IA Generativa (Gemini)",
            "Métricas & KPIs",
            "Design Conversacional",
            "Agentes de IA",
            "Zenvia NLU",
          ],
        },
        {
          id: "resolv-jr",
          company: "Resolv.AI (Resolv Tecnologia e Inovação)",
          role: "UX/UI Designer",
          period: "06/2024 – 06/2025",
          badge: "Saúde & Educação B2B",
          description: [
            "Design de Interfaces (UI) & Design System: Criação de interfaces visuais e protótipos navegáveis de alta fidelidade no Figma para plataformas B2B (Saúde e Educação), implementando componentes modulares, variantes, Auto Layout e handoff técnico detalhado com especificações de engenharia.",
            "Jornadas Conversacionais & UX Writing: Concepção de jornadas conversacionais completas (WhatsApp e Webchat) no FigJam/Figma, realizando mapeamento de fluxos, árvores de decisão e UX Writing orientado ao tom de voz do produto, integrando fluxos de NLP/NLU via IBM Watson.",
            "Curadoria Orientada a Dados: Liderança na rotina de curadoria analítica de jornadas baseada em dados de conversas e comportamento dos usuários, refinando intenções do bot, reduzindo fallbacks e aumentando a resolutividade do autoatendimento.",
            "Impacto Mensurável em Ensino Superior: **Redução de 20% no volume de transbordo** para atendimento humano e **aumento de 10% na retenção** de usuários na principal experiência conversacional de instituição brasileira de grande porte.",
            "Concepção 0 to 1 em Farmácias de Grande Porte: Design e lançamento de solução conversacional para automação de atendimento, alcançando **redução de 60% no Tempo Médio de Atendimento (TMA de 5 para 2 minutos)**.",
            "Governança & Previsibilidade de Entregas: Estruturação de novo framework de documentação e entrega de projetos de design, acelerando aprovação de fluxos junto a stakeholders e garantindo maior previsibilidade de resultados para os clientes.",
          ],
          tags: [
            "UX/UI Design",
            "Design System",
            "UX Writing",
            "High-Fidelity UI",
            "Analytics & Curadoria",
            "IBM Watson NLU",
            "B2B SaaS",
          ],
        },
        {
          id: "amigu",
          company: "Instituto Amigu",
          role: "Product Designer",
          period: "12/2024 – 03/2025",
          badge: "Plataforma Web (SouAmiGU)",
          description: [
            "Concepção 0 to 1 de Plataforma Web (SouAmiGU): Atuação multidisciplinar na criação de ponta a ponta da plataforma web de gestão de hackathons, desenhando jornadas completas para participantes (inscrição, formação de equipes, submissão) e administradores (gestão de bancas, avaliação e métricas).",
            "Discovery, Benchmarking & Arquitetura da Informação: Condução de pesquisas de requisitos e benchmarking no FigJam para estruturar a proposta de valor, regras de negócio e fluxos intuitivos de navegação.",
            "Prototipação em Alta Fidelidade & Design System: Mapeamento de fluxos e prototipação de alta fidelidade navegável no Figma, além da criação do Design System do projeto para assegurar consistência visual e escalabilidade.",
            "Resolução de Gargalos Operacionais & Viabilidade Técnica: Centralização do ecossistema de hackathons em um fluxo digital único (eliminando dispersão em planilhas e formulários), com protótipo final documentado em **ciclo de 4 meses** e validação prévia de viabilidade técnica com desenvolvedores.",
          ],
          tags: [
            "Product Design (0 to 1)",
            "Figma",
            "Prototipagem",
            "UX Research",
            "Arquitetura da Informação",
            "Design System",
          ],
        },
        {
          id: "resolv-dev",
          company: "Resolv.AI (Resolv Tecnologia e Inovação)",
          role: "Assistente de Desenvolvimento de Software",
          period: "07/2023 – 03/2024",
          badge: "Chatbots & Low-code",
          description: [
            "Lógica de Negócio & Árvores de Decisão: Desenvolvimento e parametrização de fluxos conversacionais no IBM Watson Assistant e Zenvia Bots, estruturando árvores de decisão complexas com condicionais lógicas, variáveis de contexto, regex, entidades e intenções.",
            "QA Técnico, Edge Cases & Integrações: Execução de testes de fluxo (QA), debugging e mapeamento de edge cases para assegurar estabilidade operacional e mitigar fallbacks; suporte em integrações via APIs/Webhooks em tempo real e manipulação de payloads JSON.",
            "Ponte Técnica para Design & Promoção: Domínio prático sobre limitações e capacidades de NLU e backend que consolidou a base para desenhar soluções de UX/UI tecnicamente viáveis, resultando na promoção direta a UX Designer da empresa.",
          ],
          tags: [
            "IBM Watson Assistant",
            "Zenvia Bots",
            "Lógica & Árvores de Decisão",
            "QA & Debugging",
            "APIs / Webhooks",
            "Payloads JSON",
          ],
        },
        {
          id: "portohack",
          company: "PortoHack 2023",
          role: "Mentor de UX & Tecnologia",
          period: "2023",
          badge: "Setor Portuário",
          description: [
            "Mentoria Técnica em Hackathon: Atuação como mentor em hackathon focado em desafios do setor portuário, orientando equipes multidisciplinares na definição de problemas, estruturação de propostas de valor, experiência do usuário (UX) e dinâmicas ágeis.",
          ],
          tags: [
            "Mentoria Técnica",
            "Hackathon",
            "Design Thinking",
            "Inovação Aberta",
            "Desenvolvimento Ágil",
          ],
        },
      ],
    },
    about: {
      badge: "Quem sou eu",
      title: "Sobre mim",
      p1Line1: "Muito Prazer! Me chamo ",
      p1Name: "Pedro Henrique Armada Nalis",
      p1Line2:
        ", tenho 22 anos e atuo como Product/UX Designer desde 2023, movido pela curiosidade e paixão de resolver problemas através do design.",
      p2: "Sou formado em Sistemas de Informação e descobri a profissão durante a minha trajetória no curso, onde sempre tive um perfil mais analítico e visual, mas não muito forte com código, até descobrir que havia uma área que se encaixava perfeitamente comigo: UX/UI Design. Mergulhei de cabeça nos estudos e vi que ali era onde estava meu potencial, mas sem dispensar a bagagem que consegui com meu período na programação, visto que hoje ela me ajuda a tomar decisões melhores e me permite ter uma boa comunicação com times de desenvolvimento.",
      p3: "Pra além do trabalho, sempre gostei de ter diversos hobbies desde pequeno. Hoje no meu tempo livre, gosto muito de tocar baixo, ler livros e quadrinhos, ver filmes e jogar videogame. Não só são atividades que eu gosto muito, mas elas também me ajudam a estimular minha criatividade e minhas ideias.",
      viewLinkedIn: "Veja meu LinkedIn",
      downloadResume: "Baixar currículo",
      statsTitle: "Em números",
      stats: [
        { val: "2+", desc: "anos de experiência em UX/UI Design" },
        { val: "5+", desc: "projetos entregues com impacto mensurável" },
        { val: "3", desc: "empresas em setores distintos" },
        { val: "100%", desc: "orientado a dados e ao usuário" },
      ],
    },
    contact: {
      badge: "Vamos trabalhar juntos",
      titleLine1: "Tem uma ideia de projeto?",
      titleHighlight: "Vamos conversar!",
      subtitleLine1: "Estou disponível para projetos freelance, colaborações e oportunidades full-time.",
      subtitleLine2: "Me mande um e-mail para ph.armada.nalis@gmail.com ou me mande uma mensagem no LinkedIn para nos conhecermos melhor!",
      ctaButton: "Me mande uma mensagem",
    },
    footer: {
      copyright: "© 2026 Pedro Armada. Todos os direitos reservados.",
    },
    scrollTop: "Voltar ao topo",
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      viewLinkedIn: "My LinkedIn",
      downloadResume: "Download CV",
    },
    hero: {
      role: "Product / UX Designer",
      titleLine1: "Transforming",
      titleLine2: "ideas into",
      titleHighlight: "digital experiences",
      subtitle:
        "Data-driven Product Designer focused on creating user-centered solutions that deliver business value.",
      ctaProjects: "View my projects",
      ctaContact: "Let's talk",
    },
    profileCard: {
      name: "Pedro Armada",
      role: "Product Designer",
      statusAvailable: "Available",
      areasHeader: "Core Skills",
      skills: ["UX Design", "UI Design", "UX Research", "Chatbots", "Design System"],
      stats: [
        { val: "-60%", label: "Avg Handle Time" },
        { val: "-20%", label: "Agent Handoff" },
        { val: "+10%", label: "User Retention" },
      ],
    },
    projectsSection: {
      badge: "Portfolio",
      title: "Featured Projects",
      ctaHaveProject: "Have a project in mind? →",
      viewCaseStudy: "View case study →",
      viewAllBehance: "View all projects on Behance",
      items: [
        {
          title: "Skoob Redesign",
          description:
            "UX Research study aiming to understand reader behavior and design the new reading communities feature for Skoob.",
          tags: ["UX Research", "UX Design", "Communities"],
        },
        {
          title: "Forbi Pharmacies - Customer Journey (Under construction 🚧)",
          description:
            "Conversational flow for a major pharmacy chain to automate customer journeys and reduce average handle time.",
          tags: ["UX Design", "Chatbots", "Conversational Design"],
        },
        {
          title: "AI Agent (Under construction 🚧)",
          description:
            "AI Agent designed to assist new hires during the corporate employee onboarding process.",
          tags: ["Generative AI", "UX Design", "Documentation"],
        },
      ],
    },
    timeline: {
      badge: "Work Experience",
      titlePrefix: "Trajectory & ",
      titleHighlight: "Impact",
      subtitle:
        "Professional track record focused on building user-centered, data-driven digital experiences bridging UX, Product, and Engineering.",
      experiences: [
        {
          id: "zenvia",
          company: "Zenvia Mobile Services",
          role: "User Experience Analyst",
          period: "09/2025 – 07/2026",
          badge: "Insurance & GenAI",
          isCurrent: true,
          description: [
            "Journey Design & Strategic AI: End-to-end conception and structuring of conversational journeys (WhatsApp and Webchat), from persona creation to dialogue flows and decision trees in Miro, integrating Generative AI (Gemini) as strategic UX support for a major Insurance enterprise.",
            "Product Metrics & Continuous Improvement: Definition and standardization of experience metrics & KPIs using Zenvia NLU and generative AI tools (Gemini & Miro AI), mapping friction points, drop-off rates, and journey bottlenecks to guide product decisions and continuous optimization.",
            "Specialized UX AI Agent: Development of a custom AI agent to automate squad UX routines, accelerating discovery phases, rapid friction diagnosis in conversational flows, and automated performance indicator generation.",
            "Hackathon Highlight & AI-First Initiative: Recognized for Best Documentation in an internal AI agents hackathon, driving team results and acting as a multiplier in implementing Zenvia's corporate AI-First strategy.",
          ],
          tags: [
            "Product Design",
            "UX Research",
            "Generative AI (Gemini)",
            "Metrics & KPIs",
            "Conversational Design",
            "AI Agents",
            "Zenvia NLU",
          ],
        },
        {
          id: "resolv-jr",
          company: "Resolv.AI (Resolv Tecnologia e Inovação)",
          role: "UX/UI Designer",
          period: "06/2024 – 06/2025",
          badge: "Health & Education B2B",
          description: [
            "UI Design & Design System: High-fidelity interface design and interactive prototyping in Figma for B2B platforms (Healthcare and Education), implementing modular components, variants, Auto Layout, and detailed technical handoffs for engineering teams.",
            "Conversational Journeys & UX Writing: Design of complete conversational journeys (WhatsApp and Webchat) in FigJam/Figma, conducting flow mapping, decision trees, and brand-aligned UX Writing, integrating NLP/NLU flows via IBM Watson.",
            "Data-Driven Curation: Leadership of analytical journey curation routines based on conversation data and user behavior, refining bot intents, reducing fallbacks, and increasing self-service resolution.",
            "Measurable Impact in Higher Education: 20% reduction in human support handoff volume and 10% increase in user retention for a major Brazilian educational institution's core conversational experience.",
            "0 to 1 Product Design in Pharmacy Retail: Design and launch of a conversational customer support automation solution, achieving a 60% reduction in Average Handle Time (AHT reduced from 5 to 2 minutes).",
            "Governance & Delivery Predictability: Structuring a new design project documentation and handoff framework, accelerating stakeholder approvals and ensuring greater delivery predictability.",
          ],
          tags: [
            "UX/UI Design",
            "Design System",
            "UX Writing",
            "High-Fidelity UI",
            "Analytics & Curation",
            "IBM Watson NLU",
            "B2B SaaS",
          ],
        },
        {
          id: "amigu",
          company: "Instituto Amigu",
          role: "Product Designer",
          period: "12/2024 – 03/2025",
          badge: "Web Platform (SouAmiGU)",
          description: [
            "0 to 1 Web Platform Conception (SouAmiGU): End-to-end creation of a web-based hackathon management platform, designing comprehensive journeys for participants (registration, team formation, submission) and administrators (judging panels, evaluation, analytics).",
            "Discovery, Benchmarking & Information Architecture: Requirement research and benchmarking in FigJam to structure core value propositions, business rules, and intuitive navigation flows.",
            "High-Fidelity Prototyping & Design System: Flow mapping and interactive high-fidelity prototyping in Figma, plus creating the project's Design System to ensure visual consistency and scalability.",
            "Operational Bottleneck Resolution & Technical Feasibility: Centralizing the hackathon ecosystem into a unified digital workflow (eliminating spreadsheet fragmentation), delivering a documented prototype in a 4-month cycle with engineering feasibility validation.",
          ],
          tags: [
            "Product Design (0 to 1)",
            "Figma",
            "Prototyping",
            "UX Research",
            "Information Architecture",
            "Design System",
          ],
        },
        {
          id: "resolv-dev",
          company: "Resolv.AI (Resolv Tecnologia e Inovação)",
          role: "Software Development Assistant",
          period: "07/2023 – 03/2024",
          badge: "Chatbots & Low-code",
          description: [
            "Business Logic & Decision Trees: Parameterization and development of conversational flows in IBM Watson Assistant and Zenvia Bots, building complex decision trees with logical conditionals, context variables, regex, entities, and intents.",
            "Technical QA, Edge Cases & API Integrations: Flow testing (QA), debugging, and edge-case mapping to ensure operational stability and minimize fallbacks; supporting real-time API/Webhook integrations and JSON payload manipulation.",
            "Technical Bridge for Design & Promotion: Hands-on expertise with NLU and backend constraints that built the foundation to design technically feasible UX/UI solutions, resulting in direct promotion to UX Designer.",
          ],
          tags: [
            "IBM Watson Assistant",
            "Zenvia Bots",
            "Logic & Decision Trees",
            "QA & Debugging",
            "APIs / Webhooks",
            "JSON Payloads",
          ],
        },
        {
          id: "portohack",
          company: "PortoHack 2023",
          role: "UX & Tech Mentor",
          period: "2023",
          badge: "Port Sector",
          description: [
            "Technical Mentorship in Hackathon: Mentored multidisciplinary teams in a port sector innovation hackathon, guiding problem definition, value proposition structuring, user experience (UX), and agile team dynamics.",
          ],
          tags: [
            "Technical Mentorship",
            "Hackathon",
            "Design Thinking",
            "Open Innovation",
            "Agile",
          ],
        },
      ],
    },
    about: {
      badge: "About Me",
      title: "About Me",
      p1Line1: "Pleased to meet you! My name is ",
      p1Name: "Pedro Henrique Armada Nalis",
      p1Line2:
        ", I am a 22-year-old Product/UX Designer acting since 2023, driven by curiosity and passion for solving complex problems through design.",
      p2: "I hold a degree in Information Systems, where I discovered UX/UI Design during my academic journey. With an analytical and visual mindset, I realized design was where my full potential lay — while leveraging my programming background to make better design decisions and communicate seamlessly with development teams.",
      p3: "Beyond work, I love exploring diverse creative hobbies. In my free time, I enjoy playing bass guitar, reading books and comics, watching movies, and gaming. These activities inspire my creativity and refresh my perspective.",
      viewLinkedIn: "My LinkedIn",
      downloadResume: "Download CV",
      statsTitle: "By the Numbers",
      stats: [
        { val: "2+", desc: "years of UX/UI Design experience" },
        { val: "5+", desc: "projects delivered with measurable impact" },
        { val: "3", desc: "companies in distinct market sectors" },
        { val: "100%", desc: "data-driven and user-centered focus" },
      ],
    },
    contact: {
      badge: "Let's Work Together",
      titleLine1: "Have a project idea?",
      titleHighlight: "Let's talk!",
      subtitleLine1: "I'm available for freelance projects, team collaborations, and full-time opportunities.",
      subtitleLine2: "Send me an email at ph.armada.nalis@gmail.com or connect with me on LinkedIn to get in touch!",
      ctaButton: "Send me a message",
    },
    footer: {
      copyright: "© 2026 Pedro Armada. All rights reserved.",
    },
    scrollTop: "Back to top",
  },
};
