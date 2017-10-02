import {QuestionModel} from "./question.model";

export class QuestionTopicModel{
  id:number;
  userId:string;
  questionList:QuestionModel=new QuestionModel();
}