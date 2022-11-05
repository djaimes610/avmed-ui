import { TestBed } from '@angular/core/testing';

import { ReportClientService } from './report-client.service';

describe('ReportClientService', () => {
  let service: ReportClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
