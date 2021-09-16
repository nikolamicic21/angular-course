import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) {
  }

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '10');

    return this.httpClient
      .get<Course[]>(`/api/courses`, {params});
  }

  saveCourse(course: Course): Observable<Course> {
    const headers = new HttpHeaders()
      .set('X-Auth', 'userId');

    return this.httpClient
      .put<Course>(
        `/api/courses/${course.id}`,
        course,
        {headers}
      );
  }
}
