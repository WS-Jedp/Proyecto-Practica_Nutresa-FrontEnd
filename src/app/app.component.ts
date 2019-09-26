import { Component } from '@angular/core';
import {Router, NavigationStart, NavigationEnd, Event as NavigatioEvent} from '@angular/router';

import { filter } from 'rxjs/operators';

import {UserServicesService} from './services/usuario/user-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nutresaWebSite';

  authHeader:boolean = false;

  headerLoading:boolean;

  constructor(private router: Router, private user:UserServicesService) {

    this.authHeader = true;
  router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe((event: NavigationEnd) => {
    console.log('Rutas-->', event.url);
    if(event.url != '/admin'){
      this.authHeader = false;
      if(localStorage.getItem('token')){
        this.authHeader = true;
      }
    }else{
      this.authHeader = true;


    }
  });
}
}
