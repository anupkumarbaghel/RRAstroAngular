import { Component } from '@angular/core';
import { QuestionTopicModel } from '../model/question-ans/question-topic.model';
import { QuestionModel } from '../model/question-ans/question.model';
import { submitQuestionService } from '../Service/submitquestion.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-submit-question',
  templateUrl: './submit-question.component.html',
  styleUrls: ['./submit-question.component.css']
})
export class SubmitQuestionComponent {

  constructor(private submitQueService: submitQuestionService,
    private router: Router) { }

  queTopic: QuestionTopicModel = new QuestionTopicModel();
  questionType: QuestionModel = new QuestionModel();

  ngOnInit() {
  }

  backToService():void{
    
        this.router.navigate(['/services'])
      }

  saveQuestions(): void {
    this.queTopic.questionList = [this.questionType];
    console.log(JSON.stringify(this.queTopic));
    this.submitQueService.saveQuestions(this.queTopic).subscribe(
       data => {
        // var obj = JSON.parse(JSON.stringify(data));
       //  console.log(data);
       this.router.navigate(['/thankyou']);
       }


    );

  }
}

