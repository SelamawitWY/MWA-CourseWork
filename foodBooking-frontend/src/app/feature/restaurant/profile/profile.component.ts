import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';
import RestaurantModel from 'src/app/models/RestaurantModel';
import { RegistrationService } from '../../registration/registration.service';
import { RestaurantService } from '../restaurant.service';
import UserModel from 'src/app/models/UserModel';
import jwtDecode from 'jwt-decode';
import IUserState from 'src/app/models/IUserState';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  restSignupForm!: FormGroup;
  lat: any;
  long: any;
  location : any ='';
  toPicker: any;
  submitted:boolean = false;
  restaurant!: RestaurantModel;

  constructor(private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router,
    private userService:UserService,
    private restaurantService: RestaurantService
    ) {
    this.restaurantService.getRestaurantById().subscribe(result => {
      if(result.success){
        this.restaurant = result.data;
        this.updateform();
      }
    })
  }

  updateform(){
    this.restSignupForm.patchValue({
      name: this.restaurant?.name,
      description: this.restaurant?.description ,
      workinghourto: this.restaurant?.workingHourTo,
      workinghourfrom: this.restaurant?.workingHourFrom,
      city: this.restaurant?.address?.city,
      state: this.restaurant?.address.state,
      location: `${this.restaurant.address.location[0]} , ${this.restaurant.address.location[1]}`
    });

    this.location = `${this.restaurant.address.location[0]} , ${this.restaurant.address.location[1]}`
    this.long = this.restaurant.address.location[0];
    this.lat = this.restaurant.address.location[1];
  }

  ngOnInit(): void {
    this.restSignupForm =  this.formBuilder.group({
      email: [this.userService.state.value.email, Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
      password: [null,[Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
      phonenumber : [this.userService.state.value.phoneNumber, Validators.required],
      name: [this.restaurant?.name, Validators.required],
      description: [this.restaurant?.description, Validators.required],
      workinghourto: [this.restaurant?.workingHourTo, Validators.required],
      workinghourfrom: [this.restaurant?.workingHourFrom, Validators.required],
      city: [this.restaurant?.address?.city, Validators.required],
      country: ["US", Validators.required],
      state: [this.restaurant?.address.state, Validators.required],
      location: [`${this.userService.state.value.long} , ${this.userService.state.value.lat}`, Validators.required]
    })

  }

  editRestaurant(){
    this.submitted = true;
    const data = this.restSignupForm.value;

    if(this.restSignupForm.valid){

        const userData = {
          fullname: data.name,
          email: data.email,
          password: data.password,
          phonenumber: data.phonenumber
         } as UserModel;

        this.restaurantService.editUser(userData).subscribe((res) => {
          if(res.success){
            this.updateRestaurantDetail(data, res.data);
          }
        });
    }

  }

  updateRestaurantDetail(data: any, userState: any) {
    const restaurant : RestaurantModel= {
      name: data.name,
      description: data.description,
      workingHourFrom: data.workinghourfrom ,
      workingHourTo: data.workinghourto,
      address: {
        city: data.city ,
        state: data.state ,
        country: data.country ,
        location: [this.long, this.lat],
      },
      owner: this.userService.state.value._id ,
    };

    this.restaurantService.editRestaurant(restaurant).subscribe((response) => {
      if(response.success){
        this.persistUserState(userState);

      }
    });

  }

  persistUserState(data: any){
    const token = jwtDecode(data) as IUserState;
    const stateObject = {
      _id: token._id,
      email: token.email,
      fullName:token.fullName,
      role: token.role,
      token: data,
      phoneNumber: token.phoneNumber,
      lat :token.lat,
      long: token.long,
      owner: token.owner
    }

    localStorage.setItem('APP_STATE',JSON.stringify(stateObject) );
    this.userService.state.next(stateObject);
    this.router.navigate(['/restaurants']);
  }

  getLocation() {
    if (navigator.geolocation) {
      this.location = "Loading...";
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.long = position.coords.longitude;
          this.location = `${this.long} , ${this.lat}`
        }
      },
        (error) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
