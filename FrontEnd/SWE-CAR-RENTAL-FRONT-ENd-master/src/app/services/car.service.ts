import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})

export class CarService {


  constructor(private _http: HttpClient) {
  }

  getCars() {
    return this._http.get(environment.API_ENDPOINT + 'cars');
  }

  getAvailableCarsOnDate(startDate: string, endDate: string) {
    const params = new HttpParams()
      .set('start', startDate)
      .set('end', endDate);
    return this._http.get(environment.API_ENDPOINT  + 'check_availiable_cars',{params});
  }

  getCarById(carId: any){
    return this._http.get(environment.API_ENDPOINT  + 'cars/' + carId);
  }
}
