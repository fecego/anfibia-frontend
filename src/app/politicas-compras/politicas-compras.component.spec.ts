import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasComprasComponent } from './politicas-compras.component';

describe('PoliticasComprasComponent', () => {
  let component: PoliticasComprasComponent;
  let fixture: ComponentFixture<PoliticasComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticasComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticasComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
