import { createAction, props } from "@ngrx/store";
import { Course } from "src/app/models/course";

export const loadCourses = createAction(
  '[Courses Page] Load Courses'
);

export const selectCourse = createAction(
  '[Courses Page] Select Course',
  props<{course: Course}>()
);

export const clearSelectedCourse = createAction(
  '[Courses Page] Clear Selected Course'
);

export const createCourse = createAction(
  '[Courses Page] Create Courses',
  props<{newCourse: Course}>()
)

export const removeCourse = createAction(
  '[Courses Page] Remove Courses',
  props<{classId: string}>()
)

export const editCourse = createAction(
  '[Courses Page] Edit Courses',
  props<{course: Course}>()
)