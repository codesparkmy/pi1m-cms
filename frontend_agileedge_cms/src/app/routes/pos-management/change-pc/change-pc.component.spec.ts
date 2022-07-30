import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePcComponent } from './change-pc.component';

describe('ChangePcComponent', () => {
  let component: ChangePcComponent;
  let fixture: ComponentFixture<ChangePcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
