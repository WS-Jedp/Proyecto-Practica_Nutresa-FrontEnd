import { Component, OnInit } from '@angular/core';

import {UserServicesService} from '../../../services/usuario/user-services.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
  auth:boolean = false;
  constructor(private userService:UserServicesService) { }

  ngOnInit() {

    this.userService.validacion();
  }

}
