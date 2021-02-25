import { BuildOptions, Model } from 'sequelize';

interface UserType extends Model {
  readonly id: number;
  email: string;
}

export type UserModelStatic = typeof Model & {
  // eslint-disable-next-line @typescript-eslint/ban-types
  new (values?: object, options?: BuildOptions): UserType;
};
