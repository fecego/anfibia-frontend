import { TestBed } from '@angular/core/testing';

import { CuentaActiveGuardGuard } from './cuenta-active-guard.guard';

describe('CuentaActiveGuardGuard', () => {
  let guard: CuentaActiveGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CuentaActiveGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
