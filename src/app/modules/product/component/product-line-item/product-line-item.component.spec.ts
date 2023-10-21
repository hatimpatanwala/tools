import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLineItemComponent } from './product-line-item.component';

describe('ProductLineItemComponent', () => {
  let component: ProductLineItemComponent;
  let fixture: ComponentFixture<ProductLineItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductLineItemComponent]
    });
    fixture = TestBed.createComponent(ProductLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
