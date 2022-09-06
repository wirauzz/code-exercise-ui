import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})
export class CoursesTableComponent implements OnInit {

  @Input() courses!: Observable<Course[]>;
  @Input() readonly: boolean | null = false;
  @Output() select = new EventEmitter();
  @Output() delete = new EventEmitter();

  courses$!: Observable<any>;

  displayedColumns: string[] = ['title', 'description', 'action'];
  dataSource:any = [];
  constructor() { }

  ngOnInit() {
    this.courses.subscribe( data => {
      this.dataSource = data
    })
  }
}
