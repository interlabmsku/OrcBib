import { TestBed } from '@angular/core/testing';

import { OrcidService } from './orcid.service';

describe('OrcidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrcidService = TestBed.get(OrcidService);
    expect(service).toBeTruthy();
  });
});
