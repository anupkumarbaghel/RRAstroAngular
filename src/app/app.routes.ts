import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import  {DefaultComponent } from './default/default.component';
import { SubmitQuestionComponent } from './submitque/submit-question.component';
import { KundaliReqComponent } from './kundali-req/kundali-req.component';
import { BookAppointmentComponent  } from './book-appointment/book-appointment.component';
import { GetColorstoneComponent } from './get-colorstone/get-colorstone.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

export const appRoute: Routes = [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'aboutus',
        component: AboutusComponent
    },
    {
        path: 'contactus',
        component: ContactusComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'default',
        component: DefaultComponent
    },
    {
        path: 'submitque',
        component: SubmitQuestionComponent
    },
    {
        path: 'kundali-req',
        component: KundaliReqComponent
    },
    {
        path: 'bookapp',
        component: BookAppointmentComponent
    },
    {
        path: 'services/get-colorstone',
        component: GetColorstoneComponent
    },
    {
        path: 'thankyou',
        component: ThankyouComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoute);