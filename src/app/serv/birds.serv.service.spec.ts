import { TestBed } from '@angular/core/testing';

import { BirdsService } from './birds.serv.service';

describe('Birds.ServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BirdsService = TestBed.get(BirdsService);
    expect(service).toBeTruthy();
  });
});
