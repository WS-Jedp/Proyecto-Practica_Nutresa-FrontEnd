import { Component } from '@angular/core';
import {Router, NavigationStart, NavigationEnd, Event as NavigatioEvent} from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nutresaWebSite';

  authHeader:boolean = false;

  constructor(private router: Router) {
  router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe((event: NavigationEnd) => {
    console.log('Rutas-->', event.url);
    if(event.url != '/admin'){
      this.authHeader = false;
    }else{
      this.authHeader = true;
    }
  });
}
}
