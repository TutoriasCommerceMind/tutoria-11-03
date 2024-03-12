import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesMainPageComponent } from './movies/movies-main-page/movies-main-page.component';
import { DetailComponent } from './movies/detail/detail.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesMainPageComponent,
  },
  {
    path: 'movie/:id',
    component: DetailComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
