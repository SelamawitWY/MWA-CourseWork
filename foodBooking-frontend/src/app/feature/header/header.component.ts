import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   username!: string;

  constructor(private router: Router, private userService: UserService) {

    this.userService.state.subscribe((value) => {
      console.log(value)
      this.username = value?.fullName;
    })
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }
  openProfile(){
    if(this.userService.state.value.role == "user"){
      this.router.navigate(['/users/profile']);
    } else {
      this.router.navigate(['/restaurants/profile']);
    }
  }

}
