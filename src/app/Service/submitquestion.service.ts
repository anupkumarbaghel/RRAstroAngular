import { Injectable } from '@angular/core';
import { QuestionTopicModel } from '../model/question-ans/question-topic.model';
import { AppConfig } from '../app.config';

import { Http } from '@angular/http';


@Injectable()
export class submitQuestionService {
    constructor(private http: Http, private config: AppConfig) { }

    saveQuestions(queTopic: QuestionTopicModel) {
        console.log('submit question service call');
        return this.http.post(this.config.coreAPIUrl + '/api/questiontopic', queTopic);
    }


}