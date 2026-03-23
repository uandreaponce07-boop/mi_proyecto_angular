import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiciosFamilia } from '../../Services/servicios-familia';

@Component({
  selector: 'app-familia',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './familia.html',
  styleUrl: './familia.css'
})
export class Familia implements OnInit{
Numero: any;
Nombre: any;
Entidad: any;
ngOnInit(): void {
  
}

constructor(
   private SrvFamilia: ServiciosFamilia
)
{
   
}

Consultar()
{
debugger;

this.SrvFamilia.Consultar ( this.Numero ).subscribe (
data => {
debugger
this.Entidad = data;
this.Numero = this.Entidad.numero;
this.Nombre = this.Entidad.nombre;
} ,
error => {

} ,
( ) => {
}
)
}

Grabar()
{
    this.Entidad = {
    Numero: this.Numero,
    Nombre: this.Nombre
  }
  this.SrvFamilia.Guardar ( this.Entidad ).subscribe (
data => {

} ,
error => {

} ,
( ) => {
  this.Numero=null;
  this.Nombre=null;
}
)
} 

Modificar()
{
    this.Entidad = {
    numero: this.Numero,
    nombre: this.Nombre
  }
  this.SrvFamilia.Modificar ( this.Entidad ).subscribe (
data => {

} ,
error => {

} ,
( ) => {
  this.Numero=null;
  this.Nombre=null;
}
)
} 


Borrar()
{
   
  this.SrvFamilia.Borrar ( this.Numero ).subscribe (
data => {

} ,
error => {

} ,
( ) => {
  this.Numero=null;
  this.Nombre=null;
}
)
} 

}
