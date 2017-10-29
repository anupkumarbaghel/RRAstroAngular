import { Component, OnInit } from '@angular/core';
import {KundaliRequestModel} from '../model/kundaliReq/kundaliRequest';
import {kundaliReqService} from '../service/kundalireq.service';

@Component({
  selector: 'app-kundali-req',
  templateUrl: './kundali-req.component.html',
  styleUrls: ['./kundali-req.component.css'],
  providers: [kundaliReqService]
})
export class KundaliReqComponent implements OnInit {


  constructor(private kreqService: kundaliReqService) { }

  kundaliReq : KundaliRequestModel =  new KundaliRequestModel();
  ngOnInit() {
  }

  saveKundaliReq(): void {
   // this.queTopic.questionList = [this.questionType];
    console.log(JSON.stringify(this.kundaliReq));
    this.kreqService.postkundaliReq(this.kundaliReq).subscribe(
       data => {
        // var obj = JSON.parse(JSON.stringify(data));
         console.log(data);
       }


    );

  }

}
