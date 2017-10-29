import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import{Router} from '@angular/router';
import { User } from '../model/user';
import {AuthenticationService} from '../Service/authentication.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  providers : [AuthenticationService]
})
export class DefaultComponent implements OnInit {
  
  constructor(private authService : AuthenticationService,private router: Router ) { }
  isLogin: boolean = false; 
  currentUser: User;
  
  @Output()
  userLogin: EventEmitter<boolean> = new EventEmitter<boolean>();
  

  onUserLogin(){
    console.log('this.isLogin ' + this.isLogin);
    this.userLogin.emit(this.isLogin);
    this.router.isActive('',true);
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    
     this.isLogin = (this.authService.isLogin)? this.authService.isLogin:false ;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(this.currentUser)
    {
      this.isLogin = this.authService.isLogin =true;

    }
    console.log('is Login' + this.isLogin);
  }

  logout()
  {
    this.authService.isLogin = this.isLogin = false;
    this.authService.logout();
    this.router.navigate(['/services']);

  }

}
