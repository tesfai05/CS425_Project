import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.component.html',
  styleUrls: ['./booking-success.component.scss']
})
export class BookingSuccessComponent implements OnInit {
  bookingId: string;

  constructor(private _route: ActivatedRoute,) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this.bookingId = params.get('bookingId');
    });
  }

}
