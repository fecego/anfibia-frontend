import { TestBed } from '@angular/core/testing';

import { ForgetPasswordGuardGuard } from './forget-password-guard.guard';

describe('ForgetPasswordGuardGuard', () => {
  let guard: ForgetPasswordGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ForgetPasswordGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
