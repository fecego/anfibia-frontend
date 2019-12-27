import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfibiaMainComponent } from './anfibia-main.component';


describe('AnfibiaMainComponent', () => {
  let component: AnfibiaMainComponent;
  let fixture: ComponentFixture<AnfibiaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnfibiaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfibiaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
