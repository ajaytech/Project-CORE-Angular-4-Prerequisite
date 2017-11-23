import { TestBed, inject } from '@angular/core/testing';

import { AnimalEditService } from './animal-edit.service';

describe('AnimalEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimalEditService]
    });
  });

  it('should be created', inject([AnimalEditService], (service: AnimalEditService) => {
    expect(service).toBeTruthy();
  }));
});
