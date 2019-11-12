import { Component, OnInit } from '@angular/core';
import {Movie} from '../../../../interfaces/movie';
import {HomeMovieSelected} from '../../../../observable/homeMovieSelected';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.scss']
})
export class InfoMovieComponent implements OnInit {
  movie: Movie;

  constructor(
    private homeMovieSelected: HomeMovieSelected
  ) { }

  ngOnInit() {
    this.homeMovieSelected.cast.subscribe(m => {
      this.setMovie(m);
    });
  }

  setMovie(movie: Movie) {
    this.movie = movie;
  }

}
