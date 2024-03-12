import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.interface';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'movies-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  deleteMovieById(id: number) {
    this.movieService.deleteMovieById(id);
  }
}
