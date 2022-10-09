import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd} from '@angular/router';
import { UserService } from './core/user.service';


@Component({
  selector: 'app-root',
  template: `
    <app-header *ngIf="hederFooter"></app-header>
    <router-outlet></router-outlet>
    <app-footer *ngIf="hederFooter"></app-footer>
   `,
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'foodBooking-frontend';
  hederFooter:boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
       if(this.userService.state?.value?._id){

        if ((this.router.url.includes('users') && !this.router.url.includes('signup')) ||
            (this.router.url.includes('restaurants') && !this.router.url.includes('signup')))
          {
            this.hederFooter = true;
          } else {
            this.hederFooter = false;
          }
        }else {
          this.hederFooter = false;
        }
      }
    })

  }
}
