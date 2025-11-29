// Tipos do sistema minnes.multas

export type PlanType = 'gratuito' | 'basico' | 'premium';

export type InfracaoType = 
  | 'radar'
  | 'estacionamento'
  | 'avanco_sinal'
  | 'celular'
  | 'cinto'
  | 'farol_irregular'
  | 'escapamento'
  | 'acostamento'
  | 'outras';

export type StatusRecurso = 'gerado' | 'revisao_pendente' | 'revisado';

export type TipoAbordagem = 'remota' | 'presencial';

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  estado: string;
  plano_atual: PlanType;
  recursos_usados_mes: number;
  edicoes_usadas_mes: number;
  data_criacao: Date;
}

export interface DadosMulta {
  tipo_infracao: InfracaoType;
  numero_auto: string;
  uf: string;
  era_condutor: boolean;
  tipo_abordagem: TipoAbordagem;
  data?: string;
  local?: string;
  detalhes_extras?: {
    havia_sinalizacao?: boolean;
    descricao_agente?: string;
    horario?: string;
    condicoes_local?: string;
    veiculo_situacao?: string;
    erro_equipamento?: boolean;
    observacoes?: string;
  };
}

export interface Recurso {
  id: string;
  multa_id: string;
  usuario_id: string;
  texto_gerado: string;
  com_marca: boolean;
  data_geracao: Date;
  status: StatusRecurso;
  editavel: boolean;
}

export interface Plano {
  id: PlanType;
  nome: string;
  preco: number;
  recursos_mes: number | 'ilimitado';
  edicoes_mes: number | 'ilimitado';
  recursos: string[];
  destaque?: boolean;
}

export interface PostComunidade {
  id: string;
  usuario_id: string;
  usuario_nome: string;
  titulo: string;
  conteudo: string;
  data_criacao: Date;
  curtidas: number;
  comentarios: number;
}
