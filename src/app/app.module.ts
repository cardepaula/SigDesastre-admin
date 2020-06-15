import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { HttpClientModule } from '@angular/common/http';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { RssModule } from './rss/rss.module';
import { NoticiaModule } from './noticia/noticia.module';
import { RssComponent } from './rss/rss.component';
@NgModule({
  declarations: [AppComponent, NoticiaComponent, RssComponent],
  imports: [
    NoticiaModule,
    RssModule,
    ToastModule,
    BrowserAnimationsModule,
    PanelModule,
    DataViewModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ReactiveFormsModule],
})
export class AppModule {}
