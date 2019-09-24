import { Component, OnInit } from '@angular/core';

//servicios
// import {UserServicesService} from '../../services/usuario/user-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authHeader:boolean = true;

  constructor() {

   }

  ngOnInit() {

    if(!localStorage.getItem('token')){
      this.authHeader = true;
    }else{
      this.authHeader = false;
    }

  }

}
