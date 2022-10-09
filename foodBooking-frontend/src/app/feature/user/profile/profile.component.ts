import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';
import { RegistrationService } from '../../registration/registration.service';
import { UserFoodService } from '../userFood.service';
import jwtDecode from 'jwt-decode';
import IUserState from 'src/app/models/IUserState';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isUser:boolean = false;
  isRestaurant: boolean = false;
  restSignupForm!: FormGroup;
  submitted:boolean = false;
  userSignupForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService:UserService, private userFoodService: UserFoodService) {

  }


  ngOnInit(): void {
    this.userSignupForm = this.formBuilder.group({
      email: [this.userService.state.value.email, Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
      password: [null,Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(32)])],
      phonenumber : [this.userService.state.value.phoneNumber, Validators.required],
      fullname: [this.userService.state.value.fullName, Validators.required]
    })
  }

  userUpdate(){
      this.submitted = true;
      const data = this.userSignupForm.value;
      if(this.userSignupForm.valid){
        this.userFoodService.editUser(data)?.subscribe(response => {
          if(response.success){
              const token = jwtDecode(response.data) as IUserState;
              const stateObject = {
                _id: token._id,
                email: token.email,
                fullName:token.fullName,
                role: token.role,
                token: response.data,
                phoneNumber: token.phoneNumber,
                lat :token.lat,
                long: token.long,
                owner: token.owner
              }

              localStorage.setItem('APP_STATE',JSON.stringify(stateObject) );
              this.userService.state.next(stateObject);
              this.router.navigate(['/users']);
            }

          });
       }
    }
  }
