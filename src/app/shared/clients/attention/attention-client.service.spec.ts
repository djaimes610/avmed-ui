import { TestBed } from '@angular/core/testing';

import { AttentionClientService } from './attention-client.service';

describe('AttentionClientService', () => {
  let service: AttentionClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttentionClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
