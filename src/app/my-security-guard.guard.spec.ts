import { TestBed } from '@angular/core/testing';

import { MySecurityGuardGuard } from './my-security-guard.guard';

describe('MySecurityGuardGuard', () => {
  let guard: MySecurityGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MySecurityGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
