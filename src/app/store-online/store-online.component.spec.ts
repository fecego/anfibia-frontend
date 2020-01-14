import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreOnlineComponent } from './store-online.component';

describe('StoreOnlineComponent', () => {
  let component: StoreOnlineComponent;
  let fixture: ComponentFixture<StoreOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
