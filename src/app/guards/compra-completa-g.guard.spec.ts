import { TestBed } from '@angular/core/testing';

import { CompraCompletaGGuard } from './compra-completa-g.guard';

describe('CompraCompletaGGuard', () => {
  let guard: CompraCompletaGGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CompraCompletaGGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
