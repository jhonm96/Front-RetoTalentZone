import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoProductosComponent } from './listadoProductos/listadoProductos.component';
import { ProductCrudComponent } from './productCrud/productCrud.component';
import { HistorialComprasComponent } from './historialCompras/historialCompras.component';
import { CarritoComprasComponent } from './carritoCompras/carritoCompras.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
      ListadoProductosComponent,
      ProductCrudComponent,
      HistorialComprasComponent,
      CarritoComprasComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
