import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaActiveComponent } from './cuenta-active.component';

describe('CuentaActiveComponent', () => {
  let component: CuentaActiveComponent;
  let fixture: ComponentFixture<CuentaActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
