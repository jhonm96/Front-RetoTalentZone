import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ventas } from '../models/ventas.model';

@Injectable({
  providedIn: 'root',
})
export class SalesServices {

constructor(private http: HttpClient) { }

getAllProducts():Observable<ventas[]>{
  return this.http.get<ventas[]>(`http://localhost:8080/history/`);
}

// createProduct(bodyFormulario : ventas):Observable<ventas> {console.log(bodyFormulario)
//   return this.http.post('http://localhost:8080/create/',bodyFormulario,{headers: new HttpHeaders({'Content-Type': 'application/json',}),}
//   );
// }

}
