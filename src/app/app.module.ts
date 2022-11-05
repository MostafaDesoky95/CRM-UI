import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MatIconModule } from '@angular/material/icon'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductsComponent } from './components/products/procucts.component';
import { LayoutComponent } from './components/Layout/layout.component';
import { CreateComponent } from './components/customers/create/create.component';
import { CreateProductComponent } from './components/products/create/create-product.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CreateOrderComponent } from './components/orders/create/create-order.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ProductsComponent,
    LayoutComponent,
    CreateComponent,
    CreateProductComponent,
    OrdersComponent,
    CreateOrderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
