import { Cliente } from "./Components/cliente/cliente";
import { Familia } from "./Components/familia/familia";
import { Articulo } from "./Components/articulo/articulo";
import { ListaCliente } from "./Components/lista-cliente/lista-cliente";
import { ListaFamilia } from "./Components/lista-familia/lista-familia";
import { ListaArticulo } from "./Components/lista-articulo/lista-articulo";
import { Routes } from '@angular/router';

export const routes: Routes = [
     { path : 'Clientes', component: Cliente },
     { path : 'Familias', component: Familia },
     { path : 'Articulos', component: Articulo},
     { path : 'ListaCliente', component: ListaCliente},
     { path : 'ListaFamilia', component: ListaFamilia},
     { path : 'ListaArticulo', component: ListaArticulo}
];
