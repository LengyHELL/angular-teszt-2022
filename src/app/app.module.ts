import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoviesComponent } from './pages/movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SandboxComponent,
    NavbarComponent,
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
