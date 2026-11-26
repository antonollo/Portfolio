import type {
  AboutContent,
  CaseStudy,
  FooterContent,
  HeroContent,
  NavItem,
  ProfileLinks,
  ToolItem,
} from '../types/portfolio'

export const PROFILE_LINKS: ProfileLinks = {
  brand: 'ANTONOLLO',
  githubUrl: 'https://github.com/antonollo',
  githubLabel: 'ANTONOLLO',
  linkedinUrl: 'https://www.linkedin.com/in/antonio-gabriel-0666972b6/',
  linkedinLabel: 'ANTONIO GABRIEL',
  // URL externa configurável para consulta/download do currículo
  cvUrl: 'https://www.linkedin.com/in/antonio-gabriel-0666972b6/',
  cvLabel: 'Currículo',
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Intro', href: '#intro' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Sobre Mim', href: '#sobre-mim' },
  { label: 'Ferramentas', href: '#ferramentas' },
  { label: 'Contatos', href: '#contatos' },
]

export const HERO_CONTENT: HeroContent = {
  badge: 'Engenharia de IA · Ciência de Dados',
  titleLead: 'E AÍ, EU SOU',
  titleAccent: 'ANTONIO!',
  description: [
    { text: 'Desenvolvedor apaixonado por ' },
    { text: 'Inteligência Artificial, Engenharia de Software', bold: true },
    { text: ' e ' },
    { text: 'Ciência de Dados', bold: true },
    { text: ' para conectar tecnologia a pessoas.' },
  ],
  primaryCta: {
    label: 'Conhecer Projetos',
    href: '#case-studies',
  },
  secondaryCta: {
    label: 'Conheça mais sobre mim',
    href: '#sobre-mim',
  },
  stackIcons: [
    { key: 'python', label: 'Python' },
    { key: 'ollama', label: 'Ollama' },
    { key: 'scikit-learn', label: 'Scikit-learn' },
    { key: 'react', label: 'React' },
    { key: 'typescript', label: 'TypeScript' },
    { key: 'tailwindcss', label: 'TailwindCSS' },
  ],
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'dialog-health-tech',
    title: 'DIALOG · HEALTH TECH',
    subtitle: 'Bolsista de Ciência de Dados e Inteligência Artificial',
    logoSrc: '/healthtech_logo.svg',
    logoAlt: 'Logo Dialog Health Tech',
    tags: [
      'Machine Learning',
      'Ciência de Dados',
      'Health Tech',
      'Clustering',
      'Regressão',
    ],
    stackIcons: [
      { key: 'python', label: 'Python' },
      { key: 'scikit-learn', label: 'Scikit-learn' },
      { key: 'pandas', label: 'Pandas' },
    ],
    ctaLabel: 'Ver Artigos de Pesquisa',
    href: 'https://github.com/antonollo/dialog-researchs',
  },
  {
    id: 'gestock',
    title: 'GESTOCK',
    subtitle: 'Sistema Inteligente para Gestão de Estoque',
    logoSrc: '/gestock_logo.svg',
    logoAlt: 'Logo Gestock',
    tags: [
      'Engenharia de IA',
      'Ciência de Dados',
      'Time Series Forecasting',
      'Transformers',
    ],
    stackIcons: [
      { key: 'python', label: 'Python' },
      { key: 'tensorflow', label: 'TensorFlow' },
      { key: 'scikit-learn', label: 'Scikit-learn' },
    ],
    ctaLabel: 'Conhecer o Gestock',
    href: 'https://github.com/klissiadev/gestock',
  },
  {
    id: 'tedi-controle-inscritos',
    title: 'TEDI · CONTROLE DE INSCRITOS',
    subtitle: 'Plataforma para Gerenciamento de Voluntários',
    logoSrc: '/tedi_logo.svg',
    logoAlt: 'Logo TEDI Gestão de Voluntários',
    tags: [
      'Engenharia de Software',
      'Frontend',
      'TypeScript',
      'TailwindCSS',
      'shadcn/ui',
    ],
    stackIcons: [
      { key: 'react', label: 'React' },
      { key: 'typescript', label: 'TypeScript' },
      { key: 'tailwindcss', label: 'TailwindCSS' },
    ],
    ctaLabel: 'Conhecer o TEDI',
    href: 'https://github.com/CgB-system/EC45G---Certificadora-Da-Compet-ncia-1---C51-2026_02-',
  },
  {
    id: 'algoritmos-geneticos-pcctp',
    title: 'ALGORITMOS GENÉTICOS PARA PCCTP',
    subtitle: 'Otimização Evolucionária para Problemas Combinatórios',
    // Sem logoSrc dedicado ainda: usa banner estilizado dentro da paleta 60-30-10
    logoAlt: 'Identidade visual do projeto Algoritmos Genéticos para PCCTP',
    fallbackBadge: 'COMPUTAÇÃO EVOLUCIONÁRIA',
    fallbackHeadline: 'GA · PCCTP',
    fallbackSubline: 'Meta-heurísticas & Otimização',
    tags: [
      'Algoritmos Genéticos',
      'Otimização Combinatória',
      'Inteligência Computacional',
      'Meta-heurísticas',
      'PCCTP',
    ],
    stackIcons: [
      { key: 'python', label: 'Python' },
    ],
    ctaLabel: 'Ver Projeto',
    href: 'https://github.com/antonollo/Algoritmos-Geneticos-para-PCCTP',
  },
]

export const ABOUT_CONTENT: AboutContent = {
  title: 'SOBRE MIM',
  portraitAlt: 'Retrato de Antonio Gabriel (Antonollo)',
  paragraphs: [
    {
      id: 'about-intro',
      variant: 'body',
      segments: [
        { text: 'Sou graduando em ' },
        { text: 'Engenharia de Computação', bold: true },
        { text: ' pela ' },
        { text: 'UTFPR', bold: true },
        {
          text: ', atualmente estando no 6º período (do total de 8) da graduação. Vim transferido da ',
        },
        { text: 'Universidade do Estado do Amazonas', bold: true },
        { text: ' pelo mesmo curso.' },
      ],
    },
    {
      id: 'about-origin-callout',
      variant: 'callout',
      segments: [{ text: 'Sim, sou amazonense! Com orgulho!', bold: true }],
    },
    {
      id: 'about-experience',
      variant: 'body',
      segments: [
        {
          text: 'Durante boa parte da minha graduação, pude experimentar e conhecer vários paradigmas do meu próprio curso, desde ',
        },
        { text: 'ferramentas de baixo nível para hardwares', bold: true },
        { text: ', até ' },
        {
          text: 'desenvolvimento de softwares com serviços de Large Language Models e outros modelos de Deep Learning',
          bold: true,
        },
        { text: ' aplicados à resolução real de problemas reais.' },
      ],
    },
    // TODO: Placeholders editáveis da biografia — substitua ou expanda os blocos abaixo conforme desejar
    {
      id: 'about-placeholder-1',
      variant: 'placeholder',
      segments: [{ text: 'TENHO MUITO A ESCREVER AINDAAAAAAAAAAAAAAAAAAAA' }],
    },
    {
      id: 'about-placeholder-2',
      variant: 'placeholder',
      segments: [{ text: 'TENHO MUITO A ESCREVER AINDAAAAAAAAAAAAAAAAAAAA' }],
    },
    {
      id: 'about-placeholder-3',
      variant: 'placeholder',
      segments: [{ text: 'TENHO MUITO A ESCREVER AINDAAAAAAAAAAAAAAAAAAAA' }],
    },
    {
      id: 'about-placeholder-4',
      variant: 'placeholder',
      segments: [{ text: 'TENHO MUITO A ESCREVER AINDAAAAAAAAAAAAAAAAAAAA' }],
    },
  ],
}

export const TOOLS_LIST: ToolItem[] = [
  { id: 'python', name: 'Python', icon: 'python', category: 'IA & Dados' },
  { id: 'pytorch', name: 'PyTorch', icon: 'pytorch', category: 'Deep Learning' },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    icon: 'tensorflow',
    category: 'Deep Learning',
  },
  {
    id: 'scikit-learn',
    name: 'Scikit-learn',
    icon: 'scikit-learn',
    category: 'Machine Learning',
  },
  { id: 'ollama', name: 'Ollama', icon: 'ollama', category: 'LLMs' },
  { id: 'pandas', name: 'Pandas', icon: 'pandas', category: 'Ciência de Dados' },
  { id: 'react', name: 'React', icon: 'react', category: 'Frontend' },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: 'typescript',
    category: 'Engenharia Web',
  },
  {
    id: 'tailwindcss',
    name: 'TailwindCSS',
    icon: 'tailwindcss',
    category: 'Design System',
  },
  { id: 'nodejs', name: 'Node.js', icon: 'nodejs', category: 'Backend' },
  { id: 'git', name: 'Git', icon: 'git', category: 'Versionamento' },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: 'postgresql',
    category: 'Banco de Dados',
  },
  {
    id: 'shadcn/ui',
    name: 'shadcn/ui',
    icon: 'shadcn/ui',
    category: 'Estilização',
  },
  {
    id: 'n8n',
    name: 'n8n',
    icon: 'n8n',
    category: 'Automação',
  },
]

export const FOOTER_CONTENT: FooterContent = {
  heading: 'E AÍ, VAMOS MANTER CONTATO?',
  copyrightLeft: '© ANTONOLLO, 2026',
  copyrightRight: 'TODOS OS DIREITOS RESERVADOS.',
}
