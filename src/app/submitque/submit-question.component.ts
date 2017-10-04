import { Component } from '@angular/core';
import { QuestionTopicModel } from '../model/question-ans/question-topic.model';
import { QuestionModel } from '../model/question-ans/question.model';
import {submitQuestionService } from '../Service/submitquestion.service';

@Component({
  selector: 'app-submit-question',
  templateUrl: './submit-question.component.html',
  styleUrls: ['./submit-question.component.css']
})
export class SubmitQuestionComponent {

  constructor(private submitQueService : submitQuestionService) { }

  queTopic: QuestionTopicModel = new QuestionTopicModel();
  questionType: QuestionModel = new QuestionModel();

  ngOnInit() {
  }

  saveQuestions(): void {
    this.queTopic.questionList = [this.questionType];
    console.log(JSON.stringify(this.queTopic));
    this.submitQueService.saveQuestions(this.queTopic).subscribe(
      data => {
        console.log('question posted');
      }
    )

  }
}

