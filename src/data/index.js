export const personal = {
  email: "gustavobritosr@gmail.com",
  github: "https://github.com/gustavoszn",
  linkedin: "https://linkedin.com/in/gustavo-brito-r-de-sousa-29b03131b/",
  location: "Barueri / Alphaville — SP",
  education: "Sistemas de Informação — Mackenzie",
  about: "Sou profissional de tecnologia e estudante de Sistemas de Informação no Mackenzie, com formação técnica em Informática pela FIEB. Hoje atuo no suporte de sistemas para o varejo, investigando incidentes em ambientes Linux, bancos de dados e integrações fiscais. Em paralelo, construo projetos web e aprofundo minha formação em desenvolvimento Full Stack e Back-end.",
};

export const experience = {
  company: "Visual Mix Tecnologia para o Varejo", role: "Support System Analyst", period: "2023 — atual",
  description: "Integro uma equipe dedicada exclusivamente à operação do Atacadão, trabalhando na sustentação técnica de sistemas usados em um ambiente crítico de varejo.",
  activities: ["Diagnóstico de incidentes em ambientes Linux", "Análise de comunicação entre PDV e SEFAZ", "Investigação de NFC-e, cupons e notas fiscais", "Consultas e análises de dados com SQL e DBeaver", "Coleta de logs, execução e acompanhamento de scripts", "Troubleshooting e suporte remoto a sistemas em produção"],
  techs: ["Linux", "Docker", "SQL", "DBeaver", "Logs LV / LF", "PDV", "NFC-e", "SEFAZ", "Troubleshooting"],
};

export const technologies = [
  { category: "Frontend", level: "PROJETOS", items: ["React", "JavaScript", "HTML5", "CSS3", "Vite", "Responsividade"] },
  { category: "Back-end", level: "EM EVOLUÇÃO", items: ["APIs REST", "Node.js", "Python", "Java", "Engenharia de Software"] },
  { category: "Dados", level: "PRÁTICA", items: ["SQL", "DBeaver", "Modelagem", "Banco Relacional", "Power BI"] },
  { category: "Infraestrutura", level: "PRÁTICA", items: ["Linux", "Docker", "Shell", "Logs", "TCP/IP", "Troubleshooting"] },
  { category: "Desenvolvimento", level: "ROTINA", items: ["Git", "GitHub", "VS Code", "Git Flow", "GitHub Actions"] },
];

const projectDeployments = {
  2: "https://mackenzie-portal-gustavoszns-projects.vercel.app",
  3: "https://psi-agenda-three.vercel.app",
};
const projectScreenshots = {
  2: "/projects/mackenzie-portal.png",
  3: "/projects/vivamente.png",
};
const projectRepositories = {
  1: "https://github.com/gustavoszn/street-house",
};

export const projects = [
  { id: 1, name: "Street House", slug: "street-house", mark: "SH", year: "2023", theme: "amber", category: "Plataforma Web / Full Stack", github: null, description: "Plataforma que conecta artistas e organizadores de eventos por meio de perfis, portfólios, comunicação e gestão de agenda.", challenge: "Estruturar uma experiência coerente para dois perfis de usuário com jornadas, objetivos e permissões diferentes.", solution: "Arquitetura orientada por requisitos, casos de uso, prototipação e modelagem de dados antes da implementação.", features: ["Cadastro e autenticação", "Perfis e portfólio artístico", "Pesquisa de artistas", "Comunicação e agenda", "Requisitos, DER e casos de uso"], techs: ["React", "JavaScript", "Vite", "CSS", "APIs"] },
  { id: 2, name: "Portal Acadêmico", slug: "mackenzie-portal", mark: "M", year: "2026", theme: "red", category: "UX/UI + Front-end", github: "https://github.com/gustavoszn/mackenzie-portal", disclaimer: "Projeto conceitual e não oficial.", description: "Redesign do portal do aluno com foco em hierarquia de informação, acessibilidade e uma experiência realmente responsiva.", challenge: "Adaptar informações densas — especialmente o quadro de horários — para telas pequenas sem perder contexto.", solution: "Visualização semanal no desktop e experiência reorganizada por dia no mobile, usando componentes responsivos.", features: ["Layout adaptativo", "Agenda semanal e diária", "Componentização", "Navegação acessível", "Identidade institucional reinterpretada"], techs: ["React", "JavaScript", "Vite", "CSS"] },
  { id: 3, name: "VivaMente", slug: "vivamente", mark: "VM", year: "2026", theme: "mint", category: "Sistema de Gestão", github: "https://github.com/gustavoszn/-psi-agenda", description: "Sistema para clínicas de psicologia que organiza pacientes, consultas e rotinas administrativas em uma interface acolhedora.", challenge: "Simplificar processos administrativos sem perder a sensibilidade e a clareza necessárias ao contexto clínico.", solution: "Fluxos objetivos, dados organizados e identidade própria que equilibra confiança, privacidade e acolhimento.", features: ["Gestão de pacientes", "Agenda de consultas", "Interface administrativa", "Organização de informações", "Autenticação e banco de dados"], techs: ["React", "JavaScript", "Supabase", "CSS", "Vercel"] },
].map((project) => ({
  ...project,
  demo: projectDeployments[project.id] ?? null,
  image: projectScreenshots[project.id] ?? null,
  github: projectRepositories[project.id] ?? project.github,
}));

export const education = [
  { institution: "Universidade Presbiteriana Mackenzie", course: "Sistemas de Informação", period: "2024 — atual", detail: "Campus Alphaville · Cursando" },
  { institution: "FIEB", course: "Técnico em Informática", period: "2021 — 2023", detail: "Formação técnica concluída" },
];
