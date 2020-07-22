import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  private readonly platformUrls: string[];

  constructor() {
    this.platformUrls = ['http://localhost:8085'];
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.platformUrls.some(url => request.url.startsWith(url))) {
      const authToken = localStorage.getItem('token');
      if (authToken) {
        request = request.clone({
          setHeaders: {
            'Authorization': `Bearer ${authToken}`
          }
        });
      }
    }

    return next.handle(request);
  }
}
