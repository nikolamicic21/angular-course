import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses: Course[] = COURSES;
  startDate = new Date();
  coreCourse: any = COURSES[0];
  price = 9.99;
  rate = .67;

  onCardClicked(): void {
    console.log(`app component - click event bubbled..`);
  }

  onCourseSelected(course: Course): void {
    console.log(`app component - click event bubbled..`, course);
  }
}
