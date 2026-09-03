export const personal = {
  name: "Gustavo Brito Rodrigues de Sousa",
  role: "Desenvolvedor Full Stack",
  subtitle: "Desenvolvedor apaixonado por tecnologia, desenvolvimento de software e resolução de problemas através do código.",
  impact: "Transformando ideias em soluções digitais com código, criatividade e aprendizado contínuo.",
  location: "Barueri - SP",
  education: "Sistemas de Informação - Mackenzie",
  availability: "Disponível para oportunidades",
  email: "gustavobritosr@gmail.com",
  phone: "(11) 99999-9999",
  github: "https://github.com/gustavoszn",
  linkedin: "https://linkedin.com/in/gustavo-brito-r-de-sousa-29b03131b/",
  whatsapp: "https://wa.me/5511999999999",
};

export const about = {
  who: "Sou um desenvolvedor apaixonado por tecnologia e desenvolvimento de software. Meu interesse pela programação surgiu durante o curso Técnico em Informática, onde tive uma formação voltada para desenvolvimento de software, abrangendo lógica de programação, desenvolvimento web, desenvolvimento mobile e construção de aplicações completas. Desde então, venho aprimorando continuamente meus conhecimentos por meio de projetos pessoais, estudos e experiência profissional, sempre buscando criar soluções eficientes, escaláveis e bem estruturadas.",
  philosophy: "Acredito que tecnologia não é apenas escrever código, mas resolver problemas de forma inteligente, eficiente e sustentável.",
  goal: "Atualmente busco oportunidades como Desenvolvedor Full Stack para colocar em prática meus conhecimentos, aprender com profissionais experientes e participar da construção de produtos que gerem impacto real.",
};

export const journey = [
  {
    id: 1,
    period: "2021 — 2023",
    title: "Ensino Médio Técnico",
    institution: "FIEB",
    description: "Curso Técnico em Informática integrado ao Ensino Médio, com foco em desenvolvimento de software.",
    highlights: ["Desenvolvimento Web", "Desenvolvimento Mobile", "Lógica de Programação", "Engenharia de Software", "Banco de Dados"],
    type: "education",
  },
  {
    id: 2,
    period: "2022 — 2023",
    title: "Projetos Acadêmicos",
    institution: "FIEB",
    description: "Participação em projetos utilizando tecnologias modernas.",
    highlights: ["Street House"],
    type: "project",
  },
  {
    id: 3,
    period: "2023 — Atual",
    title: "Mercado de Trabalho",
    institution: "Visual Mix Tecnologia para o Varejo",
    description: "Atuação na área de tecnologia com suporte técnico e banco de dados.",
    highlights: ["Suporte Técnico", "Banco de Dados", "SQL", "Análise de Problemas", "Investigação de Incidentes"],
    type: "work",
  },
  {
    id: 4,
    period: "2024 — Atual",
    title: "Universidade",
    institution: "Universidade Presbiteriana Mackenzie",
    description: "Atualmente cursando Sistemas de Informação.",
    highlights: ["Sistemas de Informação"],
    type: "education",
  },
];

export const technologies = {
  frontend: ["HTML5", "CSS3", "JavaScript", "React", "Flutter"],
  backend: ["Node.js", "Express", "APIs REST"],
  database: ["SQL Server", "Oracle", "SQL", "PostgreSQL"],
  tools: ["Git", "GitHub", "VS Code", "DBeaver", "Postman", "Figma"],
  methodologies: ["Scrum", "Kanban", "Versionamento Git"],
};

export const skills = [
  { name: "HTML", level: 5, category: "Frontend" },
  { name: "CSS", level: 5, category: "Frontend" },
  { name: "JavaScript", level: 4, category: "Frontend" },
  { name: "React", level: 4, category: "Frontend" },
  { name: "Flutter", level: 3, category: "Frontend" },
  { name: "Node.js", level: 3, category: "Backend" },
  { name: "Express", level: 3, category: "Backend" },
  { name: "REST API", level: 4, category: "Backend" },
  { name: "SQL", level: 4, category: "Database" },
  { name: "SQL Server", level: 4, category: "Database" },
  { name: "Oracle", level: 4, category: "Database" },
  { name: "Git", level: 4, category: "Tools" },
  { name: "GitHub", level: 4, category: "Tools" },
  { name: "VS Code", level: 5, category: "Tools" },
  { name: "Postman", level: 4, category: "Tools" },
];

export const experience = [
  {
    company: "Visual Mix Tecnologia para o Varejo",
    role: "Suporte Técnico",
    period: "2023 — Atual",
    activities: [
      "Atendimento técnico aos clientes",
      "Investigação de incidentes",
      "Consultas SQL",
      "Banco de Dados Oracle",
      "Banco de Dados SQL Server",
      "Validação de NF-e e NFC-e",
      "Integração entre sistemas",
      "Testes de funcionalidades",
      "Análise de logs",
      "Correção de inconsistências",
      "Geração de relatórios",
      "Comunicação com equipes internas",
    ],
    techs: ["Oracle", "SQL Server", "SQL", "PostgreSQL", "Consinco", "XML", "APIs", "Sistemas ERP"],
  },
];

export const education = [
  {
    institution: "Universidade Presbiteriana Mackenzie",
    course: "Sistemas de Informação",
    period: "2024 — Atual",
    type: "Graduação",
  },
  {
    institution: "FIEB",
    course: "Técnico em Informática Integrado ao Ensino Médio",
    period: "2021 — 2023",
    type: "Técnico",
  },
];

export const projects = [
  {
    id: 1,
    name: "Street House",
    description: "Plataforma desenvolvida para conectar artistas e organizadores de eventos culturais.",
    objective: "Criar um ecossistema digital que facilite a conexão entre artistas independentes e organizadores de eventos, democratizando o acesso à cultura.",
    problem: "Artistas independentes tinham dificuldade em encontrar espaços e oportunidades para se apresentar, enquanto organizadores não tinham uma plataforma centralizada para descobrir talentos.",
    solution: "Desenvolvimento de uma plataforma web e mobile com sistema de perfis, busca avançada, gestão de eventos e comunicação integrada entre artistas e organizadores.",
    features: ["Login e Cadastro", "Pesquisa avançada", "Perfil de artista", "Gestão de eventos", "Responsividade total"],
    techs: ["React", "Flutter", "SQL Server", "JavaScript", "Node.js"],
    architecture: "Arquitetura cliente-servidor com API REST, frontend React para web, Flutter para mobile e SQL Server como banco de dados.",
    challenges: ["Sincronização entre plataformas web e mobile", "Design de UX para dois perfis distintos de usuário", "Modelagem do banco de dados para relacionamentos complexos"],
    learnings: ["Desenvolvimento multiplataforma", "Arquitetura de APIs REST", "Gestão de projeto em equipe com metodologia ágil"],
    result: "Plataforma funcional com sistema completo de autenticação, perfis e gestão de eventos.",
    github: "https://github.com/gustavobrito/street-house",
    demo: null,
    featured: true,
    image: null,
  },
];

export const certificates = [
  "JavaScript",
  "React",
  "Git e GitHub",
  "SQL",
  "Node.js",
];

export const stats = [
  { label: "Projetos desenvolvidos", value: "5+" },
  { label: "Tecnologias utilizadas", value: "15+" },
  { label: "Repositórios públicos", value: "10+" },
  { label: "Anos estudando", value: "3+" },
];

export const studying = ["Java", "Spring Boot", "TypeScript", "Docker", "Clean Architecture", "Testes Automatizados", "Design Patterns"];

export const hardSkills = [
  "Desenvolvimento Web", "Desenvolvimento Mobile", "Desenvolvimento Full Stack",
  "APIs REST", "Banco de Dados", "SQL", "Git", "React", "Node.js", "Flutter",
];

export const softSkills = [
  "Comunicação", "Trabalho em equipe", "Organização", "Resolução de problemas",
  "Aprendizado contínuo", "Pensamento analítico", "Adaptabilidade", "Proatividade",
];

export const differentials = [
  "Facilidade para aprender novas tecnologias",
  "Boa capacidade analítica",
  "Experiência com atendimento ao cliente",
  "Experiência com investigação de problemas",
  "Conhecimento em banco de dados",
  "Perfil colaborativo",
  "Interesse constante por novas tecnologias",
];

export const achievements = [
  { medal: "🥇", title: "Medalha de Ouro", event: "Olimpíada Brasileira de Astronomia e Astronáutica (OBA)" },
  { medal: "🥈", title: "Medalha de Prata", event: "Olimpíada Brasileira de Astronomia e Astronáutica (OBA)" },
  { medal: "🥈", title: "Medalha de Prata", event: "Olimpíada Brasileira do Saber (OBS)" },
];

export const faq = [
  { q: "Quais tecnologias você utiliza?", a: "Trabalho principalmente com React, Node.js, JavaScript, SQL Server e Oracle. No mobile utilizo Flutter. Estou expandindo para Java, Spring Boot e TypeScript." },
  { q: "Está disponível para trabalho remoto?", a: "Sim, estou disponível para trabalho remoto, híbrido ou presencial na região de Barueri/SP e Grande São Paulo." },
  { q: "Aceita projetos freelance?", a: "Sim, estou aberto a projetos freelance. Entre em contato para conversarmos sobre o escopo e viabilidade." },
  { q: "Qual seu foco atualmente?", a: "Estou focado em evoluir como Desenvolvedor Full Stack, aprofundando conhecimentos em arquitetura de software, boas práticas e novas tecnologias como Java e Spring Boot." },
  { q: "Como posso entrar em contato?", a: "Pelo formulário nesta página, por e-mail, LinkedIn ou WhatsApp. Respondo em até 24 horas." },
];
