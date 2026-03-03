import { TestBed } from '@angular/core/testing';

import { CovidServices } from './covid-services';

describe('CovidServices', () => {
  let service: CovidServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
