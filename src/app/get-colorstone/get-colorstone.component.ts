import { Component, OnInit } from '@angular/core';
import { NgForm  } from '@angular/forms';
import {colorStoneReqService } from '../Service/colorstone.service'
import { ColorStoneRequestModel } from '../model/getColorStone/colorStoneReq'
import { AlertService } from '../Service/alert.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-get-colorstone',
  templateUrl: './get-colorstone.component.html',
  styleUrls: ['./get-colorstone.component.css']
})
export class GetColorstoneComponent implements OnInit {

  constructor(private colorStoneReqService: colorStoneReqService
    , private alertService: AlertService,
    private router: Router,) { }
  
    colorStoneReq : ColorStoneRequestModel =  new ColorStoneRequestModel();
    ngOnInit() {
    }
  
    onSubmit(f: NgForm) {
      
              // some stuff
      
              f.resetForm();
    }

    saveColorStoneReq(): void {
     // this.queTopic.questionList = [this.questionType];
      console.log(JSON.stringify(this.colorStoneReq));
      this.colorStoneReqService.postcolorStoneReq(this.colorStoneReq).subscribe(
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
