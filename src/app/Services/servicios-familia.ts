import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Header } from 'primeng/api';


@Injectable({
  providedIn: 'root'
})
export class ServiciosFamilia {

  constructor (private Http: HttpClient)
{

}


  Ruta = " http://localhost:5661/Api/";
  
Consultar(idFamilia : any)
{
let Controller = "Familia";
const fullPath = this.Ruta + Controller + '/' + idFamilia;

let Headers = new HttpHeaders().set( "Accept", "application/json" );

return this.Http.get( fullPath,
{
headers : Headers,
responseType : 'json'
}
)

}

ConsultarFamilias()
{
  let Controller="Familia";
  let Headers= new HttpHeaders().set("Accept", "application/json") ;
  return this.Http.get(this.Ruta + Controller, 
    {
    headers: Headers,
    responseType:'json'
  })
}

public Guardar ( Entidad : any ) {

let Controller = 'Familia';

let Headers = new HttpHeaders().set( "Accept", "application/json" );

return this.Http.post( this.Ruta + Controller, Entidad,
{
headers : Headers,
responseType : 'json'
}
)
}

public Modificar ( Entidad : any ) {

let Controller = 'Familia';
let idEnRuta = Entidad.Numero; 
let Headers = new HttpHeaders().set( "Accept", "application/json" );

return this.Http.put( this.Ruta + Controller + "/" + idEnRuta, Entidad,
        {
          headers : Headers,
          responseType : 'json'
        }
)
}

public Borrar(idFamilia : any)
{
let Controller = "Familia";

let Headers = new HttpHeaders().set( "Accept", "application/json" );

 return this.Http.delete( this.Ruta + Controller + "/" + idFamilia,
      {
        headers : Headers,
        responseType : 'json'
      }
)

}

}

