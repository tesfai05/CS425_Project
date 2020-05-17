import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _http: HttpClient) { }

  postAddress(addressData: any){
    return this._http.post(environment.API_ENDPOINT + 'address', addressData);
  }

  postPayment(paymentData: any){
    return this._http.post(environment.API_ENDPOINT + 'payment', paymentData);
  }

  bookCar(bookingData: any){
    return this._http.post(environment.API_ENDPOINT + 'booking', bookingData);
  }
}
