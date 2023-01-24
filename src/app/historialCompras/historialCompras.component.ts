import { Component, OnInit } from '@angular/core';
import { producto } from '../models/producto.model';
import { ventas } from '../models/ventas.model';
import { SalesServices } from '../services/sales.service';

@Component({
  selector: 'app-historialCompras',
  templateUrl: './historialCompras.component.html',
  styleUrls: ['./historialCompras.component.css']
})
export class HistorialComprasComponent implements OnInit {

  constructor(
    private servicio : SalesServices
  ) { }

  ngOnInit() {
    this.getAll()
  }

  ventas!: ventas[];


  getAll() {
    this.servicio.getAllProducts().subscribe((ventas)=> {
      this.ventas=ventas; console.log(this.ventas);})
  }

}
