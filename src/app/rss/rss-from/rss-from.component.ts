import { Component, NgModule, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  NgControl,
} from '@angular/forms';
import { RssService } from '../service/rss.service';
import { Rss } from '../models/rss.model';
import { DropdownModule } from 'primeng/dropdown';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-rss-from',
  templateUrl: './rss-from.component.html',
  styleUrls: ['./rss-from.component.css'],
  providers: [DropdownModule],
})
export class RssFromComponent implements OnInit {
  rss = new Rss();
  tipoFontelist = [];

  lockVar = true;
  constructor(
    private formBuilder: FormBuilder,
    private rssService: RssService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.rssService.getTipoFonteList().subscribe(
      (n) => {
        n.map((tipoFonte) => {
          this.tipoFontelist.push({
            label: tipoFonte.nome,
            value: { nome: tipoFonte.nome, id: tipoFonte.id },
          });
        });
      },
      (e) => {
        console.log(e);
      }
    );
  }
  // formRss: FormGroup = this.formBuilder.group(this.rss);

  formRss = new FormGroup({
    nome: new FormControl('', Validators.minLength(1)),
    url: new FormControl('', Validators.minLength(1)),
    tipoFonteId: new FormControl('', [Validators.required]),
  });
  async onSubmit() {
    if (!this.validador()) {
      this.lockVar = false;
      let rss: Rss = new Rss();
      rss.nome = this.formRss.value.nome;
      rss.url = this.formRss.value.url;
      rss.tipoFonteId = this.formRss.value.tipoFonteId.id;
      console.log(rss);

      this.rssService.postRss(rss).subscribe(
        (n) => {
          console.log('resposta: ', n);
          this.callMensageSuccess('Criado rss');
          this.formRss.reset(new Rss());
        },
        (e) => {
          this.callMensageErro('Criar rss');
          console.log('Erro', e);
        },
        () => {
          this.lockVar = true;
        }
      );
    }
  }
  validador() {
    return !(
      this.formRss.value.nome.length >= 1 &&
      this.formRss.value.url.length >= 1 &&
      this.formRss.value.tipoFonteId &&
      this.lockVar
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
