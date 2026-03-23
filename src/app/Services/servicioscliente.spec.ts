import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ServiciosCliente } from './servicioscliente';

describe('ServiciosCliente', () => {
  let service: ServiciosCliente;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // AQUÍ ES DONDE VAN:
      providers: [
        ServiciosCliente,           // Tu servicio
        provideHttpClient(),        // El cliente HTTP real
        provideHttpClientTesting()  // La herramienta para simular respuestas
      ]
    });
    service = TestBed.inject(ServiciosCliente);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});