import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course: Course;
  @Input() cardIndex: number;
  @Output() courseSelected = new EventEmitter<Course>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onViewCourse(): void {
    console.log(`onViewCourse...`);
    this.courseSelected.emit(this.course);
  }

  cardClasses(): string[] {
    if (this.course.category === 'BEGINNER') {
      return ['beginner'];
    } else {
      return [];
    }
  }

  cardStyles(): { [style: string]: any } {
    return {'background-image': `url(${this.course.iconUrl})`};
  }
}
