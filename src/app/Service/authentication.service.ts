import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {User} from '../model/user';
 
import { AppConfig } from '../app.config';
 
@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private config: AppConfig) { }
    private headers: Headers;
    public token: string;
    public isLogin : boolean;
    private setHeaders() {
        
               console.log("setHeaders started");
               this.token = "Basic cm8uY2xpZW50OnNlY3JldA==";
               this.headers = new Headers();
               this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
               this.headers.append('Accept', 'application/json');
               this.headers.append('Authorization', this.token );        
        
           }


            /** 
     * // Encodes the parameters. 
     * 
     * @param params The parameters to be encoded 
     * @return The encoded parameters 
     */  
    private encodeParams(params: any): string {  
        
              let body: string = "";  
              for (let key in params) {  
                  if (body.length) {  
                      body += "&";  
                  }  
                  body += key + "=";  
                  body += encodeURIComponent(params[key]);  
              }  
        
              return body;  
          }  

    login(email: string, password: string) {

        this.setHeaders();
        let params: any = {  
            username: email, // "ashish.shrivastava@infobeans.com", 
            password: password, //"Sonal@123",
            grant_type: "password",  
            scope: "api1"  
        };  
        let currentUser : User;
         // Encodes the parameters.  
         let body: string = this.encodeParams(params); 
        return this.http.post(this.config.apiUrl + '/connect/token', 
        body,
         { headers: this.headers })
    .map((response: Response) => {
        // login successful if there's a jwt token in the response
        console.log('response ' + response.json());
        let user = response.json();
        if (user && user.access_token) {
            console.log('access_token ' + user.access_token);      
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));            
            console.log('currentUser '+ localStorage.getItem('currentUser'));  
           this.isLogin=true;
            let name: string[any] = this.parseJwt(user.access_token);
            console.log(name['name']);
        }
            });
            
    }

    public parseJwt = function(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
      }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.isLogin=false;
        console.log('user logged out');
    }
}