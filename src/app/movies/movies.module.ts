import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { MoviesMainPageComponent } from './movies-main-page/movies-main-page.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    MoviesMainPageComponent,
    DetailComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class MoviesModule {}
