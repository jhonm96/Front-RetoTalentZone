import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialComprasComponent } from './historialCompras/historialCompras.component';
import { ListadoProductosComponent } from './listadoProductos/listadoProductos.component';
import { ProductCrudComponent } from './productCrud/productCrud.component';

const routes: Routes = [
  { path: '',
  component: ListadoProductosComponent
},
  {
    path: 'crud',
    component: ProductCrudComponent,
},
{
  path: 'historial',
  component: HistorialComprasComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
