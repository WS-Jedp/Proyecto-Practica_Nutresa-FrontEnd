import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

// Formulario
import {NgForm} from '@angular/forms';

//Servicios
import {UserServicesService} from '../../../services/usuario/user-services.service';

// Interfaces
import {LoginUserInterface} from '../../../interfaces/usuario/login-user-interface';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  constructor(private userService:UserServicesService, private router:Router) { }

  ngOnInit() {
  }

// Login User
  loginUser(data:NgForm){
    console.log("data loginUser, IngresarComponent", data.value);
    this.userService.putHeaders();
    this.userService.loginUser(data.value).subscribe(
      (resp:LoginUserInterface)=>{
        console.log(resp.Mensaje);
        localStorage.setItem('token', (resp.token));
        this.router.navigate(['admin']);
      }, err => {},
    )
  }

//Validacion usuario


}
