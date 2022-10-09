import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ProtectGuard } from './core/protect.guard';
import { AddTokenInterceptor } from './core/add-token.interceptor';
import { ErrorInterceptor } from './core/error.interceptor';
import { HeaderComponent } from './feature/header/header.component';
import { FooterComponent } from './feature/footer/footer.component';
import { LandingComponent } from './feature/landing/landing.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    RouterModule.forRoot([
      {path:'',
       loadChildren: ()=> import('./feature/landing/landing.module').then(module => module.LandingModule),
      },
      {path:'login',
       loadChildren: ()=> import('./feature/login/login.module').then(module => module.LoginModule),
      },
      {path:'signup',
       loadChildren: ()=> import('./feature/registration/registration.module').then(module => module.RegistrationModule),
      },
      {path:'restaurants',
       loadChildren: ()=> import('./feature/restaurant/restaurant.module').then(module => module.RestaurantModule), canActivate: [ProtectGuard]
      },
      {path:'users',
       loadChildren: ()=> import('./feature/user/user.module').then(module => module.UserModule), canActivate: [ProtectGuard]
      },
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
