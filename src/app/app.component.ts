import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  courses: Course[] = COURSES;
  startDate = new Date();
  coreCourse: any = COURSES[0];
  price = 9.99;
  rate = .67;

  @ViewChild('container', {static: true})
  container: ElementRef;

  @ViewChild('cardRef1', {read: ElementRef})
  courseCard1: ElementRef;

  @ViewChild('cardRef2')
  courseCard2: CourseCardComponent;

  @ViewChildren(CourseCardComponent, {read: ElementRef})
  courseCards: QueryList<ElementRef>;

  @ViewChild('courseImage')
  courseImage: ElementRef;

  constructor() {
    console.log(`constructor`);
    console.log(this.container);
    console.log(this.courseCard1);
  }

  ngOnInit(): void {
    console.log(`onInit`);
    console.log(this.container);
    console.log(this.courseCard1);
  }

  ngAfterViewInit(): void {
    console.log(`afterViewInit`);
    console.log(this.container);
    console.log(this.courseCard1);
    this.courseCards.changes.subscribe(cards =>
      console.log(cards)
    );
  }

  onCardClicked(): void {
    console.log(`app component - click event bubbled..`);
  }

  onCourseSelected(course: Course): void {
    console.log(`app component - click event bubbled..`, course);
    console.log(this.courseCard1);
    console.log(this.courseCard2);
    console.log(this.courseImage);
    console.log('cards', this.courseCards);
  }

  onEditCourses(): void {
    this.courses.push(COURSES[0]);
  }
}
