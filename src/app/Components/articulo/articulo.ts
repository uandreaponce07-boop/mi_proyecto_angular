import { Component, OnInit } from '@angular/core';
import { ServiciosArticulo } from '../../Services/servicios-articulo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articulo',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './articulo.html',
  styleUrl: './articulo.css'
})
export class Articulo implements OnInit {
 Numero: any;
 Nombre: any;
 idFamilia: any;
 Costo: any;
 Precio: any;
 Marca: any;
 Porciento: any;
 Entidad: any;
 ngOnInit(): void {
  
}

constructor(
   private SrvArticulo: ServiciosArticulo
)
{
   
}

Consultar()
{
debugger;

this.SrvArticulo.Consultar ( this.Numero ).subscribe (
data => {
debugger
this.Entidad = data;
this.Numero = this.Entidad.numero;
this.Nombre = this.Entidad.nombre;
this.idFamilia = this.Entidad.idFamilia;
this.Costo = this.Entidad.costo;
this.Precio = this.Entidad.precio;
this.Marca = this.Entidad.marca;
this.Porciento = this.Entidad.porciento;
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
    idFamilia: this.idFamilia,
    Costo: this.Costo,
    Precio: this.Precio,
    Marca: this.Marca,
    Porciento: this.Porciento
  }
  this.SrvArticulo.Guardar ( this.Entidad ).subscribe (
data => {

} ,
error => {

} ,
( ) => {
  this.Numero=null;
  this.Nombre=null;
  this.idFamilia=null;
  this.Costo=null;
  this.Precio=null;
  this.Marca=null;
  this.Porciento=null;
}
)
} 

Modificar()
{
    this.Entidad = {
    Numero: this.Numero,
    Nombre: this.Nombre,
    idFamilia: this.idFamilia,
    Costo: this.Costo,
    Precio: this.Precio,
    Marca: this.Marca,
    Porciento: this.Porciento
  
  }
  this.SrvArticulo.Modificar ( this.Entidad ).subscribe (
data => {

} ,
error => {

} ,
( ) => {
  this.Numero=null;
  this.Nombre=null;
  this.idFamilia=null;
  this.Costo=null;
  this.Precio=null;
  this.Marca=null;
  this.Porciento=null;
}
)
} 

Borrar()
{
   
  this.SrvArticulo.Borrar ( this.Numero ).subscribe (
data => {

} ,
error => {

} ,
( ) => {
  this.Numero=null;
  this.Nombre=null;
  this.idFamilia=null;
  this.Costo=null;
  this.Precio=null;
  this.Marca=null;
  this.Porciento=null;
}
)
} 

}
