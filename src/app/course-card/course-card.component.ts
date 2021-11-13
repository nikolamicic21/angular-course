import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  index: number;

  @Output()
  private courseSelected = new EventEmitter<Course>();

  constructor() {
  }

  ngOnInit(): void {
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
