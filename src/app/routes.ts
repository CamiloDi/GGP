import { RouterModule, Routes } from '@angular/router';

import { ProblemaComponent } from "./Components/problema/problema.component";

import { HomeComponent } from "./Components/home/home.component";
import { SesionComponent } from "./Components/sesion/sesion.component";
import { GastosFijosComponent } from "./Components/gastos-fijos/gastos-fijos.component";
import { DetalleGastoComponent } from "./Components/detalle-gasto/detalle-gasto.component";



import { AuthGuardService } from './services/auth-guard.service';


const app_routes: Routes = [
     { path: 'home', component: HomeComponent}//,canActivate:[AuthGuardService]} 
    ,{ path: 'gastosfijos', component: GastosFijosComponent }
    ,{ path: 'problema', component: ProblemaComponent }
    ,{ path: 'detallegasto', component: DetalleGastoComponent }
    //,{ path: 'sesion', component: SesionComponent }
    ,{ path: '', pathMatch: 'full', redirectTo: 'problema' }
    ,{ path: '**', pathMatch: 'full', redirectTo: 'gastosfijos' }
  ];
  
  export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });