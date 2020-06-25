import { Component, OnInit } from '@angular/core';
import { RssService } from './service/rss.service';
import { MessageService } from 'primeng/api';
import { Rss } from './models/rss.model';
@Component({
  selector: 'app-rss',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.css'],
  providers: [MessageService, RssService],
})
export class RssComponent implements OnInit {
  totalRecords: number;
  rss: Rss[];
  displayModal: boolean = false;
  constructor(
    private messageService: MessageService,
    private rssService: RssService
  ) {}

  ngOnInit(): void {}

  showDialog() {
    this.displayModal = true;
  }

  loadData(e) {
    this.rssService.getRss(e.rows, e.first).subscribe((n) => {
      console.log(n);

      this.rss = n.data.map((r) => {
        r.excluido = false;
        return r;
      });
      this.totalRecords = n.total;
    });
  }
  desfazer(rss: Rss) {
    let acao = 'Recadastro';

    this.rssService.postRss(rss).subscribe(
      (next) => {
        console.log(next);
        rss.id = next.id;
        this.callMensageSuccess(acao);
        rss.excluido = !rss.excluido;
      },
      (error) => {
        this.callMensageErro(acao);
        console.log(error);
      }
    );
  }
  excluir(rss: Rss) {
    let acao = 'Excluir';
    this.rssService.deleteRss(rss).subscribe(
      (next) => {
        this.callMensageSuccess(acao);
        console.log(next);
        rss.excluido = !rss.excluido;
      },
      (error) => {
        this.callMensageErro(acao);
        console.log(error);
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

  reload() {
    this.displayModal = false;

    this.rssService.getRss(10, 0).subscribe((n) => {
      console.log(n);

      this.rss = n.data.map((r) => {
        r.excluido = false;
        return r;
      });
      this.totalRecords = n.data.length;
    });
  }
}
