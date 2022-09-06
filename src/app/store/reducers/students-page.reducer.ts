import { createReducer, createSelector, on } from '@ngrx/store';
import { Student } from 'src/app/models/student';
import * as StudentActions from '../actions/students-page.actions';
import * as StudentApiActions from '../actions/students-api.actions';

export interface StudentState {
    students: Student[];
    activeStudent: Student | null;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}


export const initialState: StudentState = {
    students: [],
    activeStudent: null,
    error: '',
    status: 'pending'
}
export const studentsReducer = createReducer(
    initialState,
    on(StudentActions.loadStudents, (state) => ({ ...state, status: 'loading'})
    ),
    on(StudentApiActions.loadStudentsSuccess, (state, { students }) => ({
        ...state,
        students: students,
        error: '',
        status: 'success',
    })),
    on(StudentApiActions.loadStudentsFailure, (state, { errMessage }) => ({
        ...state,
        error: errMessage,
        status: 'error',
)
export const selectStudents = (state: StudentState) => state.students;

export const eelectStudents = (state: StudentState) => state.students;
export const selectActiveStudent = (state: StudentState) => state.activeStudent;
export const selectStudentId = createSelector(
  selectStudents,
  selectActiveStudent,
  (students, activeStudent) => {
      return students.find((student) => student.studentId === activeStudent?.studentId) || null;
  }
);


const updateStudent = (students: Student[], editedStudent: Student) =>
  students.map(student => {
    return student.studentId === editedStudent.studentId
    ? Object.assign({}, student, editedStudent)
    : student
  })
