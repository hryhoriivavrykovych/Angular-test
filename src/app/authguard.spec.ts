import { TestBed, async, inject } from '@angular/core/testing';

import { Authguard } from './authguard';

describe('AuthguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Authguard]
    });
  });

  it('should ...', inject([Authguard], (guard: Authguard) => {
    expect(guard).toBeTruthy();
  }));
});
