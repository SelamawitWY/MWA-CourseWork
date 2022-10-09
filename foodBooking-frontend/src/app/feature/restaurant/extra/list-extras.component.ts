import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ExtraModel from 'src/app/models/ExtraModel';
import { RestaurantService } from '../restaurant.service';
@Component({
  selector: 'app-list-extras',
  templateUrl: './list-extras.component.html',
  styleUrls: ['./extra.component.css', './list-extras.component.css']
})
export class ListExtrasComponent implements OnInit {

  extras!: Array<ExtraModel>;

  constructor( private restaurantService: RestaurantService, private router: Router,) {
    this.getExtras()
  }

  ngOnInit(): void {}

  getExtras(){
    this.restaurantService.getExtras().subscribe((result) => {
      if(result.success){
        this.extras = result.data;

      }
    });
  }

  edit(extra:ExtraModel){
    this.router.navigate([`restaurants/extras/add`], { state: { data: extra} });
  }

  delete(extra: ExtraModel){
    this.restaurantService.deleteExtra(extra._id as string).subscribe((result) => {
      if(result.success){
        this.getExtras();
        this.router.navigate(['/restaurants/extras']);
      }
    });
  }

}
