import { Injectable } from '@angular/core';
import { AppConfig } from '../app.config';
import { Http, Response } from '@angular/http';
import {KundaliRequestModel} from '../model/kundaliReq/kundaliRequest';


@Injectable()
export class kundaliReqService {
    constructor(private http: Http, private config: AppConfig) { }

    postkundaliReq(kReq: KundaliRequestModel) {
        console.log('submit question service call');
        console.log(JSON.stringify(kReq));
        return this.http.post(this.config.coreAPIUrl + '/api/kundalireq', kReq)
            .map((response: Response) => {
              //  let questionDetails:QuestionModel = response;
                var obj = JSON.parse(JSON.stringify(response),);
                console.log('response ' + JSON.stringify(response));
            });
    }

}