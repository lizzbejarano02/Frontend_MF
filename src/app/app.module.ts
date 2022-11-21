import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { BarraNavegacionComponent } from './plantilla/barra-navegacion/barra-navegacion.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { PiePaginaComponent } from './plantilla/pie-pagina/pie-pagina.component';
import { AcercadeNosotrosComponent } from './plantilla/acercade-nosotros/acercade-nosotros.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    BarraNavegacionComponent,
    ErrorComponent,
    PiePaginaComponent,
    AcercadeNosotrosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
