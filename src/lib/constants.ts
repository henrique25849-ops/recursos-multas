import { Plano, InfracaoType } from './types';

// Planos disponíveis
export const PLANOS: Plano[] = [
  {
    id: 'gratuito',
    nome: 'Gratuito',
    preco: 0,
    recursos_mes: 3,
    edicoes_mes: 0,
    recursos: [
      'Até 3 recursos automáticos por mês',
      'Recursos não editáveis',
      'Tutoriais básicos',
      'Orientações de protocolo'
    ]
  },
  {
    id: 'basico',
    nome: 'Básico',
    preco: 29.90,
    recursos_mes: 'ilimitado',
    edicoes_mes: 5,
    recursos: [
      'Recursos automáticos ilimitados',
      'Até 5 edições por mês',
      'Acesso à comunidade',
      'Tutoriais completos',
      'Suporte prioritário'
    ],
    destaque: true
  },
  {
    id: 'premium',
    nome: 'Premium',
    preco: 79.90,
    recursos_mes: 'ilimitado',
    edicoes_mes: 'ilimitado',
    recursos: [
      'Tudo ilimitado',
      'Edição liberada',
      'Revisão manual por especialista',
      'Consultoria personalizada',
      'Suporte VIP 24/7',
      'Prioridade máxima'
    ]
  }
];

// Tipos de infrações
export const TIPOS_INFRACAO: { value: InfracaoType; label: string }[] = [
  { value: 'radar', label: 'Excesso de velocidade (Radar)' },
  { value: 'estacionamento', label: 'Estacionamento irregular' },
  { value: 'avanco_sinal', label: 'Avanço de sinal vermelho' },
  { value: 'celular', label: 'Uso de celular ao volante' },
  { value: 'cinto', label: 'Não uso do cinto de segurança' },
  { value: 'farol_irregular', label: 'Farol irregular/apagado' },
  { value: 'escapamento', label: 'Escapamento irregular' },
  { value: 'acostamento', label: 'Parar no acostamento' },
  { value: 'outras', label: 'Outras infrações' }
];

// Estados brasileiros
export const ESTADOS_BR = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goiás' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraima' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' }
];

// Links de órgãos por estado (exemplo - expandir conforme necessário)
export const LINKS_ORGAOS: Record<string, { detran: string; der?: string }> = {
  SP: {
    detran: 'https://www.detran.sp.gov.br',
    der: 'https://www.der.sp.gov.br'
  },
  RJ: {
    detran: 'https://www.detran.rj.gov.br'
  },
  MG: {
    detran: 'https://www.detran.mg.gov.br'
  },
  // Adicionar outros estados conforme necessário
};

// Perguntas extras por tipo de infração
export const PERGUNTAS_EXTRAS: Record<InfracaoType, string[]> = {
  radar: [
    'Havia sinalização adequada no local?',
    'O radar estava devidamente sinalizado?',
    'Qual era a velocidade permitida na via?',
    'Houve algum erro no equipamento?'
  ],
  estacionamento: [
    'Havia sinalização proibindo estacionar?',
    'O veículo estava em local permitido?',
    'Quanto tempo o veículo permaneceu estacionado?',
    'Havia vaga disponível próxima?'
  ],
  avanco_sinal: [
    'O semáforo estava funcionando corretamente?',
    'Havia sinalização clara do semáforo?',
    'Qual era a condição de visibilidade?',
    'Houve alguma emergência?'
  ],
  celular: [
    'O celular estava sendo usado para navegação?',
    'O veículo estava em movimento?',
    'Havia suporte veicular para o celular?',
    'Foi abordagem presencial ou por câmera?'
  ],
  cinto: [
    'Todos os ocupantes estavam sem cinto?',
    'Houve algum problema com o cinto?',
    'Foi abordagem presencial?',
    'Havia alguma condição médica?'
  ],
  farol_irregular: [
    'Qual era o horário da infração?',
    'O farol estava queimado ou apagado?',
    'Houve tentativa de reparo?',
    'Era período diurno ou noturno?'
  ],
  escapamento: [
    'O veículo passou por vistoria recentemente?',
    'Houve modificação no escapamento?',
    'O escapamento estava danificado?',
    'Foi medido o nível de ruído?'
  ],
  acostamento: [
    'Houve emergência mecânica?',
    'Foi acionado o pisca-alerta?',
    'Quanto tempo permaneceu parado?',
    'Havia local seguro próximo?'
  ],
  outras: [
    'Descreva detalhadamente a infração',
    'Havia sinalização no local?',
    'Quais foram as circunstâncias?',
    'Houve abordagem presencial?'
  ]
};
