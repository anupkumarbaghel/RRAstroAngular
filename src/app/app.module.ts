import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';

import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router'
import { appRoute } from './app.routes';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AlertComponent } from './alert/alert.component'
import {AlertService} from './Service/alert.service'
import {AuthenticationService} from './Service/authentication.service'
import { UserService } from './Service/user.service';
import{HttpModule} from '@angular/http';
import { AppConfig } from './app.config';
import { SubmitQuestionComponent } from './submitque/submit-question.component';
import { submitQuestionService } from './Service/submitquestion.service';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    LoginComponent,
    ServicesComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    AlertComponent,
    SubmitQuestionComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoute),FormsModule,HttpModule
  ],
  providers: [AlertService, UserService, AppConfig, AuthenticationService, submitQuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
