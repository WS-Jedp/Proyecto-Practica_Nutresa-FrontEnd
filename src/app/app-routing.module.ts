import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Componentes para las rutas
import { IndexComponent } from '../app/components/outlet/index/index.component';
import {ContactComponent} from '../app/components/outlet/contact/contact.component';
import {IngresarComponent} from '../app/components/outlet/ingresar/ingresar.component';

//Variable que permite las rutas dinamicas
const routes: Routes = [
  {path: 'inicio', component: IndexComponent},
  {path: 'contacto', component: ContactComponent },
  {path: 'ingresar', component: IngresarComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
