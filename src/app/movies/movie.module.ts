import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MovieCreateComponent } from "./movie-create/movie-create.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { AngularMaterialModule } from "../angular-material.module";

@NgModule({
  declarations: [MovieCreateComponent, MovieListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class MoviesModule {}
