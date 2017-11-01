import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {BookAppointmentModel } from '../model/BookApp/bookAppointment';
import { bookAppService } from '../service/bookapp.service';
import { AlertService} from '../Service/alert.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css'],
  providers : [bookAppService]
})
export class BookAppointmentComponent implements OnInit {

  constructor(private router: Router,
  private bAppService : bookAppService,
  private alertService: AlertService) { }

  bookApp : BookAppointmentModel =  new BookAppointmentModel();
  ngOnInit() {
  }
  backToService():void{
    
        this.router.navigate(['/services'])
      }

      ScheduleAppointment(): void {
        // this.queTopic.questionList = [this.questionType];
         console.log(JSON.stringify(this.bookApp));
         this.bAppService.postbookedAppointment(this.bookApp).subscribe(
            data => {
            // this.alertService.success('Request for color stone submitted successfully', true);  
            this.router.navigate(['/thankyou']);
             
           },
             error => {
               console.log("error");
                 this.alertService.error(error._body);
             });
     
     
         
     
       }
}
