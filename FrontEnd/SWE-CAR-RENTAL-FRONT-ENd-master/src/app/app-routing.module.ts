import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './pages/customer/customer.component';
import {HomeComponent} from './pages/home/home.component';
import {ListCarsComponent} from './pages/list-cars/list-cars.component';
import {AddCarComponent} from './pages/add-car/add-car.component';
import {AddUserComponent} from './pages/add-user/add-user.component';
import {PaymentComponent} from './pages/payment/payment.component';
import {BookingComponent} from "./pages/booking/booking.component";
import {BookingSuccessComponent} from "./pages/booking-success/booking-success.component";
import {AdminEmployeeComponent} from "./pages/admin-employee/admin-employee.component";
import {CancelBookingComponent} from "./pages/cancel-booking/cancel-booking.component";


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'customer', component: CustomerComponent },
  { path: 'list-cars/:startFormattedDate/:endFormattedDate/:numberRentDays', component: ListCarsComponent },
  { path: 'add-car', component: AddCarComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'booking/:carId/:numberRentDays/:startFormattedDate/:endFormattedDate', component: BookingComponent },
  { path: 'booking-success/:bookingId', component: BookingSuccessComponent },
  { path: 'user-features', component: AdminEmployeeComponent },
  { path: 'cancel-booking', component: CancelBookingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
