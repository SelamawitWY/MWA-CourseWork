import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import IUserModel from 'src/app/models/UserModel';
import { environment } from 'src/environments/environment';
import  RestaurantModel from "src/app/models/RestaurantModel";
import FoodModel from 'src/app/models/FoodModel';
import ExtraModel from 'src/app/models/ExtraModel';
@Injectable({
  providedIn: 'root'
})
export class UserFoodService {
  constructor(private http: HttpClient) { }

  getFoods(){
    return this.http.get<{success: boolean, data: any}>(environment.urls.api + 'api/foods/nearby')
  }

  getOrders(){
    return this.http.get<{success: boolean, data: any}>(environment.urls.api + 'api/users/bookings')
  }

  cancelOrders(id: string, data: { restaurant_id: string; food_id: string; quantity: Number; }){
    return this.http.put<{success: boolean, data: any}>(environment.urls.api + `api/users/bookings/${id}`, data)
  }

  getExtras(){
    return this.http.get<{success: boolean, data: Array<ExtraModel>}>(environment.urls.api + 'api/extras')
  }

  bookFood(obj: any){
    return this.http.post<{success: boolean, data: any}>(environment.urls.api + 'api/users/bookings', obj)
  }

  editUser(obj: IUserModel){
    return this.http.put<{success: boolean, data: any}>(environment.urls.api + 'api/users', obj)
  }
}

