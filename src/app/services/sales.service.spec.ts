/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SalesServices } from './sales.service';

describe('Service: SalesServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesServices]
    });
  });

  it('should ...', inject([SalesServices], (service: SalesServices) => {
    expect(service).toBeTruthy();
  }));
});
