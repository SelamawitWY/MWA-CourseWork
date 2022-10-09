import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import IUserModel from 'src/app/models/UserModel';
import { environment } from 'src/environments/environment';
import  RestaurantModel from "src/app/models/RestaurantModel";
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http: HttpClient) { }

  registration(obj: IUserModel){
    return this.http.post<{success: boolean, data: any}>(environment.urls.api + 'api/users', obj)
  }

  signUpRestaurant(obj: RestaurantModel){
    return this.http.post<{success: boolean, data: any}>(environment.urls.api + 'api/restaurants', obj)
  }
}

