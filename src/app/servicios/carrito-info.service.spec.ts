import { TestBed } from '@angular/core/testing';

import { CarritoInfoService } from './carrito-info.service';

describe('CarritoInfoService', () => {
  let service: CarritoInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
