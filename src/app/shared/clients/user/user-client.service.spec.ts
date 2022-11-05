import { TestBed } from '@angular/core/testing';

import { UserClienService } from './user-client.service';

describe('UserService', () => {
  let service: UserClienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserClienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
