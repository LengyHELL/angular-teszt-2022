import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies) => (this.movies = movies))
  }

  deleteMovie(movie: Movie): void {
    this.moviesService.deleteMovie(movie).subscribe(() => (this.movies = this.movies.filter(m => m.id !== movie.id)));
  }

}
