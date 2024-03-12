import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, NotFoundPageComponent],
  imports: [BrowserModule, AppRoutingModule, MoviesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
