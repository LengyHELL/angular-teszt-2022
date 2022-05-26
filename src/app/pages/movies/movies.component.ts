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

  descending: boolean = true;
  sortOption: number = 0;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies) => (this.movies = movies))
    this.descending = true;
    this.sortOption = 0;
    this.runSorter();
  }

  deleteMovie(movie: Movie): void {
    this.moviesService.deleteMovie(movie).subscribe(() => (this.movies = this.movies.filter(m => m.id !== movie.id)));
  }

  editMovie(movie: Movie): void {
    if (this.showEditor && (this.editId == movie.id)) {
      this.showEditor = false;
      return;
    }
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
    this.runSorter();
    this.moviesService.updateMovie(this.movies[index]).subscribe();
  }

  isEdited(id: number): boolean {
    if (!this.showEditor) {
      return false;
    }
    return this.editId == id;
  }

  runSorter(): void {
    if (this.sortOption == 0) { // by rating
      this.movies.sort((a, b) => (a.rating - b.rating));
    }
    else if (this.sortOption == 1) { // by title
      this.movies.sort((a, b) => a.title.localeCompare(b.title));
    }
    else if (this.sortOption == 2) { // by year
      this.movies.sort((a, b) => (a.year - b.year));
    }

    if (this.descending) { this.movies.reverse(); }
  }

}
