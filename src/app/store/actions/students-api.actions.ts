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
