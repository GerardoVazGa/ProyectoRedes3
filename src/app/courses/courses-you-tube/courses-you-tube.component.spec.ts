import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesYouTubeComponent } from './courses-you-tube.component';

describe('CoursesYouTubeComponent', () => {
  let component: CoursesYouTubeComponent;
  let fixture: ComponentFixture<CoursesYouTubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesYouTubeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesYouTubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
