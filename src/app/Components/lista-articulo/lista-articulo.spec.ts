import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http'; // <--- IMPORTA ESTO
import { provideHttpClientTesting } from '@angular/common/http/testing'; // <--- IMPORTA ESTO

import { ListaArticulo } from './lista-articulo';

describe('ListaArticulo', () => {
  let component: ListaArticulo;
  let fixture: ComponentFixture<ListaArticulo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaArticulo],
      // AGREGA ESTA SECCIÓN DE PROVIDERS:
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaArticulo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});