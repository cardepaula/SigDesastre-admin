export class Rss {
  constructor(nome?: string, url?: string) {
    this.nome = nome || '';
    this.url = url || '';
  }
  id?: number;
  nome: string;
  url: string;
  excluido?: boolean;
}
