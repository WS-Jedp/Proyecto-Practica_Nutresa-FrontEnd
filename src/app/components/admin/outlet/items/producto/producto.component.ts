import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import {OneProduct} from '../../../../../interfaces/productos/one-product';
import {ProductoService} from '../../../../../services/productos/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  isLoading:boolean;
  idProducto:number;

  producto:object;

  constructor(private productoApi:ProductoService, private route:ActivatedRoute) {

    this.isLoading = true;

    this.route.params.subscribe(
      (resp)=>{
        this.idProducto = resp.id;
      }
    )

    productoApi.getProduct(this.idProducto).subscribe(
      (resp:OneProduct)=>{
        this.producto = resp.Producto;
        this.isLoading = false;
      }
    )

  }

  ngOnInit() {
  }

}
