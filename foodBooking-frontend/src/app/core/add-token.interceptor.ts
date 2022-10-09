import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.userService.state?.value?.token;
    if(token){
      const req_with_jwt = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
            // headers: request.headers.set('Authorization', `Bearer ${token}`)
      })
      return next.handle(req_with_jwt);
    } else {
      return next.handle(request);
    }

  }
}
