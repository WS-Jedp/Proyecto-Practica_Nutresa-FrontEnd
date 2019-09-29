import { Component, OnInit } from '@angular/core';


import {CompraProducto} from '../../../../interfaces/compras/compra-producto';
import {ApiService} from '../../../../services/api.service';

@Component({
  selector: 'app-compras-form',
  templateUrl: './compras-form.component.html',
  styleUrls: ['./compras-form.component.css']
})
export class ComprasFormComponent implements OnInit {

  isLoading:boolean;

  compras:any[];

  constructor(private apiService:ApiService) {

    this.isLoading = true;

    this.apiService.getCompra().subscribe(
      (resp:CompraProducto)=>{
        this.compras = resp.productos;

        this.isLoading = false;
      }
    )

  }

  ngOnInit() {
  }

}
