import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { IOrder } from 'src/app/models/iorder';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  httpOption;
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // ,Authorization: 'my-auth-token'
      })
    };
  }


  getAllOrders(): Observable<IOrder[]> {
    return this.httpClient.get<IOrder[]>(`${environment.api}/SalesOrder/Get`)
  }

  getOrderByID(ID: number): Observable<IOrder> {
    return this.httpClient.get<IOrder>(`${environment.api}/SalesOrder/GetByID?ID=${ID}`)
  }

 changeActivation(ID:number){
    return this.httpClient.put(`${environment.api}/SalesOrder/ChangeActivationStatus?ID=${ID}`,"")
 }
  updateProduct(prdID: number, UpdatedPrd: IOrder) {

  }

  deleteProduct(prdID: number) {

  }

  addOrder(Order: IOrder): Observable<IOrder> {
    return this.httpClient
    .post<IOrder>(`${environment.api}/SalesOrder/Post`, JSON.stringify(Order), this.httpOption)
  }
}