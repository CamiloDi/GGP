import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from "./Components/error/error.component";

import { HomeComponent } from "./Components/home/home.component";
import { GastosFijosComponent } from "./Components/gastos-fijos/gastos-fijos.component";




const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'gastosfijos', component: GastosFijosComponent },
    { path: '', pathMatch: 'full', redirectTo: 'gastosfijos' },
    { path: '**', pathMatch: 'full', redirectTo: 'gastosfijos' }//,
    //{ path: 'error', component: ErrorComponent }
  ];
  
  export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });