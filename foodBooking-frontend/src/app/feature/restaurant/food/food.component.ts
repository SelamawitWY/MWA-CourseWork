import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER, F} from '@angular/cdk/keycodes';
import FoodModel from 'src/app/models/FoodModel';
import { RestaurantService } from '../restaurant.service';
import ExtraModel from 'src/app/models/ExtraModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  foodForm!: FormGroup;
  submitted:boolean = false;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  recipes: Array<{ name: string }> = [];
  extras!: Array<ExtraModel>;
  selectedExtras!: Array<ExtraModel>;
  imageSrc!: string ;
  selectedImage: any;
  updatedData!: FoodModel;
  minDate: Date = new Date();

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.recipes.push({name: value});
    }
    event.chipInput!.clear();
  }

  remove(recipe: any): void {
    const index = this.recipes.indexOf(recipe);

    if (index >= 0) {
      this.recipes.splice(index, 1);
    }
  }

  constructor(private formBuilder: FormBuilder, private restaurantService: RestaurantService, private router: Router) {
    this.restaurantService.getExtras().subscribe((result) => {
      if(result.success){
         this.extras = result.data;
         const foodExtras = this.updatedData?.extras as Array<ExtraModel>;
         const extrasIds = foodExtras?.map(item=> {return item._id});
         this.selectedExtras = this.extras.filter(item => extrasIds?.includes(item._id)) as unknown as Array<ExtraModel>;

      }
    });
  }

  ngOnInit(): void {
    this.updatedData= history.state.data;
    if(this.updatedData){
      this.imageSrc = this.updatedData?.imageUrl as string;
      this.recipes = this.updatedData?.recipe.map(function (item) {
        return { name: item }
      });
   }

    this.foodForm =  this.formBuilder.group({
      price : [this.updatedData?.price, Validators.required],
      name: [this.updatedData?.name, Validators.required],
      description: [this.updatedData?.description, Validators.required],
      quantity: [this.updatedData?.totalQuantity? this.updatedData?.totalQuantity : 1, Validators.required],
      bestBefore: [this.updatedData?.bestBeforeUse, Validators.required],
      recipe :[null],//Validators.required
      extras: [null],
      image: [null],
    })
  }


  submit(){
    this.submitted = true;
    const data = this.foodForm.value;


    if(this.foodForm.valid){
      const formData = new FormData();
      formData.append("file", this.selectedImage);
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("extras",JSON.stringify(this.selectedExtras));
      formData.append("recipe", JSON.stringify(this.recipes.map(recipe => recipe.name)));
      formData.append("bestBeforeUse", data.bestBefore);
      formData.append("totalQuantity", data.quantity);
      formData.append("remainingQuantity", data.quantity);
      formData.append("isAvailable", 'true');

      if( history.state.data){
        this.restaurantService.updateFood(formData, this.updatedData?._id as string).subscribe((result) => {
          if(result.success){
            this.router.navigate(['/restaurants']);
          }
        });
      } else{
        this.restaurantService.publishFood(formData).subscribe((result) => {
          if(result.success){
            this.router.navigate(['/restaurants']);
          }
        });
      }


    }
  }

  onFileChange(event: any) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.selectedImage = event.target.files[0];

      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.foodForm.patchValue({
          image: reader.result
        });
      };
    }
  }

}
