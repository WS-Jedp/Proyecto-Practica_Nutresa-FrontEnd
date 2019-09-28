import { Component, OnInit } from '@angular/core';

//servicios
import {ApiService} from '../../../../services/api.service';

//Interfaces
import {AllCategoriasInterface} from '../../../../interfaces/categorias/all-categorias-interface';

@Component({
  selector: 'app-categorias-admin',
  templateUrl: './categorias-admin.component.html',
  styleUrls: ['./categorias-admin.component.css']
})
export class CategoriasAdminComponent implements OnInit {

  isLoading:boolean;

  categorias:any;

  constructor(private apiService:ApiService) {
    this.isLoading = true;

    apiService.getCategorias().subscribe(
      (resp:AllCategoriasInterface)=>{
        console.log(resp);
        this.categorias = resp.categorias;

        this.isLoading = false;
      })
  }

  ngOnInit() {
  }

}
