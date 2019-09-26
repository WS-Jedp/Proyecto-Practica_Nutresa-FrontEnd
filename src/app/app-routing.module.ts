import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Componentes para las rutas
import { IndexComponent } from '../app/components/outlet/index/index.component';
import {ContactComponent} from '../app/components/outlet/contact/contact.component';
import {IngresarComponent} from '../app/components/outlet/ingresar/ingresar.component';
import {AdminMenuComponent} from '../app/components/admin/admin-menu/admin-menu.component';
import {ProductosAdminComponent} from '../app/components/admin/outlet/productos-admin/productos-admin.component';
import {ClientesAdminComponent} from '../app/components/admin/outlet/clientes-admin/clientes-admin.component';
//Variable que permite las rutas dinamicas
const routes: Routes = [
  {path: 'inicio', component: IndexComponent},
  {path: 'contacto', component: ContactComponent },
  {path: 'ingresar', component: IngresarComponent},
  {path: 'admin', component: AdminMenuComponent, children: [
    {path: 'productos', component: ProductosAdminComponent },
    {path: 'clientes', component: ClientesAdminComponent},
    {path: '**', component: ProductosAdminComponent}
  ]},
  {path: '', redirectTo: '/inicio ', pathMatch: 'full'},
  {path: '**', component: IndexComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
