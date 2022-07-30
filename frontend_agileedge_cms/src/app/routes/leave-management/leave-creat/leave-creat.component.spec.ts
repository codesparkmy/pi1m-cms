import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveCreatComponent } from './leave-creat.component';

describe('LeaveCreatComponent', () => {
  let component: LeaveCreatComponent;
  let fixture: ComponentFixture<LeaveCreatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveCreatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
