import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AddMovieComponent } from './layout/pages/add-movie/add-movie.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { TopFiveComponent } from './layout/pages/top-five/top-five.component';
import {HttpClientModule} from '@angular/common/http';
import {MoviesService} from './service/movies.service';
import {MatGridListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AddMovieComponent,
    HomeComponent,
    TopFiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatGridListModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
