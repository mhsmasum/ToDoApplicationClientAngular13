import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from "rxjs/operators";

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if ( localStorage.getItem('token') != null) {
        
      
        const clonedReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
        });
        return next.handle(clonedReq).pipe(
         
            tap(
                succ => { },
                err => {
                    if (err.status == 401){
                        localStorage.removeItem('token');
                        this.router.navigateByUrl('signin');
                    }
                }
            )
        )
    }
    else
        return next.handle(req.clone());
}
}
