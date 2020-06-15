import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RssComponent } from './rss/rss.component';
import { NoticiaComponent } from './noticia/noticia.component';

const routes: Routes = [
  { path: 'front-rss', component: RssComponent },
  { path: 'front-noticia', component: NoticiaComponent },
  { path: '', redirectTo: '/front-rss', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
