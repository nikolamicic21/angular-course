import {Component, Inject, OnInit} from '@angular/core';
import {Course} from './courses/model/course';
import {Observable} from 'rxjs';
import {CoursesService} from './courses/services/courses.service';
import {APP_CONFIG_TOKEN, AppConfig} from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    @Inject(APP_CONFIG_TOKEN) private appConfig: AppConfig
  ) {
  }

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  save(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(() => console.log('Course Saved!'));
  }
}
