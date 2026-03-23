import { Component } from '@angular/core';
import { ServiciosFamilia } from '../../Services/servicios-familia';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-familia',
  imports: [CommonModule],
  templateUrl: './lista-familia.html',
  styleUrl: './lista-familia.css'
})
export class ListaFamilia {
   Lista: any;
    constructor(private SrvFamilia:ServiciosFamilia)
    {
  
    }
    ConsultarFamilias()
    {
      debugger;
      
      this.SrvFamilia.ConsultarFamilias().subscribe(
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
