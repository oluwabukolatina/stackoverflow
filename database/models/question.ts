import { DataTypes } from 'sequelize';
import sequelize from '../../src/lib/utils/database/database';
import { QuestionModelStatic } from '../../src/lib/modules/question/types/question-types';
import Answer from './answer';

const QuestionModel = <QuestionModelStatic>sequelize.define('Question', {
  title: { type: DataTypes.STRING },
  body: { type: DataTypes.STRING },
  userId: { type: DataTypes.INTEGER },
  upvotes: { type: DataTypes.INTEGER, defaultValue: 0 },
  downvotes: { type: DataTypes.INTEGER, defaultValue: 0 },
});
QuestionModel.hasMany(Answer, { as: 'answers', foreignKey: 'questionId' });
export default QuestionModel;
