import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routing } from "./routes";

//Services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

import { AppComponent } from './app.component';
import { SesionComponent } from './Components/sesion/sesion.component';
import { TabsComponent } from './Components/tabs/tabs.component';
import { GastosFijosComponent } from './Components/gastos-fijos/gastos-fijos.component';
import { HomeComponent } from './Components/home/home.component';
import { DatosGeneralesComponent } from './Components/datos-generales/datos-generales.component';

@NgModule({
  declarations: [
    AppComponent,
    SesionComponent,
    TabsComponent,
    GastosFijosComponent,
    HomeComponent,
    DatosGeneralesComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
