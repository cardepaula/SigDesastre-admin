import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { HttpClientModule } from '@angular/common/http';
import { NoticiaService } from './noticia/services/noticia.service';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [AppComponent, NoticiaComponent],
  imports: [
    ToastModule,
    BrowserAnimationsModule,
    PanelModule,
    DataViewModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [NoticiaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
