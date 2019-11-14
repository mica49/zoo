import { TestBed } from '@angular/core/testing';

import { BeastsService } from './beasts.serv.service';

describe('Beasts.ServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeastsService = TestBed.get(BeastsService);
    expect(service).toBeTruthy();
  });
});
