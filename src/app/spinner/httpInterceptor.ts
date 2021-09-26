import { Injectable } from '@angular/core';
import { SpinnerService } from './spinner.service';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class httpInterceptor implements HttpInterceptor {
  constructor(private spinner: SpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinner.requestStarted();
    return this.handler(next, req);
  }
  handler(next, req) {
    return next.handle(req).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            this.spinner.requestEnded();
          }
        },
        (error: HttpErrorResponse) => {
          this.spinner.resetSpinner();
          throw error;
        }
      )
    );
  }
}
