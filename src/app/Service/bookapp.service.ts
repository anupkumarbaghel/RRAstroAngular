import { Injectable } from '@angular/core';
import { AppConfig } from '../app.config';
import { Http, Response } from '@angular/http';
import {BookAppointmentModel} from '../model/BookApp/bookAppointment';


@Injectable()
export class bookAppService {
    constructor(private http: Http, private config: AppConfig) { }

    postbookedAppointment(bApp: BookAppointmentModel) {
        console.log('submit question service call');
        console.log(JSON.stringify(bApp));
        return this.http.post(this.config.coreAPIUrl + '/api/bookappointment', bApp)
            .map((response: Response) => {
              //  let questionDetails:QuestionModel = response;
                var obj = JSON.parse(JSON.stringify(response),);
                console.log('response ' + JSON.stringify(response));
            });
    }

}