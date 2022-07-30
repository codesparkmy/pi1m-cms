import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorInventoryComponent } from './visitor-inventory.component';

describe('VisitorInventoryComponent', () => {
  let component: VisitorInventoryComponent;
  let fixture: ComponentFixture<VisitorInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
