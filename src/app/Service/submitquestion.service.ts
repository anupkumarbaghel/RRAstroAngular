import { Injectable } from '@angular/core';
import { QuestionTopicModel } from '../model/question-ans/question-topic.model';
import { QuestionModel } from '../model/question-ans/question.model';
import { AppConfig } from '../app.config';

import { Http, Response } from '@angular/http';


@Injectable()
export class submitQuestionService {
    constructor(private http: Http, private config: AppConfig) { }

    saveQuestions(queTopic: QuestionTopicModel) {
        console.log('submit question service call');
        return this.http.post(this.config.coreAPIUrl + '/api/questiontopic', queTopic)
            .map((response: Response) => {
              //  let questionDetails:QuestionModel = response;
                var obj = JSON.parse(JSON.stringify(response),);
                console.log('response ' + JSON.stringify(response));
            });
    }


}