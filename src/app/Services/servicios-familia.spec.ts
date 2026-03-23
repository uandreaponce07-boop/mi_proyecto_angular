import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ServiciosFamilia } from './servicios-familia';

describe('ServiciosFamilia', () => {
  let service: ServiciosFamilia;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // AQUÍ ES DONDE VAN:
      providers: [
        ServiciosFamilia,           // Tu servicio
        provideHttpClient(),        // El cliente HTTP real
        provideHttpClientTesting()  // La herramienta para simular respuestas
      ]
    });
    service = TestBed.inject(ServiciosFamilia);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
