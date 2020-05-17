import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todayDate: Date = new Date();

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
  }

  search(event) {
    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);
    const startFormattedDate = moment(startDate).format("YYYY-MM-DD");
    const endFormattedDate = moment(endDate).format("YYYY-MM-DD");
    let differenceInTime = endDate.getTime() - startDate.getTime();
    // To calculate the no. of days between two dates
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);
    this._router.navigate(['/list-cars', startFormattedDate, endFormattedDate, differenceInDays]);
  }

  goToCancelBooking(){
    this._router.navigate(['/cancel-booking']);
  }
}
