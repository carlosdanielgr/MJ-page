import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MainContentComponent } from './components/main-content/main-content.component';
import { CircleImagesComponent } from './components/circle-images/circle-images.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MyHistoryComponent } from './components/my-history/my-history.component';
import { CourseDescriptionComponent } from './components/course-description/course-description.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { GarmentsComponent } from './components/garments/garments.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';

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
    ProductsComponent,
    ProductDescriptionComponent,
    BestSellersComponent,
    GarmentsComponent,
    FormComponent,
    FooterComponent,
    TutorialComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private readonly modalService: NgbModal) {}

  ngOnInit(): void {
    if (localStorage.getItem('form') !== 'true')
      this.modalService.open(ModalFormComponent, { centered: true });
  }
}
