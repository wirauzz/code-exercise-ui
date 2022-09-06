import { NgModule } from '@angular/core';
import {
  ActionReducerMap,
  createFeatureSelector,
  StoreModule,
} from '@ngrx/store';

import * as fromCourses from '../reducers/courses-page.reducer';

export const FEATURE_KEY = 'courses-feature';

/**
 * State Shape
 **/
export interface AppState {
  courses: fromCourses.CourseState;
}

export const reducers: ActionReducerMap<any> = {
  courses: fromCourses.coursesReducer
};

/**
 * Module
 **/
@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers)],
})
export class CoursesModule {}

/**
 * Feature Selector
 **/
export const selectSharedCoursesState = createFeatureSelector<AppState>(FEATURE_KEY);

