import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ExtraModel from 'src/app/models/ExtraModel';
import FoodModel from 'src/app/models/FoodModel';
import RestaurantModel from 'src/app/models/RestaurantModel';
import BookingModel from 'src/app/models/BookingModel';
import { RestaurantService } from '../../restaurant/restaurant.service';
import { UserFoodService } from '../userFood.service';
import { UserService } from 'src/app/core/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  foods!: Array<FoodModel>;
  orderForm!: FormGroup;
  submitted:boolean = false;
  extras!: Array<ExtraModel>;
  selectedExtras!: Array<ExtraModel>;
  restaurants!: Array<RestaurantModel>;
  order!:BookingModel;

  constructor( private formBuilder: FormBuilder,private userFoodService: UserFoodService,
    private router: Router, private msg: MatSnackBar, private userService:UserService) {

    this.getFoods()
  }

  ngOnInit(): void {
    this.orderForm =  this.formBuilder.group({
      quantity : [1, Validators.required],
      extras: [null]
    })
  }

  getFoods(){
    this.userFoodService.getFoods().subscribe((result) => {

      if(result.success){
        // this.restaurant = result.data[0];
        this.restaurants = result.data;
      }
    });
  }

  bookFood(restaurant: RestaurantModel, food:FoodModel){

    const data = this.orderForm.value;
    const owner = {
      _id: this.userService.state.value._id,
      fullName: this.userService.state.value.fullName,
      email: this.userService.state.value.email,
      phoneNumber: this.userService.state.value.phoneNumber,
    }

    if(this.orderForm.valid && this.validateQuantity(food)){
      let totalPrice = food.price as number * data.quantity;
      this.selectedExtras?.forEach(extra => {
        totalPrice = totalPrice + (extra.price as number);
      });

      const formData = ({
          owner: owner,
          food: food,
          restaurant : restaurant,
          extras: this.selectedExtras,
          quantity: data.quantity,
          totalPrice: totalPrice
       });

      this.userFoodService.bookFood(formData).subscribe((result) => {
        if(result.success){
          this.router.navigate(['/users/orders']);
        }
      });

    }
  }


  validateQuantity(food: FoodModel): boolean {
    const total = food?.remainingQuantity as number;
    if(this.orderForm.value.quantity > total){
      this.msg.open(`Only ${total} ${food?.name} available` ,'', {  duration: 3000 });
      return false
    } else {
      return true;
    }

  }

  checkQuantity(value:any) {
    this.orderForm.value.quantity > value? this.orderForm.patchValue({
      quantity: value
    }) : null;
  }
  getExtras(data: FoodModel){
    let names : Array<string> = [] ;
    data?.extras?.forEach(item => {
      names.push(item?.name as string);
    })
    return names.length > 0 ? names?.join(', ') : '---';
  }
}
