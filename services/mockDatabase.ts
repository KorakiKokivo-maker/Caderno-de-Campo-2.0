// services/mockDatabase.ts

// Tipos básicos (ajuste conforme seu modelo real)
export interface Usuario {
  id: string;
  nome: string;
}

export interface Propriedade {
  id: string;
  usuarioId: string;
  nome: string;
}

export interface Colheita {
  id: string;
  safraId: string;
  quantidade: number;
}

export interface Benfeitoria {
  id: string;
  usuarioId: string;
  descricao: string;
}

export interface Safra {
  id: string;
  usuarioId: string;
  ano: number;
}

// ----- Usuários -----
const usuarios: Usuario[] = [];

export const addUsuario = (usuario: Usuario) => {
  usuarios.push(usuario);
};

export const getUsuarios = (): Usuario[] => {
  return usuarios;
};

export const updateUsuario = (usuario: Usuario) => {
  const index = usuarios.findIndex(u => u.id === usuario.id);
  if (index !== -1) usuarios[index] = usuario;
};

// ----- Propriedades -----
const propriedades: Propriedade[] = [];

export const addPropriedade = (prop: Propriedade) => {
  propriedades.push(prop);
};

export const getPropriedadesByUsuario = (usuarioId: string): Propriedade[] => {
  return propriedades.filter(p => p.usuarioId === usuarioId);
};

export const updatePropriedade = (prop: Propriedade) => {
  const index = propriedades.findIndex(p => p.id === prop.id);
  if (index !== -1) propriedades[index] = prop;
};

export const deletePropriedade = (id: string) => {
  const index = propriedades.findIndex(p => p.id === id);
  if (index !== -1) propriedades.splice(index, 1);
};

// ----- Colheitas -----
const colheitas: Colheita[] = [];

export const addColheita = (c: Colheita) => {
  colheitas.push(c);
};

export const getColheitasBySafra = (safraId: string): Colheita[] => {
  return colheitas.filter(c => c.safraId === safraId);
};

export const updateColheita = (c: Colheita) => {
  const index = colheitas.findIndex(col => col.id === c.id);
  if (index !== -1) colheitas[index] = c;
};

export const deleteColheita = (id: string) => {
  const index = colheitas.findIndex(c => c.id === id);
  if (index !== -1) colheitas.splice(index, 1);
};

// ----- Benfeitorias -----
const benfeitorias: Benfeitoria[] = [];

export const addBenfeitoria = (b: Benfeitoria) => {
  benfeitorias.push(b);
};

export const getBenfeitoriasByUsuario = (usuarioId: string): Benfeitoria[] => {
  return benfeitorias.filter(b => b.usuarioId === usuarioId);
};

export const updateBenfeitoria = (b: Benfeitoria) => {
  const index = benfeitorias.findIndex(bf => bf.id === b.id);
  if (index !== -1) benfeitorias[index] = b;
};

export const deleteBenfeitoria = (id: string) => {
  const index = benfeitorias.findIndex(b => b.id === id);
  if (index !== -1) benfeitorias.splice(index, 1);
};

// ----- Safras -----
const safras: Safra[] = [];

export const addSafra = (s: Safra) => {
  safras.push(s);
};

export const getSafrasByUsuario = (usuarioId: string): Safra[] => {
  return safras.filter(s => s.usuarioId === usuarioId);
};

export const updateSafra = (s: Safra) => {
  const index = safras.findIndex(sf => sf.id === s.id);
  if (index !== -1) safras[index] = s;
};

export const deleteSafra = (id: string) => {
  const index = safras.findIndex(s => s.id === id);
  if (index !== -1) safras.splice(index, 1);
};
