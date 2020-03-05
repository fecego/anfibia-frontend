import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasDevolucionesComponent } from './politicas-devoluciones.component';

describe('PoliticasDevolucionesComponent', () => {
  let component: PoliticasDevolucionesComponent;
  let fixture: ComponentFixture<PoliticasDevolucionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticasDevolucionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticasDevolucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
