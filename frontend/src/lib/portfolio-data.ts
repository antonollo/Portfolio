import type {
  AboutContent,
  CaseStudy,
  FooterContent,
  HeroContent,
  NavItem,
  ProfileLinks,
  ToolItem,
} from "../types/portfolio";

export const PROFILE_LINKS: ProfileLinks = {
  brand: "ANTONOLLO",
  githubUrl: "https://github.com/antonollo",
  githubLabel: "ANTONOLLO",
  linkedinUrl: "https://www.linkedin.com/in/antonio-gabriel-0666972b6/",
  linkedinLabel: "ANTONIO GABRIEL",
  cvUrl: "../../public/Antonio_CV.pdf",
  cvLabel: "Currículo",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Intro", href: "#intro" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Sobre Mim", href: "#sobre-mim" },
  { label: "Ferramentas", href: "#ferramentas" },
  { label: "Contatos", href: "#contatos" },
];

export const HERO_CONTENT: HeroContent = {
  badge: "Engenharia de IA · Ciência de Dados",
  titleLead: "E AÍ, EU SOU",
  titleAccent: "ANTONIO!",
  description: [
    { text: "Desenvolvedor apaixonado por " },
    { text: "Inteligência Artificial, Engenharia de Software", bold: true },
    { text: " e " },
    { text: "Ciência de Dados", bold: true },
    { text: " para conectar tecnologia a pessoas." },
  ],
  primaryCta: {
    label: "Conhecer Projetos",
    href: "#case-studies",
  },
  secondaryCta: {
    label: "Conheça mais sobre mim",
    href: "#sobre-mim",
  },
  stackIcons: [
    { key: "python", label: "Python" },
    { key: "ollama", label: "Ollama" },
    { key: "scikit-learn", label: "Scikit-learn" },
    { key: "react", label: "React" },
    { key: "typescript", label: "TypeScript" },
    { key: "tailwindcss", label: "TailwindCSS" },
  ],
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "dialog-health-tech",
    title: "DIALOG · HEALTH TECH",
    subtitle: "Bolsista de Ciência de Dados e Inteligência Artificial",
    logoSrc: "/healthtech_logo.svg",
    logoAlt: "Logo Dialog Health Tech",
    tags: [
      "Machine Learning",
      "Ciência de Dados",
      "Health Tech",
      "Clustering",
      "Regressão",
    ],
    stackIcons: [
      { key: "python", label: "Python" },
      { key: "scikit-learn", label: "Scikit-learn" },
      { key: "pandas", label: "Pandas" },
    ],
    ctaLabel: "Ver Artigos de Pesquisa",
    href: "https://github.com/antonollo/dialog-researchs",
  },
  {
    id: "gestock",
    title: "GESTOCK",
    subtitle: "Sistema Inteligente para Gestão de Estoque",
    logoSrc: "/gestock_logo.svg",
    logoAlt: "Logo Gestock",
    tags: [
      "Engenharia de IA",
      "Ciência de Dados",
      "Time Series Forecasting",
      "Transformers",
    ],
    stackIcons: [
      { key: "python", label: "Python" },
      { key: "tensorflow", label: "TensorFlow" },
      { key: "scikit-learn", label: "Scikit-learn" },
    ],
    ctaLabel: "Conhecer o Gestock",
    href: "https://github.com/klissiadev/gestock",
  },
  {
    id: "tedi-controle-inscritos",
    title: "TEDI · CONTROLE DE INSCRITOS",
    subtitle: "Plataforma para Gerenciamento de Voluntários",
    logoSrc: "/tedi_logo.svg",
    logoAlt: "Logo TEDI Gestão de Voluntários",
    tags: [
      "Engenharia de Software",
      "Frontend",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
    ],
    stackIcons: [
      { key: "react", label: "React" },
      { key: "typescript", label: "TypeScript" },
      { key: "tailwindcss", label: "TailwindCSS" },
    ],
    ctaLabel: "Conhecer o TEDI",
    href: "https://github.com/CgB-system/EC45G---Certificadora-Da-Compet-ncia-1---C51-2026_02-",
  },
  {
    id: "algoritmos-geneticos-pcctp",
    title: "ALGORITMOS GENÉTICOS PARA PCCTP",
    subtitle: "Otimização Evolucionária para Problemas Combinatórios",
    // Sem logoSrc dedicado ainda: usa banner estilizado dentro da paleta 60-30-10
    logoAlt: "Identidade visual do projeto Algoritmos Genéticos para PCCTP",
    fallbackBadge: "COMPUTAÇÃO EVOLUCIONÁRIA",
    fallbackHeadline: "GA · PCCTP",
    fallbackSubline: "Meta-heurísticas & Otimização",
    tags: [
      "Algoritmos Genéticos",
      "Otimização Combinatória",
      "Inteligência Computacional",
      "Meta-heurísticas",
      "PCCTP",
    ],
    stackIcons: [{ key: "python", label: "Python" }],
    ctaLabel: "Ver Projeto",
    href: "https://github.com/antonollo/Algoritmos-Geneticos-para-PCCTP",
  },
];

export const ABOUT_CONTENT: AboutContent = {
  badge: "Trajetória & Valores",
  titleLead: "SOBRE",
  titleAccent: "MIM",
  portraitAlt: "Retrato de Antonio Gabriel (Antonollo)",
  portraitCaption: "Engenharia de Computação · UTFPR",
  portraitBadge: "6º / 8º",
  chapters: [
    {
      id: "about-origin",
      number: "01",
      title: "ORIGEM & FORMAÇÃO",
      segments: [
        { text: "Natural de " },
        { text: "Manaus (AM)", bold: true },
        { text: ", iniciei minha graduação em " },
        { text: "Engenharia de Computação", bold: true },
        { text: " na " },
        { text: "Universidade do Estado do Amazonas (UEA)", bold: true },
        { text: " e hoje curso o " },
        { text: "6º período", bold: true },
        { text: " (de 8) na " },
        { text: "UTFPR", bold: true },
        {
          text: ", carregando comigo a bagagem e a adaptabilidade dessa transição.",
        },
      ],
      tags: ["Manaus, AM", "UEA → UTFPR", "Engenharia de Computação"],
    },
    {
      id: "about-foundations",
      number: "02",
      title: "DO HARDWARE AO PRODUTO",
      segments: [
        {
          text: "Ao longo do curso, busquei experimentar diferentes camadas da computação — desde ",
        },
        { text: "ferramentas de baixo nível próximas ao hardware", bold: true },
        { text: " até a " },
        { text: "engenharia de software e interfaces modernas", bold: true },
        { text: ", entendendo como cada peça conversa no sistema todo." },
      ],
      tags: ["Baixo Nível", "Arquitetura de Software", "Frontend & Web"],
    },
    {
      id: "about-ai",
      number: "03",
      title: "IA, DADOS & IMPACTO REAL",
      segments: [
        { text: "Hoje direciono minha energia para " },
        { text: "Inteligência Artificial", bold: true },
        { text: " e " },
        { text: "Ciência de Dados", bold: true },
        { text: ", trabalhando com " },
        {
          text: "Large Language Models, Deep Learning, séries temporais e otimização",
          bold: true,
        },
        { text: " aplicados à resolução de problemas concretos." },
      ],
      tags: ["LLMs & Deep Learning", "Ciência de Dados", "Otimização"],
    },
    {
      id: "about-values",
      number: "04",
      title: "VALORES & TRABALHO",
      segments: [
        { text: "Acima de tudo, sou " },
        { text: "cristão", bold: true },
        {
          text: ", gosto de pensar que as coisas que eu faço servem a um propósito. Ah, e adoro acompanhar ",
        },
        { text: "Surfing", bold: true },
        {
          text: ", esporte que, para mim, não representa o radicalismo, mas representa ",
        },
        { text: "liberdade, paz", bold: true },
        { text: ". No dia a dia, o que mais me motiva é " },
        {
          text: "trabalhar ao lado de pessoas curiosas e criativas",
          bold: true,
        },
        {
          text: ", que compartilham a mesma vontade genuína de aprender e ",
        },
        { text: "fazer a diferença", bold: true },
        { text: "." },
      ],
      tags: ["Fé Cristã", "Surfing", "Trabalho em Equipe"],
    },
  ],
};

export const TOOLS_LIST: ToolItem[] = [
  { id: "python", name: "Python", icon: "python", category: "IA & Dados" },
  {
    id: "pytorch",
    name: "PyTorch",
    icon: "pytorch",
    category: "Deep Learning",
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    icon: "tensorflow",
    category: "Deep Learning",
  },
  {
    id: "scikit-learn",
    name: "Scikit-learn",
    icon: "scikit-learn",
    category: "Machine Learning",
  },
  { id: "ollama", name: "Ollama", icon: "ollama", category: "LLMs" },
  {
    id: "pandas",
    name: "Pandas",
    icon: "pandas",
    category: "Ciência de Dados",
  },
  { id: "react", name: "React", icon: "react", category: "Frontend" },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "typescript",
    category: "Engenharia Web",
  },
  {
    id: "tailwindcss",
    name: "TailwindCSS",
    icon: "tailwindcss",
    category: "Design System",
  },
  { id: "nodejs", name: "Node.js", icon: "nodejs", category: "Backend" },
  { id: "git", name: "Git", icon: "git", category: "Versionamento" },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "postgresql",
    category: "Banco de Dados",
  },
  {
    id: "shadcn/ui",
    name: "shadcn/ui",
    icon: "shadcn/ui",
    category: "Estilização",
  },
  {
    id: "n8n",
    name: "n8n",
    icon: "n8n",
    category: "Automação",
  },
];

export const FOOTER_CONTENT: FooterContent = {
  heading: "E AÍ, VAMOS MANTER CONTATO?",
  copyrightLeft: "© ANTONOLLO, 2026",
  copyrightRight: "TODOS OS DIREITOS RESERVADOS.",
};
