import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultActiveComponent } from './result-active.component';

describe('ResultActiveComponent', () => {
  let component: ResultActiveComponent;
  let fixture: ComponentFixture<ResultActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
