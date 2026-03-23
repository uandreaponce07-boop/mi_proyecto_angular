import { Component } from '@angular/core';
import { ServiciosCliente } from '../../Services/servicioscliente';
import { CommonModule } from '@angular/common';
import { Draggable } from 'primeng/dragdrop';


@Component({
  selector: 'app-lista-cliente',
  imports: [CommonModule],
  templateUrl: './lista-cliente.html',
  styleUrl: './lista-cliente.css',
})
export class ListaCliente {

  Lista: any;
  constructor(private SrvCliente:ServiciosCliente)
  {

  }
  ConsultarClientes()
  {
    debugger;
    
    this.SrvCliente.ConsultarClientes().subscribe(
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
