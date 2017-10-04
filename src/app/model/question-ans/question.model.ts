import {ReplyModel} from "./reply.model";

export class QuestionModel{
  id:number;
  userId:string;
  questionDescription:string;
  replyList:ReplyModel[]=[new ReplyModel()];
}

