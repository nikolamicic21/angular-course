import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseImageComponent} from './course-image/course-image.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses: Course[] = COURSES;
  startDate = new Date();
  coreCourse: any = COURSES[0];
  price = 9.99;
  rate = .67;

  @ViewChild(CourseImageComponent)
  courseImage: CourseImageComponent;

  ngAfterViewInit(): void {
    console.log('appComponent with ViewChild', this.courseImage);
  }

  onCardClicked(): void {
    console.log(`app component - click event bubbled..`);
  }

  onCourseSelected(course: Course): void {
    console.log(`app component - click event bubbled..`, course);
  }
}
