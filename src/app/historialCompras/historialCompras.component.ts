import { Component, OnInit } from '@angular/core';
import { ventas } from '../models/ventas.model';
import { SalesServices } from '../services/sales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historialCompras',
  templateUrl: './historialCompras.component.html',
  styleUrls: ['./historialCompras.component.css']
})
export class HistorialComprasComponent implements OnInit {

  constructor(
    private router: Router,
    private servicio : SalesServices
  ) { }

  ngOnInit() {
    this.getAll()
  }

  ventas!: ventas[];


  getAll() {
    this.servicio.getAllSales().subscribe((ventas)=> {
      this.ventas=ventas; console.log(this.ventas);})
  }

}
