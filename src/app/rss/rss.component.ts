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
  constructor(
    private messageService: MessageService,
    private rssService: RssService
  ) {}

  ngOnInit(): void {}

  loadData() {
    this.rssService.getRss().subscribe((n) => {
      console.log(n);

      this.rss = n.map((r) => {
        r.excluido = false;
        return r;
      });
      this.totalRecords = n.length;
    });
  }
  desfazer(rss: Rss) {
    rss.excluido = !rss.excluido;
    this.rssService.postRss(rss).subscribe((r) => console.log(r));
  }
  excluir(rss: Rss) {
    rss.excluido = !rss.excluido;
    this.rssService.deleteRss(rss).subscribe((r) => console.log(r));
  }
}
