import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonmemberLandingComponent } from './nonmember-landing.component';

describe('NonmemberLandingComponent', () => {
  let component: NonmemberLandingComponent;
  let fixture: ComponentFixture<NonmemberLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonmemberLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonmemberLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
