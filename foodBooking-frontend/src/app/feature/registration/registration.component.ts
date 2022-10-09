import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  isUser:boolean = false;
  isRestaurant: boolean = false;
  restSignupForm!: FormGroup;
  submitted:boolean = false;
  userSignupForm !: FormGroup;

  constructor(private formBuilder: FormBuilder,private registrationService: RegistrationService, private router: Router) {

  }


  ngOnInit(): void {
    this.userSignupForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
      password: [null,Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(32)])],
      phonenumber : [null, Validators.required],
      fullname: [null, Validators.required]
    })
  }

  userSignup(){
      this.submitted = true;
      const data = this.userSignupForm.value;
      data.role="user";
      if(this.userSignupForm.valid){
        this.registrationService.registration(data).subscribe((result) => {

          if(result.success){
            this.router.navigate(['/login']);
          }
        })
      }
  }

}
