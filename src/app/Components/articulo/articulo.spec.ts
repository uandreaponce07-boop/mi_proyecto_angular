import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http'; // <--- IMPORTA ESTO
import { provideHttpClientTesting } from '@angular/common/http/testing'; // <--- IMPORTA ESTO

import { Articulo } from './articulo';

describe('Articulo', () => {
  let component: Articulo;
  let fixture: ComponentFixture<Articulo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Articulo],
      // AGREGA ESTA SECCIÓN DE PROVIDERS:
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Articulo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});