import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseInventoryComponent } from './expense-inventory.component';

describe('ExpenseInventoryComponent', () => {
  let component: ExpenseInventoryComponent;
  let fixture: ComponentFixture<ExpenseInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
