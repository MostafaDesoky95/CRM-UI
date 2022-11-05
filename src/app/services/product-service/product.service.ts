import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { ICustomer } from '../../models/icustomer';
import { environment } from 'src/environments/environment';
import { IProduct } from 'src/app/models/iProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOption;
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // ,Authorization: 'my-auth-token'
      })
    };
  }


  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.api}/Product/Get`)
  }

  getProductByID(ID: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${environment.api}/Product/GetByID?ID=${ID}`)
  }

 
  updateProduct(prdID: number, UpdatedPrd: IProduct) {

  }

  deleteProduct(prdID: number) {

  }
  addProduct(model : IProduct) : Observable<IProduct>{
    return this.httpClient.post<IProduct>(`${environment.api}/Product/Post`,JSON.stringify(model),this.httpOption)
  } 
}