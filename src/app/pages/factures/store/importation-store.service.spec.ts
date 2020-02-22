import { TestBed } from '@angular/core/testing';

import { ImportationStoreService } from './importation-store.service';

describe('ImportationStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImportationStoreService = TestBed.get(ImportationStoreService);
    expect(service).toBeTruthy();
  });
});
