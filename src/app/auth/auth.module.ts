import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AutenticacionComponent } from './pages/autenticacion/autenticacion.component';


@NgModule({
  declarations: [
    AutenticacionComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports:[
    AutenticacionComponent
  ]
})
export class AuthModule { }
