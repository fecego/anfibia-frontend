import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosModalComponent } from './productos-modal.component';

describe('ProductosModalComponent', () => {
  let component: ProductosModalComponent;
  let fixture: ComponentFixture<ProductosModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
