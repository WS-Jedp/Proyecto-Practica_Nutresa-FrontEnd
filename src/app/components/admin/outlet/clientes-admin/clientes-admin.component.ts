import { Component, OnInit } from '@angular/core';

// Servicios
import {ApiService} from '../../../../services/api.service';

//Interfaces
import {ClientesInterface} from '../../../../interfaces/clientes/clientes-interface';

@Component({
  selector: 'app-clientes-admin',
  templateUrl: './clientes-admin.component.html',
  styleUrls: ['./clientes-admin.component.css']
})
export class ClientesAdminComponent implements OnInit {

  clientes:any;
  cliente:any;

  isLoading:boolean;

  constructor(private api:ApiService) {

    this.isLoading = true;

    api.getClients().subscribe(
      (resp:ClientesInterface)=>{
        console.log(resp.Clientes);
        this.clientes = resp.Clientes;
        this.isLoading = false;
      });


    api.getClient(1).subscribe(
      (resp)=>{
        console.log(resp)
      });
   }

  ngOnInit() {
  }

}
