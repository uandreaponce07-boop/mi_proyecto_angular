import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ServiciosArticulo } from './servicios-articulo';

describe('ServiciosArticulo', () => {
  let service: ServiciosArticulo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // AQUÍ ES DONDE VAN:
      providers: [
        ServiciosArticulo,           // Tu servicio
        provideHttpClient(),        // El cliente HTTP real
        provideHttpClientTesting()  // La herramienta para simular respuestas
      ]
    });
    service = TestBed.inject(ServiciosArticulo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});