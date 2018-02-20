import {Http, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { HttpService } from '../shared/http';

@Injectable()
export class CategoriesService {

    constructor(
        private http: HttpService
    ) { }

    getCategories(): Observable<any> {
        return this.http.get('http://localhost:8000/categories/')
            .map(response => response.json());
    }
}
