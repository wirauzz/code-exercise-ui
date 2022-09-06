import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../models/APIResponse';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private studentsAPI = 'https://localhost:5001/api/students';
  constructor(
    private http:HttpClient 
  ) { }
  public getStudentById(StudentId: string) : Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.studentsAPI}/${StudentId}`);
  }

  public getStudents() : Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.studentsAPI}`);
  }
