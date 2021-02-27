import QuestionModel from '../../../../../database/models/question';

class QuestionRepository {
  public static async askQuestion(data: { title: string; body: string }) {
    try {
      return await QuestionModel.create(data);
    } catch (e) {
      return e;
    }
  }

  public static async findQuestions() {
    try {
      return await QuestionModel.findAll({
        order: [['createdAt', 'DESC']],
      });
    } catch (e) {
      return e;
    }
  }
}
export default QuestionRepository;
