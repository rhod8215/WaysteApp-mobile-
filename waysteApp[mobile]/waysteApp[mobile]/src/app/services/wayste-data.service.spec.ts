import { TestBed } from '@angular/core/testing';

import { WaysteDataService } from './wayste-data.service';

describe('WaysteDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaysteDataService = TestBed.get(WaysteDataService);
    expect(service).toBeTruthy();
  });
});
