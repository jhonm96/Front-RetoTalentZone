import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { producto } from '../models/producto.model';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

constructor(private http: HttpClient) { }



getAllProducts():Observable<producto[]>{
  return this.http.get<producto[]>(`http://localhost:8080/list/`);
}

createProduct(bodyFormulario : producto):Observable<producto> {console.log(bodyFormulario)
  return this.http.post('http://localhost:8080/create/',bodyFormulario,{headers: new HttpHeaders({'Content-Type': 'application/json',}),}
  );
}

}
