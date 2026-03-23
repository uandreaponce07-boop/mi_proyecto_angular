import { Component } from '@angular/core';
import { ServiciosArticulo } from '../../Services/servicios-articulo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-articulo',
  imports: [CommonModule],
  templateUrl: './lista-articulo.html',
  styleUrl: './lista-articulo.css'
})
export class ListaArticulo {
  Lista: any;
    constructor(private SrvArticulo:ServiciosArticulo)
    {
  
    }
    ConsultarArticulos()
    {
      debugger;
      
      this.SrvArticulo.ConsultarArticulos().subscribe(
        data =>{
          this.Lista = data;
          console.log(this.Lista);
  
        },
        error =>{
  
        },
        () => {}
      )
      
    }

}
