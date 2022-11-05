import { AddressViewModel } from "./address";

export interface ICustomer {
    id:string,
    firstName:string,
    lastName:string,
    email:string,
    phoneNumber:String,
    isActive:boolean,
    customerAddress: Array<AddressViewModel>;
}
