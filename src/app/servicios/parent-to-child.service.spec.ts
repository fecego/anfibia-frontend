import { TestBed } from '@angular/core/testing';

import { ParentToChildService } from './parent-to-child.service';

describe('ParentToChildService', () => {
  let service: ParentToChildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentToChildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
