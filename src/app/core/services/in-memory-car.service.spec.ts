import { TestBed } from '@angular/core/testing';

import { InMemoryCarService } from './in-memory-car.service';

describe('InMemoryCarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryCarService = TestBed.get(InMemoryCarService);
    expect(service).toBeTruthy();
  });
});
