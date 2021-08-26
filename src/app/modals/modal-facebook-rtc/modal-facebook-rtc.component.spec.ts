import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFacebookRTCComponent } from './modal-facebook-rtc.component';

describe('ModalFacebookRTCComponent', () => {
  let component: ModalFacebookRTCComponent;
  let fixture: ComponentFixture<ModalFacebookRTCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFacebookRTCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFacebookRTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
