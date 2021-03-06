import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia.model';
@Injectable({
  providedIn: 'root',
})
export class NoticiaService {
  url: string = 'https://sigdesastre.herokuapp.com/noticias'; //'http://localhost:3000/noticias'; //
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}
  /**
   *
   * @param pagina id da noticia
   */
  getNoticias(pagina: number, quantidade: number): Observable<any> {
    return this.http.get<any>(
      `${this.url}?pagina=${pagina}&qtdNoticias=${quantidade}`
    );
  }
  deleteNoticias(noticia: Noticia) {
    return this.http.delete(`${this.url}/id/${noticia.id}`);
  }
  postNoticias(noticia: Noticia) {
    return this.http.post<Noticia>(`${this.url}`, noticia, this.httpOptions);
  }
}
