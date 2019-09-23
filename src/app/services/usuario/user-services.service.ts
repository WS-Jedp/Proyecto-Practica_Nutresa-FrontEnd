import { Injectable } from '@angular/core';

//Suscribirse Servicios
import {HttpClient, HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  url:string = "http://127.0.0.1:8000/";
  headers = null;
  auth:boolean = false;

  constructor(private http:HttpClient) {
   }

   // Header
   putHeaders(){
     this.headers = new HttpHeaders({
       'Authorization': 'Bearer ' + localStorage.getItem('token'),
       'Content-Type': 'application/json'
     })
   }

  // Iniciar Sesion - Generar Token
  loginUser(data){
    return this.http.post(
      this.url + 'iniciarSesion',
      data
    );
  }

  // Validar token
  validateUser(){
    this.putHeaders();
    return this.http.get(
      this.url + 'validacionToken',
      {
        headers: this.headers
      });
  }

  //MenuAdmin
  validacion(){
    this.validateUser().subscribe(
      (resp)=>{
        console.log(resp);
        if(resp.error != '' || resp.error != null){
          this.auth = true;
        }else{
          this.auth = false;
        }
      }
    )
  }


}
