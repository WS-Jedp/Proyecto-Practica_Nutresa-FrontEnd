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

  id:number;

  Cliente:object;

  constructor(private apiService:ApiService, private route:ActivatedRoute) {

  this.isLoading = true;

  this.id = this.route.params.value.id;

  this.apiService.getClient(this.id).subscribe(
    (resp:ClienteInterface)=>{
      this.Cliente = resp.Cliente;

      this.isLoading = false;
    }
  )
  }

  ngOnInit() {
  }

}
