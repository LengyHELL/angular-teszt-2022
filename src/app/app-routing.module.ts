import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import { SandboxComponent } from './pages/sandbox/sandbox.component';

const routes: Routes = [
  {path: '', component: SandboxComponent},
  {path: 'sandbox', component: SandboxComponent},
  {path: 'movies', component: SandboxComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
