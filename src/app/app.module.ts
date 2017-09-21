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
import { UserService } from './Service/user.service';
import{HttpModule} from '@angular/http';
import { AppConfig } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    LoginComponent,
    ServicesComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoute),FormsModule,HttpModule
  ],
  providers: [AlertService, UserService, AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
