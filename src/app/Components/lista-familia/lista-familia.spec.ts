import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http'; // <--- IMPORTA ESTO
import { provideHttpClientTesting } from '@angular/common/http/testing'; // <--- IMPORTA ESTO

import { ListaFamilia } from './lista-familia';

describe('ListaFamilia', () => {
  let component: ListaFamilia;
  let fixture: ComponentFixture<ListaFamilia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaFamilia],
      // AGREGA ESTA SECCIÓN DE PROVIDERS:
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFamilia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});