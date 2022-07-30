import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCreatFoodComponent } from './inventory-creat-food.component';

describe('InventoryCreatFoodComponent', () => {
  let component: InventoryCreatFoodComponent;
  let fixture: ComponentFixture<InventoryCreatFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryCreatFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryCreatFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
