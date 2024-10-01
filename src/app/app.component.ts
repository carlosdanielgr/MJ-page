import { Component } from '@angular/core';
import { MainContentComponent } from './components/main-content/main-content.component';
import { CircleImagesComponent } from './components/circle-images/circle-images.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainContentComponent, CircleImagesComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
