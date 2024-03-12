import { Injectable } from '@angular/core';
import { Movie } from './movie.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies: Movie[] = [
    {
      id: 1,
      title: 'Cars',
      img: 'https://images-cdn.ubuy.ae/65091f10174457600239f8a8-cars-disney-pixar-movie-poster.jpg',
    },
    {
      id: 2,
      title: 'Wish',
      img: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24646117_v_h10_ag.jpg',
    },
    {
      id: 3,
      title: 'Amelie',
      img: 'https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
    },
    {
      id: 4,
      title: 'Interstellar',
      img: 'https://pics.filmaffinity.com/Interstellar-366875261-large.jpg',
    },
  ];

  moviesSubject = new BehaviorSubject(this.movies);

  constructor() {}

  getAllMovies() {
    return this.moviesSubject.asObservable();
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find((movie) => movie.id == id);
  }

  deleteMovieById(id: number): void {
    this.movies = this.movies.filter((movie) => movie.id != id);
    this.moviesSubject.next(this.movies);
  }
  addMovie(movie: Movie) {
    this.movies.push(movie);
    this.moviesSubject.next(this.movies);
  }
}
