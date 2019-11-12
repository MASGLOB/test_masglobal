import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './layout/pages/home/home.component';
import {AddMovieComponent} from './layout/pages/add-movie/add-movie.component';
import {TopFiveComponent} from './layout/pages/top-five/top-five.component';


const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'AddMovie', component: AddMovieComponent},
  {path: 'TopFive', component: TopFiveComponent},
  {path: '', pathMatch: 'full', redirectTo: 'Home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
