import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  carForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.carForm = new FormGroup({
      carVinNumber: new FormControl('', [Validators.required,   Validators.pattern('^[0-9]*$')]),
      plateNumber: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      make: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      categoryName: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      rentPricePerDay: new FormControl('', Validators.required)
    });
  }

}
