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
export class RestaurantService {
  constructor(private http: HttpClient) { }

  publishFood(obj: any){
    return this.http.post<{success: boolean, data: any}>(environment.urls.api + 'api/foods', obj)
  }

  updateFood(obj: any, id: string){
    return this.http.put<{success: boolean, data: any}>(environment.urls.api + `api/foods/${id}`, obj)
  }

  deleteFood(id: string){
    return this.http.delete<{success: boolean, data: any}>(environment.urls.api + `api/foods/${id}`)
  }

  getFoods(){
    return this.http.get<{success: boolean, data: any}>(environment.urls.api + 'api/foods')
  }

  addExtra(obj: any){
    return this.http.post<{success: boolean, data: any}>(environment.urls.api + 'api/extras', obj)
  }

  deleteExtra(id: string){
    return this.http.delete<{success: boolean, data: any}>(environment.urls.api + `api/extras/${id}`)
  }

  updateExtra(obj: any, id: string){
    return this.http.put<{success: boolean, data: any}>(environment.urls.api + `api/extras/${id}`, obj)
  }

  getExtras(){
    return this.http.get<{success: boolean, data: Array<ExtraModel>}>(environment.urls.api + 'api/extras')
  }

  getOrders(){
    return this.http.get<{success: boolean, data: any}>(environment.urls.api + 'api/restaurants/bookings')
  }

  completeOrders(id: string){
    return this.http.put<{success: boolean, data: any}>(environment.urls.api + `api/restaurants/bookings/${id}`, {})
  }

  getRestaurantById(){
    return this.http.get<{success: boolean, data: any}>(environment.urls.api + 'api/restaurants')
  }

  editRestaurant(obj: RestaurantModel){
    return this.http.put<{success: boolean, data: any}>(environment.urls.api + 'api/restaurants', obj)
  }

  editUser(obj: IUserModel){
    return this.http.put<{success: boolean, data: any}>(environment.urls.api + 'api/users', obj)
  }
}

