import { Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LoginComponent} from './components/login/login.component';
import {CarService} from "./services/car.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public headerTitle: string = 'MIU Car Rental';
  public loginTitle: string = 'Log in';
  public loginIcon: string = 'account_circle';


  constructor(public dialog: MatDialog,
              private _carService: CarService){
  }

  ngOnInit(){

  }


  onOpen(event){
    const dialogRef = this.dialog.open(LoginComponent, {
      width: 'inherit',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
