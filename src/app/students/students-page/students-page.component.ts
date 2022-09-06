import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student';
import * as StudentActions from '../../store/actions/students-page.actions';
import { selectActiveStudent, selectAllStudents } from '../../store/selectors/students-page.selector';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnInit {

  students$: Observable<Student[]>;
  selectedStudent$: Observable<Student|null>;

  constructor(
    private store: Store<any>
  ) { 
    this.students$ = store.select(selectAllStudents);
    this.selectedStudent$ = store.select(selectActiveStudent);
  }

  ngOnInit() {
    this.store.dispatch(StudentActions.loadStudents());
  }

  onSelect(Student: Student) {
    this.store.dispatch(StudentActions.selectStudent({student: Student}));
  }

  onDelete(Student: Student) {
    this.store.dispatch(StudentActions.removeStudent({studentId: Student.studentId}));
  }

  removeSelectedStudent() {
    this.store.dispatch(StudentActions.clearSelectedStudent())
  }

  onCancel() {
    this.removeSelectedStudent();
  }

  onSave(Student: Student) {
    if('studentId' in Student) {
      this.updateStudent(Student);
    } else {
      this.saveStudent(Student);
    }
  }

  saveStudent(Student: Student) {
    this.store.dispatch(StudentActions.createStudent({newStudent: Student}));
  }

  updateStudent(Student: Student) {
    this.store.dispatch(StudentActions.editStudent({student: Student}));
  }

}
