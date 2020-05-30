import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInicioSesionComponent } from './modal-inicio-sesion.component';

describe('ModalInicioSesionComponent', () => {
  let component: ModalInicioSesionComponent;
  let fixture: ComponentFixture<ModalInicioSesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInicioSesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
