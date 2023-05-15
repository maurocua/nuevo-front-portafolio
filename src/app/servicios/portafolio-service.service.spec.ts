import { TestBed } from '@angular/core/testing';

import { PortafolioServiceService } from './portafolio-service.service';

describe('PortafolioServiceService', () => {
  let service: PortafolioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortafolioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
