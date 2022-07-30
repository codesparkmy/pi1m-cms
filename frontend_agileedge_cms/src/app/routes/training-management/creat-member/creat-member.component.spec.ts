import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatTrainingComponent } from '../creat-training/creat-training.component';

describe('CreatTrainingComponent', () => {
  let component: CreatTrainingComponent;
  let fixture: ComponentFixture<CreatTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
