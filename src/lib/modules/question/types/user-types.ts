import { Model } from 'sequelize';

export interface UserInstance extends Model {
  readonly id: number;
  name: string;
  email: string;
  password: string;
}
