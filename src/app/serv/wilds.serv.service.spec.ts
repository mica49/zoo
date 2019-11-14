import { TestBed } from '@angular/core/testing';

import { WildsService } from './wilds.serv.service';

describe('Wilds.ServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WildsService = TestBed.get(WildsService);
    expect(service).toBeTruthy();
  });
});
