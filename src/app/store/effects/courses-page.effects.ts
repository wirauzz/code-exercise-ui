import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, concatMap, Observable, catchError, of } from "rxjs";
import { APIResponse } from "src/app/models/APIResponse";
import { Course } from "src/app/models/course";
import { CoursesService } from "src/app/services/courses.service";
import * as CourseActions from "../actions/courses-page.actions";
import * as CourseApiActions from "../actions/courses-api.actions";


@Injectable()
export class CoursesApiEffects {
    constructor(
        private coursesService: CoursesService,
        private actions$: Actions
    ) { }

    loadCourses$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CourseActions.loadCourses),
            mergeMap(() => {
                return this.coursesService.getCourses()
                  .pipe(
                    map((response: APIResponse) => {
                        const courses: Course[] = response.data;
                        return CourseApiActions.loadCoursesSuccess({courses})
                    }),
                    catchError((error) => {
                        console.log('error while loading the courses ', error)
                        return of(CourseApiActions.loadCoursesFailure(error))
                    })
                )
            })
        )
    })

    createCourse$ = createEffect(() => {
        return this.actions$.pipe(
        ofType(CourseActions.createCourse),
        concatMap(action => 
            this.coursesService.postCourse(action.newCourse)
            .pipe(
                map((response: APIResponse) => {
                    const respCourse: Course = response.data
                    return CourseApiActions.addCourseSuccess({course: respCourse})
                    }),
                catchError((error) => {
                    console.log('error while creatomg the course', error)
                    return of(CourseApiActions.addCourseFailure(error))
                })
                )
        )
    )})

    updateCourse$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CourseActions.editCourse),
            concatMap((action) =>
              this.coursesService.putCourse(action.course, action.course.classId)
              .pipe(
                map((response: APIResponse) => {
                    const respCourse: Course = response.data
                    return CourseApiActions.editCourseSuccess({course: respCourse})
                }),
                catchError((error) => {
                    console.log('error while updating the course ', error)
                    return of(CourseApiActions.editCourseFailure(error))
                })
            )
        )
    )})

    deleteCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CourseActions.removeCourse),
            mergeMap((action) =>
                this.coursesService.removeCourse(action.classId)
                .pipe(
                    map(() => CourseApiActions.removeCourseSuccess({classId: action.classId})),
                    catchError((error) => {
                        console.log('error while deleting the course ', error)
                        return of(CourseApiActions.removeCourseFailure(error))
                    })
                )
            )
        )
    )
    
}