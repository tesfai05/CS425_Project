import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {
  @Input() carImage: string;
  @Input() carRentPricePerDay: number;
  @Input() model: string;
  @Input() year: string;
  @Output() book: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onBook(){
    this.book.emit();
  }

}
