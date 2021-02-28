import { Model } from 'sequelize';

export interface AnswerInstance extends Model {
  readonly id: number;
  answer: string;
  userId: number;
  questionId: number;
  upvote: number;
  downvotes: number;
}
