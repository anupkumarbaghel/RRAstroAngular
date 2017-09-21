import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import{ActivatedRoute } from '@angular/router';
import { AlertService } from '../Service/alert.service';
import { UserService } from '../Service/user.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

    register() {
      this.loading = true;
      this.userService.create(this.model)
          .subscribe(
              data => {
                  this.alertService.success('Registration successful', true);
                  this.router.navigate(['/login']);
              },
              error => {
                  this.alertService.error(error._body);
                  this.loading = false;
              });
  }
}
