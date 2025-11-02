// src/mockDatabase.ts

import type { Usuario, Propriedade, Safra, OperacaoCampo, Custo, Colheita, Maquinario, Benfeitoria } from './types';

// Dados mock com IDs como números (sem aspas)
export const mockDatabase = {
  usuarios: [
    {
      id: 1,
      nome: 'João',
      nome_de_usuario: 'joao',
      senha: '123',
      perfil: 'Produtor',
      cpf: '12345678900',
      email: 'joao@email.com',
      foto_url: null,
    },
    {
      id: 2,
      nome: 'Ana Silva',
      nome_de_usuario: 'ana',
      senha: '123',
      perfil: 'Produtor',
      cpf: '98765432100',
      email: 'ana@email.com',
      foto_url: null,
    },
  ] as Usuario[],
  propriedades: [
    {
      id: 1,
      usuario_id: 1,
      nome: 'Fazenda Boa Vista',
      localizacao: 'Campinas, SP',
      latitude: undefined,
      longitude: undefined,
      valor_financiado: undefined,
      num_parcelas: undefined,
      parcelas_pagas: undefined,
      data_inicio_pagamento: undefined,
    },
    {
      id: 2,
      usuario_id: 2,
      nome: 'Sítio Verde',
      localizacao: 'Ituverava, SP',
      latitude: undefined,
      longitude: undefined,
      valor_financiado: undefined,
      num_parcelas: undefined,
      parcelas_pagas: undefined,
      data_inicio_pagamento: undefined,
    },
  ] as Propriedade[],
  safras: [
    {
      id: 1,
      propriedade_id: 1,
      usuario_id: 1,
      nome: 'Safra 2023/2024',
      area_ha: 50,
      data_inicio: '2023-09-01',
      data_fim: '2024-01-15',
      ativa: true,
    },
    {
      id: 2,
      propriedade_id: 2,
      usuario_id: 2,
      nome: 'Safra 2023',
      area_ha: 30,
      data_inicio: '2023-10-05',
      data_fim: '2024-02-10',
      ativa: true,
    },
  ] as Safra[],
  operacoesCampo: [
    {
      id: 1,
      safra_id: 1,
      data: '2023-09-10',
      tipo: 'Plantio',
      custo: 800,
      condicoes_climaticas: {},
    },
    {
      id: 2,
      safra_id: 1,
      data: '2023-10-03',
      tipo: 'Defensivo',
      custo: 2500,
      condicoes_climaticas: { temperatura: 30, umidade: 80, vento: 'Leve', clima: 'Ensolarado' },
    },
    {
      id: 3,
      safra_id: 2,
      data: '2023-10-10',
      tipo: 'Tratamento Adicional',
      custo: 900,
      condicoes_climaticas: {},
    },
  ] as OperacaoCampo[],
  custos: [
    {
      id: 1,
      usuario_id: 1,
      nome: 'Diesel',
      valor: 2500,
    },
    {
      id: 2,
      usuario_id: 1,
      nome: 'Mão de Obra',
      valor: 5600,
    },
  ] as Custo[],
  colheitas: [
    {
      id: 1,
      safra_id: 1,
      data: '2024-01-10',
      quantidade: 10000,
      unidade: 'kg',
      preco_unitario: 1.2,
      responsavel: 'João',
    },
  ] as Colheita[],
  maquinarios: [
    {
      id: 1,
      usuario_id: 1,
      nome: 'Trator X',
      descricao: 'Trator 4x4',
      valor_total: 100000,
      num_parcelas: 12,
      parcelas_pagas: 6,
      vida_util_anos: 5,
    },
  ] as Maquinario[],
  benfeitorias: [
    {
      id: 1,
      usuario_id: 1,
      nome: 'Silo',
      descricao: 'Silo para armazenar grãos',
      valor_total: 150000,
      num_parcelas: 12,
      parcelas_pagas: 3,
      data_inicio_pagamento: '2023-01-01',
    },
  ] as Benfeitoria[],
};

// Funções para buscar dados ajustadas para receber ids do tipo number
export function getUsuarios() {
  return mockDatabase.usuarios;
}

export function getUsuarioByNomeUsuarioSenha(nome_de_usuario: string, senha: string) {
  return mockDatabase.usuarios.find(
    (u) => u.nome_de_usuario === nome_de_usuario && u.senha === senha
  );
}

export function getSafrasByUsuario(usuarioId: number) {
  return mockDatabase.safras.filter((s) => s.usuario_id === usuarioId);
}

export function getPropriedadesByUsuario(usuarioId: number) {
  return mockDatabase.propriedades.filter((p) => p.usuario_id === usuarioId);
}

export function getPropriedadeById(propriedadeId: number) {
  return mockDatabase.propriedades.find((p) => p.id === propriedadeId);
}

export function getOperacoesBySafra(safraId: number) {
  return mockDatabase.operacoesCampo.filter((o) => o.safra_id === safraId);
}

export function getCustosByUsuario(usuarioId: number) {
  return mockDatabase.custos.filter((c) => c.usuario_id === usuarioId);
}

export function getColheitasBySafra(safraId: number) {
  return mockDatabase.colheitas.filter((c) => c.safra_id === safraId);
}

export function getMaquinariosByUsuario(usuarioId: number) {
  return mockDatabase.maquinarios.filter((m) => m.usuario_id === usuarioId);
}

export function getBenfeitoriasByUsuario(usuarioId: number) {
  return mockDatabase.benfeitorias.filter((b) => b.usuario_id === usuarioId);
}
