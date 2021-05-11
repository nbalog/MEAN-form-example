import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { MovieService } from "../movie.service";
import { Movie } from "../movie.model";

@Component({
  selector: "app-movies-create",
  templateUrl: "./movie-create.component.html",
  styleUrls: ["./movie-create.component.css"]
})
export class MovieCreateComponent implements OnInit {
  movie: Movie;
  isLoading = false;
  form: FormGroup;


  constructor(
    public movieService: MovieService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      quantity: new FormControl(null, { validators: [Validators.required] }),
      category: new FormControl(null, { validators: [Validators.required] }),

    });
  }

  onSaveMovie() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;

      this.movieService.addMovie(
        this.form.value.name,
        this.form.value.quantity,
        this.form.value.category
      );

  }
}
