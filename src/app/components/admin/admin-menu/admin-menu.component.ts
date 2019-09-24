import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {UserServicesService} from '../../../services/usuario/user-services.service';

//Interfaces
// import {LoginUserInterface} from '../../../interfaces/usuario/login-user-interface';
import {UserValidation} from '../../../interfaces/usuario/user-validation';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
  auth:boolean = false;
  constructor(private userService:UserServicesService, private router:Router) {



  }

  ngOnInit() {

    if(!localStorage.getItem('token')){
      this.auth = false;
      this.router.navigate(['inicio']);
    } else{
      this.userService.validateUser().subscribe(
        (resp:UserValidation)=>{
          console.log('Validacion usuario -->', resp);
          this.auth = true;
        });
    }

  }

}
