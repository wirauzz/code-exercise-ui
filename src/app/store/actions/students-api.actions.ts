import { createAction, props } from "@ngrx/store";
import { APIResponse } from "src/app/models/APIResponse";
import { Student } from "src/app/models/student";

  export const loadStudentsSuccess = createAction(
    '[Students api] Students load success',
    props<{ students: Student[] }>()
  );
  
  export const loadStudentsFailure = createAction(
    '[Students api] Students load failure',
    props<{ errMessage: string }>()
  );
  
  export const editStudentSuccess = createAction(
    '[Students api] Edit student success',
    props<{student: Student}>()
  );

  export const editStudentFailure = createAction(
    '[Students api] Edit student failure',
    props<{errMessage: string}>()
  );

  export const removeStudentFailure = createAction(
    '[Students api] Remove student failure',
    props<{errMessage: string}>()
  );

  export const removeStudentSuccess = createAction(
    '[Students api] Remove student success',
    props<{studentId: string}>()
  );

  export const addStudentFailure = createAction(
    '[Students api] Select Student',
    props<{errMessage: string}>()
  );

  export const addStudentSuccess = createAction(
    '[Students api] Add student success',
    props<{student: Student}>()
  );
