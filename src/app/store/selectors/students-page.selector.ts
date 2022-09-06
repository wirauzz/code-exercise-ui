import { createSelector } from '@ngrx/store';
import { selectSharedStudentsState } from '../state/studentFeature.state';
import * as fromStudents from '../reducers/students-page.reducer';

/**
 * Student Selectors
 */

export const selectStudentState = createSelector(
  selectSharedStudentsState,
  (sharedStudentFeature) => sharedStudentFeature.students
);

export const selectAllStudents = createSelector(
  selectStudentState,
  fromStudents.selectStudents
);
