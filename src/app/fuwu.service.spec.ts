import { TestBed, inject } from '@angular/core/testing';

import { FuwuService } from './fuwu.service';

describe('FuwuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FuwuService]
    });
  });

  it('should be created', inject([FuwuService], (service: FuwuService) => {
    expect(service).toBeTruthy();
  }));
});
