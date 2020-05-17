import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {SharedMaterialModule} from './shared-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { HomeComponent } from './pages/home/home.component';
import { ListCarsComponent } from './pages/list-cars/list-cars.component';
import { AddCarComponent } from './pages/add-car/add-car.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { AdminEmployeeComponent } from './pages/admin-employee/admin-employee.component';
import { BookingComponent } from './pages/booking/booking.component';
import { BookingSuccessComponent } from './pages/booking-success/booking-success.component';
import {TokenService} from "./services/token.service";
import {first} from "rxjs/operators";
import {environment} from "../environments/environment";
import { CancelBookingComponent } from './pages/cancel-booking/cancel-booking.component';

export function jwtOptionsFactory(tokenService: TokenService): any {
  return {
    tokenGetter: () => {
      return tokenService.token$
        .pipe(first())
        .toPromise();
    },
    whitelistedDomains: environment.TOKEN_WHITELIST_DOMAINS,
    skipWhenExpired: false
  };
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DatePickerComponent,
    CarCardComponent,
    CustomerComponent,
    HomeComponent,
    ListCarsComponent,
    AddCarComponent,
    AddUserComponent,
    PaymentComponent,
    AdminEmployeeComponent,
    BookingComponent,
    BookingSuccessComponent,
    CancelBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [TokenService]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
