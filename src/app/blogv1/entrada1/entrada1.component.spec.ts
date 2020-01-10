import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Entrada1Component } from './entrada1.component';

describe('Entrada1Component', () => {
  let component: Entrada1Component;
  let fixture: ComponentFixture<Entrada1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Entrada1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Entrada1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
