import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {

  @Input() students!: Observable<Student[]>;
  @Input() readonly: boolean | null = false;
  @Output() select = new EventEmitter();
  @Output() delete = new EventEmitter();

  students$!: Observable<any>;

  displayedColumns: string[] = ['firstName', 'lastName', 'action'];
  dataSource:any = [];
  constructor() { }

  ngOnInit() {
    this.students.subscribe( data => {
      this.dataSource = data
    })
  }
}
