import { TestBed } from '@angular/core/testing';

import { Thin3ScaffoldApiService } from './thin3-scaffold-api.service';

describe('Thin3ScaffoldApiService', () => {
  let service: Thin3ScaffoldApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Thin3ScaffoldApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
