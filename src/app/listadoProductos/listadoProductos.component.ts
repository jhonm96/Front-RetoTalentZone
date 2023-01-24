import { Component, OnInit } from '@angular/core';
import { producto } from '../models/producto.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-listadoProductos',
  templateUrl: './listadoProductos.component.html',
  styleUrls: ['./listadoProductos.component.css']
})
export class ListadoProductosComponent implements OnInit {



  constructor(
    private servicio : ProductService,
    private router: Router
  ) {   }

  ngOnInit():void{
    this.getAll()
  }

  productos!: producto[];


  getAll() {
    this.servicio.getAllProducts().subscribe((productos)=> {
      this.productos=productos; console.log(this.productos);})
  }

  updateredirect(){
    this.router.navigate(['crud']);
  }
  carrito(){
    this.router.navigate(['carritoCompras']);
  }

  // https://www.gratistodo.com/wp-content/uploads/2017/08/Pokemon-Phone-Wallpapers-4.jpg
}


