export const images = {
  hero: {
    src: "https://images.unsplash.com/photo-1759956214439-607c6e32038c?auto=format&fit=crop&w=2200&q=86",
    alt: "Volume arquitetônico mineral diante de uma grande formação rochosa",
  },
  quiet: {
    src: "https://images.unsplash.com/photo-1622683328784-b033567cd273?auto=format&fit=crop&w=1400&q=84",
    alt: "Cadeira de madeira junto a uma janela atravessada pela luz",
  },
  territory: {
    src: "https://images.unsplash.com/photo-1664376632462-adc2d71355d9?auto=format&fit=crop&w=1800&q=84",
    alt: "Pequena casa assentada em uma encosta aberta",
  },
  matter: {
    src: "https://images.unsplash.com/photo-1691247745529-729ce4906380?auto=format&fit=crop&w=1600&q=84",
    alt: "Superfícies de concreto com marcas, massa e sombra",
  },
  interior: {
    src: "https://images.unsplash.com/photo-1622683328784-b033567cd273?auto=format&fit=crop&w=1600&q=84",
    alt: "Interior silencioso com madeira, vidro e luz natural",
  },
  landscape: {
    src: "https://images.unsplash.com/photo-1602128110234-2d11c0aaadfe?auto=format&fit=crop&w=1600&q=84",
    alt: "Arquitetura clara entre árvores altas e vegetação densa",
  },
  research: {
    src: "https://images.unsplash.com/photo-1603621776288-a6a06af35675?auto=format&fit=crop&w=1600&q=84",
    alt: "Encontro geométrico entre luz e superfícies minerais",
  },
  continuity: {
    src: "https://images.unsplash.com/photo-1559627605-24b888d4c964?auto=format&fit=crop&w=1800&q=84",
    alt: "Conjunto arquitetônico implantado em uma paisagem gramada",
  },
} as const

export const navigation = [
  ["Morar", "/morar"],
  ["Arquitetura", "/arquitetura"],
  ["Pesquisa", "/pesquisa"],
  ["Projetos", "/projetos"],
  ["Contato", "/contato"],
] as const

export const workflowSteps = [
  {
    title: "Pessoa",
    text: "Escutamos ritmos, afetos, necessidades e possibilidades antes de desenhar respostas.",
  },
  {
    title: "Território",
    text: "Lemos clima, solo, água, paisagem e vizinhança como partes ativas do projeto.",
  },
  {
    title: "Concepção",
    text: "Reunimos os conhecimentos necessários em torno de uma visão comum de morar.",
  },
  {
    title: "Construção",
    text: "Transformamos intenção em matéria com precisão, cuidado e responsabilidade.",
  },
  {
    title: "Morar",
    text: "A casa encontra a vida real: seus usos, encontros, pausas e imprevistos.",
  },
  {
    title: "Transformação",
    text: "Acompanhamos o espaço para que ele possa aprender e mudar com o tempo.",
  },
] as const

export const studies = [
  {
    id: "E.01",
    type: "Habitação · Estudo conceitual",
    title: "Casa Pátio Mutável",
    text: "Uma investigação autoral sobre crescimento, intimidade e espaços intermediários.",
    image: images.interior,
    status: "Estudo em desenvolvimento",
  },
  {
    id: "E.02",
    type: "Território · Estudo conceitual",
    title: "Habitar a Encosta",
    text: "Implantação mínima e continuidade da paisagem em terrenos de declive.",
    image: images.territory,
    status: "Estudo em desenvolvimento",
  },
  {
    id: "E.03",
    type: "Habitação social modular · Estudo conceitual",
    title: "Trama Comum",
    text: "Sistema modular para habitação de interesse social, pensado para adaptar, durar e construir com menos.",
    image: images.research,
    status: "Pesquisa conceitual em curso",
  },
] as const

export const researchNotebooks = [
  {
    index: "Caderno 01",
    title: "Casas que mudam",
    text: "Sistemas espaciais e construtivos capazes de acompanhar diferentes formações familiares.",
  },
  {
    index: "Caderno 02",
    title: "Construir com menos",
    text: "Redução de matéria, desperdício e energia. A mesma lógica orienta casas autorais e habitação de interesse social.",
  },
  {
    index: "Caderno 03",
    title: "Depois da obra",
    text: "Dados pós-ocupação como ferramenta para aprender com a vida real.",
  },
  {
    index: "Caderno 04",
    title: "Ciclos da matéria",
    text: "Origem, manutenção, desmontagem, reuso e retorno dos materiais.",
  },
] as const
