import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie.interface';

@Component({
  selector: 'movie-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent implements OnInit {
  movie: Movie | undefined;
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movie = this.moviesService.getMovieById(params['id']);
    });
  }
}
