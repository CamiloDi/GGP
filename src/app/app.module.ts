import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule  } from '@angular/common/http';
import localES from '@angular/common/locales/es'
registerLocaleData(localES);
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { app_routing } from "./routes";

//pipes
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { FechaLocalPipe } from './pipes/fechalocal.pipe';
//Services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { GastosFijosService } from './services/gastosFijos.service';

import { AppComponent } from './app.component';
import { SesionComponent } from './Components/sesion/sesion.component';
import { TabsComponent } from './Components/tabs/tabs.component';
import { GastosFijosComponent } from './Components/gastos-fijos/gastos-fijos.component';
import { HomeComponent } from './Components/home/home.component';
import { DatosGeneralesComponent } from './Components/datos-generales/datos-generales.component';
import { MenuSuperiorComponent } from './components/menu-superior/menu-superior.component';
import { registerLocaleData } from '../../node_modules/@angular/common';
import { ProblemaComponent } from './Components/problema/problema.component';
import { DetalleGastoComponent } from './Components/detalle-gasto/detalle-gasto.component';
import { VerdaderoFalsoPipe } from './Pipes/verdadero-falso.pipe';
import { SeparadorMilesPipe } from './Pipes/separador-miles.pipe';

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
    ProblemaComponent,
    DetalleGastoComponent,
    VerdaderoFalsoPipe,
    SeparadorMilesPipe
  ],
  entryComponents: [DetalleGastoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    app_routing,
    MatDialogModule,
    BrowserAnimationsModule
    
  ],
  providers: [AuthService,AuthGuardService,GastosFijosService,{provide: LOCALE_ID, useValue: 'es-CL'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
