import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesUdemyComponent } from './courses-udemy.component';

describe('CoursesUdemyComponent', () => {
  let component: CoursesUdemyComponent;
  let fixture: ComponentFixture<CoursesUdemyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesUdemyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesUdemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
