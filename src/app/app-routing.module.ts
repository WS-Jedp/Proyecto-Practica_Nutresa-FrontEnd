import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Componentes para las rutas
import { IndexComponent } from '../app/components/outlet/index/index.component';

//Variable que permite las rutas dinamicas
const routes: Routes = [
  {path: 'index', component: IndexComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
