import { Component, OnInit } from '@angular/core';

//servicios
import {UserServicesService} from '../../services/usuario/user-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  auth:boolean = false;

  constructor(private userService:UserServicesService) {
      console.log('hola');
   }

  ngOnInit() {

    if(localStorage.getItem('token') != ''){
      this.userService.validacion();
    }

  }

}
