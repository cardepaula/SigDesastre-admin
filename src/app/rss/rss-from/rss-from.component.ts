import { Component, NgModule } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { RssService } from '../service/rss.service';
import { Rss } from '../models/rss.model';

@Component({
  selector: 'app-rss-from',
  templateUrl: './rss-from.component.html',
  styleUrls: ['./rss-from.component.css'],
})
export class RssFromComponent {
  constructor(
    private formBuilder: FormBuilder,
    private rssService: RssService
  ) {}
  rss = new Rss();
  formRss: FormGroup = this.formBuilder.group(this.rss);

  // formValidator = new FormGroup({
  //   nome: new FormControl(this.rss.nome, [
  //     Validators.required,
  //     Validators.minLength(4),
  //   ]),
  //   url: new FormControl(this.rss.url, [
  //     Validators.required,
  //     Validators.minLength(4),
  //   ]),
  // });

  onSubmit() {
    if (this.validador()) {
      console.log('enviado: ', this.formRss.value);
      this.rssService.postRss(this.formRss.value).subscribe(
        (n) => {
          console.log('resposta: ', n);
          this.formRss.reset(new Rss());
        },
        (e) => {
          console.log('Erro', e);
        }
      );
    }
  }
  validador() {
    return !(
      this.formRss.value.nome.length >= 3 && this.formRss.value.url.length >= 4
    );
  }
}
