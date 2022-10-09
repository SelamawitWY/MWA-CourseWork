import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import IUserState from 'src/app/models/IUserState';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-login',
  // template:``,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  loginForm!: FormGroup;
  lat: any;
  long: any;

  constructor(private formBuilder: FormBuilder,private userService: UserService, private router: Router) {
    this.getLocation();
    this.loginForm = formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
      password: [null,[Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
      lat: [this.lat],
      long: [this.long],
    })

    this.getLocation();
  }

  login() {
    this.submitted = true;
    if(this.loginForm.valid){
    this.userService.login(this.loginForm.value)
    .subscribe(response => {

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
        owner: token.owner}

        localStorage.setItem('APP_STATE',JSON.stringify(stateObject) );
        this.userService.state.next(stateObject);
        if(token.role =="user"){
          this.router.navigate(['/users']);
        }
        else{
          this.router.navigate(['/restaurants']);
        }

      });
    }
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.long = position.coords.longitude;
          this.loginForm.patchValue({
            lat: this.lat ,
            long: this.long
          });
        }
      },
        (error) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  ngOnInit(): void {
  }

}
