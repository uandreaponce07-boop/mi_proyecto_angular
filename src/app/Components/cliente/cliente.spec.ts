import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http'; // <--- IMPORTA ESTO
import { provideHttpClientTesting } from '@angular/common/http/testing'; // <--- IMPORTA ESTO

import { Cliente } from './cliente';

describe('Articulo', () => {
  let component: Cliente;
  let fixture: ComponentFixture<Cliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cliente],
      // AGREGA ESTA SECCIÓN DE PROVIDERS:
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cliente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});