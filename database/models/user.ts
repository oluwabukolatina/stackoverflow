import { DataTypes } from 'sequelize';
import sequelize from '../../src/lib/utils/database/database';
import { UserInstance } from '../../src/lib/modules/user/types/user-types';
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
  },
  {},
);
User.hasMany(QuestionModel, { as: 'questions', foreignKey: 'userId' });
export default User;
