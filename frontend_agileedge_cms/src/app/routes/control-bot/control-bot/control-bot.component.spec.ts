import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlBot } from './control-bot.component';

describe('DashboardComponent', () => {
  let component: ControlBot;
  let fixture: ComponentFixture<ControlBot>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlBot ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlBot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
