import { TestBed } from '@angular/core/testing';

import { ColDataService } from './col-data.service';

describe('ColDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColDataService = TestBed.get(ColDataService);
    expect(service).toBeTruthy();
  });
});
