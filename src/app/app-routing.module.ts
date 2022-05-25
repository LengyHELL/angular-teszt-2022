import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { MoviesComponent } from './pages/movies/movies.component';

const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: "full"},
  {path: 'sandbox', component: SandboxComponent},
  {path: 'movies', component: MoviesComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
