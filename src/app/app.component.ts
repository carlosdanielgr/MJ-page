import { Component } from '@angular/core';
import { MainContentComponent } from './components/main-content/main-content.component';
import { CircleImagesComponent } from './components/circle-images/circle-images.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MyHistoryComponent } from './components/my-history/my-history.component';
import { CourseDescriptionComponent } from './components/course-description/course-description.component';
import { CoursesComponent } from './components/courses/courses.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MainContentComponent,
    CircleImagesComponent,
    AboutMeComponent,
    MyHistoryComponent,
    CourseDescriptionComponent,
    CoursesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
