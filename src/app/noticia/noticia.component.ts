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
  displayModal: boolean = false;
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

  showDialog() {
    this.displayModal = true;
  }

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
    this.displayModal = false;
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
    let acao = 'Excluir';
    this.service.deleteNoticias(noticia).subscribe(
      (next) => {
        console.log(next);
        noticia.excluida = !noticia.excluida;
        this.callMensageSuccess(acao);
      },
      (error) => {
        console.log(error);
        this.callMensageErro(acao);
      }
    );
  }
  desfazer(noticia: Noticia) {
    let acao = 'Recadastro';
    this.service.postNoticias(noticia).subscribe(
      (next) => {
        console.log(next);
        noticia.id = next.id;
        this.callMensageSuccess(acao);
        noticia.excluida = !noticia.excluida;
      },
      (error) => {
        console.log(error);
        this.callMensageErro(acao);
      }
    );
  }
  callMensageErro(action) {
    this.messageService.add({
      severity: 'error',
      summary: 'Erro!',
      detail: `${action} Falhou!`,
    });
  }
  callMensageSuccess(action) {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso!',
      detail: `${action} com sucesso!`,
    });
  }
}
