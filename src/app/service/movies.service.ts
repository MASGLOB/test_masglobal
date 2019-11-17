import { Injectable } from '@angular/core';
import {Movie} from '../interfaces/movie';
import {LocalStorageMisc} from '../utilities/localStorageMisc';
import {HttpClient} from '@angular/common/http';
import {MovieConst} from '../const/movieConst';
import {timeout} from 'rxjs/operators';
import {del} from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  getMovies = (): Movie[] => {
    let movies: Movie[] = LocalStorageMisc.getstorage('movies');
    if (movies === null) {
      movies = [];
    }
    return movies;
  }

  saveMovie(movie: Movie) {
    const movies: Movie[] = this.getMovies();
    const indx = movies.findIndex(m => m.title.toUpperCase() === movie.title.toUpperCase());
    if (indx > -1) {
      movies[indx] = movie;
    } else {
      movies.push(movie);
    }
    LocalStorageMisc.setStorage('movies', movies);
  }

  listMovies() {
    const movies: Movie[] = this.getMovies();
    return movies;
  }

  getMovie(title: string) {
    const movies: Movie[] = this.getMovies();
    return movies.find(m => m.title.toUpperCase() === title.toUpperCase()) || {};
  }

  async getTopFive() {
    const objTop = await this.http.get(MovieConst.topFiveUrl).pipe(timeout(MovieConst.timeOut)).toPromise();
    return Object.values(objTop)[0];
  }

  deleteMovie(title: string) {
    const movies: Movie[] = this.getMovies();
    const delIndx = movies.findIndex(m => m.title === title);
    if (delIndx >= 0) {
      movies.splice(delIndx, 1);
    }
    LocalStorageMisc.setStorage('movies', movies);
  }
}
