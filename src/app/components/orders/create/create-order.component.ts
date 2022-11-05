import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IOrder } from 'src/app/models/iorder';
import { IProduct } from 'src/app/models/iProducts';
import { OrderStatus } from 'src/app/models/order-status';
import { CustomerService } from 'src/app/services/customer-service/customer.service';
import { OrderService } from 'src/app/services/order-service/order.service';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
orderForm! : FormGroup;
isFormCreated:boolean=false
orderStatus : typeof  OrderStatus = OrderStatus;
  constructor(private fb: FormBuilder , private orderService:OrderService) {

   }

  ngOnInit(): void {
    this.CreateForm()
  }
CreateForm(){
  this.orderForm = this.fb.group({
    status: [OrderStatus.Created, [Validators.required]],
    date: [Date, ],
    price: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
    tax: [14, [Validators.required,Validators.pattern("^[0-9]*$")]],
    subtotal: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
    grandTotal: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
    lineNo: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
    linePrice: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
    lineOrderQty: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
    lineTaxAmount: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
    // lineTotal: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
    shippingAddressID: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
    customerID: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
    billingAddressID: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
    productID: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
    
  }, {});

  this.isFormCreated=true
}

submit() {
  let orderModel: IOrder = this.orderForm.value as IOrder;``
  console.log(orderModel);
  orderModel.status = Number(orderModel.status);
  this.orderService.addOrder(orderModel).subscribe((res) => {
    history.back()
  });
}
}
