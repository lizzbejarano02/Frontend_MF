import { AutenticacionComponent } from './pages/autenticacion/autenticacion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', children:[
      {
        path:'autenticacion', component: AutenticacionComponent

    },
    {
      path:'**', component: AutenticacionComponent

  }
  ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
