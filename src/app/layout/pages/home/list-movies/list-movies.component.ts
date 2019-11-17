import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../../../service/movies.service';
import {Movie} from '../../../../interfaces/movie';
import {HomeMovieSelected} from '../../../../observable/homeMovieSelected';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {
  movies: Movie[];

  constructor(
    private movieService: MoviesService,
    private homeMovieSelected: HomeMovieSelected,
  ) { }

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies() {
    this.movies = this.movieService.listMovies();
    if (this.movies.length === 0) {
      const mar = await this.movieService.getTopFive() as Movie[];
      this.movies = [...mar, ...mar, ...mar, ...mar, ...mar];
      console.log('movies', this.movies);
    }
    this.setFirstMovie();
  }

  setFirstMovie() {
    if (this.movies.length > 0) {
      this.selectMovie(this.movies[0]);
    }
  }

  selectMovie(movie: Movie) {
    this.homeMovieSelected.selectMovie(movie);
  }

}
