import { TestBed, inject } from '@angular/core/testing';

import { FetchDogsService } from './fetch-dogs.service';

describe('FetchDogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchDogsService]
    });
  });

  it('should be created', inject([FetchDogsService], (service: FetchDogsService) => {
    expect(service).toBeTruthy();
  }));
});
