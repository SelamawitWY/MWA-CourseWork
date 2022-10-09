import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div style="color:white">
  © FOODBOOKING {{year | date:'y'}}
  </div>
 `
})
export class FooterComponent implements OnInit {

  year: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
