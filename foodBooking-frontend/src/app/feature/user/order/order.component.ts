import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import BookingModel from 'src/app/models/BookingModel';
import ExtraModel from 'src/app/models/ExtraModel';
import RestaurantModel from 'src/app/models/RestaurantModel';
import { UserFoodService } from '../userFood.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  bookings!: Array<BookingModel>;

  constructor( private userFoodService: UserFoodService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.userFoodService.getOrders().subscribe((result) => {
      if(result.success){
        this.bookings =  result.data;
      }
    });
  }

  getPrice(value: any){
    return value?.$numberDecimal
  }

  cancelOrder(order: BookingModel){
    const data = {
      restaurant_id: order.restaurant._id,
      food_id:order.food._id,
      quantity: order.quantity
    };

    this.userFoodService.cancelOrders(order._id as string, data).subscribe((result) => {
      if(result.success){
        this.getOrders();
      }
    });
  }

  getExtras(data: Array<ExtraModel>){
    let names : Array<string> = [] ;
    data.forEach(item => {
      names.push(item?.name as string);
    })
    return names.length > 0 ? names?.join(', ') : '---';
  }

}
