import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule.forChild([
      {path:'', component: LoginComponent, pathMatch:"full"}
    ])
  ]
})
export class LoginModule { }
