import { TestBed } from '@angular/core/testing';

import { ConnectionCheckService } from './connection-check.service';

describe('ConnectionCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectionCheckService = TestBed.get(ConnectionCheckService);
    expect(service).toBeTruthy();
  });
});
