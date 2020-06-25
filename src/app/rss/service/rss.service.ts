import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Rss } from '../models/rss.model';
import { Injectable } from '@angular/core';
interface resposta {
  data: Rss[];
  total: number;
  count: number;
  page: number;
  pageCount: number;
}
@Injectable({
  providedIn: 'root',
})
export class RssService {
  url: string = 'https://sigdesastre.herokuapp.com/'; //'http://localhost:3000/rss'; //
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getTipoFonteList() {
    return this.http.get<Rss[]>(`${this.url}noticias/fontes/`);
  }
  getRss(limit?: number, offset?: number) {
    return this.http.get<resposta>(
      `${this.url}rss?limit=${limit}&offset=${offset}`
    );
  }
  postRss(rss: Rss) {
    return this.http.post<Rss>(`${this.url}rss/`, rss, this.httpOptions);
  }
  deleteRss(rss: Rss) {
    return this.http.delete(`${this.url}rss/${rss.id}`);
  }
}
