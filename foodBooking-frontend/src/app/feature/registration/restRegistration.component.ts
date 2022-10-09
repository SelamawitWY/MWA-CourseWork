import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { RegistrationService } from './registration.service';
import  RestaurantModel from "src/app/models/RestaurantModel";

@Component({
  selector: 'app-res-registration',
  templateUrl: './restRegistration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RestaurantRegistrationComponent implements OnInit {

  restSignupForm!: FormGroup;
  lat: any;
  long: any;
  location : any ='';
  toPicker: any;
  submitted:boolean = false;

  constructor(private formBuilder: FormBuilder,private registrationService: RegistrationService, private router: Router) {

  }

  ngOnInit(): void {
    this.restSignupForm =  this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
      password: [null,[Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
      phonenumber : [null, Validators.required],
      name: [null, Validators.required],
      description: [null, Validators.required],
      workinghourto: [null, Validators.required],
      workinghourfrom: [null, Validators.required],
      city: [null, Validators.required],
      country: ["US", Validators.required],
      state: [null, Validators.required],
      location: [null, Validators.required]
    })

  }

restaurantSignup(){
    this.submitted = true;
    const data = this.restSignupForm.value;

    if(this.restSignupForm.valid){

        const userData = {
          fullname: data.name,
          email: data.email,
          password: data.password,
          phonenumber: data.phonenumber,
          role: "restaurant",
        };

        this.registrationService.registration(userData).subscribe((result) => {

          if(result.success){
            data.owner = result.data.id;
            this.saveRestaurant(data);
          }
        });

    }

  }

  saveRestaurant(data: any) {
    const restaurant : RestaurantModel= {
      name: data.name,
      description: data.description,
      workingHourFrom: data.workinghourfrom ,
      workingHourTo: data.workinghourto,
      address: {
        city: data.city ,
        state: data.state ,
        country: data.country ,
        location: [data.location.long, data.location.lat],
      },
      owner: data.owner ,
    };

    this.registrationService.signUpRestaurant(restaurant).subscribe((result) => {
      if(result.success){
        this.router.navigate(['/login']);
      }
    });


  }

  getLocation() {
    if (navigator.geolocation) {
      this.location = "Loading...";
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.long = position.coords.longitude;
          this.location = `${this.long} , ${this.lat}`
          this.restSignupForm.controls['location'].setValue({long: this.long, lat:this.lat});
        }
      },
        (error) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
