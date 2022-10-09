import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private msg: MatSnackBar) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      catchError((err) => {
        const error = err.error.data || err.statusText;
        this.msg.open(error
        ,'',
        {
          duration: 3000
        });

        return next.handle(error);
      })
    );
  }
}
