import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../models/APIResponse';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private coursesAPI = 'https://localhost:5001/api/classes';

  constructor(
    private http:HttpClient 
  ) { }

  public getCourseById(CourseId: string) : Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.coursesAPI}/${CourseId}`);
  }

  public getCourses() : Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.coursesAPI}`);
  }

  public postCourse(newCourse: Course) : Observable<APIResponse> {
    return this.http.post<APIResponse>(`${this.coursesAPI}`, newCourse);
  }

  public removeCourse(CourseId: string) : Observable<APIResponse> {
    return this.http.delete<APIResponse>(`${this.coursesAPI}/${CourseId}`);
  }

  public putCourse(newCourse: Course, CourseId: string) : Observable<APIResponse> {
    return this.http.put<APIResponse>(`${this.coursesAPI}/${CourseId}`, newCourse);
  }
}
