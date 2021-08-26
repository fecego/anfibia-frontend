import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessFinalComponent } from './process-final.component';

describe('ProcessFinalComponent', () => {
  let component: ProcessFinalComponent;
  let fixture: ComponentFixture<ProcessFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
