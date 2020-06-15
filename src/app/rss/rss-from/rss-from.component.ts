import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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

  formRss: FormGroup = this.formBuilder.group(new Rss());

  onSubmit() {
    console.log('enviado: ', this.formRss.value);
    this.rssService
      .postRss(this.formRss.value)
      .subscribe((n) => console.log('resposta: ', n));

    this.formRss.reset(new Rss());
  }
}
