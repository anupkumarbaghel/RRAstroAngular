import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToService():void{
    
        this.router.navigate(['/services'])
      }
}
