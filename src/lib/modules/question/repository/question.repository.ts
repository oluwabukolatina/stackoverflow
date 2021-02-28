import QuestionModel from '../../../../../database/models/question';

class QuestionRepository {
  public static async askQuestion(data: {
    title: string;
    body: string;
    userId: number;
  }) {
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
        include: ['answers'],
      });
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  public static async findQuestion(data: { id: number }) {
    try {
      return await QuestionModel.findOne({
        where: data,
      });
    } catch (e) {
      return e;
    }
  }

  public static updateQuestion = async (
    values: { upvotes: number } | { downvotes: number },
    options: { id: number },
  ) => {
    try {
      return await QuestionModel.update(values, {
        where: options,
      });
    } catch (e) {
      return e;
    }
  };
}
export default QuestionRepository;
