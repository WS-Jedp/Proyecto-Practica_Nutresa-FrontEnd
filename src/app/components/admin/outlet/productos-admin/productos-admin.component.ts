import { Component, OnInit } from '@angular/core';

//Servicios
import {ProductoService} from '../../../../services/productos/producto.service';

//Interfaces
import {UserServicesService} from '../../../../services/usuario/user-services.service';


@Component({
  selector: 'app-productos-admin',
  templateUrl: './productos-admin.component.html',
  styleUrls: ['./productos-admin.component.css']
})
export class ProductosAdminComponent implements OnInit {

  productos:any = null;
  producto:any = null;

  constructor(private productosService:ProductoService,private userService:UserServicesService) { }

  ngOnInit() {
    this.productosService.getProducts().subscribe(
      (resp)=>{
        console.log(resp.Productos);
        this.productos = resp.Productos;
      });

    this.productosService.getProduct(1).subscribe(
      (resp)=>{
        console.log('getProduct', resp.Producto);
        this.producto = resp.Producto;
      }
    )

  }


  }
