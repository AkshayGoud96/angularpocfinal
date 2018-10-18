import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {CustomersComponent} from './customers/customers.component';
import {CalculatorComponent} from './calculator/calculator.component'

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: CustomersComponent },
   // { path: 'page', loadChildren: './page/page.module#PageModule' },
    { path: 'admin', component: AdminComponent },
    { path: 'sales', component: HomeComponent },
    { path: 'calculator', component: CalculatorComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }