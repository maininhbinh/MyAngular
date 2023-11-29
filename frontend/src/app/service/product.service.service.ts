import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Iproduct } from '../interface/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  URL = 'http://localhost:8080/products';

  constructor(private http: HttpClient ) {}

  getAll():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(`${this.URL}`);
  }

  delete(id:number|string):Observable<Iproduct[]>{
    return this.http.delete<Iproduct[]>(`${this.URL}/${id}`);
  }

  create(newData:Iproduct, files:any):Observable<Iproduct>{
    const formData = new FormData();
    formData.append('file', files);
    formData.append('newData', JSON.stringify(newData));
    return this.http.post<Iproduct>(`${this.URL}`,formData);
  }

  update(newData:Iproduct):Observable<Iproduct>{
    console.log(newData);
    return this.http.put<Iproduct>(`${this.URL}/${newData._id}`, newData);
  }

  getById(id:number|string):Observable<Iproduct>{
    return this.http.get<Iproduct>(`${this.URL}/${id}`);
  }
}
