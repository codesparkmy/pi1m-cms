import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCreatComponent } from './inventory-creat.component';

describe('InventoryCreatComponent', () => {
  let component: InventoryCreatComponent;
  let fixture: ComponentFixture<InventoryCreatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryCreatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
