import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ExtraModel from 'src/app/models/ExtraModel';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {
  extraForm!: FormGroup;
  submitted:boolean = false;
  imageSrc!: string ;
  selectedImage: any;
  updatedData!: ExtraModel;

  constructor(private formBuilder: FormBuilder,private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit(): void {
    this.updatedData= history.state.data;
    if(this.updatedData){
      this.imageSrc = this.updatedData?.imageUrl as string;
    }
    this.extraForm =  this.formBuilder.group({
      price : [this.updatedData?.price, Validators.required],
      name: [this.updatedData?.name, Validators.required],
      image: [null],
    })
  }

  submit(){
    this.submitted = true;
    const data = this.extraForm.value;


    if(this.extraForm.valid){
      const formData = new FormData();
      formData.append("file", this.selectedImage);
      formData.append("name", data.name);
      formData.append("price", data.price);

      if( history.state.data){
        this.restaurantService.updateExtra(formData, this.updatedData?._id as string).subscribe((result) => {

          if(result.success){
            this.router.navigate(['/restaurants/extras']);
          }
        });
      } else{
        this.restaurantService.addExtra(formData).subscribe((result) => {

          if(result.success){
            this.router.navigate(['/restaurants/extras']);
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
        this.extraForm.patchValue({
          image: reader.result
        });
      };
    }
  }

}
