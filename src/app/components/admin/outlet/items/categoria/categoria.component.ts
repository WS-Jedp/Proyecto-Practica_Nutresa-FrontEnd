import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import {OneCategoria} from '../../../../../interfaces/categorias/one-categoria';
import {ApiService} from '../../../../../services/api.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  isLoading:boolean;

  idCategoria:number;

  categoria:object;

  constructor(private apiService:ApiService, private route:ActivatedRoute) {

  this.isLoading = true;

  this.route.params.subscribe(
    (resp)=>{
      this.idCategoria = resp.id;
    })

  this.apiService.getCategoria(this.idCategoria).subscribe(
    (resp:OneCategoria)=>{
      this.categoria = resp.categoria;

      this.isLoading = false;
    })
  }

  ngOnInit() {
  }

}
