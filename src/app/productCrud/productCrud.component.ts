import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { producto } from '../models/producto.model';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productCrud',
  templateUrl: './productCrud.component.html',
  styleUrls: ['./productCrud.component.css']
})
export class ProductCrudComponent implements OnInit {
   ;

  constructor(private servicio : ProductService,private router: Router) { }

  name!: string;
  inventory!: number ;
  min!: number ;
  max!: number ;
  idproducts!: number ;

  ngOnInit() {
  }

  redirectHome(){
    this.router.navigate(['crud']);
  }
  crear() {
    this.crearProducto();
  }
  crearProducto() {
    var formulario: producto = {
      name: this.name,
      inventory: this.inventory,
      enabled : "true",
      min: this.min,
      max: this.max,
      idproducts:this.idproducts
    };
    const inventorynum=formulario.inventory
    if(inventorynum==0) {
      formulario.enabled="false"
    }
    this.servicio.createProduct(formulario).subscribe();

    this.name = '';
    this.inventory = 0;
    this.min = 0;
    this.max = 0;
    this.idproducts=0
    Swal.fire('el producto ha sido Creado con Exito')
    this.redirectHome()
  }
  delete(){
    this.servicio.deleteProduct(this.idproducts).subscribe();
    Swal.fire('el producto ha sido eliminado exitosamente')
    this.redirectHome()

  }


  update(){
    const id = this.idproducts;
    const formulario: producto = {
      name: this.name,
      inventory: this.inventory,
      enabled : "true",
      min: this.min,
      max: this.max,
      idproducts:this.idproducts
    };
    Swal.fire('el producto '+(formulario.name)+ " ha sido modificado exitosamente")

    this.servicio.updateProduct(id,formulario).subscribe();
    this.name = '';
    this.inventory = 0;
    this.min = 0;
    this.max = 0;
    this.idproducts=0


    this.redirectHome()



  }
}
