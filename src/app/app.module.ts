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
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { ProductosAdminComponent } from './components/admin/outlet/productos-admin/productos-admin.component';
import { ClientesAdminComponent } from './components/admin/outlet/clientes-admin/clientes-admin.component';
import { ProductoComponent } from './components/admin/outlet/items/producto/producto.component';
import { CategoriasAdminComponent } from './components/admin/outlet/categorias-admin/categorias-admin.component';
import { CategoriaComponent } from './components/admin/outlet/items/categoria/categoria.component';
import { FacturasComponent } from './components/admin/outlet/facturas/facturas.component';
import { ClienteComponent } from './components/admin/outlet/items/cliente/cliente.component';

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
    AppAdminComponentComponent,
    MainHeaderComponent,
    ProductosAdminComponent,
    ClientesAdminComponent,
    ProductoComponent,
    CategoriasAdminComponent,
    CategoriaComponent,
    FacturasComponent,
    ClienteComponent,
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
