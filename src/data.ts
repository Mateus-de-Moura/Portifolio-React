export const profile = {
  name: 'Mateus de Moura',
  role: 'Desenvolvedor .NET Pleno',
  roles: ['Desenvolvedor .NET', 'Full Stack', 'APIs & Microsserviços', 'Mensageria & Cloud'],
  summary:
    'Desenvolvedor .NET com cerca de 4 anos em APIs, microsserviços e integrações em sistemas corporativos. Atuo em regras de negócio, mensageria assíncrona e SQL — do diagnóstico em produção à entrega. Fui referência técnica para júniores e, em projetos autorais, conduzo o ciclo completo: API, frontend, deploy e observabilidade.',
  email: 'mateus.demoura@hotmail.com',
  phone: '(11) 9 6760-7036',
  whatsapp: '5511967607036',
  location: 'Brasil',
}

export const stats = [
  { value: 4, suffix: '+', label: 'anos de experiência' },
  { value: 4, suffix: '', label: 'empresas' },
  { value: 18, suffix: '+', label: 'tecnologias' },
  { value: 2, suffix: '', label: 'projetos autorais' },
]

export const experiences = [
  {
    role: 'Desenvolvedor Full Stack',
    company: 'Grupo Vamos',
    period: '07/2025 — atual',
    current: true,
    description:
      'Evoluo APIs e microsserviços .NET no fluxo de contratos e implantação do PDV, com regras de negócio, status e integrações entre sistemas. Implemento consumo e publicação no Azure Service Bus, investigo falhas em produção com logs (ELK) e otimizo consultas SQL Server em listagens e timelines usadas pela operação. Quando a entrega depende do contrato da API, ajusto também as telas em React e Angular.',
    stack: ['C#', '.NET', 'ASP.NET Core', 'SQL Server', 'Azure Service Bus', 'React', 'Angular', 'TypeScript', 'ELK'],
  },
  {
    role: 'Desenvolvedor Back-end',
    company: 'Bamse',
    period: '12/2024 — 07/2025',
    description:
      'Desenvolvi e mantive APIs .NET, da modelagem de dados aos endpoints e à correção de regressões. Padronizei consultas e o acesso a dados no SQL Server para reduzir retrabalho e melhorar o desempenho das aplicações.',
    stack: ['C#', '.NET', 'SQL Server'],
  },
  {
    role: 'Desenvolvedor Full Stack .NET',
    company: 'Gobi',
    period: '05/2023 — 12/2024',
    description:
      'Entreguei funcionalidades de ponta a ponta em aplicações web (ASP.NET MVC / React com SQL Server e MySQL), da tela ao banco. Atuei como referência para desenvolvedores júniores, apoiando em dúvidas técnicas, code review e deploy.',
    stack: ['C#', 'ASP.NET MVC', 'React', 'TypeScript', 'SQL Server', 'MySQL'],
  },
  {
    role: 'Desenvolvedor .NET Júnior',
    company: 'IModulo',
    period: '06/2022 — 05/2023',
    description:
      'Atuei na manutenção de sistemas legados, criação de APIs REST e correção de falhas, com participação no suporte e na estabilização das aplicações.',
    stack: ['C#', '.NET', 'APIs REST'],
  },
]

export const projects = [
  {
    title: 'Sistema de Gestão Comercial',
    tag: 'Projeto autoral / freelance',
    description:
      'Solução para gestão de vendas, produtos e financeiro. Responsável pelo ciclo completo: backend, frontend, autenticação, banco de dados, containerização, configuração de servidor, deploy, CI/CD e observabilidade.',
    stack: ['C#', '.NET 9', 'ASP.NET Core', 'React', 'TypeScript', 'MySQL', 'JWT', 'Docker'],
    gradient: 'from-purple-500 via-blue-500 to-cyan-400',
  },
  {
    title: 'Sistema para Clínica Veterinária',
    tag: 'Projeto voluntário',
    description:
      'Desenvolvimento voluntário de um sistema para clínica veterinária, aplicando engenharia de software em um projeto de caráter social.',
    stack: ['.NET', 'Web', 'Impacto social'],
    gradient: 'from-cyan-400 via-emerald-400 to-lime-300',
  },
]

export const skillGroups = [
  { title: 'Back-end', items: ['C#', '.NET', 'ASP.NET Core', 'APIs REST', 'Entity Framework Core', 'Microsserviços'] },
  { title: 'Front-end', items: ['React', 'Angular', 'TypeScript'] },
  { title: 'Dados', items: ['SQL Server', 'MySQL'] },
  { title: 'Cloud & DevOps', items: ['Azure', 'Azure Service Bus', 'RabbitMQ', 'Docker', 'CI/CD', 'Git', 'ELK'] },
]

export const education = [
  { title: 'Pós-graduação em Arquitetura de Software', place: 'FIAP', period: 'Em andamento' },
  { title: 'Análise e Desenvolvimento de Sistemas', place: 'UNIP', period: 'Concluído em 2025' },
]

export const certificates = [
  { title: 'IA na Engenharia de Software', place: 'Grupo Vamos + Abu Consultoria', detail: 'Cursor + SpecKit · 6h · 2026' },
]

export const courses = [
  'Arquitetura de Microsserviços com .NET',
  'Entity Framework Core',
  'TDD com xUnit',
  'ASP.NET MVC',
  'Dapper',
  'SQL Server Performance',
]

export const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Leitura técnica / em evolução' },
]
