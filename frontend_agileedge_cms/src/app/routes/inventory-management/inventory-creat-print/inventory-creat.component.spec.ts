import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCreatPrintComponent } from './inventory-creat-print.component';

describe('InventoryCreatPrintComponent', () => {
  let component: InventoryCreatPrintComponent;
  let fixture: ComponentFixture<InventoryCreatPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryCreatPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryCreatPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
