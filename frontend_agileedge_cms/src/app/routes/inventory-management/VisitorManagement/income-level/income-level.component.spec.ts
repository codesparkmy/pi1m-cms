import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeLevelComponent } from './income-level.component';

describe('IncomeLevelComponent', () => {
  let component: IncomeLevelComponent;
  let fixture: ComponentFixture<IncomeLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
