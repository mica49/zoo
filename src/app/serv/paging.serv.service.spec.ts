import { TestBed } from '@angular/core/testing';

import { PagingService } from './paging.serv.service';

describe('Paging.ServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagingService = TestBed.get(PagingService);
    expect(service).toBeTruthy();
  });
});
