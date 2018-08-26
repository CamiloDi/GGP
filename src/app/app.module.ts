import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import localES from '@angular/common/locales/es'
registerLocaleData(localES);


import { app_routing } from "./routes";

//pipes
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { FechaLocalPipe } from './pipes/fechalocal.pipe';
//Services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

import { AppComponent } from './app.component';
import { SesionComponent } from './Components/sesion/sesion.component';
import { TabsComponent } from './Components/tabs/tabs.component';
import { GastosFijosComponent } from './Components/gastos-fijos/gastos-fijos.component';
import { HomeComponent } from './Components/home/home.component';
import { DatosGeneralesComponent } from './Components/datos-generales/datos-generales.component';
import { MenuSuperiorComponent } from './components/menu-superior/menu-superior.component';
import { registerLocaleData } from '../../node_modules/@angular/common';
import { ProblemaComponent } from './Components/problema/problema.component';

@NgModule({
  declarations: [
    AppComponent,
    SesionComponent,
    TabsComponent,
    GastosFijosComponent,
    HomeComponent,
    DatosGeneralesComponent,
    MenuSuperiorComponent,
    SinfotoPipe,
    FechaLocalPipe,
    ProblemaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    app_routing
    
  ],
  providers: [AuthService,AuthGuardService,{provide: LOCALE_ID, useValue: 'es-CL'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
