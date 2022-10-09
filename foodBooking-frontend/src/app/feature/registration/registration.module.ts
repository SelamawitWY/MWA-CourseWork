import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RegistrationComponent } from './registration.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { NgxMaskModule } from 'ngx-mask';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { RestaurantRegistrationComponent} from './restRegistration.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    RestaurantRegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    NgxMaterialTimepickerModule,

    NgxMaskModule.forChild(),
    RouterModule.forChild([
      {path:'', component: RegistrationComponent, pathMatch:"full"},
      {path:'restaurants', component: RestaurantRegistrationComponent, pathMatch:"full"}
    ])
  ]
})
export class RegistrationModule { }
