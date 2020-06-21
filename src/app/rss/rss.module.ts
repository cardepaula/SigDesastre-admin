import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RssComponent } from './rss.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RssFromComponent } from './rss-from/rss-from.component';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [RssFromComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    ProgressSpinnerModule,
  ],
  providers: [RssComponent],
  exports: [RssFromComponent],
})
export class RssModule {}
