import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http'; // <--- IMPORTA ESTO
import { provideHttpClientTesting } from '@angular/common/http/testing'; // <--- IMPORTA ESTO

import { Familia } from './familia';

describe('Familia', () => {
  let component: Familia;
  let fixture: ComponentFixture<Familia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Familia],
      // AGREGA ESTA SECCIÓN DE PROVIDERS:
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Familia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});