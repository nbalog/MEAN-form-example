import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieCreateComponent } from "./movies/movie-create/movie-create.component";
import { MovieListComponent } from "./movies/movie-list/movie-list.component";

const routes: Routes = [

  { path: "createMovie", component: MovieCreateComponent },
  { path: "getMovies", component: MovieListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
