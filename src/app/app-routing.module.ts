import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './courses/courses-page/courses-page.component';
import { StudentsPageComponent } from './students/students-page/students-page.component';

const routes: Routes = [
  { path: 'courses', component: CoursesPageComponent },
  { path: 'students', component: StudentsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
