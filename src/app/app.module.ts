import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './courses/search/search.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesYouTubeComponent } from './courses/courses-you-tube/courses-you-tube.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursesUdemyComponent } from './courses/courses-udemy/courses-udemy.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    CoursesComponent,
    CoursesYouTubeComponent,
    CoursesUdemyComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
