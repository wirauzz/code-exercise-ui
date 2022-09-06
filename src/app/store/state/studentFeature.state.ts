import { NgModule } from '@angular/core';
import {
  ActionReducerMap,
  createFeatureSelector,
  StoreModule,
} from '@ngrx/store';

import * as fromStudents from '../reducers/students-page.reducer';

export const FEATURE_KEY = 'students-feature';

/**
 * State Shape
 **/
export interface AppState {
  students: fromStudents.StudentState;
}

export const reducers: ActionReducerMap<any> = {
  students: fromStudents.studentsReducer
};

/**
 * Module
 **/
@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers)],
})
export class StudentsModule {}

/**
 * Feature Selector
 **/
export const selectSharedStudentsState = createFeatureSelector<AppState>(FEATURE_KEY);

