import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { stickyAlertComponent } from './stickyAlert.component';

describe('stickyAlertComponent', () => {
  let component: stickyAlertComponent;
  let fixture: ComponentFixture<stickyAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ stickyAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(stickyAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
