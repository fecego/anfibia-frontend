import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogv1Component } from './blogv1.component';

describe('Blogv1Component', () => {
  let component: Blogv1Component;
  let fixture: ComponentFixture<Blogv1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blogv1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blogv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
