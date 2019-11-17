import { Component } from '@angular/core';
import {MovieConst} from './const/movieConst';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = MovieConst.appNAme;
}
