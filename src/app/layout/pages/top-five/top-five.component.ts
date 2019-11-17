import { Component, OnInit } from '@angular/core';
import {Movie} from '../../../interfaces/movie';
import {MoviesService} from '../../../service/movies.service';

@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styleUrls: ['./top-five.component.scss']
})
export class TopFiveComponent implements OnInit {
  movies: Movie[];
  constructor(
    private movieService: MoviesService,
  ) { }

  ngOnInit() {
    this.getTopFive();
  }

  async getTopFive() {
    this.movies = await this.movieService.getTopFive();
  }

}
