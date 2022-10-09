import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { NgxMaskModule } from 'ngx-mask';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FoodComponent } from './food/food.component';
import { ExtraComponent } from './extra/extra.component';
import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from '../header/header.component';
import { ListFoodsComponent } from './food/list-foods.component';
import { ListExtrasComponent } from './extra/list-extras.component';
@NgModule({
  declarations: [
    FoodComponent,
    ProfileComponent,
    OrderComponent,
    ExtraComponent,
    ListFoodsComponent,
    ListExtrasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    NgxMaterialTimepickerModule,
    NgxMaskModule.forChild(),
    RouterModule.forChild([
      {path:'', component: ListFoodsComponent, pathMatch:"full"},
      {path:'add', component: FoodComponent, pathMatch:"full"},
      {path:'extras', component: ListExtrasComponent, pathMatch:"full"},
      {path:'extras/add', component: ExtraComponent, pathMatch:"full"},
      {path:'orders', component: OrderComponent, pathMatch:"full"},
      {path:'profile', component: ProfileComponent, pathMatch:"full"},
    ])
  ]
})
export class RestaurantModule { }
