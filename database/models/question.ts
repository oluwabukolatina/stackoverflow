import { DataTypes } from 'sequelize';
import sequelize from '../../src/lib/utils/database/database';
import { QuestionModelStatic } from '../../src/lib/modules/question/types/question-types';
import User from "./user";

const QuestionModel = <QuestionModelStatic>sequelize.define('Question', {
  title: { type: DataTypes.STRING },
  body: { type: DataTypes.STRING },
  userId: { type: DataTypes.INTEGER },
});
export default QuestionModel;
