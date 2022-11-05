import { TestBed } from '@angular/core/testing';

import { MedicineClientService } from './medicine-client.service';

describe('MedicineClientService', () => {
  let service: MedicineClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
