import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonmemberEditComponent } from './nonmember-edit.component';

describe('NonmemberEditComponent', () => {
  let component: NonmemberEditComponent;
  let fixture: ComponentFixture<NonmemberEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonmemberEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonmemberEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
