import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Header } from 'primeng/api';

@Injectable({
providedIn: 'root'
})

export class ServiciosCliente {

constructor (private Http: HttpClient)
{

}

Ruta = "http://localhost:5661/Api/";

Consultar(idCliente : any)
{
let Controller = "Cliente";
const fullPath = this.Ruta + Controller + '/' + idCliente;

let Headers = new HttpHeaders().set( "Accept", "application/json" );

return this.Http.get( fullPath,
{
headers : Headers,
responseType : 'json'
}
)

}

ConsultarClientes()
{
  let Controller="Cliente";
  let Headers= new HttpHeaders().set("Accept", "application/json") ;
  return this.Http.get(this.Ruta + Controller, 
    {
    headers: Headers,
    responseType:'json'
  })
}

public Guardar ( Entidad : any ) {

let Controller = 'Cliente';

let Headers = new HttpHeaders().set( "Accept", "application/json" );

return this.Http.post( this.Ruta + Controller, Entidad,
{
headers : Headers,
responseType : 'json'
}
)
}

public Modificar ( Entidad : any ) {

let Controller = 'Cliente';
let idEnRuta = Entidad.Numero; 
let Headers = new HttpHeaders().set( "Accept", "application/json" );

return this.Http.put( this.Ruta + Controller + "/" + idEnRuta, Entidad,
        {
          headers : Headers,
          responseType : 'json'
        }
)
}


public Borrar(idCliente : any)
{
let Controller = "Cliente";

let Headers = new HttpHeaders().set( "Accept", "application/json" );

 return this.Http.delete( this.Ruta + Controller + "/" + idCliente,
      {
        headers : Headers,
        responseType : 'json'
      }
)

}

}

