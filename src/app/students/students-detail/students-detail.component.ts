import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-students-detail',
  templateUrl: './students-detail.component.html',
  styleUrls: ['./students-detail.component.scss']
})
export class StudentsDetailComponent implements OnInit {

  originalStudent: Student | undefined;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  studentForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }

  @Input() set student(student: Student | null) {
    this.studentForm.reset();
    this.originalStudent = undefined;

    if (student) {
      this.studentForm.setValue({
        firstName: student.firstName,
        lastName: student.lastName
      });
      this.originalStudent = student;
    }
  }

  onSubmit(student: Student) {
    this.save.emit({ ...this.originalStudent, ...student });
  }
}
