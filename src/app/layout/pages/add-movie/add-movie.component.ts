import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Movie} from '../../../interfaces/movie';
import {DomSanitizer} from '@angular/platform-browser';
import {MoviesService} from '../../../service/movies.service';
import {Router} from '@angular/router';
import {MovieConst} from '../../../const/movieConst';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  movieForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private sanitaizer: DomSanitizer,
    private movieService: MoviesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.iniForm();
  }

  iniForm() {
    this.movieForm = this.fb.group({
      title : [null, Validators.required],
      release : [null, Validators.required],
      description : [null, Validators.required],
      image : [null, Validators.required],
    });
  }

  onFormSubmit(form) {
    if (form.status === 'VALID') {
      const data = this.movieForm.getRawValue();
      try {
        this.movieService.saveMovie(data);
        this.router.navigate(['Home']);
      } catch (e) {
        alert(`Error at Saving Movie : ${e}`);
      }
    }
  }

  onImage(event): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base: string = reader.result as string;
        const base64 = base.split(',');
        const dataFile = {
          name: file.name,
          type: file.type,
          data: `data:${file.type};base64,${base64[1]}`
        };
        this.updateImagenes(dataFile);
      };
    }
  }

  updateImagenes(imagen): void {
    this.movieForm.controls.image.setValue(imagen.data);
  }

  showImage(image) {
    return this.sanitaizer.bypassSecurityTrustResourceUrl(image);
  }

}
