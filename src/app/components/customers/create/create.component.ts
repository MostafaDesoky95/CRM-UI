import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddressViewModel } from 'src/app/models/address';
import { ICustomer } from 'src/app/models/icustomer';
import { CustomerService } from 'src/app/services/customer-service/customer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
customerForm! : FormGroup;
isFormCreated:boolean=false
customer?:ICustomer;
customerId:any
  constructor(private fb: FormBuilder , private customerService:CustomerService, private ActivRouter: ActivatedRoute
    ) {

   }

  ngOnInit(): void {
    this.ActivRouter.paramMap.subscribe((parmMap) => {
      this.customerId = parmMap.get('id');
      if (!this.customerId)
          this.CreateForm()
      else
        this.customerService.getCustomerByID(this.customerId).subscribe( res=>{
            this.customer = res;
            this.CreateForm()
          }
        );
    });
  }
CreateForm(){
  this.customerForm = this.fb.group({
    firstName: [this.customer? this.customer?.firstName:'', [Validators.required]],
    lastName: [this.customer? this.customer?.lastName:'', [Validators.required,]],
    email: [this.customer? this.customer?.email:'', [Validators.required,]],
    phoneNumber: [this.customer? this.customer?.phoneNumber:'', [Validators.required,]],
  //   customerAddress:this.fb.array([
  //     this.fb.group({
  //     addressLine1: [this.customer? this.customer?.firstName:''],
  //     addressLine2: [this.customer? this.customer?.firstName:''],
  //     city: [this.customer? this.customer?.firstName:''],
  //     state: [this.customer? this.customer?.firstName:''],
  //     postalCode: [this.customer? this.customer?.firstName:''],
  //     country: [this.customer? this.customer?.firstName:''],
  //     isShippingAddress: [false],
  //     isBillingAddress: [false],
  //   })
  // ])
  customerAddress:this.fb.array([ this.customerId? 
    this.customer?.customerAddress.map( address=> this.newAddress(address)): this.newAddress()])
  }, {});

  this.isFormCreated=true
}

get addresses() {
  return this.customerForm.get('customerAddress') as FormArray;
}

onAddAddress() {
  this.addresses.push(this.newAddress());
}
onMinusAddress(i: number) {
  this.addresses.removeAt(i);
}

newAddress(address=new AddressViewModel){
  return this.fb.group({
    addressLine1: [address?.addressLine1],
    addressLine2: [address?.addressLine2],
    city: [address.city],
    state: [address.state],
    postalCode: [address.postalCode],
    country: [address.country],
    isShippingAddress: [address.isShippingAddress],
    isBillingAddress: [address.isBillingAddress],
  })
}

submit() {
  let userModel: ICustomer = this.customerForm.value as ICustomer;``
  console.log(userModel);
  this.customerService.addCustomer(userModel).subscribe((res) => {
    history.back()
  });
}
}
