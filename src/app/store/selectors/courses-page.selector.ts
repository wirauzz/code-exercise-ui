import { createSelector } from '@ngrx/store';
import { selectSharedCoursesState } from '../state/courseFeature.state';
import * as fromCourses from '../reducers/courses-page.reducer';

/**
 * Course Selectors
 */

export const selectCourseState = createSelector(
  selectSharedCoursesState,
  (sharedCourseFeature) => sharedCourseFeature.courses
);

export const selectAllCourses = createSelector(
  selectCourseState,
  fromCourses.selectCourses
);

export const selectActiveCourse = createSelector(
  selectCourseState,
  fromCourses.selectActiveCourse
);
