import { TestBed } from '@angular/core/testing';

import { ValidationBuilderService } from './validation-builder.service';

describe('ValidationBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidationBuilderService = TestBed.get(ValidationBuilderService);
    expect(service).toBeTruthy();
  });
});
