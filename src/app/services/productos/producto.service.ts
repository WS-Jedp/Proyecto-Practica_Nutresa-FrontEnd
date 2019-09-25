import { Injectable } from '@angular/core';



//Http
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url:string = 'http://127.0.0.1:8000/api/';
  headers = null;

  constructor(private http:HttpClient) { }

putHeaders(){
  this.headers = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
  );
}

getProducts(){
    return this.http.get(
      this.url + 'Productos',
      {
        headers: this.headers = new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
      })
  }


  getProduct(id){
    this.putHeaders();
    return this.http.get(
      this.url + 'Productos/'+id,
      {
        headers: this.headers = new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
      })
  }

}
