import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogv2Component } from './blogv2.component';

describe('Blogv2Component', () => {
  let component: Blogv2Component;
  let fixture: ComponentFixture<Blogv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blogv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blogv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
