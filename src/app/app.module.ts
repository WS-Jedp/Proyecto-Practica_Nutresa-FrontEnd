import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

//Importar rutas
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/outlet/index/index.component';
import { ContactComponent } from './components/outlet/contact/contact.component';
import { IngresarComponent } from './components/outlet/ingresar/ingresar.component';
import { AdminMenuComponent } from './components/admin/admin-menu/admin-menu.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AppAdminComponentComponent } from './components/admin/app-admin-component/app-admin-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    ContactComponent,
    IngresarComponent,
    AdminMenuComponent,
    AdminHeaderComponent,
    AppAdminComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
