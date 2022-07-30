import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveInventoryComponent } from './leave-inventory.component';

describe('LeaveInventoryComponent', () => {
  let component: LeaveInventoryComponent;
  let fixture: ComponentFixture<LeaveInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
