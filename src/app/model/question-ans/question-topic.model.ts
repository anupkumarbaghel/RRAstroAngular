import {QuestionModel} from "./question.model";

export class QuestionTopicModel{
  id:number;
  userId:string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  dateOfBirth: Date;
  timeOfBirth: Date;
  birthCity: string;
  birthCountry: string;
  questionList:QuestionModel[]=[new QuestionModel()];
}