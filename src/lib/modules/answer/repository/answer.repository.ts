import Answer from '../../../../../database/models/answer';

class AnswerRepository {
  public static async create(data: {
    questionId: number;
    answer: string;
    userId: number;
  }) {
    try {
      return await Answer.create(data);
    } catch (e) {
      return e;
    }
  }

  public static async findAnswer(data: any) {
    try {
      return await Answer.findOne({
        where: data,
      });
    } catch (e) {
      return e;
    }
  }

  public static updateAnswer = async (
    values: { upvotes: number } | { downvotes: number },
    options: { id: number },
  ) => {
    try {
      return await Answer.update(values, {
        where: options,
      });
    } catch (e) {
      return e;
    }
  };
}
export default AnswerRepository;
