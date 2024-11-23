import { Routes } from '@angular/router';

import { ViewHomeComponent } from './components/view-home/view-home.component';
import { ViewLoginComponent } from './components/view-login/view-login.component';
import { ViewRegisterComponent } from './components/view-register/view-register.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { ViewDetailProductsComponent } from './components/view-detail-products/view-detail-products.component';
import { ViewContactoComponent } from './components/view-contacto/view-contacto.component';
export const routes: Routes = [
    {path: "", component: ViewHomeComponent},
    {path: "login", component: ViewLoginComponent},
    {path: "register", component: ViewRegisterComponent},
    {path: "products", component: ViewProductsComponent},
    {path: "contacto", component: ViewContactoComponent},
    {path: "detail-products/:id", component: ViewDetailProductsComponent}

];
