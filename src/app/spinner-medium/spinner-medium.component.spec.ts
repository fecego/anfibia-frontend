import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerMediumComponent } from './spinner-medium.component';

describe('SpinnerMediumComponent', () => {
  let component: SpinnerMediumComponent;
  let fixture: ComponentFixture<SpinnerMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
