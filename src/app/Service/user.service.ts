import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { AppConfig } from '../app.config';
import { User } from '../model/user';
import {RegisterModel} from '../model/register/register.model';
import{ AuthenticationService} from '../Service/authentication.service';
 
@Injectable()
export class UserService {
    constructor(private http: Http, private config: AppConfig) { }
 
    getAll() {
        return this.http.get(this.config.apiUrl + '/users', this.jwt()).map((response: Response) => response.json());
    }
 
    getById(_id: string) {
        return this.http.get(this.config.apiUrl + '/users/' + _id, this.jwt()).map((response: Response) => response.json());
    }
 
    create(user: RegisterModel) {
       
        return this.http.post(this.config.apiUrl + '/api/loginout', user, this.jwt())
        .map((response: Response) =>{
            let user = response.json();
            let authService : AuthenticationService ;
            console.log("user" + user);
            if (user && user.access_token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                let name: string[any] = authService.parseJwt(user.access_token);
                
                            console.log("name" + name['name']);
            }

        }); 
        
        
    }
 
    update(user: User) {
        return this.http.put(this.config.apiUrl + '/users/' + user._id, user, this.jwt());
    }
 
    delete(_id: string) {
        return this.http.delete(this.config.apiUrl + '/users/' + _id, this.jwt());
    }
 
    // private helper methods
 
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
           // localStorage.setItem('currentUser', JSON.stringify(currentUser));
            return new RequestOptions({ headers: headers });
        }
    }
}