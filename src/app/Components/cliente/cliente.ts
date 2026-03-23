import { Component, OnInit } from '@angular/core';
import { ServiciosCliente } from '../../Services/servicioscliente';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cliente',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './cliente.html',
  styleUrl: './cliente.css'
})
export class Cliente implements OnInit {
Numero : any;
Nombre: any;
Telefono: any;
CP: any;
Direccion:any;
Entidad: any;

ngOnInit(): void {
  
}

constructor(
   private SrvCliente: ServiciosCliente
)
{
   
}

Consultar()
{
debugger;

this.SrvCliente.Consultar ( this.Numero ).subscribe (
data => {
debugger
this.Entidad = data;
this.Numero = this.Entidad.numero;
this.Nombre = this.Entidad.nombre;
this.Telefono = this.Entidad.telefono;
this.CP = this.Entidad.cp;
this.Direccion = this.Entidad.direccion;
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
    Nombre: this.Nombre,
    CP: this.CP,
    Telefono: this.Telefono,
    Direccion: this.Direccion
  }
  this.SrvCliente.Guardar ( this.Entidad ).subscribe (
data => {

} ,
error => {

} ,
( ) => {
  this.Numero=null;
  this.Nombre=null;
  this.CP=null;
  this.Telefono=null;
  this.Direccion=null;
}
)
} 

Modificar()
{
    this.Entidad = {
    Numero: this.Numero,
    Nombre: this.Nombre,
    CP: this.CP,
    Telefono: this.Telefono,
    Direccion: this.Direccion
  }
  this.SrvCliente.Modificar ( this.Entidad ).subscribe (
data => {

} ,
error => {

} ,
( ) => {
  this.Numero=null;
  this.Nombre=null;
  this.CP=null;
  this.Telefono=null;
  this.Direccion=null;
}
)
} 

Borrar()
{
   
  this.SrvCliente.Borrar ( this.Numero ).subscribe (
data => {

} ,
error => {

} ,
( ) => {
  this.Numero=null;
  this.Nombre=null;
  this.CP=null;
  this.Telefono=null;
  this.Direccion=null;
}
)
} 


}