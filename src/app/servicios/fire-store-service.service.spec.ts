import { TestBed } from '@angular/core/testing';

import { FireStoreService } from './fire-store.service';

describe('FireStoreServiceService', () => {
  let service: FireStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
