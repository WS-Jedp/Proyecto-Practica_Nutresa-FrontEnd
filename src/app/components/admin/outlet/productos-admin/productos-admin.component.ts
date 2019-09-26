import { Component, OnInit } from '@angular/core';

//Servicios
import {ProductoService} from '../../../../services/productos/producto.service';
// import {UserServicesService} from '../../../../services/usuario/user-services.service';

//Interfaces
import {AllProductos} from '../../../../interfaces/productos/all-productos';


@Component({
  selector: 'app-productos-admin',
  templateUrl: './productos-admin.component.html',
  styleUrls: ['./productos-admin.component.css']
})

export class ProductosAdminComponent implements OnInit {

  authHeader:boolean = true;

  productos:any;
  producto:any;

  isLoading:boolean;

  constructor(private productosService:ProductoService) {


      this.isLoading = true;
   }

  ngOnInit() {
    // Conseguir todos los prodructos
    this.productosService.getProducts().subscribe(
      (resp:AllProductos)=>{
        console.log('getProductos', resp);
        this.productos = resp.Productos;
        this.isLoading = false;
      });

    //Conseguir Un prodcuto
    this.productosService.getProduct(1).subscribe(
      (resp)=>{
        console.log('getProduct', resp);
        this.producto = resp;
      }
    )

  }


  }
