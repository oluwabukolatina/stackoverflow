import { DataTypes } from 'sequelize';
import sequelize from '../utils/database';
import { UserInstance } from '../../src/v1/lib/modules/user/types/user-types';

const User = sequelize.define<UserInstance>(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {},
);
export default User;
