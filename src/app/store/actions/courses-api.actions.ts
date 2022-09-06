import { createAction, props } from "@ngrx/store";
import { APIResponse } from "src/app/models/APIResponse";
import { Course } from "src/app/models/course";

  export const loadCoursesSuccess = createAction(
    '[Courses api] Courses load success',
    props<{ courses: Course[] }>()
  );
  
  export const loadCoursesFailure = createAction(
    '[Courses api] Courses load failure',
    props<{ errMessage: string }>()
  );
  
  export const editCourseSuccess = createAction(
    '[Courses api] Edit course success',
    props<{course: Course}>()
  );

  export const editCourseFailure = createAction(
    '[Courses api] Edit course failure',
    props<{errMessage: string}>()
  );

  export const removeCourseFailure = createAction(
    '[Courses api] Remove course failure',
    props<{errMessage: string}>()
  );

  export const removeCourseSuccess = createAction(
    '[Courses api] Remove course success',
    props<{classId: string}>()
  );

  export const addCourseFailure = createAction(
    '[Courses api] Select Course',
    props<{errMessage: string}>()
  );

  export const addCourseSuccess = createAction(
    '[Courses api] Add course success',
    props<{course: Course}>()
  );
  