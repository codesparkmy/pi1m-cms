import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingTargetComponent } from './training-target.component';

describe('TrainingTargetComponent', () => {
  let component: TrainingTargetComponent;
  let fixture: ComponentFixture<TrainingTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
