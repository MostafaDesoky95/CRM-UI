import { OrderStatus } from "./order-status";

export interface IOrder {
  id: string;
  isActive:boolean;
  status :OrderStatus;
  date: Date;
  customerID: number;
  productID:number;
  tax: number;
  subtotal: number;
  grandTotal: number;
  shippingAddressID: number;
  billingAddressID: number;  
  lineNo: number;  
  linePrice: number;  
  lineOrderQty: number;  
  lineTaxAmount: number;  
  lineTotal: number;
}
