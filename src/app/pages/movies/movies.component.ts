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
  showEditor: boolean = false;

  editId!: number;
  title: string = "";
  year: number = 1900;
  rating: number = 1.0;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies) => (this.movies = movies))
  }

  deleteMovie(movie: Movie): void {
    this.moviesService.deleteMovie(movie).subscribe(() => (this.movies = this.movies.filter(m => m.id !== movie.id)));
  }

  editMovie(movie: Movie): void {
    this.editId = movie.id;
    this.title = movie.title;
    this.year = movie.year;
    this.rating = movie.rating;
    this.showEditor = true;
  }

  readyToSubmit(): boolean {
    if (this.title.length <= 0) {
      return false;
    }
    if (this.year < 1900) {
      return false;
    }
    if ((this.rating < 1.0) || (this.rating > 10.0)) {
      return false;
    }
    return true;
  }

  onSubmit(): void {
    const index = this.movies.findIndex(m => m.id === this.editId);
    this.movies[index].title = this.title;
    this.movies[index].year = this.year;
    this.movies[index].rating = this.rating;
    this.showEditor = false;
    this.moviesService.updateMovie(this.movies[index]).subscribe();
  }

}
