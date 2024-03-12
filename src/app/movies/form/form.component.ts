import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'movies-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  form: FormGroup;
  constructor(fb: FormBuilder, private moviesService: MoviesService) {
    this.form = fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      img: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(500),
        ],
      ],
    });
  }

  submit() {
    if (!this.form.valid) {
      console.log('no es valido');
      return;
    }
    this.moviesService.addMovie({
      ...this.form.value,
      id: this.moviesService.movies.length + 1,
    });
  }
}
