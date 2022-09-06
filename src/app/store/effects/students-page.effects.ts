import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, concatMap, Observable, catchError, of } from "rxjs";
import { APIResponse } from "src/app/models/APIResponse";
import { Student } from "src/app/models/student";
import { StudentsService } from "src/app/services/students.service";
import * as StudentActions from "../actions/students-page.actions";
import * as StudentApiActions from "../actions/students-api.actions";


@Injectable()
export class StudentsApiEffects {
    constructor(
        private studentsService: StudentsService,
        private actions$: Actions
    ) { }

    loadStudents$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(StudentActions.loadStudents),
            mergeMap(() => {
                return this.studentsService.getStudents()
                  .pipe(
                    map((response: APIResponse) => {
                        const students: Student[] = response.data;
                        return StudentApiActions.loadStudentsSuccess({students})
                    }),
                    catchError((error) => {
                        console.log('error while loading the students ', error)
                        return of(StudentApiActions.loadStudentsFailure(error))
                    })
                )
            })
        )
    })

    createStudent$ = createEffect(() => {
        return this.actions$.pipe(
        ofType(StudentActions.createStudent),
        concatMap(action => 
            this.studentsService.postStudent(action.newStudent)
            .pipe(
                map((response: APIResponse) => {
                    const student: Student = response.data
                    return StudentApiActions.addStudentSuccess({student: student})
                    }),
                catchError((error) => {
                    console.log('error while creatomg the student ', error)
                    return of(StudentApiActions.addStudentFailure(error))
                })
                )
        )
    )})

    updateStudent$ = createEffect(() => {
        console.log(this.actions$)
        return this.actions$.pipe(
            ofType(StudentActions.editStudent),
            concatMap((action) =>
              this.studentsService.putStudent(action.student, action.student.studentId)
              .pipe(
                map((response: APIResponse) => {
                    const student: Student = response.data
                    return StudentApiActions.editStudentSuccess({student: student})
                }),
                catchError((error) => {
                    console.log('error while updating the student ', error)
                    return of(StudentApiActions.editStudentFailure(error))
                })
            )
        )
    )})

    deleteStudent$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StudentActions.removeStudent),
            mergeMap((action) =>
                this.studentsService.removeStudent(action.studentId)
                .pipe(
                    map(() => StudentApiActions.removeStudentSuccess({studentId: action.studentId})),
                    catchError((error) => {
                        console.log('error while deleting the student ', error)
                        return of(StudentApiActions.removeStudentFailure(error))
                    })
                )
            )
        )
    )
    
}