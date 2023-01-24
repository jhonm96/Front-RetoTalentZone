import { Component, OnInit, Input } from '@angular/core';
import { producto } from '../models/producto.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productCrud',
  templateUrl: './productCrud.component.html',
  styleUrls: ['./productCrud.component.css']
})
export class ProductCrudComponent implements OnInit {
   ;

  constructor(private servicio : ProductService) { }



  ngOnInit() {
  }


  crear() {
    this.crearProducto();
  }

  name!: string;
  inventory!: number ;
  min!: number ;
  max!: number ;

  crearProducto() {
    const bodyFormulario: producto = {
      name: this.name,
      inventory: this.inventory,
      enabled : "true",
      min: this.min,
      max: this.max,
    };

    this.servicio.createProduct(bodyFormulario).subscribe();

    this.name = '';
    this.inventory = 0;
    this.min = 0;
    this.max = 0;
  }

}
