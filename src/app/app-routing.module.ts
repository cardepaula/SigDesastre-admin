import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RssComponent } from './rss/rss.component';
import { NoticiaComponent } from './noticia/noticia.component';

const routes: Routes = [
  { path: 'rss', component: RssComponent },
  { path: 'noticia', component: NoticiaComponent },
  { path: '', redirectTo: '/rss', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
