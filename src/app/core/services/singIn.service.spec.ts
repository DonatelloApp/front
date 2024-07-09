import { TestBed } from '@angular/core/testing';

import { SingInService } from './singIn.service';

describe('SingInService', () => {
  let service: SingInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
