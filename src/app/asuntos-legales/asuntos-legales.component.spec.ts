import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsuntosLegalesComponent } from './asuntos-legales.component';

describe('AsuntosLegalesComponent', () => {
  let component: AsuntosLegalesComponent;
  let fixture: ComponentFixture<AsuntosLegalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsuntosLegalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsuntosLegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
