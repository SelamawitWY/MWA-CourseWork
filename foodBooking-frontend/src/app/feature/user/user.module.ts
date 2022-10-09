import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { NgxMaskModule } from 'ngx-mask';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FoodComponent } from './food/food.component';
import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    FoodComponent,
    ProfileComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    NgxMaterialTimepickerModule,
    NgxMaskModule.forChild(),
    RouterModule.forChild([
      {path:'profile', component: ProfileComponent, pathMatch:"full"},
      {path:'', component: FoodComponent, pathMatch:"full"},
      {path:'orders', component: OrderComponent, pathMatch:"full"},
    ])
  ]
})
export class UserModule { }
