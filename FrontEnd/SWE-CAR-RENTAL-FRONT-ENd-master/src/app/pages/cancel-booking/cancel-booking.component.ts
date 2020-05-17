import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.scss']
})
export class CancelBookingComponent implements OnInit {
  searchBookingFormGroup: FormGroup;
  isAvailable: boolean = false;
  bookingData: any = {};

  constructor(private _formBuilder: FormBuilder,
              private _customerService: CustomerService) { }

  ngOnInit(): void {
    this.searchBookingFormGroup = this._formBuilder.group({
      bookingReference: new FormControl('', Validators.required),
    });
  }

  searchBookingReference(){
    this._customerService.searchBooking(this.searchBookingFormGroup.controls['bookingReference'].value)
      .subscribe(
        (response: any) => {
          this.bookingData = response[0];
          this.isAvailable = true;
        }
      );
  }

  delete(referenceNumber: any){
    this._customerService.deleteBooking(referenceNumber)
      .subscribe(
        (response: any) => {
          this.bookingData = {};
          this.isAvailable = false;
        }
      );
  }
}
