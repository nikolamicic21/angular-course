import {Component, Inject, Injector, OnInit} from '@angular/core';
import {Course} from './courses/model/course';
import {Observable} from 'rxjs';
import {CoursesService} from './courses/services/courses.service';
import {APP_CONFIG_TOKEN, AppConfig} from './config';
import {createCustomElement} from '@angular/elements';
import {CourseTitleComponent} from './course-title/course-title.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    @Inject(APP_CONFIG_TOKEN) private appConfig: AppConfig,
    private injector: Injector
  ) {
  }

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
    const courseTitleElement = createCustomElement(CourseTitleComponent, {injector: this.injector});
    customElements.define('course-title', courseTitleElement);
  }

  save(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(() => console.log('Course Saved!'));
  }
}
