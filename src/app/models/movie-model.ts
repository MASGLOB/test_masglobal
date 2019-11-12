import {Movie} from '../interfaces/movie';

export class MovieModel implements Movie {
  description: string;
  image: string;
  relese: Date;
  title: string;
}
