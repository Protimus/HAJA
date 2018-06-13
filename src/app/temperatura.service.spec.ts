import { TestBed, inject } from '@angular/core/testing';

import { VelmediaService } from './temperatura.service';

describe('VelmediaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemperaturaService]
    });
  });

  it('should be created', inject([TemperaturaService], (service: TemperaturaService) => {
    expect(service).toBeTruthy();
  }));
});
