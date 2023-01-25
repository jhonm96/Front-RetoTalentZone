import { Component, Input, OnInit } from '@angular/core';
import { producto } from '../models/producto.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { ventas } from '../models/ventas.model';
import { productoCarrito } from '../models/productoCarrito.model';
import { SalesServices } from '../services/sales.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-listadoProductos',
  templateUrl: './listadoProductos.component.html',
  styleUrls: ['./listadoProductos.component.css']
})
export class ListadoProductosComponent implements OnInit {



  constructor(
    private servicio : ProductService,
    private servicioVentas : SalesServices,
    private router: Router
  ) {   }

  ngOnInit():void{
    this.getAll()
  }

  productos!: producto[];



  getAll() {
    this.servicio.getAllProducts().subscribe((productos)=> {
      this.productos=productos;})
  }

  updateredirect(){
    this.router.navigate(['crud']);
  }


  id!: number;
  idtype!: string;
  clientName!: string;
  @Input() products: productoCarrito[] = [];

  crearVenta() {
    const bodyFormulario: ventas = {
      idclient: this.id,
      idtype: this.idtype,
      clientname: this.clientName,
      products: this.products,
    };
    console.log(bodyFormulario);

    this.servicioVentas.createNewSale(bodyFormulario).subscribe();
    this.products = []


  }
  agregarProductoCarro(productName: any) {
    var cantidadASumarAlCarro = prompt(
      'Ingrese la cantidad que desea comprar de este producto'
    );

    var datoFormateado = parseInt(cantidadASumarAlCarro!);

    const productoalcarrito: productoCarrito = {
      productName: productName,
      quantity: datoFormateado,
    };

    let key: boolean = false;

    this.products.forEach((productocompra) => {
      if (productocompra.productName === productName) {
        if (true) {
          key = true;
          productocompra.productName = productName;
          productocompra.quantity = datoFormateado;
        }
      }
    });
    if (key == false) {
      this.products.push(productoalcarrito);
      key = false;
    }
  }
  quitarProductoCarrito(id: any) {
    let indice = this.products.filter(elemento => elemento.productName != id)
    this.products = indice
    console.log(this.products)

  }
}



