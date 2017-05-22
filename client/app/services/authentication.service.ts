import {Injectable} from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from "../models/user";

@Injectable()
export class AuthenticationService {

  private usersUrl = 'api/users';  // URL to web api

  constructor(private http: Http) { }

  logIn(user: User): Promise<any> {
    return this.post(user);
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  private post(user: User): Promise<any> {
    let headers = new Headers({
      'Content-Type': 'application/json'});

    return this.http
      .post('api/login', JSON.stringify(user), {headers:headers})
      .toPromise()
      .then(response => {
        let user = response.json();
        console.log(user);
        if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return {user: user};
      })
      .catch(this.handleError);
  }


  private handleError(error: any) {
    return Promise.reject(error.statusText || error).then(function() {
      // doesn't call
    }, function() {
      return {error: error.json()};
    });
  }
  
}