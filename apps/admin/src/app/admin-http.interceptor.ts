import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AdminHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor triggered');
    const modifiedReq = req.clone({
      headers: req.headers.set('X-Test-Header', 'TestHeaderValue')
    });
    console.log(modifiedReq.headers.get('X-Test-Header'));

    return next.handle(modifiedReq);
  }
}
