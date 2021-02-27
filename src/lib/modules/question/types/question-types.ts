import { BuildOptions, Model } from 'sequelize';

export interface QuestionType extends Model {
  readonly id: number;
  body: string;
  title: string;
  userId: number;
}

export type QuestionModelStatic = typeof Model & {
  // eslint-disable-next-line @typescript-eslint/ban-types
  new (values?: object, options?: BuildOptions): QuestionType;
};
