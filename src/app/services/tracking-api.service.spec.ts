import { TestBed } from '@angular/core/testing';

import { TrackingApiService } from './tracking-api.service';

describe('TrackingApiService', () => {
  let service: TrackingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
