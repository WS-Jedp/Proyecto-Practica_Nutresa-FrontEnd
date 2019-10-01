import { Component, OnInit } from '@angular/core';

import {ClientesInterface} from '../../../../interfaces/clientes/clientes-interface';
import {CompraProducto} from '../../../../interfaces/compras/compra-producto';
import {ApiService} from '../../../../services/api.service';

import {OneProduct} from '../../../../interfaces/productos/one-product';
import {ProductoService} from '../../../../services/productos/producto.service';

@Component({
  selector: 'app-compras-form',
  templateUrl: './compras-form.component.html',
  styleUrls: ['./compras-form.component.css']
})
export class ComprasFormComponent implements OnInit {

  isLoading:boolean;

  compras:any[];

  loadingProducto:boolean;
  producto:object;

  clientes:any;

  combo:boolean;

  constructor(private apiService:ApiService, private apiProducto:ProductoService) {

    this.isLoading = true;
    this.loadingProducto = true;
    this.combo = false;

    this.apiService.getCompra().subscribe(
      (resp:CompraProducto)=>{
        this.compras = resp.productos;

        this.isLoading = false;
      })


    this.apiService.getClients().subscribe(
      (resp:ClientesInterface)=>{
        this.clientes = resp.Clientes;
      }
    )

  }

  ngOnInit() {
  }

// Seleccionar producto
  comprarProducto(id){
    this.apiProducto.getProduct(id).subscribe(
      (resp:OneProduct)=>{
        this.producto = resp.Producto;
        this.loadingProducto = false;
      })
  }


  // compra combo
  compraCombo(){
    this.combo = true;
  }

  compraDirecta(){
    this.combo = false;
  }


}
