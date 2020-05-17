import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.paymentForm = new FormGroup({
      paymentDate: new FormControl('', Validators.required),
      cardNumber: new FormControl('', Validators.required),
      cardCVV: new FormControl('', Validators.required),
      totalPrice: new FormControl({value: '', disabled: true}, Validators.required),
      paymentStatus: new FormControl({value: '', disabled: true}, Validators.required),
      streetLine: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zipcode: new FormControl('', Validators.required),
      country: new FormControl({value: '', disabled: true}, Validators.required),
      state: new FormControl('', Validators.required)
    });
  }

}
