import { Model } from 'sequelize';

export interface DummyInstance extends Model {
  readonly id: number;
}
