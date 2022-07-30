import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeManagementComponent } from './cafe-management.component';

describe('CafeManagementComponent', () => {
  let component: CafeManagementComponent;
  let fixture: ComponentFixture<CafeManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
