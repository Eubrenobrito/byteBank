import { TestBed } from '@angular/core/testing';

import { Transferencias } from './transferencia.service';

describe('ServiceTransferenciaService', () => {
  let service: Transferencias;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Transferencias);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
