import { Injectable } from '@angular/core';
import { producto } from '../models/producto.model';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

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

deleteProduct(id:number):Observable<producto> {
  return this.http.delete<producto>(`http://localhost:8080/delete/${id}`);
}

updateProduct(id:number,Formulario : producto):Observable<producto> {console.log(Formulario)
  return this.http.put(`http://localhost:8080/update/${id}`,Formulario,{headers: new HttpHeaders({'Content-Type': 'application/json',}),}
  );
}
}


