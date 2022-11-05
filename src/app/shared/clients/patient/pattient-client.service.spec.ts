import { TestBed } from '@angular/core/testing';

import { PattientClientService } from './pattient-client.service';

describe('PattientClientService', () => {
  let service: PattientClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PattientClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
