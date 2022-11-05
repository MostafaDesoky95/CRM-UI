import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/customers/create/create.component';
import { CustomersComponent } from './components/customers/customers.component';
import { LayoutComponent } from './components/Layout/layout.component';
import { CreateOrderComponent } from './components/orders/create/create-order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CreateProductComponent } from './components/products/create/create-product.component';
import { ProductsComponent } from './components/products/procucts.component';

const routes: Routes = [
  {
    
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'customers', pathMatch: 'full' },
      { path: 'customers',component: CustomersComponent},
      { path: 'customers/create',component: CreateComponent},
      { path: 'customers/edit/:id',component: CreateComponent},
      { path: 'product',component: ProductsComponent,},
      { path: 'product/create',component: CreateProductComponent},
      { path: 'order',component: OrdersComponent,},
      { path: 'order/create',component: CreateOrderComponent},

    ]
  // { path: 'Login', component: LoginComponent },
  // { path: 'ResetPassword', component: ResetPasswordComponent },
  // { path: '**', component: NotFoundComponent },
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
