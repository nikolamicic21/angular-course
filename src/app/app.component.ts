import {Component} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses: any[] = COURSES;
  coreCourse: any = this.courses[0];
  rxjsCourse: any = this.courses[1];
  ngrxCourse: any = this.courses[2];

  onCourseSelected(course: Course) {
    console.log(`onCourseSelected...`);
    console.log(course);
  }
}
