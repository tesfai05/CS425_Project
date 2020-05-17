import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss']
})
export class ListCarsComponent implements OnInit {
  carData = {
    imageUrl: '../../../assets/images/mercedes.jpeg',
  };
  public carsData: any = [];
  public differenceInDays;
  public startDate;
  public endDate;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _carService: CarService) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this.startDate= params.get('startFormattedDate');
      this.endDate = params.get('endFormattedDate');
      this.differenceInDays = params.get('numberRentDays');
      this._carService.getAvailableCarsOnDate(this.startDate, this.endDate)
        .subscribe(
          (cars: any) => {
            this.carsData = cars;
          }
        );
    });
  }
  goToCustomer(carId: any){
    this._router.navigate(['/booking', carId,  this.differenceInDays, this.startDate, this.endDate]);
  }

}
