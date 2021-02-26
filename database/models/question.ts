import { DataTypes } from 'sequelize';
import sequelize from '../../src/lib/utils/database/database';
import { QuestionModelStatic } from '../../src/lib/modules/question/types/question-types';

const QuestionModel = <QuestionModelStatic>sequelize.define('Question', {
  title: { type: DataTypes.STRING },
  body: { type: DataTypes.STRING },
});
export default QuestionModel;
