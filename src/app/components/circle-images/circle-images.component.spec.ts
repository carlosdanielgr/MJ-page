import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleImagesComponent } from './circle-images.component';

describe('CircleImagesComponent', () => {
  let component: CircleImagesComponent;
  let fixture: ComponentFixture<CircleImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircleImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircleImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
