import { createAction, props } from "@ngrx/store";
import { Student } from "src/app/models/student";

export const loadStudents = createAction(
  '[Students Page] Load Students'
);
