import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalstoreComponent } from './localstore.component';

describe('LocalstoreComponent', () => {
  let component: LocalstoreComponent;
  let fixture: ComponentFixture<LocalstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
