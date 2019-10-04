import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosCompraService {

  url:string = 'http://127.0.0.1:8000/';
  headers = null;

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json'
    })
  }

  comprarProducto(dataAll){
      return this.http.post(
        this.url + 'comprarProductos',
        dataAll,
        {
          headers: this.headers = new HttpHeaders({
            'Authorization': 'Bearer '+localStorage.getItem('token'),
            'Content-Type': 'application/json'
          })
        }
      )
  }


}
