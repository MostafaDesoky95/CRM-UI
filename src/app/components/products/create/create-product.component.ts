import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/models/iProducts';
import { CustomerService } from 'src/app/services/customer-service/customer.service';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
productForm! : FormGroup;
isFormCreated:boolean=false

  constructor(private fb: FormBuilder , private productService:ProductService) {

   }

  ngOnInit(): void {
    this.CreateForm()
  }
CreateForm(){
  this.productForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', ],
    price: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
    // phoneNumber: ['', [Validators.required,]],
    // customerAddress:this.fb.array([
    //   this.fb.group({
    //   addressLine1: [''],
    //   addressLine2: [''],
    //   city: [''],
    //   state: [''],
    //   postalCode: [''],
    //   country: [''],
    //   isShippingAddress: [false],
    //   isBillingAddress: [false],
    // })
  // ]),

  }, {});

  this.isFormCreated=true
}

// get addresses() {
//   return this.customerForm.get('customerAddress') as FormArray;
// }

// onAddAddress() {
//   this.addresses.push(
//     this.fb.group({
//       addressLine1: [''],
//       addressLine2: [''],
//       city: [''],
//       state: [''],
//       postalCode: [''],
//       country: [''],
//       isShippingAddress: [false],
//       isBillingAddress: [false],
//     }
//   ));
// }
// onMinusAddress(i: number) {
//   this.addresses.removeAt(i);
// }
submit() {
  let productModel: IProduct = this.productForm.value as IProduct;``
  console.log(productModel);
  
  this.productService.addProduct(productModel).subscribe((res) => {
    history.back()
  });
}
}
