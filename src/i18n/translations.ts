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
        { val: "2+", label: "Anos exp." },
        { val: "3+", label: "Projetos" },
        { val: "3", label: "Empresas" },
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
          role: "UX Designer Pleno",
          period: "2025 – 2026",
          badge: "Seguros & IA Generativa",
          isCurrent: true,
          description: [
            "Atuação na evolução de produtos digitais e jornadas conversacionais, em parceria com equipes de Produto, Design e Tecnologia para uma grande empresa do segmento de Seguros.",
            "Definição e acompanhamento de métricas de produto e experiência, utilizando dados de comportamento para orientar decisões e evoluções de jornadas digitais.",
            "Estruturação de dashboards que apoiaram decisões de evolução do produto e monitoramento contínuo da experiência do usuário.",
            "Condução de análises de comportamento do usuário para identificar oportunidades de melhoria e apoiar decisões de evolução do produto.",
            "Contribuição na concepção de agentes de IA, definindo fluxos, regras de decisão e estratégias de interação apoiadas por IA Generativa.",
            "Articulação com múltiplos stakeholders para definição de soluções digitais alinhadas aos objetivos de negócio.",
            "Atuação em iniciativas de inovação utilizando Design Thinking, metodologias ágeis (Scrum) e ferramentas colaborativas para construção de soluções escaláveis.",
          ],
          tags: [
            "Product Design",
            "UX Research",
            "Product Metrics",
            "Dashboards",
            "IA Generativa",
            "Agentes de IA",
            "Design Conversacional",
            "Scrum",
          ],
        },
        {
          id: "resolv-jr",
          company: "Resolv Tecnologia e Inovação LTDA",
          role: "UX/UI Designer Junior",
          period: "2024 – 2025",
          badge: "Saúde & Educação B2B",
          description: [
            "Atuação na evolução contínua de produtos digitais escaláveis utilizados por clientes corporativos de diferentes segmentos, como saúde e educação, lado a lado com os stakeholders.",
            "Desenvolvimento de interfaces de alta fidelidade.",
            "Estruturação de jornadas digitais, aplicando UX Writing para aumentar a clareza das interações e reduzir ambiguidades na experiência.",
            "Definição de fluxos de usuário.",
            "Contribuição na concepção de testes de usabilidade para identificar problemas de uso e gerar insights para evolução do produto.",
            "Análise de comportamento para direcionamento de melhorias.",
            "Colaboração ativa entre Produto, Design e Desenvolvimento.",
          ],
          tags: [
            "UX/UI Design",
            "UX Writing",
            "High-Fidelity UI",
            "User Flows",
            "Testes de Usabilidade",
            "B2B Corporativo",
          ],
        },
        {
          id: "amigu",
          company: "Instituto Amigu",
          role: "UX/UI Designer Junior",
          period: "2025",
          badge: "Plataforma SouAmiGU",
          description: [
            "Participação no desenvolvimento da plataforma SouAmiGU, voltada para organização e inscrição de hackathons.",
            "Estruturação do fluxo de negócio, definição de regras de funcionamento, fluxos de usuário e jornadas digitais.",
            "Desenvolvimento de protótipos de alta fidelidade utilizando Figma e colaboração na definição da experiência do usuário e arquitetura funcional da plataforma.",
          ],
          tags: [
            "UX/UI Design",
            "Figma",
            "Prototipagem",
            "User Flows",
            "Arquitetura Funcional",
            "Design System",
          ],
        },
        {
          id: "portohack",
          company: "PortoHack 2023",
          role: "Mentor de UX & Tecnologia",
          period: "2023",
          badge: "Setor Portuário",
          description: [
            "Atuação como mentor em hackathon focado em desafios do setor portuário, apoiando participantes na resolução de problemas e definição de soluções digitais.",
            "Orientação em estruturação de ideias, tecnologia e experiência do usuário, com colaboração em dinâmicas multidisciplinares de inovação e desenvolvimento ágil.",
          ],
          tags: [
            "Mentoria",
            "Hackathon",
            "Design Thinking",
            "Inovação Aberta",
            "Desenvolvimento Ágil",
          ],
        },
        {
          id: "resolv-dev",
          company: "Resolv Tecnologia e Inovação LTDA",
          role: "Assistente de Desenvolvimento",
          period: "2023 – 2024",
          badge: "Chatbots & Low-code",
          description: [
            "Apoio no desenvolvimento e manutenção de chatbots utilizando plataformas low-code/no-code.",
            "Participação na estruturação de melhorias e automações em soluções conversacionais.",
            "Colaboração com equipes técnicas e de produto em iniciativas de experiência do usuário.",
            "Suporte na implementação e evolução de fluxos digitais.",
          ],
          tags: [
            "Chatbots",
            "Low-code / No-code",
            "Zenvia NLU",
            "IBM Watson",
            "Automação",
            "UX Conversacional",
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
      subtitleLine2: "Me mande uma mensagem para nos conhecermos melhor!",
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
        { val: "2+", label: "Yrs Exp." },
        { val: "3+", label: "Projects" },
        { val: "3", label: "Companies" },
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
          role: "Mid-level UX Designer",
          period: "2025 – 2026",
          badge: "Insurance & GenAI",
          isCurrent: true,
          description: [
            "Evolution of digital products and conversational journeys in collaboration with Product, Design, and Engineering teams for a major Insurance enterprise.",
            "Definition and monitoring of product & experience metrics, leveraging behavioral data to drive product decisions and journey evolutions.",
            "Structured analytics dashboards to support product decision-making and continuous user experience monitoring.",
            "Conducted user behavior analysis to identify optimization opportunities and guide feature enhancements.",
            "Contributed to AI agent design, defining conversational flows, decision logic, and interaction strategies powered by Generative AI.",
            "Stakeholder alignment to define scalable digital solutions aligned with core business objectives.",
            "Product innovation initiatives using Design Thinking, Scrum methodologies, and collaborative workshops.",
          ],
          tags: [
            "Product Design",
            "UX Research",
            "Product Metrics",
            "Dashboards",
            "Generative AI",
            "AI Agents",
            "Conversational Design",
            "Scrum",
          ],
        },
        {
          id: "resolv-jr",
          company: "Resolv Tecnologia e Inovação LTDA",
          role: "Junior UX/UI Designer",
          period: "2024 – 2025",
          badge: "Health & Edu B2B",
          description: [
            "Continuous evolution of scalable B2B digital products for corporate clients in Healthcare and Education sectors alongside key stakeholders.",
            "High-fidelity UI design and interactive prototyping.",
            "Digital journey structuring applying UX Writing to enhance interaction clarity and eliminate UX ambiguity.",
            "User flow definition and information architecture.",
            "Usability testing design and execution to identify friction points and derive actionable product insights.",
            "Behavioral analytics for data-driven product improvement.",
            "Active cross-functional collaboration between Product, Design, and Development.",
          ],
          tags: [
            "UX/UI Design",
            "UX Writing",
            "High-Fidelity UI",
            "User Flows",
            "Usability Testing",
            "B2B SaaS",
          ],
        },
        {
          id: "amigu",
          company: "Instituto Amigu",
          role: "Junior UX/UI Designer",
          period: "2025",
          badge: "SouAmiGU Platform",
          description: [
            "Participated in building the SouAmiGU platform for hackathon organization and registration.",
            "Structured business logic, operational rules, user flows, and digital journeys.",
            "Developed high-fidelity Figma prototypes and collaborated on UX definition and platform functional architecture.",
          ],
          tags: [
            "UX/UI Design",
            "Figma",
            "Prototyping",
            "User Flows",
            "Functional Architecture",
            "Design System",
          ],
        },
        {
          id: "portohack",
          company: "PortoHack 2023",
          role: "UX & Tech Mentor",
          period: "2023",
          badge: "Port Sector",
          description: [
            "Mentored teams at a hackathon focused on innovation challenges in the port and logistics sector.",
            "Technical guidance in problem-solving, product validation, technology stack, and user experience.",
            "Guided teams in pitch structuring, rapid prototyping, and agile innovation dynamics.",
          ],
          tags: [
            "Mentorship",
            "Hackathon",
            "Design Thinking",
            "Open Innovation",
            "Agile",
          ],
        },
        {
          id: "resolv-dev",
          company: "Resolv Tecnologia e Inovação LTDA",
          role: "Development Assistant",
          period: "2023 – 2024",
          badge: "Chatbots & Low-code",
          description: [
            "Development and maintenance support for chatbots built on low-code/no-code platforms.",
            "Structuring automation improvements and conversational flows.",
            "Collaboration with engineering and product teams on user experience initiatives.",
            "Support in digital flow implementation and continuous deployment.",
          ],
          tags: [
            "Chatbots",
            "Low-code / No-code",
            "Zenvia NLU",
            "IBM Watson",
            "Automation",
            "Conversational UX",
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
      subtitleLine2: "Send me a message to get in touch!",
      ctaButton: "Send me a message",
    },
    footer: {
      copyright: "© 2026 Pedro Armada. All rights reserved.",
    },
    scrollTop: "Back to top",
  },
};
