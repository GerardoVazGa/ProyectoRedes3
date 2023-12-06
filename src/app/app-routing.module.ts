import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'courses', component: CoursesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'courses' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
