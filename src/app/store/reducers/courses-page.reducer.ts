import { createReducer, createSelector, on } from '@ngrx/store';
import { Course } from 'src/app/models/course';
import * as CourseActions from '../actions/courses-page.actions';
import * as CourseApiActions from '../actions/courses-api.actions';

export interface CourseState {
    courses: Course[];
    activeCourse: Course | null;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}


export const initialState: CourseState = {
    courses: [],
    activeCourse: null,
    error: '',
    status: 'pending'
}


export const coursesReducer = createReducer(
    initialState,
    on(CourseActions.loadCourses, (state) => ({ ...state, status: 'loading'})
    ),
    on(CourseActions.selectCourse, (state, {course}) => ({
        ...state,
        activeCourse: course
    })),
    on(CourseActions.clearSelectedCourse, (state) => ({
        ...state,
        activeCourse: null
    })),
    on(CourseApiActions.loadCoursesSuccess, (state, { courses }) => ({
        ...state,
        courses: courses,
        error: '',
        status: 'success',
    })),
    on(CourseApiActions.loadCoursesFailure, (state, { errMessage }) => ({
        ...state,
        error: errMessage,
        status: 'error',
    })),
    on(CourseApiActions.removeCourseSuccess, (state, { classId }) => ({ 
        ...state,
        courses: state.courses.filter((course) => course.classId !== classId),
    })),
    on(CourseApiActions.removeCourseFailure, (state, { errMessage }) => ({ 
        ...state,
        error: errMessage,
    })),
    on(CourseApiActions.editCourseSuccess, (state, {course}) => ({
        ...state,
        courses: updateCourse(state.courses, course),
        activeCourse: null
    })),
    on(CourseApiActions.editCourseFailure, (state, {errMessage}) => ({
        ...state,
        error: errMessage,
        activeCourse: null
    })),
    on(CourseApiActions.addCourseSuccess, (state, { course }) => ({
        ...state,
        courses: [...state.courses, { classId: course.classId,
            title: course.title,
            description: course.description }],
    })),
    on(CourseApiActions.addCourseFailure, (state, { errMessage }) => ({
        ...state,
        error: errMessage,
        activeCourse: null
    }))
)
 

export const selectCourses = (state: CourseState) => state.courses;

export const eelectCourses = (state: CourseState) => state.courses;
export const selectActiveCourse = (state: CourseState) => state.activeCourse;
export const selectCourseId = createSelector(
  selectCourses,
  selectActiveCourse,
  (courses, activeCourse) => {
      return courses.find((course) => course.classId === activeCourse?.classId) || null;
  }
);


const updateCourse = (courses: Course[], editedCourse: Course) =>
  courses.map(course => {
    return course.classId === editedCourse.classId
    ? Object.assign({}, course, editedCourse)
    : course
  })

