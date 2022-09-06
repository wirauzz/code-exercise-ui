import { createAction, props } from "@ngrx/store";
import { Student } from "src/app/models/student";

export const loadStudents = createAction(
  '[Students Page] Load Students'
);

export const selectStudent = createAction(
  '[Students Page] Select Student',
  props<{student: Student}>()
);

export const clearSelectedStudent = createAction(
  '[Students Page] Clear Selected Student'
);

export const createStudent = createAction(
  '[Students Page] Create Students',
  props<{newStudent: Student}>()
)

export const removeStudent = createAction(
  '[Students Page] Remove Students',
  props<{studentId: string}>()
)

export const editStudent = createAction(
  '[Students Page] Edit Students',
  props<{student: Student}>()
)
