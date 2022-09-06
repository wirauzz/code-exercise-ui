import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit {

  originalCourse: Course | undefined;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  courseForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }

  @Input() set course(course: Course | null) {
    this.courseForm.reset();
    this.originalCourse = undefined;

    if (course) {
      this.courseForm.setValue({
        title: course.title,
        description: course.description
      });
      this.originalCourse = course;
    }
  }

  onSubmit(course: Course) {
    this.save.emit({ ...this.originalCourse, ...course });
  }
}
