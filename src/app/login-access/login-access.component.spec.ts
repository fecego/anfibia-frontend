import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAccessComponent } from './login-access.component';

describe('LoginAccessComponent', () => {
  let component: LoginAccessComponent;
  let fixture: ComponentFixture<LoginAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
