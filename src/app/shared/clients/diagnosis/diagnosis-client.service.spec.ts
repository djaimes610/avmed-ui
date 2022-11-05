import { TestBed } from '@angular/core/testing';

import { DiagnosisClientService } from './diagnosis-client.service';

describe('DiagnosisClientService', () => {
  let service: DiagnosisClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnosisClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
