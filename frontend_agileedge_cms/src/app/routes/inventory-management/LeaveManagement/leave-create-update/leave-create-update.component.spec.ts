import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveCreateUpdateComponent } from './leave-create-update.component';

describe('LeaveCreateUpdateComponent', () => {
  let component: LeaveCreateUpdateComponent;
  let fixture: ComponentFixture<LeaveCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
