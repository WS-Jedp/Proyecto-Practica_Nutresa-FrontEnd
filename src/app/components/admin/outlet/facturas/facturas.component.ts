import { Component, OnInit } from '@angular/core';

import {Allfacturas} from '../../../../interfaces/facturas/allfacturas';
import {ApiService} from '../../../../services/api.service';
@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  isLoading:boolean;
  facturas:any[];

  constructor(private apiService:ApiService) {

    this.isLoading = true;

    this.apiService.getFacturas().subscribe(
      (resp:Allfacturas)=>{
        console.log('Facturas', resp);
        this.facturas = resp.Factura;

        this.isLoading = false;
      }
    )

  }

  ngOnInit() {
  }

}
