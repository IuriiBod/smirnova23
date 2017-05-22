import {Component, Input, OnInit} from '@angular/core';

import { UserService } from "../../services/user.service";
import { AuthenticationService }  from '../../services/authentication.service';
import { User } from "../../models/user";
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './app/components/login/login.component.html'
})

export class LoginComponent implements OnInit {
    @Input()
    user: User;
    error: string;
        
    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private router: Router) {
    }

    ngOnInit() {
      this.user = new User();
      this.error = '';
      // reset login status
      this.authenticationService.logout();
    }    
    

    logIn() {
      this.authenticationService.logIn(this.user)
        .then(result => {
          if(result.user) {
            this.router.navigate(['adminpage/home']);  
          } else if(result.error) {
            this.error = result.error.message;
          }
        })
        .catch(error => console.log('error:',error)); // TODO: Display error message
    }

    // save() {
    // //   console.log(this.user);
    // //     this.heroService
    // //         .save(this.user)
    // //         .then(hero => {
    // //             this.user = hero; // saved hero, w/ id if new
    // //             //this.goBack();
    // //         })
    // // //         .catch(error => this.error = error); // TODO: Display error message
    // }

    // goBack() {
    //     window.history.back();
    // }
}