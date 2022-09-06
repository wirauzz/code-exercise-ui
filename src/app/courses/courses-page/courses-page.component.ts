import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import * as CourseActions from '../../store/actions/courses-page.actions';
import { selectActiveCourse, selectAllCourses } from '../../store/selectors/courses-page.selector';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  courses$: Observable<Course[]>;
  selectedCourse$: Observable<Course|null>;

  constructor(
    private store: Store<any>
  ) { 
    this.courses$ = store.select(selectAllCourses);
    this.selectedCourse$ = store.select(selectActiveCourse);
  }

  ngOnInit() {
    this.store.dispatch(CourseActions.loadCourses());
  }

  onSelect(Course: Course) {
    this.store.dispatch(CourseActions.selectCourse({course: Course}));
  }

  onDelete(Course: Course) {
    this.store.dispatch(CourseActions.removeCourse({classId: Course.classId}));
  }

  removeSelectedCourse() {
    this.store.dispatch(CourseActions.clearSelectedCourse())
  }

  onCancel() {
    this.removeSelectedCourse();
  }

  onSave(Course: Course) {
    if('classId' in Course) {
      this.updateCourse(Course);
    } else {
      this.saveCourse(Course);
    }
  }

  saveCourse(Course: Course) {
    this.store.dispatch(CourseActions.createCourse({newCourse: Course}));
  }

  updateCourse(Course: Course) {
    this.store.dispatch(CourseActions.editCourse({course: Course}));
  }

}
