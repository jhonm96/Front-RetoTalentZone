import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComprasComponent } from './carritoCompras/carritoCompras.component';
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
    path: 'carritoCompras',
    component: CarritoComprasComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
