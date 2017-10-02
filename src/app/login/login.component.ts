import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import{ActivatedRoute } from '@angular/router';
import { AlertService } from '../Service/alert.service';
import { UserService } from '../Service/user.service';
import { AuthenticationService } from '../Service/authentication.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  isLogin : boolean = false;


  onUserLoginUpdate(isUserLoggedIn: boolean): void
  {
      this.authenticationService.isLogin = this.isLogin=isUserLoggedIn;
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }



    ngOnInit() {
      // reset login status
      this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
              this.alertService.success('Login successful', true);
              console.log("Login successful");
              this.onUserLoginUpdate(true);
              this.router.navigate(['/services']);
            },
            error => {
              console.log("error");
              this.onUserLoginUpdate(false);
                this.alertService.error(error._body);
                this.loading = false;
            });
}

    register() {
      this.loading = true;
      this.userService.create(this.model)
          .subscribe(
              data => {
                  this.alertService.success('Registration successful', true);
                  console.log("data "+data);
                  this.onUserLoginUpdate(true);
                  this.router.navigate(['/services']);
              },
              error => {
                this.onUserLoginUpdate(false);
                  this.alertService.error(error._body);
                  this.loading = false;
              });
  }
}
