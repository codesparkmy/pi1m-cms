import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPcComponent } from './assign-pc.component';

describe('AssignPcComponent', () => {
  let component: AssignPcComponent;
  let fixture: ComponentFixture<AssignPcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignPcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
