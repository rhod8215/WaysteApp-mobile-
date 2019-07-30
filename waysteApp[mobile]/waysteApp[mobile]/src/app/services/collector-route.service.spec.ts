import { TestBed } from '@angular/core/testing';

import { CollectorRouteService } from './collector-route.service';

describe('CollectorRouteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollectorRouteService = TestBed.get(CollectorRouteService);
    expect(service).toBeTruthy();
  });
});
