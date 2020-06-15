import { Component, OnInit } from '@angular/core';
import { NoticiaService } from './services/noticia.service';
import { MessageService } from 'primeng/api';
import { Noticia } from './models/noticia.model';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css'],
  providers: [MessageService, NoticiaService],
})
export class NoticiaComponent implements OnInit {
  noticias: any[];
  totalRecords: number;
  pagina = 1;
  rows = 20;
  descritores = [
    'mariana',
    'barragem',
    'vale',
    'fundão',
    'desastre',
    'tragédia',
    'samarco',
    'rio doce',
  ];
  constructor(
    private service: NoticiaService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}
  loadData(event) {
    this.pagina = event.first == 0 ? 1 : 1 + event.first / this.rows;
    this.service.getNoticias(this.pagina, this.rows).subscribe((n) => {
      this.noticias = n.noticias.map((no: Noticia) => {
        no.excluida = false;
        return no;
      });
      this.totalRecords = n.totalNoticias;
    });
  }
  reload() {
    console.log('reloaded');

    this.service.getNoticias(this.pagina, this.rows).subscribe((n) => {
      this.noticias = n.noticias.map((no: Noticia) => {
        no.excluida = false;
        return no;
      });
      this.totalRecords = n.totalNoticias;
    });
  }

  confereNoticia(noticia): boolean {
    if (noticia.conferida == undefined) {
      noticia.conferida = true;
      this.descritores.forEach((descritor) => {
        let titulo: string = `${noticia.titulo.toLowerCase()} ${
          noticia.conteudo ? noticia.conteudo.toLowerCase() : ''
        }`;

        if (titulo.indexOf(descritor) >= 0) {
          noticia.descValid == undefined
            ? (noticia.descValid = new Array([descritor]))
            : noticia.descValid.push(descritor);
        }
      });

      return noticia.descValid == undefined ? false : true;
    }
    return noticia.descValid == undefined ? false : true;
  }
  excluir(noticia) {
    this.service.deleteNoticias(noticia).subscribe((n) => {
      console.log(n);
      if (n === null) {
        this.messageService.add({
          severity: 'sucess',
          summary: 'Sucesso!',
          detail: 'Noticia Recadastrada',
        });
        noticia.excluida = !noticia.excluida;
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: 'Erro!',
          detail: 'A ação falhou',
        });
      }
    });
  }
  desfazer(noticia) {
    this.service.postNoticias(noticia).subscribe((n) => {
      console.log(n);
      if (n === null) {
        this.messageService.add({
          severity: 'sucess',
          summary: 'Sucesso!',
          detail: 'Noticia Recadastrada',
        });
        noticia.excluida = !noticia.excluida;
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: 'Erro!',
          detail: 'A ação falhou',
        });
      }
    });
  }
}
