import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./Components/home/home.component";
import { GastosFijosComponent } from "./Components/gastos-fijos/gastos-fijos.component";




const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'gastosfijos', component: GastosFijosComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
  ];
  
  export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });