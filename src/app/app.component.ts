import {Component} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses: Course[] = COURSES;
  title = this.courses[0].description;
  price = 9.99;
  rate = 0.67;
  startDate = new Date(2021, 8, 14);

  onCourseSelected(course: Course) {
    console.log(`onCourseSelected...`);
    console.log(course);
  }
}
