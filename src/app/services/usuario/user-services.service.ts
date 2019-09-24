import { Injectable } from '@angular/core';

//Suscribirse Servicios
import {HttpClient, HttpHeaders} from '@angular/common/http';

//Interfaces
import {ErrorUnuauthorized} from '../../interfaces/errores/error-unuauthorized';



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
        headers: this.headers = new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
      });
  }

  //MenuAdmin
  validacion(){
    this.validateUser().subscribe(
      (resp:ErrorUnuauthorized)=>{
        console.log(resp.error);
        if(resp.error != '' || resp.error != null){
          this.auth = false;
        }else{
          this.auth = true;
        }
      }
    )
  }


}
