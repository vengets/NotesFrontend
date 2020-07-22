import { TestBed } from '@angular/core/testing';

import { AuthenticatedusersGuard } from './authenticatedusers.guard';

describe('AuthenticatedusersGuard', () => {
  let guard: AuthenticatedusersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticatedusersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
