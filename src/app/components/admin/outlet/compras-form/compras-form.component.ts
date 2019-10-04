import { Component, OnInit } from '@angular/core';

import {ClienteInterface} from '../../../../interfaces/clientes/cliente-interface';
import {ClientesInterface} from '../../../../interfaces/clientes/clientes-interface';
import {CompraProducto} from '../../../../interfaces/compras/compra-producto';
import {ApiService} from '../../../../services/api.service';

import {NgForm} from '@angular/forms';

import {OneProduct} from '../../../../interfaces/productos/one-product';
import {AllProductos} from '../../../../interfaces/productos/all-productos';
import {ProductoService} from '../../../../services/productos/producto.service';

import {ProductosCompraService} from '../../../../services/productos/comprar/productos-compra.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-compras-form',
  templateUrl: './compras-form.component.html',
  styleUrls: ['./compras-form.component.css']
})
export class ComprasFormComponent implements OnInit {

  isLoading:boolean;

  compras:any[];

  loadingProducto:boolean;
  productos:any;

  clientes:any;
  clienteCompra:object;
  clienteId:number;

  listaProductos:any[];
  howMany:object;
  whichBuy:object;
  allBuy:any[];

  combo:boolean;



  constructor(private apiService:ApiService, private apiProducto:ProductoService, private postCopmpra:ProductosCompraService) {

    this.isLoading = true;
    this.loadingProducto = true;
    this.combo = false;

    this.listaProductos = [];
    this.allBuy = [];

    this.apiProducto.getProducts().subscribe(
      (resp:AllProductos)=>{
        this.productos = resp.Productos;
      }
    )


    this.apiService.getClients().subscribe(
      (resp:ClientesInterface)=>{
        this.clientes = resp.Clientes;
        this.isLoading = false;
      }
    )

  }
  ngOnInit(){

  }

// Seleccionar cliente
  comprarProducto(id){
    this.apiService.getClient(id).subscribe(
      (resp:ClienteInterface)=>{
        this.clienteCompra = resp.Cliente;
        this.clienteId =  resp.Cliente.id;
        this.loadingProducto = false;
      }
    )
  }

  // Formulario agregar Producto
  addProduct(data:NgForm){
    console.log('Data del formulario', data.value);

    this.apiProducto.getProduct(data.value.producto).subscribe(
      (resp:OneProduct)=>{
        this.howMany = Object.assign(resp.Producto, data.value);
        this.listaProductos.push(this.howMany);
        console.log('Lista de productos',this.listaProductos)
      });
  }

  // compra combo
  compraCombo(){
    this.combo = true;
  }

  compraDirecta(){
    this.combo = false;
  }

  cancelarCompra(){
    this.listaProductos = [];
    this.howMany = [];
    this.allBuy = [];
  }

  //Compra

  comprar(dataAll:NgForm){
    if(dataAll.value.tipo_factura == 1){

      this.whichBuy = {
        tipo_factura: parseInt(dataAll.value.tipo_factura),
        cliente_id: this.clienteId
      };

      this.allBuy.push(Object.assign(this.howMany, this.whichBuy));
      console.log('data all', this.allBuy);

      this.postCopmpra.comprarProducto(this.allBuy).subscribe(
        (resp)=>{
          console.log('compra directa hecha', resp);
        }
      )

    }else {

      this.whichBuy = {
        tipo_factura: parseInt(dataAll.value.tipo_factura),
        cliente_id: this.clienteId,
        nombreCombo: dataAll.value.nombreCombo,
        descripcionCombo: dataAll.value.descripcionCombo,
        precioCombo: dataAll.value.precioCombo
      };

    }
  }


}
