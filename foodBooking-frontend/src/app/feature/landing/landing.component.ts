import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  images =new Array(
    '../../../assets/homePage.jpeg',
    '../../../assets/burger.jpeg',
    '../../../assets/pasta.png',
    '../../../assets/pizza.jpeg',
    '../../../assets/bread.jpeg'
    );
  nextimage = 0;
  imageURL =  '../../../assets/homePage.jpeg';
  isLanding: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url == '/'){
          this.isLanding = true;
        }
        }else {
          this.isLanding = false;
        }
    })

    this.doSlideshow();
  }

  doSlideshow(){
      if(this.nextimage >= this.images.length){
         this.nextimage = 0;
      }
      this.imageURL = this.images[this.nextimage++ ];
      setTimeout(()=>{
        if(this.isLanding)
          this.doSlideshow();
      },15000);
  }

}
