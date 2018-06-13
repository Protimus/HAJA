import { TestBed, inject } from '@angular/core/testing';

import { VelocidadeService } from './velocidade.service';

describe('VelocidadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VelocidadeService]
    });
  });

  it('should be created', inject([VelocidadeService], (service: VelocidadeService) => {
    expect(service).toBeTruthy();
  }));
});
