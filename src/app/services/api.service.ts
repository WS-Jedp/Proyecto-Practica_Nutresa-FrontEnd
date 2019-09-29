import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = 'http://127.0.0.1:8000/api/';
  headers:any;

  constructor(private http:HttpClient) { }

  putHeaders(){
    return this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  }

  // ------------------- Clientes

  // Conseguir todos los clientes
  getClients(){
    return this.http.get(
      this.url + 'clientes',
      {
        headers: this.headers = new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
      });
  }

  // Conseguir cliente
  getClient(id){
    this.putHeaders();
    return this.http.get(
      this.url + 'clientes/'+id,
      {
        headers: this.headers = new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
      }
    )}

    // ------------------- Facturas

    // Conseguir Facturas
    getFacturas(){
      this.putHeaders();
      return this.http.get(
        this.url + 'Facturas',
        {
          headers: this.headers = new HttpHeaders({
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          })
        })
    }


  // Conseguir Factura
  getFactura(id){
    this.putHeaders();
    return this.http.get(
      this.url + 'Facturas/'+id,
      {
        headers: this.headers = new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
      })
  }


  // ------------- Categorias

  getCategorias(){
    this.putHeaders();
    return this.http.get(
      this.url + 'Categorias',
      {
        headers: this.headers = new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
      })
  }

  getCategoria(id){
    this.putHeaders();
    return this.http.get(
      this.url + 'Categoria/'+id,
      {
        headers: this.headers = new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
      })
  }


  getCategoriaCliente(id){
    this.putHeaders();
    return this.http.get(
      this.url + 'Categorias/'+id,
      {
        headers: this.headers = new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
      })
  }

  // ------- Compras
  getCompra(){
    this.putHeaders();
    return this.http.get(
      this.url + 'Compras',
      {
        headers: this.headers = new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
      })
  }









}
