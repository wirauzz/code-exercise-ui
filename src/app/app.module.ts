import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsPageComponent } from './students/students-page/students-page.component';
import { StudentsTableComponent } from './students/students-table/students-table.component';
import { StudentsDetailComponent } from './students/students-detail/students-detail.component';
import { EffectsModule } from '@ngrx/effects';
import { StudentsApiEffects } from './store/effects/students-page.effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentsModule } from './store/state/studentFeature.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesModule } from './store/state/courseFeature.state';
import { CoursesPageComponent } from './courses/courses-page/courses-page.component';
import { CoursesDetailComponent } from './courses/courses-detail/courses-detail.component';
import { CoursesTableComponent } from './courses/courses-table/courses-table.component';
import { CoursesApiEffects } from './store/effects/courses-page.effects';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsPageComponent,
    StudentsTableComponent,
    StudentsDetailComponent,
    CoursesPageComponent,
    CoursesDetailComponent,
    CoursesTableComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    StudentsModule,
    CoursesModule,
    EffectsModule.forRoot([StudentsApiEffects, CoursesApiEffects]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
