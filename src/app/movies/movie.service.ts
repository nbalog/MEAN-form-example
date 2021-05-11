import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { environment } from "../../environments/environment";
import { Movie } from "./movie.model";

const BACKEND_URL = environment.apiUrl + "/movies/";

@Injectable({ providedIn: "root" })
export class MovieService {
  private movies: Movie[] = [];
  private moviesUpdated = new Subject<{ movies: Movie[]; movieCount: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  getMovies(moviesPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${moviesPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; movies: any; maxMovies: number }>(
        BACKEND_URL + "getMovies/" + queryParams
      )
      .pipe(
        map(movieData => {
          return {
            movies: movieData.movies.map(movie => {
              return {
                name: movie.name,
                quantity: movie.quantity,
                category: movie.category
              };
            }),
            maxMovies: movieData.maxMovies
          };
        })
      )
      .subscribe(transformedMovieData => {
        this.movies = transformedMovieData.movies;
        this.moviesUpdated.next({
          movies: [...this.movies],
          movieCount: transformedMovieData.maxMovies
        });
      });
  }

  getPostUpdateListener() {
    return this.moviesUpdated.asObservable();
  }

  addMovie(name: string, quantity: number, category: string) {
    const movie: Movie = {
      name: name,
      quantity: quantity,
      category: category
    }
    this.http
      .post(
        BACKEND_URL + "createMovie/",
        movie
      )
      .subscribe(responseData => {
        this.router.navigate(["/"]);
      });
    }
}
