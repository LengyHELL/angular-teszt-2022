import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Movie } from "src/app/models/Movie";
import { MOVIES } from "src/data/movies"

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies(): Observable<Movie[]> {
    const movies = of(MOVIES);
    return movies;
  }

  deleteMovie(movie: Movie): Observable<Movie[]> {
    //send delete request
    //return this.http.delete<Movie>(url);
    const movies = of(MOVIES);
    return movies;
  }

  updateMovie(movie: Movie): Observable<Movie[]> {
    //send put request
    //return this.http.put<Movie>(url, movie, httpOptions);
    const movies = of(MOVIES);
    return movies;
  }
}
