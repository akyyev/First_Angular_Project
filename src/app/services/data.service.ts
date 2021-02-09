import { NotFoundError } from './../comman/not-found-error';
import { AppError } from './../comman/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { BadInput } from '../comman/bad-input';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, public http: HttpClient) { }

  getAll() {
    return this.http.get(this.url, {responseType: "json"})
      .pipe( map( response => response ), catchError(this.handleError) );
  }

  // TODO 
  create(resource) {
    if(resource.title === 'salam') {
      // if you type - salam - it should return not found error (404)
      return this.http.post(this.url+123, resource).pipe( catchError( this.handleError) );
    }
    return this.http.post(this.url, resource)
      .pipe( catchError( this.handleError) );
  }

  update(resource) {
    return this.http.patch( this.url + "/" + resource.id, { isRead: true})
      .pipe( catchError(this.handleError) );
  }

  delete(id) {
    return this.http.delete( this.url + "/" + id)
      // .toPromise()
      // .retry(3)
      .pipe( catchError(this.handleError) );
  }

  private handleError(error: Response) {
    if(error.status === 400) return throwError( new BadInput(error) );
    else if(error.status === 404) return throwError(new NotFoundError());
    else return throwError(new AppError(error));
  }
}
