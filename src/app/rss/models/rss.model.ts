export class Rss {
  constructor(nome?: string, url?: string) {
    this.nome = nome || '';
    this.url = url || '';
    this.tipoFonteId = null;
  }
  id?: number;
  nome: string;
  url: string;
  tipoFonteId?: number;
  excluido?: boolean;
}
