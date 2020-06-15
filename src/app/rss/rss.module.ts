import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RssComponent } from './rss.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RssFromComponent } from './rss-from/rss-from.component';

@NgModule({
  declarations: [RssFromComponent],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [RssComponent],
  exports: [RssFromComponent],
})
export class RssModule {}
