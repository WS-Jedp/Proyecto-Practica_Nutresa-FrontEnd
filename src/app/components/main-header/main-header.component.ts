import { Component, OnInit } from '@angular/core';

// import {UserServicesService} from '../../services/usuario/user-services.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  // authHeader:boolean = false;

  constructor() { }

  ngOnInit() {
    // if(!localStorage.getItem('token')){
    //   this.authHeader = false;
    // }else{
    //   this.authHeader = true;
    // }
  }

}
