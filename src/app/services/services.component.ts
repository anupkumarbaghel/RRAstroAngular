import { Component, OnInit } from '@angular/core';

import { User } from '../model/User';
import { UserService } from '../service/user.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [UserService, AuthenticationService]
})
export class ServicesComponent implements OnInit {

  currentUser: User;
  token : string;
  users: User[] = [];
  userName: string;

  constructor(private userService: UserService, private authenticationService: AuthenticationService) {
    
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
//this.token = JSON.parse(localStorage.getItem('token'));
if(this.currentUser)
{
      console.log('currentUser '+this.currentUser.access_token);   
      let accessToken: string[any] = this.authenticationService.parseJwt(this.currentUser.access_token);
      this.userName = accessToken['name'];
      //            console.log(name['name']);
    }
  }
  ngOnInit() {
      this.loadAllUsers();
  }

  deleteUser(_id: string) {
      this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
      //this.userService.getAll().subscribe(users => { this.users = users; });
      //console.log("currentUser "+this.currentUser.name);
  }


}
