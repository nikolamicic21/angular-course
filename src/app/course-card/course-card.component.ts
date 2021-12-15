import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterContentInit, AfterViewInit {

  @Input()
  course: Course;

  @Input()
  index: number;

  @Output()
  private courseSelected = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent)
  courseImage: CourseImageComponent;

  @ContentChildren(CourseImageComponent)
  courseImages: QueryList<CourseImageComponent>;

  @ContentChild('container')
  container;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log('courseCardComponent with ContentChild', this.courseImage);
    console.log('courseCardComponent with ContentChildren', this.courseImages);
  }

  ngAfterViewInit(): void {
    console.log(this.container);
  }

  onCourseViewed(): void {
    console.log(`card component - button clicked..`);
    this.courseSelected.emit(this.course);
  }

  cardClasses(): string[] {
    const classes = [];
    if (this.course.category === 'BEGINNER') {
      classes.push('beginner');
    }

    return classes;
  }

  cardStyles(): { [className: string]: string } {
    return {
      'text-decoration': 'underline'
    };
  }
}
