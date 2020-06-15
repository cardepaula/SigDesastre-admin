import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Rss } from '../models/rss.model';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class RssService {
  url: string = 'https://sigdesastre.herokuapp.com/rss'; //'http://localhost:3000/rss'; //
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getRss() {
    return this.http.get<Rss[]>(`${this.url}`);
  }
  postRss(rss: Rss) {
    return this.http.post<Rss>(`${this.url}`, rss, this.httpOptions);
  }
  deleteRss(rss: Rss) {
    return this.http.delete(`${this.url}/id/${rss.id}`);
  }
}
