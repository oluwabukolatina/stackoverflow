import { Model } from 'sequelize';

export interface SubscriptionInstance extends Model {
  readonly id: number;
  userId: number;
  email: string;
  questionId: number;
}
