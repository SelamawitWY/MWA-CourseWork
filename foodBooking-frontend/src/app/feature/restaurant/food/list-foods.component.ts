import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ExtraModel from 'src/app/models/ExtraModel';
import FoodModel from 'src/app/models/FoodModel';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-list-foods',
  templateUrl: './list-foods.component.html',
  styleUrls: ['./food.component.css', './list-foods.component.css']
})
export class ListFoodsComponent implements OnInit {
  foods!: Array<FoodModel>;

  constructor( private restaurantService: RestaurantService, private router: Router,) {
    this.getFoods()
  }

  ngOnInit(): void {}

  getFoods(){
    this.restaurantService.getFoods().subscribe((result) => {

      if(result.success){
        this.foods = result.data[0].foods;

      }
    });
  }

  edit(food:FoodModel){
    this.router.navigate([`restaurants/add`], { state: { data: food} });
  }

  delete(food: FoodModel){
    this.restaurantService.deleteFood(food._id as string).subscribe((result) => {
      if(result.success){
        this.getFoods();
        this.router.navigate(['/restaurants']);
      }
    });
  }

  getExtras(data: FoodModel){
    let names : Array<string> = [] ;
    data?.extras?.forEach(item => {
      names.push(item?.name as string);
    })
    return names.length > 0 ? names?.join(', ') : '---';
  }

}
