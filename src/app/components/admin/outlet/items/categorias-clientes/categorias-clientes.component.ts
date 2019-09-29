import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import {CategoriasClientes} from '../../../../../interfaces/categorias/categorias-clientes';
import {ApiService} from '../../../../../services/api.service';

@Component({
  selector: 'app-categorias-clientes',
  templateUrl: './categorias-clientes.component.html',
  styleUrls: ['./categorias-clientes.component.css']
})
export class CategoriasClientesComponent implements OnInit {

  isLoading:boolean;
  idCategoria:number;

  cliente:any[];

  constructor(private apiService:ApiService, private route:ActivatedRoute) {

    this.isLoading = true;
    this.route.params.subscribe(
      (resp)=>{
        this.idCategoria = resp.id
      })

    this.apiService.getCategoriaCliente(this.idCategoria).subscribe(
      (resp:CategoriasClientes)=>{
        this.cliente = resp.categorias;

        this.isLoading = false;
      })

  }

  ngOnInit() {
  }

}
