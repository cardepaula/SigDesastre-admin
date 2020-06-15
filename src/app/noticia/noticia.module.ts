import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaComponent } from './noticia.component';
import { FormNoticiaComponent } from './form-noticia/form-noticia.component';

@NgModule({
  declarations: [FormNoticiaComponent],
  imports: [CommonModule],
  providers: [NoticiaComponent],
  exports: [FormNoticiaComponent],
})
export class NoticiaModule {}
