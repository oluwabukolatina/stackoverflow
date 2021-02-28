import { DataTypes } from 'sequelize';
import sequelize from '../../src/lib/utils/database/database';
import { QuestionModelStatic } from '../../src/lib/modules/question/types/question-types';
import User from './user';
import Answer from "./answer";

const QuestionModel = <QuestionModelStatic>sequelize.define('Question', {
  title: { type: DataTypes.STRING },
  body: { type: DataTypes.STRING },
  userId: { type: DataTypes.INTEGER },
});
QuestionModel.hasMany(Answer, { as: 'answers', foreignKey: 'questionId' });
export default QuestionModel;
