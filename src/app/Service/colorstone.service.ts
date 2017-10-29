import { Injectable } from '@angular/core';
import { AppConfig } from '../app.config';
import { Http, Response } from '@angular/http';
import {ColorStoneRequestModel} from '../model/getColorStone/colorStoneReq';


@Injectable()
export class colorStoneReqService {
    constructor(private http: Http, private config: AppConfig) { }

    postcolorStoneReq(colorStoneReq: ColorStoneRequestModel) {
        console.log('submit question service call');
        console.log(JSON.stringify(colorStoneReq));
        return this.http.post(this.config.coreAPIUrl + '/api/colorstonereq', colorStoneReq)
            .map((response: Response) => {
              //  let questionDetails:QuestionModel = response;
                var obj = JSON.parse(JSON.stringify(response),);
                console.log('response ' + JSON.stringify(response));
            });
    }

}