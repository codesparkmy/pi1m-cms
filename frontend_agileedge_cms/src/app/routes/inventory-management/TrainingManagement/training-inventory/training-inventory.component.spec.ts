import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingInventoryComponent } from './training-inventory.component';

describe('TrainingInventoryComponent', () => {
  let component: TrainingInventoryComponent;
  let fixture: ComponentFixture<TrainingInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
