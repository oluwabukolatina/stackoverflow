import { DataTypes } from 'sequelize';
import sequelize from '../utils/database';
import { AnswerInstance } from '../../src/lib/modules/answer/types/answer-types';

const Answer = sequelize.define<AnswerInstance>(
  'Answer',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    answer: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    questionId: { type: DataTypes.INTEGER },
    upvotes: { type: DataTypes.INTEGER, defaultValue: 0 },
    downvotes: { type: DataTypes.INTEGER, defaultValue: 0 },
  },
  {},
);

export default Answer;
