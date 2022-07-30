import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeCreateComponent } from './cafe-create.component';

describe('CafeCreateComponent', () => {
  let component: CafeCreateComponent;
  let fixture: ComponentFixture<CafeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
