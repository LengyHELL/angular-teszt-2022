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
}
