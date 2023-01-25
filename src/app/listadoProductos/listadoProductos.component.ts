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
  carrito(){
    this.router.navigate(['carritoCompras']);
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
  agregarProductoCarro(id: any) {
    var cantidadASumarAlCarro = prompt(
      'Ingrese la cantidad que desea comprar de este producto'
    );

    var datoFormateado = parseInt(cantidadASumarAlCarro!);

    const productoASumar: productoCarrito = {
      idProduct: id,
      quantity: datoFormateado,
    };

    let key: boolean = false;

    this.products.forEach((productito) => {
      if (productito.idProduct === id) {
        if (true) {
          key = true;
          productito.idProduct = id;
          productito.quantity = datoFormateado;
        }
      }
    });
    if (key == false) {
      this.products.push(productoASumar);
      key = false;
    }
  }
  quitarProductoCarrito(id: any) {
    let indice = this.products.filter(elemento => elemento.idProduct != id)
    this.products = indice
    console.log(this.products)

  }
}



