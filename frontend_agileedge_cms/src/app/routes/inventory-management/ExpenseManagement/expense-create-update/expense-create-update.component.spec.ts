import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCreateUpdateComponent } from './expense-create-update.component';

describe('ExpenseCreateUpdateComponent', () => {
  let component: ExpenseCreateUpdateComponent;
  let fixture: ComponentFixture<ExpenseCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
