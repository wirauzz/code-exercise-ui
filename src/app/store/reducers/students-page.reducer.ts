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
    on(StudentActions.selectStudent, (state, {student}) => ({
        ...state,
        activeStudent: student
    })),
    on(StudentActions.clearSelectedStudent, (state) => ({
        ...state,
        activeStudent: null
    })),
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
    })),
    on(StudentApiActions.removeStudentSuccess, (state, { studentId }) => ({ 
        ...state,
        students: state.students.filter((student) => student.studentId !== studentId),
    })),
    on(StudentApiActions.removeStudentFailure, (state, { errMessage }) => ({ 
        ...state,
        error: errMessage,
    })),
    on(StudentApiActions.editStudentSuccess, (state, {student}) => ({
        ...state,
        students: updateStudent(state.students, student),
        activeStudent: null
    })),
    on(StudentApiActions.editStudentFailure, (state, {errMessage}) => ({
        ...state,
        error: errMessage,
        activeStudent: null
    })),
    on(StudentApiActions.addStudentSuccess, (state, { student }) => ({
        ...state,
        students: [...state.students, { studentId: student.studentId,
            firstName: student.firstName,
            lastName: student.lastName }],
    })),
    on(StudentApiActions.addStudentFailure, (state, { errMessage }) => ({
        ...state,
        error: errMessage,
        activeStudent: null
    }))
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
