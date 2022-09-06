import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsPageComponent } from './students/students-page/students-page.component';
import { StudentsTableComponent } from './students/students-table/students-table.component';

@NgModule({
  declarations: [
    AppComponent
    AppComponent,
    StudentsPageComponent,
    StudentsTableComponent,
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
    EffectsModule.forRoot([StudentsApiEffects, CoursesApiEffects]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
