import { Component, OnInit } from '@angular/core';
import { NoticiaService } from './services/noticia.service';
import { MessageService } from 'primeng/api';

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
    this.pagina = event.first == 0 ? 1 : 1 + event.first / event.rows;
    this.service.getNoticias(this.pagina, event.rows).subscribe((n) => {
      this.noticias = n.noticias;
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
    this.messageService.add({
      severity: 'success',
      summary: 'Service Message',
      detail: 'Via MessageService',
    });
    noticia.excluida = true;
  }
  desfazer(noticia) {
    this.messageService.add({
      severity: 'success',
      summary: 'Service Message',
      detail: 'Via MessageService',
    });
    noticia.excluida = false;
  }
}
