import { TestBed } from '@angular/core/testing';

import { DataTableStoreService } from './data-table-store.service';

describe('DataTableStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataTableStoreService = TestBed.get(DataTableStoreService);
    expect(service).toBeTruthy();
  });
});
