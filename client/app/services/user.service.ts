import {Injectable} from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from "../models/user";

@Injectable()
export class UserService {

  private usersUrl = 'api/users';  // URL to web api
 
  constructor(private http: Http) { }

  getUser(): Promise<User[]> {
    console.log('2 - getUsers - service');
    console.log(this.jwt());
    return this.http.get(this.usersUrl, this.jwt())
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    return Promise.reject(error.statusText || error).then(function() {
      // doesn't call
    }, function() {
      return {error: error.json()};
    });
  }

  private jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + currentUser.token });
        // return new RequestOptions({ headers: headers });
        return { headers: headers };
    }
  }
}