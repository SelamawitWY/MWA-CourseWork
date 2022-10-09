import { Component, OnInit } from '@angular/core';
import BookingModel from 'src/app/models/BookingModel';
import ExtraModel from 'src/app/models/ExtraModel';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  bookings!: Array<BookingModel>;

  constructor( private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getPrice(value: any){
    return value?.$numberDecimal
  }

  getOrders(){
    this.restaurantService.getOrders().subscribe((result) => {
      if(result.success){
        this.bookings =  result.data;
      }
    });
  }

  completeOrder(order: BookingModel){
    this.restaurantService.completeOrders(order._id as string).subscribe((result) => {
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
