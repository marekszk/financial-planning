import { Injectable } from '@angular/core';
import { Http, RequestOptions, XHRBackend, Request, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';


@Injectable()
export class HttpService extends Http {

  serviceBackend: XHRBackend;
  serviceOptions: RequestOptions;

  constructor(backend: XHRBackend, options: RequestOptions) {
    super(backend, options);
    this.serviceOptions = options;
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    if (typeof url === 'string') {
      if (!options) {
        options = { headers: new Headers() };
      }
    }
    return super.request(url, options).catch((error: Response) => {
      return Observable.throw(error);
    });
  }
}
