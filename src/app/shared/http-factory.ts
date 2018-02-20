import { XHRBackend, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { HttpService } from './http';

export function httpFactory( backend: XHRBackend,
                             defaultOptions: RequestOptions,
                           ) {
  return  new HttpService(backend, defaultOptions);
}
