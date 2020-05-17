import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient) { }

  postCustomer(customerData: any){
    return this._http.post(environment.API_ENDPOINT + 'customer_info', customerData);
  }

  searchBooking(bookingReference: any){
    return this._http.get(environment.API_ENDPOINT + 'search_booking/' + bookingReference);
  }

  deleteBooking(bookingReference: any){
    return this._http.put(environment.API_ENDPOINT + 'cancel_booking/' + bookingReference, null);
  }
}
