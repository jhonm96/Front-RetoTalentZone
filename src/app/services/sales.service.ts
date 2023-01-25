import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ventas } from '../models/ventas.model';

@Injectable({
  providedIn: 'root',
})
export class SalesServices {

constructor(private http: HttpClient) { }

getAllSales():Observable<ventas[]>{
  return this.http.get<ventas[]>(`http://localhost:8080/history/`);
}


createNewSale(Formulario : ventas):Observable<ventas> {console.log(Formulario)
  return this.http.post('http://localhost:8080/createSale/',Formulario,{headers: new HttpHeaders({'Content-Type': 'application/json',}),}
  );
}
}
