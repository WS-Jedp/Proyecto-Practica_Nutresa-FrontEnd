import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import {ClienteInterface} from '../../../../../interfaces/clientes/cliente-interface';
import {ApiService} from '../../../../../services/api.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  isLoading:boolean;

  idCliente:number;

  Cliente:object;

  constructor(private apiService:ApiService, private route:ActivatedRoute) {

  this.isLoading = true;

  this.route.params.subscribe(
    (resp)=>{
      this.idCliente = resp.id;
    }
  )

  this.apiService.getClient(this.idCliente).subscribe(
    (resp:ClienteInterface)=>{
      this.Cliente = resp.Cliente;

      this.isLoading = false;
    }
  )
  }

  ngOnInit() {
  }

}
