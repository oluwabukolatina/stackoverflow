import { DataTypes } from 'sequelize';
import sequelize from '../../src/lib/utils/database/database';
import { UserInstance } from '../../src/lib/modules/question/types/user-types';
import QuestionModel from './question';

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
    name: {
      type: DataTypes.STRING,
    },
  },
  {},
);

User.hasMany(QuestionModel);

export default User;
