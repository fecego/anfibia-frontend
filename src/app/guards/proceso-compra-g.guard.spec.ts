import { TestBed } from '@angular/core/testing';

import { ProcesoCompraGGuard } from './proceso-compra-g.guard';

describe('ProcesoCompraGGuard', () => {
  let guard: ProcesoCompraGGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProcesoCompraGGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
